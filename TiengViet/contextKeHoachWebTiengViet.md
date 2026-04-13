# 📚 CONTEXT.md — Dự án Web Luyện Đọc Hiểu Tiếng Việt

> File này chứa toàn bộ bối cảnh, quyết định thiết kế và định hướng kỹ thuật của dự án.
> AI Agent đọc file này để hiểu rõ dự án trước khi bắt đầu làm việc.

---

## 1. Tổng quan dự án

| Thuộc tính | Chi tiết |
|---|---|
| **Tên gợi ý** | Đọc Hiểu Vui |
| **Mục tiêu** | Giúp trẻ cải thiện kỹ năng đọc hiểu Tiếng Việt |
| **Đối tượng** | Trẻ lớp 3 (hiện tại), dùng được đến hết lớp 5 |
| **Vấn đề cốt lõi** | Trẻ đọc được nhưng không hiểu nội dung — yếu đọc hiểu |
| **Cách dùng** | Học ở nhà, trẻ tự học một mình, bố/mẹ xem báo cáo |
| **Thời lượng** | 10–15 phút mỗi ngày |
| **Phạm vi dùng** | Local (1 gia đình), không deploy public |

---

## 2. Stack công nghệ

| Thành phần | Lựa chọn |
|---|---|
| **Frontend** | HTML + CSS + JavaScript thuần |
| **Styling** | Tailwind CSS |
| **Lưu trữ dữ liệu** | localStorage (không có backend) |
| **Sinh nội dung** | Gemini API (free tier) |
| **Nội dung lưu dạng** | JSON (sinh trước, lưu local, không gọi API real-time lúc bé chơi) |

### Lưu ý kỹ thuật quan trọng
- **Không có backend, không có database** — toàn bộ state lưu trong localStorage
- Nội dung bài học nên được **sinh trước và lưu vào file JSON** thay vì gọi Gemini real-time
- Báo cáo hiển thị trực tiếp trên web, bố/mẹ và bé dùng chung thiết bị

---

## 3. Bốn kỹ năng đọc hiểu cần luyện

| # | Kỹ năng | Mô tả |
|---|---|---|
| 1 | **Hiểu nghĩa từ trong ngữ cảnh** | Đọc đoạn văn, hiểu nghĩa từ dựa vào ngữ cảnh xung quanh |
| 2 | **Nắm ý chính của đoạn văn** | Xác định được đoạn văn đang nói về điều gì |
| 3 | **Suy luận — đọc giữa các dòng chữ** | Hiểu ý không được nói thẳng ra trong bài |
| 4 | **Nhận biết cảm xúc / ý định nhân vật** | Hiểu nhân vật đang cảm thấy gì và tại sao |

---

## 4. Luồng chính của ứng dụng

```
[Lần đầu vào app]
       ↓
Bài test chẩn đoán ngắn (~5 phút, ~8 câu, 2 câu/kỹ năng)
       ↓
Hệ thống tính Mastery Score khởi điểm cho 4 kỹ năng
       ↓
[Mỗi ngày]
       ↓
Hệ thống chọn 4 câu hỏi theo tỉ lệ điểm yếu
       ↓
Bé chơi 4 mini-game → trả lời → xem giải thích đúng/sai
       ↓
Mastery Score cập nhật → tầng khó có thể thay đổi
       ↓
[Cuối tuần]
       ↓
Màn báo cáo: level + gợi ý cho bố/mẹ
       ↓
Lặp lại cho đến hết lớp 5
```

---

## 5. Thiết kế tiến trình học (Mastery System)

### 5.1 Mastery Score

- Mỗi kỹ năng có điểm riêng từ **0 đến 100**, độc lập với nhau
- Đây là thước đo nội bộ để hệ thống quyết định phân bổ bài học — không phải điểm thi
- Lưu trong localStorage theo cấu trúc:

```json
{
  "mastery": {
    "nghia_tu": 75,
    "y_chinh": 50,
    "suy_luan": 65,
    "cam_xuc": 60
  }
}
```

### 5.2 Phân bổ câu hỏi mỗi ngày

Mỗi ngày bé chơi đúng **4 câu hỏi**. Phân bổ dựa theo điểm — kỹ năng yếu hơn được ưu tiên nhiều câu hơn.

