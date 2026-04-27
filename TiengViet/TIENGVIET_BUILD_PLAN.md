# 📗 KẾ HOẠCH BUILD – MODULE TIẾNG VIỆT (Lớp 3, Cuối HK2)

> **Mục tiêu:** Bé tự học và luyện tập toàn bộ chương trình Tiếng Việt lớp 3 HK2.  
> Chạy thẳng trên trình duyệt, không cần cài đặt gì.  
> AI (Google Gemini API – free) chấm bài tự luận, nhận xét câu văn, gợi ý khi sai.

---

## 1. Tech Stack

| Thành phần | Công nghệ |
|---|---|
| HTML/CSS | HTML5 + Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript (ES6+) |
| AI chấm bài | Google Gemini API (`gemini-2.0-flash` – free tier) |
| Lưu tiến độ | `localStorage` |
| Font | Google Fonts CDN (`Baloo 2`) |

**Dùng chung `js/ai.js`, `js/progress.js`, `js/ui.js` với module Toán** (nếu build chung 1 project).

---

## 2. Cấu trúc file

```
tieng-viet/
├── index.html                    # Trang chủ module Tiếng Việt
├── on-li-thuyet.html             # Ôn lý thuyết (kiến thức nền)
├── thi-thu.html                  # Đề thi thử tổng hợp
├── modules/
│   ├── 01-doc-hieu.html          # Đọc hiểu văn bản
│   ├── 02-phan-loai-tu.html      # Phân loại từ
│   ├── 03-dong-nghia.html        # Tìm từ đồng nghĩa / trái nghĩa
│   ├── 04-dau-cau.html           # Dấu câu (gạch ngang, phẩy, chấm...)
│   ├── 05-so-sanh.html           # Biện pháp so sánh
│   └── 06-tap-lam-van.html       # Tập làm văn (viết đoạn)
├── js/
│   ├── ai.js                     # (dùng chung với Toán)
│   ├── progress.js               # (dùng chung với Toán)
│   └── ui.js                     # (dùng chung với Toán)
├── css/
│   └── custom.css
└── data/
    ├── bai-doc.js                # Kho ~10 bài đọc có câu hỏi
    ├── tu-vung.js                # Kho từ vựng để phân loại, tìm đồng nghĩa
    └── cau-van-mau.js            # Câu mẫu cho bài tập so sánh
```

---

## 3. Luồng điều hướng

```
index.html
├── on-li-thuyet.html
├── modules/01-doc-hieu.html
├── modules/02-phan-loai-tu.html
├── modules/03-dong-nghia.html
├── modules/04-dau-cau.html
├── modules/05-so-sanh.html
├── modules/06-tap-lam-van.html
└── thi-thu.html
```

---

## 4. Trang `on-li-thuyet.html` – Kiến Thức Nền

Trình bày dạng **accordion** – bấm tiêu đề để mở nội dung.

### 4.1 – Từ loại thường gặp lớp 3

| Loại từ | Ví dụ |
|---|---|
| Từ chỉ sự vật | mưa, gió, sông, núi, bạn bè |
| Từ chỉ hoạt động | chạy, nhảy, học, viết |
| Từ chỉ đặc điểm | to, nhỏ, nhanh, xinh đẹp, dũng cảm |
| Từ chỉ hiện tượng tự nhiên | nắng, mưa, sấm, chớp, bão |

### 4.2 – Từ đồng nghĩa, trái nghĩa

- **Đồng nghĩa:** Cùng nghĩa hoặc gần nghĩa. VD: xinh đẹp – xinh xắn – dễ thương
- **Trái nghĩa:** Nghĩa đối lập. VD: dũng cảm ↔ hèn nhát; to ↔ nhỏ

### 4.3 – Dấu câu

| Dấu câu | Tác dụng | Ví dụ |
|---|---|---|
| Dấu chấm `.` | Kết thúc câu kể | Va-li-a mơ ước trở thành diễn viên. |
| Dấu chấm hỏi `?` | Câu hỏi | Cháu biết phi ngựa chưa? |
| Dấu chấm than `!` | Câu cảm, câu cầu khiến | Cháu giỏi lắm! |
| Dấu phẩy `,` | Ngăn cách các thành phần | Bé học toán, tiếng Việt và nhạc. |
| Dấu gạch ngang `–` | Đánh dấu lời thoại | – Dạ, cháu chưa biết ạ. |
| Dấu gạch ngang `–` | Liệt kê, giải thích | Tiết mục xiếc – cô gái phi ngựa đánh đàn. |
| Dấu hai chấm `:` | Báo hiệu lời thoại / liệt kê | Ông nói: – Cháu theo bác nào. |

