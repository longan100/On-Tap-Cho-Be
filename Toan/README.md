# 📘 Module Toán Lớp 3 - Học Kỳ 2

> Ứng dụng học toán tự động cho học sinh lớp 3, tích hợp AI chấm bài (Google Gemini API)

## 🎯 Tính năng

- ✅ 8 module học tập đầy đủ theo chương trình SGK
- 🤖 AI chấm bài tự luận và gợi ý khi sai
- ⭐ Hệ thống sao và huy hiệu động viên
- 💾 Lưu tiến độ tự động (localStorage)
- 📱 Responsive, chạy mọi thiết bị
- 🎨 Giao diện thân thiện trẻ em

## 🚀 Cách sử dụng

### Bước 1: Mở file

Mở file `index.html` bằng trình duyệt (Chrome, Edge, Firefox...)

### Bước 2: Lấy API Key (miễn phí)

1. Truy cập: https://aistudio.google.com/app/apikey
2. Đăng nhập Google
3. Nhấn "Create API Key"
4. Copy key và dán vào ứng dụng khi được yêu cầu

**Lưu ý:** API key miễn phí, giới hạn 15 requests/phút (đủ dùng cho 1 học sinh)

### Bước 3: Bắt đầu học

Chọn module muốn học và làm bài!

## 📂 Cấu trúc thư mục

```
Toan/
├── index.html              # Trang chủ
├── on-li-thuyet.html       # Flashcard công thức
├── thi-thu.html            # Thi thử (chưa hoàn thiện)
├── modules/
│   ├── 01-doc-viet-so.html         # ✅ Hoàn thành
│   ├── 02-bon-phep-tinh.html       # ✅ Hoàn thành
│   ├── 03-bieu-thuc.html           # ⏳ Cần build
│   ├── 04-tim-x.html               # ⏳ Cần build
│   ├── 05-loi-van.html             # ⏳ Cần build
│   ├── 06-dai-luong.html           # ⏳ Cần build
│   ├── 07-hinh-hoc.html            # ⏳ Cần build
│   └── 08-thong-ke.html            # ⏳ Cần build
├── js/
│   ├── ai.js               # Tích hợp Gemini API
│   ├── progress.js         # Quản lý tiến độ
│   ├── generator.js        # Sinh bài tập tự động
│   └── ui.js               # Hàm UI dùng chung
├── css/
│   └── custom.css          # Animation & styles
└── data/
    ├── loi-van.js          # Kho 22 bài toán có lời văn
    ├── tim-so.js           # Kho 20 bài "Tìm số biết rằng..."
    └── thong-ke.js         # Kho 15 bảng thống kê
```

## 🛠️ Hướng dẫn build các module còn lại

### Template cơ bản cho 1 module

Mỗi module HTML cần có:

1. **Header** với progress bar
2. **Question display** - hiển thị đề bài
3. **Answer input** - ô nhập đáp án
4. **Buttons** - Kiểm tra & Gợi ý AI
5. **Feedback area** - hiển thị kết quả
6. **Stats** - đếm đúng/sai/sao

### Module 3: Biểu Thức (03-bieu-thuc.html)

**Cần làm:**
- Sử dụng `sinhBieuThuc1()` đến `sinhBieuThuc5()` từ `generator.js`
- Hiển thị biểu thức dạng inline
- Có checkbox "Tính từng bước" (optional)
- AI giải thích thứ tự thực hiện khi sai

**Tham khảo:** Copy từ `02-bon-phep-tinh.html`, thay logic sinh câu hỏi

### Module 4: Tìm X (04-tim-x.html)

**Cần làm:**
- 3 tabs: "Cơ bản", "Nâng cao", "Tìm số (chữ)"
- Tab 1: Dùng `sinhTimX1()` đến `sinhTimX6()`
- Tab 2: Kho bài viết sẵn (cần tạo file `data/tim-x-nang-cao.js`)
- Tab 3: Dùng `data/tim-so.js` đã có
- AI giải thích cách biến đổi phương trình

### Module 5: Toán Có Lời Văn (05-loi-van.html)

**Cần làm:**
- Load bài từ `data/loi-van.js`
- Textarea để bé viết lời giải
- Gửi toàn bộ lời giải cho AI chấm
- AI so sánh với `giaiBaiMau` và cho điểm

**Prompt AI mẫu:**
```javascript
const prompt = `Đề bài: ${bai.de}
Lời giải mẫu: ${bai.giaiBaiMau}
Đáp án: ${bai.dapAn}

