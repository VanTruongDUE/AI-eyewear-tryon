const realGlassesData =[
  {
    "id": 1,
    "name": "Classic Round",
    "category": "Round",
    "frameShape": "round",
    "image": "images/glass_01.png",
    "suitableFor": [
      "square",
      "oblong"
    ],
    "reason": "Gọng tròn làm mềm các đường nét góc cạnh và tạo đối trọng với khuôn mặt dài. Viền kính rõ vừa đủ để đôi mắt nổi bật mà tổng thể vẫn nhẹ nhàng.",
    "price": 450000,
    "currency": "VND"
  },
  {
    "id": 2,
    "name": "Soft Round Metal",
    "category": "Round",
    "frameShape": "round",
    "image": "images/glass_02.png",
    "suitableFor": [
      "square",
      "oblong"
    ],
    "reason": "Dáng tròn kết hợp viền kim loại mảnh tạo cảm giác mềm mại mà không che nhiều khuôn mặt. Kiểu gọng này hợp khi bạn muốn một điểm nhấn tinh tế, dễ dùng hằng ngày.",
    "price": 520000,
    "currency": "VND"
  },
  {
    "id": 3,
    "name": "Vintage Panto",
    "category": "Panto",
    "frameShape": "round",
    "image": "images/glass_03.png",
    "suitableFor": [
      "square",
      "oblong",
      "heart"
    ],
    "reason": "Dáng panto có phần viền bo cong, giúp làm dịu những đường nét cứng và thu hút ánh nhìn vào vùng mắt. Tỷ lệ gọng vừa phải tạo vẻ cổ điển nhưng không quá nặng mặt.",
    "price": 590000,
    "currency": "VND"
  },
  {
    "id": 4,
    "name": "Thin Wire Round",
    "category": "Round",
    "frameShape": "round",
    "image": "images/glass_04.png",
    "suitableFor": [
      "square",
      "oblong"
    ],
    "reason": "Viền tròn mảnh giữ cho đường nét khuôn mặt hiện rõ, đồng thời làm mềm cảm giác góc cạnh. Thiết kế gọn gàng phù hợp với người thích kính ít nổi bật.",
    "price": 480000,
    "currency": "VND"
  },
  {
    "id": 5,
    "name": "Modern Rectangle",
    "category": "Rectangle",
    "frameShape": "rectangle",
    "image": "images/glass_05.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Dáng chữ nhật nhấn vào đường ngang và các góc gọng, giúp khuôn mặt tròn trông có cấu trúc hơn. Viền kính gọn tạo phong cách chỉn chu, dễ kết hợp trang phục thường ngày.",
    "price": 460000,
    "currency": "VND"
  },
  {
    "id": 6,
    "name": "Slim Square",
    "category": "Square",
    "frameShape": "square",
    "image": "images/glass_06.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Các cạnh vuông tạo độ tương phản với đường cong tự nhiên của khuôn mặt. Dáng kính rõ nét giúp vùng mắt trông sắc sảo hơn mà vẫn giữ tổng thể cân đối.",
    "price": 510000,
    "currency": "VND"
  },
  {
    "id": 7,
    "name": "Bold Wayfarer",
    "category": "Wayfarer",
    "frameShape": "wayfarer",
    "image": "images/glass_07.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Đường viền phía trên tạo điểm nhấn mạnh cho vùng mắt và bổ sung góc cạnh cho khuôn mặt tròn. Dáng wayfarer mang cảm giác năng động, nổi bật hơn các mẫu gọng mảnh.",
    "price": 620000,
    "currency": "VND"
  },
  {
    "id": 8,
    "name": "Geometric Frame",
    "category": "Geometric",
    "frameShape": "geometric",
    "image": "images/glass_08.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Các cạnh hình học tạo một điểm nhấn khác biệt ở vùng mắt, cân bằng những đường nét mềm của khuôn mặt. Kiểu dáng này hợp khi bạn muốn chiếc kính trở thành điểm nhấn chính.",
    "price": 650000,
    "currency": "VND"
  },
  {
    "id": 9,
    "name": "Classic Aviator",
    "category": "Aviator",
    "frameShape": "aviator",
    "image": "images/glass_09.png",
    "suitableFor": [
      "heart",
      "oval"
    ],
    "reason": "Dáng phi công mở rộng nhẹ về phía dưới, giúp cân bằng vùng trán và gò má. Đường cong mềm tạo cảm giác phóng khoáng mà không làm phần trên khuôn mặt quá nặng.",
    "price": 550000,
    "currency": "VND"
  },
  {
    "id": 10,
    "name": "Soft Aviator",
    "category": "Aviator",
    "frameShape": "aviator",
    "image": "images/glass_10.png",
    "suitableFor": [
      "heart",
      "oval",
      "oblong"
    ],
    "reason": "Đường cong của gọng làm dịu vùng trán và dẫn ánh nhìn xuống giữa khuôn mặt. So với dáng phi công góc cạnh, mẫu này cho cảm giác mềm và dễ đeo hơn.",
    "price": 610000,
    "currency": "VND"
  },
  {
    "id": 11,
    "name": "Cat Eye Classic",
    "category": "Cat Eye",
    "frameShape": "cat-eye",
    "image": "images/glass_11.png",
    "suitableFor": [
      "heart",
      "oval"
    ],
    "reason": "Đuôi kính nâng nhẹ hướng ánh nhìn lên vùng mắt và tạo nét thanh thoát cho gương mặt. Dáng cat eye cổ điển hợp với người thích một điểm nhấn rõ nhưng vẫn mềm mại.",
    "price": 570000,
    "currency": "VND"
  },
  {
    "id": 12,
    "name": "Subtle Cat Eye",
    "category": "Cat Eye",
    "frameShape": "cat-eye",
    "image": "images/glass_12.png",
    "suitableFor": [
      "heart",
      "oval",
      "round"
    ],
    "reason": "Phần đuôi hơi xếch tạo nét sắc sảo vừa phải mà không làm tổng thể quá mạnh. Kiểu dáng này thêm đường nét cho khuôn mặt tròn và giữ vùng mắt nổi bật.",
    "price": 630000,
    "currency": "VND"
  },
  {
    "id": 13,
    "name": "Browline Frame",
    "category": "Browline",
    "frameShape": "browline",
    "image": "images/glass_13.png",
    "suitableFor": [
      "oval",
      "oblong"
    ],
    "reason": "Viền trên rõ hơn phần dưới giúp tập trung ánh nhìn vào đôi mắt. Dáng browline tạo cảm giác gọn gàng, đồng thời thêm điểm nhấn cho khuôn mặt dài.",
    "price": 680000,
    "currency": "VND"
  },
  {
    "id": 14,
    "name": "Oversized Square",
    "category": "Square",
    "frameShape": "square",
    "image": "images/glass_14.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Kích thước gọng lớn và các góc vuông tạo đường nét rõ cho khuôn mặt tròn. Mẫu này phù hợp khi bạn thích vẻ nổi bật và muốn kính giữ vai trò chính trong tổng thể.",
    "price": 720000,
    "currency": "VND"
  },
  {
    "id": 15,
    "name": "Oval Thin Frame",
    "category": "Oval",
    "frameShape": "oval",
    "image": "images/glass_15.png",
    "suitableFor": [
      "square",
      "oblong"
    ],
    "reason": "Đường cong oval làm dịu các góc hàm và tạo cảm giác mềm mại quanh mắt. Viền mảnh giúp kính trông nhẹ, không che khuất quá nhiều đường nét tự nhiên.",
    "price": 500000,
    "currency": "VND"
  },
  {
    "id": 16,
    "name": "Rounded Rectangle",
    "category": "Rounded Rectangle",
    "frameShape": "rounded-rectangle",
    "image": "images/glass_16.png",
    "suitableFor": [
      "round",
      "heart",
      "oval"
    ],
    "reason": "Khung chữ nhật với góc bo nhẹ kết hợp sự rõ nét và mềm mại. Đường ngang giúp định hình vùng mắt, còn góc bo giữ cho tổng thể không quá cứng.",
    "price": 540000,
    "currency": "VND"
  },
  {
    "id": 17,
    "name": "Minimal Metal",
    "category": "Rectangle",
    "frameShape": "rectangle",
    "image": "images/glass_17.png",
    "suitableFor": [
      "round",
      "oval",
      "oblong"
    ],
    "reason": "Viền kim loại mảnh cùng dáng ngang giữ khuôn mặt thoáng và gọn. Mẫu này thêm đường nét cho vùng mắt mà không tạo cảm giác nặng như gọng bản lớn.",
    "price": 490000,
    "currency": "VND"
  },
  {
    "id": 18,
    "name": "Butterfly Frame",
    "category": "Butterfly",
    "frameShape": "butterfly",
    "image": "images/glass_18.png",
    "suitableFor": [
      "heart",
      "oval"
    ],
    "reason": "Phần gọng mở rộng như cánh bướm tạo điểm nhấn ở đuôi mắt và làm khuôn mặt trông thanh thoát. Dáng kính mềm, nổi bật hơn gọng oval thông thường.",
    "price": 690000,
    "currency": "VND"
  },
  {
    "id": 19,
    "name": "Narrow Rectangle",
    "category": "Rectangle",
    "frameShape": "rectangle",
    "image": "images/glass_19.png",
    "suitableFor": [
      "round",
      "oval"
    ],
    "reason": "Khung chữ nhật hẹp nhấn mạnh đường ngang của vùng mắt, giúp khuôn mặt tròn trông gọn hơn. Thiết kế nhỏ gọn thích hợp khi bạn muốn vẻ ngoài sắc nét nhưng kín đáo.",
    "price": 430000,
    "currency": "VND"
  },
  {
    "id": 20,
    "name": "Lightweight Panto",
    "category": "Panto",
    "frameShape": "panto",
    "image": "images/glass_20.png",
    "suitableFor": [
      "square",
      "oblong",
      "oval"
    ],
    "reason": "Dáng panto bo cong vừa phải làm mềm các góc cạnh mà vẫn giữ nét gọn gàng. Tỷ lệ viền cân đối giúp mẫu kính dễ kết hợp với nhiều phong cách thường ngày.",
    "price": 580000,
    "currency": "VND"
  }
]