### 4.4 – Biện pháp so sánh

**Cấu trúc:** `[Sự vật A]` + `[từ so sánh]` + `[sự vật B]`

**Từ so sánh thường gặp:** như, giống, tựa, là, hơn, kém, bằng, tựa như, giống như, như là

**Ví dụ:**
- "Cánh đồng **như** tấm thảm xanh mướt."
- "Dòng sông **giống** dải lụa vắt ngang cánh đồng."
- "Bạn Minh học giỏi **hơn** bạn Lan."

**Tác dụng:** Giúp hình ảnh sinh động, dễ hình dung hơn.

### 4.5 – Cấu trúc đoạn văn miêu tả đơn giản (lớp 3)

```
Câu 1: Giới thiệu đối tượng miêu tả
Câu 2-3: Miêu tả đặc điểm nổi bật (dùng hình ảnh so sánh)
Câu 4: Cảm nhận / nêu tình cảm
```

---

## 5. Các Module Luyện Tập – Chi Tiết

---

### Module 1 – Đọc Hiểu (`01-doc-hieu.html`)

**Kho bài `data/bai-doc.js` – ~10 bài đọc:**

```js
const BAI_DOC = [
  {
    id: "bd001",
    tieuDe: "Học Nghề",
    noiDung: `Hè năm ấy, Va-li-a theo bố mẹ đi xem xiếc...`, // toàn bộ đoạn văn
    tracNghiem: [
      {
        cau: "Va-li-a theo bố mẹ đi xem xiếc vào mùa nào?",
        luaChon: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"],
        dapAn: 1
      },
      {
        cau: "Ước mơ của Va-li-a là gì?",
        luaChon: ["Diễn viên điện ảnh", "Diễn viên lộn nhào", "Ca sĩ", "Diễn viên phi ngựa"],
        dapAn: 3
      },
      // thêm 2-3 câu nữa
    ],
    tuLuan: [
      {
        cau: "Từ nhân vật Va-li-a, em rút ra được bài học gì?",
        giaiBaiMau: "Muốn đạt được ước mơ, cần phải kiên trì, chịu khó học từ những việc nhỏ nhất."
      }
    ]
  },
  // ... thêm 9 bài
];
```

**Giao diện:**
1. Hiện bài đọc (scrollable nếu dài)
2. Trả lời trắc nghiệm → chấm tự động, hiện đúng/sai ngay
3. Viết tự luận vào `<textarea>` → bấm "Nộp" → Gemini chấm

**Prompt Gemini cho tự luận:**
```
Bài đọc: [tên bài]
Câu hỏi: [câu hỏi tự luận]
Gợi ý đáp án: [giaiBaiMau]

Bé lớp 3 viết: [đáp án của bé]

Nhận xét ngắn gọn (3-4 câu):
- Bé trả lời đúng ý chính chưa?
- Câu văn viết có rõ ràng không?
- Có thể bổ sung gì thêm?
Dùng ngôn ngữ thân thiện, động viên.
```

**Thể loại bài đọc đa dạng:**
- Truyện ngắn có tình huống (như "Học Nghề")
- Đoạn văn miêu tả thiên nhiên
- Bài văn kể chuyện sinh hoạt

---

### Module 2 – Phân Loại Từ (`02-phan-loai-tu.html`)

**Kho từ `data/tu-vung.js`:**

```js
const BAI_PHAN_LOAI = [
  {
    id: "pl001",
    tuNgu: ["nắng", "lạnh", "gió", "nóng", "mưa", "mát rượi", "sấm", "oi bức"],
    nhom: [
      { ten: "Từ chỉ hiện tượng tự nhiên", dapAn: ["nắng", "gió", "mưa", "sấm"] },
      { ten: "Từ chỉ đặc điểm", dapAn: ["lạnh", "nóng", "mát rượi", "oi bức"] }
    ]
  },
  // ... thêm bài
];
```

**Giao diện:** Kéo thả (drag & drop) thẻ từ vào đúng nhóm. Dùng HTML5 Drag and Drop API.

**Khi thả đúng:** Thẻ từ chuyển màu xanh, phát âm thanh nhỏ.  
**Khi thả sai:** Thẻ từ rung, chuyển màu đỏ rồi trả về vị trí ban đầu.

**Các nhóm phân loại xuất hiện trong đề:**
- Từ chỉ hiện tượng tự nhiên / từ chỉ đặc điểm
- Từ chỉ sự vật / hoạt động / đặc điểm (3 nhóm)
- Từ chỉ đặc điểm tốt / đặc điểm không tốt