Bé lớp 3 viết:
${loiGiaiBe}

Chấm bài theo 3 tiêu chí:
1. Đáp số đúng chưa?
2. Các bước đúng hướng chưa?
3. Thiếu bước nào không?
Trả lời thân thiện, không quá 4 câu.`;
```

### Module 6: Đại Lượng (06-dai-luong.html)

**Cần làm:**
- 3 tabs: "Đổi đơn vị", "Đọc đồng hồ", "Tính thời gian"
- Tab 1: Dùng `sinhDoiDonViDoDai()`, `sinhDoiDonViKhoiLuong()`, `sinhDoiDonViThoiGian()`
- Tab 2: Hiển thị SVG đồng hồ (dùng `createClockSVG()` từ `ui.js`)
- Tab 3: Kho bài tình huống thời gian (cần tạo `data/thoi-gian.js`)

### Module 7: Hình Học (07-hinh-hoc.html)

**Cần làm:**
- 3 tabs: "Hình chữ nhật & vuông", "Hình tròn", "Khối hộp"
- Tab 1: Sinh bài tự động, hiển thị SVG hình (dùng `createRectangleSVG()` từ `ui.js`)
- Tab 2 & 3: Trắc nghiệm Đúng/Sai

### Module 8: Thống Kê (08-thong-ke.html)

**Cần làm:**
- Load bảng từ `data/thong-ke.js`
- Hiển thị bảng HTML
- Nhiều câu hỏi cho 1 bảng
- Hỗ trợ cả câu hỏi text và số

## 🎨 Quy tắc thiết kế

### Màu sắc

```css
Nền trang:   linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)
Card:        #FFFFFF
Primary:     #38BDF8 (sky-400)
Đúng:        #22C55E (green-500)
Sai:         #EF4444 (red-500)
Gợi ý AI:    #818CF8 (indigo-400)
```

### Font

```css
font-family: 'Baloo 2', cursive;
```

### Animation

- Đúng: `showStars(count)` + `showConfetti()`
- Sai: `shake` animation
- Toast: `showToast(message, type)`

## 📝 Checklist hoàn thiện

- [x] Cấu trúc thư mục
- [x] File JS core (ai.js, progress.js, generator.js, ui.js)
- [x] File CSS custom
- [x] Trang chủ (index.html)
- [x] Ôn lý thuyết (on-li-thuyet.html)
- [x] Module 1: Đọc & Viết Số
- [x] Module 2: Bốn Phép Tính
- [ ] Module 3: Biểu Thức
- [ ] Module 4: Tìm X
- [ ] Module 5: Toán Có Lời Văn
- [ ] Module 6: Đại Lượng
- [ ] Module 7: Hình Học
- [ ] Module 8: Thống Kê
- [ ] Thi thử (thi-thu.html)

## 🐛 Lỗi thường gặp

### 1. AI không hoạt động

**Nguyên nhân:** Chưa nhập API key hoặc key không hợp lệ

**Giải pháp:**
- Kiểm tra key tại https://aistudio.google.com/app/apikey
- Xóa key cũ: Mở Console (F12) → gõ `localStorage.removeItem('GEMINI_API_KEY')`
- Reload trang và nhập key mới

### 2. Tiến độ bị mất

**Nguyên nhân:** Xóa localStorage hoặc đổi trình duyệt

**Giải pháp:**
- Tiến độ lưu trong localStorage, không sync giữa các trình duyệt
- Có thể export/import tiến độ (tính năng cần thêm)

### 3. Số La Mã không nhận

**Nguyên nhân:** Gõ sai chữ hoa/thường

**Giải pháp:**
- Luôn gõ chữ HOA: XIV (không phải xiv)
- Code đã normalize, nhưng nên gõ đúng

## 📚 Tài liệu tham khảo

- [Gemini API Docs](https://ai.google.dev/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Baloo 2 Font](https://fonts.google.com/specimen/Baloo+2)

## 🤝 Đóng góp

Nếu muốn thêm tính năng hoặc sửa lỗi:

1. Tạo file module mới theo template
2. Thêm hàm sinh bài vào `generator.js` nếu cần
3. Thêm dữ liệu vào `data/` nếu cần
4. Test kỹ trước khi merge

## 📄 License

MIT License - Tự do sử dụng cho mục đích giáo dục

---

**Chúc bé học vui! 🎉**
