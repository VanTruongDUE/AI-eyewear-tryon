const videoElement = document.getElementById('webcam');
const canvasElement = document.getElementById('overlay');
const canvasCtx = canvasElement.getContext('2d');
const btnScan = document.getElementById('btn-scan');
const resultText = document.getElementById('face-shape-result');
const productList = document.getElementById('product-list');

let currentLandmarks = null;

// 1. Khởi động Camera và Face Mesh
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
    } catch (err) {
        alert("Vui lòng cấp quyền camera!");
    }
}

const faceMesh = new FaceMesh({locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`});
faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: true, minDetectionConfidence: 0.6, minTrackingConfidence: 0.6 });

faceMesh.onResults((results) => {
    canvasElement.width = videoElement.videoWidth;
    canvasElement.height = videoElement.videoHeight;
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
        currentLandmarks = results.multiFaceLandmarks[0];
        // Vẽ lưới nhận diện (Màu xám nhạt để hiện đại hơn)
        drawConnectors(canvasCtx, currentLandmarks, FACEMESH_TESSELATION, {color: '#ffffff80', lineWidth: 1});
    } else {
        currentLandmarks = null;
    }
    canvasCtx.restore();
});

const camera = new Camera(videoElement, {
    onFrame: async () => { await faceMesh.send({image: videoElement}); },
    width: 640, height: 480
});
camera.start();
startCamera();

// 2. Hàm trích xuất 7 đặc trưng khuôn mặt (Dựa theo model của TV1 & TV2)
// HÀM HỖ TRỢ 1: Tính khoảng cách Euclidean có nhân chuẩn hóa Width/Height (Theo đúng lưu ý của TV1)
function calcDistance(p1, p2, width, height) {
    const x1 = p1.x * width;
    const y1 = p1.y * height;
    const x2 = p2.x * width;
    const y2 = p2.y * height;
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// HÀM HỖ TRỢ 2: Tính góc (độ) tại đỉnh p2 tạo bởi 3 điểm p1 - p2 - p3
function calcAngle(p1, p2, p3, width, height) {
    // Chuẩn hóa tọa độ
    const p1x = p1.x * width, p1y = p1.y * height;
    const p2x = p2.x * width, p2y = p2.y * height;
    const p3x = p3.x * width, p3y = p3.y * height;

    // Tạo vector A (p2 -> p1) và vector B (p2 -> p3)
    const v1 = { x: p1x - p2x, y: p1y - p2y };
    const v2 = { x: p3x - p2x, y: p3y - p2y };

    // Tính Tích vô hướng (Dot Product) và Độ lớn (Magnitude)
    const dotProduct = v1.x * v2.x + v1.y * v2.y;
    const mag1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
    const mag2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);

    // Tính cos(góc) và đổi ra radian rồi sang độ
    let cosTheta = dotProduct / (mag1 * mag2);
    // Xử lý sai số dấu phẩy động
    cosTheta = Math.max(-1.0, Math.min(1.0, cosTheta));
    const angleRad = Math.acos(cosTheta);
    
    return angleRad * (180 / Math.PI);
}

// HÀM CHÍNH: Trích xuất 7 đặc trưng khuôn mặt chuẩn xác từ TV1
function extractFeatures(landmarks, width, height) {
    // Tính các khoảng cách nền tảng
    const dist_10_152 = calcDistance(landmarks[10], landmarks[152], width, height); // Dài mặt
    const dist_234_454 = calcDistance(landmarks[234], landmarks[454], width, height); // Rộng gò má
    const dist_54_284 = calcDistance(landmarks[54], landmarks[284], width, height); // Rộng trán
    const dist_58_288 = calcDistance(landmarks[58], landmarks[288], width, height); // Rộng hàm

    // 1. ratio_length_cheek
    const ratio_length_cheek = dist_10_152 / dist_234_454;
    
    // 2. ratio_forehead_cheek
    const ratio_forehead_cheek = dist_54_284 / dist_234_454;
    
    // 3. ratio_jaw_cheek
    const ratio_jaw_cheek = dist_58_288 / dist_234_454;
    
    // 4. ratio_forehead_jaw
    const ratio_forehead_jaw = dist_54_284 / dist_58_288;
    
    // 5. jaw_angle (Góc tại đỉnh 152 tạo bởi 58 - 152 - 288)
    const jaw_angle = calcAngle(landmarks[58], landmarks[152], landmarks[288], width, height);
    
    // 6. cheek_angle (Góc tại đỉnh 58 tạo bởi 234 - 58 - 152)
    const cheek_angle = calcAngle(landmarks[234], landmarks[58], landmarks[152], width, height);
    
    // 7. jaw_taper_ratio
    const jaw_taper_ratio = (1 - ratio_jaw_cheek) / ratio_length_cheek;

    // Xuất ra mảng 7 biến theo ĐÚNG THỨ TỰ file CSV
    return [
        ratio_length_cheek,
        ratio_forehead_cheek,
        ratio_jaw_cheek,
        ratio_forehead_jaw,
        jaw_angle,
        cheek_angle,
        jaw_taper_ratio
    ];
} 

// 3. Hàm xử lý logic khi bấm nút Quét
btnScan.addEventListener('click', () => {
    if (!currentLandmarks) {
        alert("Chưa nhận diện được mặt. Vui lòng đưa mặt vào giữa khung Oval!");
        return;
    }

    btnScan.innerText = "Đang xử lý AI...";
    btnScan.disabled = true;

    // a. Trích xuất đặc trưng
    const vWidth = videoElement.videoWidth;
    const vHeight = videoElement.videoHeight;
    const features = extractFeatures(currentLandmarks, vWidth, vHeight);

    // b. Gọi mô hình Machine Learning thực tế từ file model.js
    const predictionArray = score(features); // Trả về mảng ví dụ [0, 1, 0, 0, 0]
    
    // c. Tìm dáng mặt có xác suất cao nhất
    // Giả sử danh sách class của TV2 là:
    const classNames = ["diamond", "heart", "oblong", "round", "square"];
    const maxIndex = predictionArray.indexOf(Math.max(...predictionArray));
    const predictedShape = classNames[maxIndex];

    // d. Cập nhật UI
    resultText.innerText = `Mặt ${predictedShape}`;
    btnScan.innerText = "Quét lại";
    btnScan.disabled = false;

    // e. Render kính từ realGlassesData (file data.js của TV4)
    productList.innerHTML = "";
    // Lọc các kính có suitableFor chứa predictedShape
    const matchingGlasses = realGlassesData.filter(glass => glass.suitableFor.includes(predictedShape));

    if (matchingGlasses.length === 0) {
        productList.innerHTML = "<p style='color:gray; padding:10px;'>Hệ thống hiện chưa có gọng kính chuyên dụng cho dáng mặt này.</p>";
        return;
    }

    matchingGlasses.forEach(glass => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">
                <img src="${glass.image}" alt="${glass.name}" style="width:100%; height:100%; object-fit:contain;">
            </div>
            <div class="product-info">
                <h4>${glass.name}</h4>
                <p>${glass.reason}</p>
                <span class="price">${glass.price}</span><br>
                <button class="cta-btn secondary">Thử Kính (AR)</button>
            </div>
        `;
        productList.appendChild(card);
    });
});