**Công thức phân bổ gợi ý:**
- Tính `100 - mastery_score` cho từng kỹ năng (điểm còn thiếu)
- Normalize thành tỉ lệ phần trăm
- Làm tròn thành số câu (tổng = 4, tối thiểu 0 câu/kỹ năng/ngày, tối đa 2 câu)

**Ví dụ:**
```
Hiểu nghĩa từ:     75đ → thiếu 25 → ít câu hơn
Nắm ý chính:       50đ → thiếu 50 → nhiều câu nhất (2 câu)
Suy luận:          65đ → thiếu 35 → 1 câu
Cảm xúc nhân vật:  60đ → thiếu 40 → 1 câu
```

### 5.3 Cơ chế tăng/giảm điểm

| Hành động | Thay đổi điểm |
|---|---|
| Trả lời đúng nhanh (< 10 giây) | +3 |
| Trả lời đúng chậm (>= 10 giây) | +1 |
| Trả lời sai | -2 |
| Không học 3 ngày liên tiếp | -1 mỗi kỹ năng (decay) |

### 5.4 Ba tầng độ khó mỗi kỹ năng

| Tầng | Điểm mở khoá | Độ dài văn bản | Loại câu hỏi |
|---|---|---|---|
| **Tầng 1** | 0–39 | 60–80 từ | Câu hỏi trực tiếp, thông tin có trong bài |
| **Tầng 2** | 40–69 | 100–120 từ | Câu hỏi cần suy nghĩ thêm |
| **Tầng 3** | 70–100 | 150+ từ | Câu hỏi nhiều lớp nghĩa, suy luận sâu |

Tầng hiện tại được tính tự động: `tang = mastery < 40 ? 1 : mastery < 70 ? 2 : 3`

---

## 6. Thiết kế Mini-game

Mỗi câu hỏi là 1 mini-game ngắn, giao diện vui vẻ phù hợp trẻ em:

| Mini-game | Kỹ năng | Cơ chế |
|---|---|---|
| 🔍 **Thám tử từ ngữ** | Hiểu nghĩa từ | Đọc đoạn văn, chọn nghĩa đúng của từ được in đậm |
| 🧩 **Ghép ý chính** | Nắm ý chính | Chọn câu nào tóm tắt đúng nội dung đoạn văn |
| 🤔 **Bé đoán tiếp** | Suy luận | Đọc đoạn văn, chọn điều gì xảy ra / đúng tiếp theo |
| 🎭 **Cảm xúc nhân vật** | Cảm xúc nhân vật | Chọn cảm xúc nhân vật đang có và lý do tại sao |

### Yêu cầu UX quan trọng
- Sau mỗi câu trả lời: hiển thị **giải thích ngắn tại sao đúng/sai** — không chỉ báo đúng/sai
- Phiên 10–15 phút phải có **điểm dừng rõ ràng** — bé biết "hôm nay xong rồi"
- Giao diện **màu sắc tươi sáng, chữ to, dễ nhấn** — phù hợp trẻ 8–11 tuổi

---

## 7. Hệ thống nội dung (Gemini API)

### 7.1 Chiến lược sinh nội dung
- **Sinh trước, lưu vào file JSON** — không gọi API real-time lúc bé chơi
- Dùng **Gemini API free tier**
- Bố/mẹ hoặc người setup có thể chạy script sinh thêm nội dung khi cần

### 7.2 Tham số đầu vào cho mỗi lần sinh nội dung

```json
{
  "ky_nang": "suy_luan",
  "tang": 2,
  "lop": 3,
  "chu_de": "động vật"
}
```

### 7.3 Format JSON output bắt buộc

```json
{
  "id": "uuid",
  "ky_nang": "suy_luan",
  "tang": 2,
  "lop": 3,
  "doan_van": "Nội dung đoạn văn ở đây...",
  "cau_hoi": "Câu hỏi ở đây?",
  "lua_chon": {
    "A": "...",
    "B": "...",
    "C": "...",
    "D": "..."
  },
  "dap_an": "B",
  "giai_thich": "Vì trong bài có nói rằng..."
}
```

### 7.4 Ràng buộc trong prompt Gemini