**AI tham gia:** Ít dùng ở module này (chấm đúng/sai trực tiếp). Gemini chỉ gọi khi bé bấm "Giải thích tại sao sai".

---

### Module 3 – Từ Đồng Nghĩa & Trái Nghĩa (`03-dong-nghia.html`)

**Tab con:**

#### 3A – Tìm Từ Đồng Nghĩa

**Kho bài:** ~30 cụm từ cần tìm đồng nghĩa.

**Giao diện:** Cho từ gốc → bé gõ 1-2 từ đồng nghĩa → Gemini xác nhận (vì có nhiều đáp án đúng).

**Prompt Gemini:**
```
Từ gốc: "xinh đẹp"
Bé lớp 3 điền từ đồng nghĩa: "xinh xắn"
Từ "xinh xắn" có phải từ đồng nghĩa với "xinh đẹp" không?
Trả lời "Đúng rồi!" hoặc "Chưa đúng, gợi ý: ..." (1 câu thôi).
```

#### 3B – Tìm Từ Trái Nghĩa

Tương tự 3A nhưng tìm từ trái nghĩa.

**Kho từ mẫu:**

| Từ gốc | Đồng nghĩa gợi ý | Trái nghĩa |
|---|---|---|
| xinh đẹp | xinh xắn, dễ thương, duyên dáng | xấu xí |
| dũng cảm | can đảm, anh hùng, gan dạ | hèn nhát, nhút nhát |
| chăm chỉ | cần cù, chịu khó | lười biếng |
| nhanh nhẹn | lanh lẹ, hoạt bát | chậm chạp |
| vui vẻ | hớn hở, phấn khởi | buồn bã |
| rộng rãi | mênh mông, bát ngát | chật chội |

#### 3C – Nối Từ

Dạng nối cột: cột trái (từ gốc) → kéo nối sang cột phải (từ đồng/trái nghĩa).

---

### Module 4 – Dấu Câu (`04-dau-cau.html`)

**Tab con:**

#### 4A – Nhận Biết Tác Dụng Dấu Gạch Ngang

Cho đoạn văn → bé chọn tác dụng của dấu gạch ngang trong đoạn đó.

**Kho bài ~15 đoạn văn, mỗi đoạn 1 câu hỏi:**

```js
const BAI_DAU_CACH_NGANG = [
  {
    doan: `Ông Giám đốc nhìn em cười:\n– Thế cháu biết phi ngựa chưa?`,
    cauHoi: "Dấu gạch ngang trong đoạn văn trên có tác dụng gì?",
    luaChon: [
      "Đánh dấu lời nói trực tiếp của nhân vật",
      "Liệt kê các sự vật",
      "Giải thích thêm ý nghĩa",
      "Ngăn cách các vế câu"
    ],
    dapAn: 0,
    giaiThich: "Dấu gạch ngang đứng đầu lời thoại dùng để đánh dấu lời nói trực tiếp của nhân vật trong đối thoại."
  },
  // ...
];
```

#### 4B – Điền Dấu Câu Thích Hợp

Cho đoạn văn còn trống dấu → bé chọn dấu câu phù hợp từ danh sách.

**Ví dụ:**
```
Hôm nay bầu trời trong xanh[___] Những đám mây trắng bồng bềnh trôi nhẹ[___]
Mẹ hỏi[___] "Con có muốn đi dạo không[___]"
```
→ Bé chọn: `.` / `?` / `!` / `,` / `:` / `–`

#### 4C – Viết Câu Dùng Đúng Dấu

Cho tình huống → bé viết 1 câu dùng đúng dấu câu được yêu cầu → Gemini kiểm tra.

**Prompt Gemini:**
```
Yêu cầu: Viết 1 câu có dùng dấu gạch ngang để đánh dấu lời thoại.
Bé viết: [câu của bé]
Kiểm tra: Bé dùng dấu gạch ngang có đúng chỗ không? Trả lời 1-2 câu thân thiện.
```

---

### Module 5 – Biện Pháp So Sánh (`05-so-sanh.html`)

**Tab con:**

#### 5A – Nhận Biết Câu Có Hình Ảnh So Sánh

Cho 4 câu → bé khoanh câu nào có hình ảnh so sánh.

