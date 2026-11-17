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
    "reason": "Gọng tròn giúp làm mềm các đường nét góc cạnh của khuôn mặt.",
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
    "reason": "Thiết kế bo tròn tạo cảm giác cân đối và mềm mại hơn.",
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
    "reason": "Dáng panto bo cong nhẹ, tạo điểm nhấn mà không làm gương mặt quá góc cạnh.",
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
    "reason": "Gọng kim loại mảnh giúp tổng thể trông nhẹ nhàng.",
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
    "reason": "Đường gọng ngang và góc rõ giúp tạo nét định hình cho khuôn mặt.",
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
    "reason": "Gọng vuông tạo thêm đường nét và độ tương phản cho gương mặt.",
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
    "reason": "Phần trên gọng rõ nét giúp tăng cảm giác góc cạnh.",
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
    "reason": "Thiết kế hình học tạo điểm nhấn và cân bằng đường nét mềm.",
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
    "reason": "Dáng phi công có phần dưới bo rộng, giúp tạo cảm giác cân bằng tổng thể.",
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
    "reason": "Dáng kính cong nhẹ giúp tổng thể hài hòa và không quá nặng phần trán.",
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
    "reason": "Phần đuôi kính nâng nhẹ tạo điểm nhấn ở vùng mắt.",
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
    "reason": "Đường gọng hơi xếch giúp tăng nét sắc sảo cho khuôn mặt.",
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
    "reason": "Phần viền trên đậm tạo điểm nhấn và giúp gương mặt trông cân đối.",
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
    "reason": "Gọng bản lớn và góc rõ tạo cấu trúc nổi bật cho gương mặt.",
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
    "reason": "Đường cong oval giúp làm dịu các góc cạnh.",
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
    "reason": "Góc bo nhẹ kết hợp đường ngang giúp tạo sự cân bằng.",
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
    "reason": "Gọng mảnh, dáng ngang đơn giản tạo cảm giác thanh thoát.",
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
    "reason": "Dáng cánh bướm mở rộng nhẹ ở phía trên, tạo điểm nhấn cho vùng mắt.",
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
    "reason": "Gọng chữ nhật tạo đường nét rõ, giúp gương mặt trông gọn và có cấu trúc.",
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
    "reason": "Dáng bo cong vừa phải giúp tổng thể hài hòa, dễ phối hợp.",
    "price": 580000,
    "currency": "VND"
  }
]