Prompt phải ràng buộc chặt các yếu tố sau:
1. **Từ vựng phù hợp lớp** — lớp 3: câu không quá 15 từ, tránh từ Hán-Việt khó
2. **Độ dài cố định** theo tầng (xem bảng tầng độ khó ở mục 5.4)
3. **Chủ đề an toàn**: động vật, thiên nhiên, cuộc sống hằng ngày, bạn bè — không bạo lực, không tin tức
4. **Output là JSON thuần** — không markdown, không preamble
5. **Câu hỏi phải kiểm tra đúng kỹ năng** — không hỏi thông tin có sẵn trong bài nếu kỹ năng là suy luận

---

## 8. Cấu trúc localStorage

```json
{
  "mastery": {
    "nghia_tu": 75,
    "y_chinh": 50,
    "suy_luan": 65,
    "cam_xuc": 60
  },
  "streak": {
    "current": 6,
    "last_played": "2024-01-15"
  },
  "history": [
    {
      "date": "2024-01-15",
      "results": [
        { "ky_nang": "y_chinh", "dung": true, "thoi_gian": 8 },
        { "ky_nang": "suy_luan", "dung": false, "thoi_gian": 15 }
      ]
    }
  ],
  "trang_thai": "da_chan_doan"
}
```

---

## 9. Báo cáo cho bố/mẹ

Báo cáo hiển thị trực tiếp trên web, bố/mẹ và bé dùng chung thiết bị.

**Thông tin hiển thị:**
1. **Mastery Score** từng kỹ năng dạng progress bar + thay đổi so với tuần trước (+/-)
2. **Chuỗi ngày học liên tiếp** (streak)
3. **Gợi ý tuần tới** — kỹ năng nào cần chú ý thêm

**Gợi ý tự động:**
- Nếu 1 kỹ năng giảm điểm trong tuần → gợi ý chú ý kỹ năng đó
- Nếu streak bị gián đoạn → nhắc nhở học đều đặn hơn

---

## 10. Cấu trúc thư mục gợi ý

```
project/
├── index.html              # Màn hình chính / home
├── chan-doan.html           # Bài test chẩn đoán ban đầu
├── hoc.html                 # Màn chơi mini-game hằng ngày
├── bao-cao.html             # Báo cáo tiến độ cho bố/mẹ
├── css/
│   └── style.css
├── js/
│   ├── mastery.js           # Logic tính điểm, phân bổ câu hỏi
│   ├── storage.js           # Đọc/ghi localStorage
│   ├── game.js              # Logic mini-game
│   └── report.js            # Logic báo cáo
├── data/
│   └── questions.json       # Nội dung câu hỏi đã sinh sẵn
└── scripts/
    └── generate-content.js  # Script chạy riêng để gọi Gemini sinh nội dung
```

---

## 11. Thứ tự ưu tiên làm (gợi ý)

1. **Bước 1:** Tạo `questions.json` với ~20 câu mẫu (tay hoặc Gemini) để có data test
2. **Bước 2:** Làm màn `hoc.html` — core loop chính, bé chơi được là dùng được
3. **Bước 3:** Làm `mastery.js` — logic điểm và phân bổ câu hỏi
4. **Bước 4:** Làm `chan-doan.html` — bài test ban đầu
5. **Bước 5:** Làm `bao-cao.html` — báo cáo cho bố/mẹ
6. **Bước 6:** Làm `generate-content.js` — script tự động sinh nội dung từ Gemini

---

---

## 12. Hướng dẫn làm việc với AI Agent

### Nguyên tắc quan trọng
- **Không giao toàn bộ project một lần** — Agent sẽ bị overwhelmed, code thiếu sót và không nhất quán
- **Mỗi lần chat = 1 task duy nhất** theo danh sách dưới
- **Luôn bắt đầu bằng:** *"Đọc file CONTEXT.md trước, sau đó..."*
- **Sau mỗi task:** yêu cầu Agent tóm tắt tên file, tên hàm, cấu trúc data đã tạo — lưu lại để dùng cho task tiếp theo, tránh Agent task sau bịa tên hàm gây lỗi

---

### Task 1 — Tạo data mẫu
> Làm **đầu tiên** vì tất cả task sau đều cần data để test

```
Đọc CONTEXT.md, tạo data/questions.json với 20 câu hỏi mẫu:
- 5 câu mỗi kỹ năng (nghia_tu, y_chinh, suy_luan, cam_xuc)
- Trải đều tầng 1 và tầng 2, lớp 3
- Đúng format JSON quy định trong CONTEXT.md mục 7.3
```

---