```js
const BAI_NHAN_BIET = [
  {
    cauHoi: "Câu nào dưới đây có hình ảnh so sánh?",
    luaChon: [
      "Bầu trời hôm nay rất xanh.",                              // không
      "Cánh đồng như tấm thảm xanh mướt.",                       // CÓ
      "Bé đang chạy nhanh trong sân.",                           // không
      "Những bông hoa nở rộ trên cành."                          // không
    ],
    dapAn: 1,
    giaiThich: "Câu B dùng từ \"như\" để so sánh cánh đồng với tấm thảm – đây là hình ảnh so sánh."
  }
];
```

#### 5B – Xác Định Từ So Sánh

Cho câu có hình ảnh so sánh → bé gõ từ so sánh trong câu đó.

**Ví dụ:** "Dòng sông *giống* dải lụa vắt ngang cánh đồng." → Bé gõ: `giống`

#### 5C – Điền Từ So Sánh

Cho câu còn trống từ so sánh → bé điền từ thích hợp.

**Ví dụ:** "Mặt trăng ___ chiếc đĩa bạc treo lơ lửng trên bầu trời."  
→ Đáp án chấp nhận: như, giống, tựa, giống như, tựa như

#### 5D – Đặt Câu Có Hình Ảnh So Sánh (AI chấm)

Cho chủ đề → bé tự đặt câu có dùng so sánh.

**Chủ đề gợi ý:**
- Tả cánh đồng lúa
- Tả dòng sông
- Tả bầu trời buổi sáng
- Tả em bé đang ngủ
- Tả ánh trăng đêm rằm

**Prompt Gemini:**
```
Yêu cầu: Đặt 1 câu có hình ảnh so sánh để tả cánh đồng.
Bé lớp 3 viết: [câu của bé]

Kiểm tra 3 điều:
1. Câu có hình ảnh so sánh không? (có từ như/giống/tựa...)
2. Hình ảnh so sánh có phù hợp, sinh động không?
3. Câu có đúng ngữ pháp không?
Nhận xét thân thiện, 2-3 câu, động viên bé viết hay hơn.
```

---

### Module 6 – Tập Làm Văn (`06-tap-lam-van.html`)

**2 dạng chính:**

#### 6A – Viết Đoạn Văn Miêu Tả (3-5 câu)

**Chủ đề** (10 chủ đề, bé chọn ngẫu nhiên hoặc tự chọn):

| STT | Chủ đề | Gợi ý có thể dùng |
|---|---|---|
| 1 | Cánh đồng lúa quê em | xanh mướt, như tấm thảm, sóng lúa |
| 2 | Dòng sông quê hương | dài, hiền hòa, như dải lụa |
| 3 | Bầu trời buổi sáng | trong xanh, ửng hồng, mặt trời mọc |
| 4 | Khu vườn nhà em | rợp bóng, hoa nở, chim hót |
| 5 | Con đường đến trường | quen thuộc, hàng cây, buổi sớm |
| 6 | Mùa hè | nắng vàng, ve kêu, phượng đỏ |
| 7 | Mùa xuân | ấm áp, cây đâm chồi, hoa nở |
| 8 | Em bé | đáng yêu, tròn như quả táo, nụ cười |
| 9 | Con vật em yêu thích | mô tả đặc điểm, tình cảm |
| 10 | Người thân trong gia đình | mô tả ngoại hình hoặc tính cách |

**Giao diện:**
- Bé chọn chủ đề → xem gợi ý từ ngữ (có thể ẩn/hiện)
- Gõ đoạn văn vào `<textarea>` → bấm "Nộp bài"
- Gemini chấm và nhận xét

**Prompt Gemini:**
```
Yêu cầu: Viết đoạn văn 3-5 câu miêu tả [chủ đề], dùng ít nhất 1 hình ảnh so sánh.

Bé lớp 3 viết:
[đoạn văn của bé]

Nhận xét theo 4 tiêu chí:
1. Số câu đủ chưa? (3-5 câu)
2. Có hình ảnh so sánh không? Dùng có đúng không?
3. Nội dung có phù hợp chủ đề không?
4. Câu văn có rõ ràng, dễ hiểu không?
Nhận xét 4-5 câu, thân thiện, khen điểm tốt trước, rồi gợi ý cải thiện.
Không viết lại bài giúp bé.
```

#### 6B – Hoàn Thiện Đoạn Văn

Cho đoạn văn còn thiếu 1-2 câu → bé điền vào chỗ trống → Gemini nhận xét câu bé điền.

**Ví dụ đoạn văn mẫu:**
```
Buổi sáng, bầu trời trong xanh và cao vời vợi. _________________.
Những chú chim hót ríu rít trên cành cây như chào đón một ngày mới bắt đầu.
```
→ Bé điền câu miêu tả cho chỗ trống.

---