### Task 2 — Core logic (nền tảng)
> Làm **trước khi đụng vào UI** vì đây là logic tất cả màn hình đều gọi

```
Đọc CONTEXT.md, tạo js/mastery.js và js/storage.js:
- mastery.js: tính điểm tăng/giảm, phân bổ 4 câu mỗi ngày theo tỉ lệ điểm yếu, 
  xác định tầng hiện tại của từng kỹ năng, xử lý decay khi bỏ học 3 ngày
- storage.js: đọc/ghi localStorage theo đúng cấu trúc mục 8 trong CONTEXT.md
```

---

### Task 3 — Màn chơi chính
```
Đọc CONTEXT.md, tạo hoc.html và js/game.js:
- Gọi mastery.js để lấy 4 câu hỏi phù hợp trong ngày từ data/questions.json
- Hiển thị 4 mini-game tương ứng 4 kỹ năng (mục 6 trong CONTEXT.md)
- Sau mỗi câu: hiển thị giải thích đúng/sai
- Màn kết thúc rõ ràng khi xong 4 câu, cập nhật điểm qua mastery.js
- UI màu sắc tươi sáng, chữ to, phù hợp trẻ 8-11 tuổi, dùng Tailwind CSS
```

---

### Task 4 — Chẩn đoán ban đầu
```
Đọc CONTEXT.md, tạo chan-doan.html:
- 8 câu test (2 câu mỗi kỹ năng), lấy từ questions.json tầng 1
- Tính Mastery Score khởi điểm cho 4 kỹ năng dựa trên kết quả
- Lưu vào localStorage qua storage.js, cập nhật trạng thái "da_chan_doan"
- Redirect sang hoc.html sau khi hoàn thành
- Chỉ hiện màn này nếu localStorage chưa có trạng thái "da_chan_doan"
```

---

### Task 5 — Báo cáo tiến độ
```
Đọc CONTEXT.md, tạo bao-cao.html và js/report.js:
- Progress bar 4 kỹ năng kèm thay đổi so với tuần trước (+/-)
- Hiển thị streak (chuỗi ngày học liên tiếp)
- Gợi ý tự động: kỹ năng giảm điểm → gợi ý chú ý, streak gián đoạn → nhắc học đều
- Đọc data từ localStorage qua storage.js
```

---

### Task 6 — Script sinh nội dung Gemini
> Làm **cuối cùng**, chạy độc lập để bổ sung nội dung khi cần

```
Đọc CONTEXT.md, tạo scripts/generate-content.js:
- Nhận tham số: kỹ năng, tầng, lớp, số lượng câu cần sinh
- Gọi Gemini API với prompt chặt theo ràng buộc mục 7.4 trong CONTEXT.md
- Output đúng format JSON mục 7.3, append vào data/questions.json
- Có validation đơn giản: kiểm tra output có đủ các field bắt buộc không
```

---

### Task 7 — Kết nối và hoàn thiện
```
Đọc CONTEXT.md, tạo index.html — màn hình chính:
- Kiểm tra localStorage: nếu chưa chẩn đoán → redirect chan-doan.html
- Nếu đã chẩn đoán → hiển thị nút "Học hôm nay" và "Xem báo cáo"
- Hiển thị streak hiện tại và tóm tắt nhanh điểm 4 kỹ năng
```

---

*File này được tạo từ buổi phân tích thiết kế sản phẩm. Cập nhật khi có quyết định mới.*


Cấu trúc đầy đủ của nó là: node scripts/generate-content.js <kỹ_năng> <tầng> <lớp> <số_lượng>
                       vd: node scripts/generate-content.js nghia_tu 1 3 5

Trong đó bạn có thể thay đổi:
  Kỹ năng (ky_nang):
    nghia_tu: Thám tử từ ngữ (Hiểu nghĩa từ).
    y_chinh: Ghép ý chính.
    suy_luan: Bé đoán tiếp (Suy luận).
    cam_xuc: Cảm xúc nhân vật.

  Tầng (tang): Từ 1 đến 3 (tương ứng với độ khó và độ dài đoạn văn).

  Lớp (lop): Hiện tại bản thiết kế đang tập trung cho lớp 3, nhưng bạn có thể nhập 4 hoặc 5 nếu muốn nâng độ khó từ vựng.

  Số lượng (so_luong): Số câu muốn AI sinh ra trong một lần chạy.