## 6. Trang `thi-thu.html` – Đề Thi Thử Tổng Hợp

**Cấu trúc đề (mô phỏng đề thật HK2):**

| Phần | Nội dung | Điểm | Kiểm tra |
|---|---|---|---|
| **Đọc hiểu** | 1 bài đọc + 4 câu trắc nghiệm | 2 đ | Tự động |
| **Đọc hiểu tự luận** | 1-2 câu tự luận về bài đọc | 2 đ | Gemini |
| **Luyện từ** | Phân loại từ, tìm từ đồng nghĩa | 2 đ | Tự động + Gemini |
| **Dấu câu** | Nhận biết tác dụng dấu câu | 1 đ | Tự động |
| **So sánh** | Nhận biết + đặt câu so sánh | 1 đ | Tự động + Gemini |
| **Tập làm văn** | Viết đoạn văn 3-5 câu | 2 đ | Gemini |

**Luồng:** Làm bài → Nộp → AI chấm phần tự luận → Hiện điểm tổng + nhận xét từng phần.

---

## 7. Gamification (dùng chung với Toán)

| Tính năng | Cách hoạt động |
|---|---|
| ⭐ Sao | 3 sao: đúng ngay; 2 sao: sai 1 lần; 1 sao: sai nhiều |
| 🏆 Huy hiệu | Hoàn thành 100% 1 module → huy hiệu, lưu localStorage |
| 📊 Tiến độ | Trang chủ TV: vòng tròn % từng module |
| 🔥 Streak | Học ≥ 1 bài/ngày → đếm chuỗi, hiện trên header |
| 🎉 Confetti | Khi 3 sao hoặc mở huy hiệu |

---

## 8. Thiết kế UI riêng cho Tiếng Việt

**Màu chủ đạo:** Xanh lá dịu (phân biệt với Toán dùng cam).

```
Nền trang:   #F0FDF4   (green-50)
Primary:     #22C55E   (green-500)
Đúng:        #16A34A   (green-600)
Sai:         #EF4444   (red-500)
Gợi ý AI:   #818CF8   (indigo-400)
Card:        #FFFFFF
```

**Layout module đọc hiểu:**
```
┌──────────────────────────────────────┐
│  ← Quay lại  Tiếng Việt Lớp 3  ⭐18 │
├──────────────────────────────────────┤
│  ████████░░░░  5/8 câu               │
├──────────────────────────────────────┤
│  [ Bài đọc – scrollable ]            │
├──────────────────────────────────────┤
│  Câu 1: [câu hỏi]                    │
│  ○ A  ○ B  ○ C  ○ D                  │
│                                      │
│  Câu 5: [câu tự luận]                │
│  [ Textarea ]                        │
│                                      │
│  [ Nộp bài ]                         │
├──────────────────────────────────────┤
│  [ Nhận xét AI ]                     │
└──────────────────────────────────────┘
```

---

## 9. Lộ Trình Build Gợi Ý

| Giai đoạn | Việc làm | File tạo |
|---|---|---|
| **Tuần 1** | Khung trang chủ TV, header, chuẩn bị kho bài đọc | `index.html`, `data/bai-doc.js` |
| **Tuần 2** | Module 1: Đọc hiểu (trắc nghiệm + Gemini chấm tự luận) | `modules/01-doc-hieu.html` |
| **Tuần 3** | Module 2-3: Phân loại từ (kéo thả), Đồng nghĩa/trái nghĩa | `modules/02`, `03` |
| **Tuần 4** | Module 4-5: Dấu câu, Biện pháp so sánh | `modules/04`, `05` |
| **Tuần 5** | Module 6: Tập làm văn + chế độ thi thử | `modules/06`, `thi-thu.html` |
| **Tuần 6** | Flashcard lý thuyết, gamification, test tổng thể | `on-li-thuyet.html`, tất cả |

---

## 10. Ghi Chú Khi Viết Prompt Gemini Cho Tiếng Việt

- Luôn chỉ định **"học sinh lớp 3"** để AI dùng ngôn ngữ phù hợp
- Yêu cầu **không viết lại bài giúp bé** – chỉ nhận xét và gợi ý
- Giới hạn **3-5 câu** để tránh AI viết dài, bé không đọc hết
- Yêu cầu **khen điểm tốt trước**, sau đó mới góp ý cải thiện
- Với bài phân loại từ: cho AI xác nhận **có/không** kèm 1 ví dụ thêm
- Với câu so sánh: yêu cầu AI kiểm tra **cả 3 yếu tố**: có từ so sánh, hình ảnh phù hợp, đúng ngữ pháp
