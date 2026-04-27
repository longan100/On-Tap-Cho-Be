# 📘 KẾ HOẠCH BUILD – MODULE TOÁN (Lớp 3, Cuối HK2)
> **v2 – Đã review & sửa theo tài liệu thực tế**

> **Mục tiêu:** Bé tự học, luyện tập và thi thử toàn bộ chương trình Toán lớp 3 HK2.  
> Chạy thẳng trên trình duyệt, không cần cài đặt gì.  
> AI (Google Gemini API – free) chấm bài tự luận và gợi ý khi sai.

---

## 1. Tech Stack

| Thành phần | Công nghệ |
|---|---|
| HTML/CSS | HTML5 + Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript (ES6+) |
| AI chấm bài | Google Gemini API (`gemini-2.5-flash` – free tier) |
| Lưu tiến độ | `localStorage` |
| Font | Google Fonts CDN (`Baloo 2`) |

**Không cần:** Node.js, npm, build tool, backend, database.

**Nhúng Tailwind CDN:**
```html
<script src="https://cdn.tailwindcss.com"></script>
```

**Nhúng Google Fonts:**
```html
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&display=swap" rel="stylesheet">
```

---

## 2. Cấu trúc file

```
toan/
├── index.html                  # Trang chủ module Toán
├── on-li-thuyet.html           # Ghi nhớ công thức (flashcard)
├── thi-thu.html                # Chế độ thi thử đề ngẫu nhiên
├── modules/
│   ├── 01-doc-viet-so.html
│   ├── 02-bon-phep-tinh.html
│   ├── 03-bieu-thuc.html
│   ├── 04-tim-x.html
│   ├── 05-loi-van.html
│   ├── 06-dai-luong.html
│   ├── 07-hinh-hoc.html
│   └── 08-thong-ke.html
├── js/
│   ├── ai.js                   # Wrapper gọi Gemini API
│   ├── progress.js             # Đọc/ghi tiến độ localStorage
│   ├── generator.js            # Sinh bài tập ngẫu nhiên
│   └── ui.js                   # Hàm dùng chung: toast, modal, sao
├── css/
│   └── custom.css              # Animation, màu nền riêng
└── data/
    ├── loi-van.js              # Kho ~60 bài toán có lời văn
    ├── tim-so.js               # Kho bài "Tìm số biết rằng..." (text-based)
    └── thong-ke.js             # Kho bảng số liệu mẫu
```

> Mỗi file HTML **tự đứng độc lập**, nhúng Tailwind CDN + các file JS qua `<script>`.

---

## 3. Luồng điều hướng

```
index.html
├── on-li-thuyet.html
├── modules/01-doc-viet-so.html
├── modules/02-bon-phep-tinh.html
├── modules/03-bieu-thuc.html
├── modules/04-tim-x.html
├── modules/05-loi-van.html
├── modules/06-dai-luong.html
├── modules/07-hinh-hoc.html
├── modules/08-thong-ke.html
└── thi-thu.html
```

Điều hướng bằng `<a href>` thông thường, không cần router.

---

## 4. File `js/ai.js` – Gọi Gemini API

> ⚠️ **Sửa:** Đổi model từ `gemini-2.0-flash` → `gemini-2.5-flash`

```js
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_ENDPOINT =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

async function chamBaiVoiAI(prompt) {
  const apiKey = localStorage.getItem("GEMINI_API_KEY");
  if (!apiKey) { showApiKeyModal(); return null; }

  const res = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { maxOutputTokens: 300, temperature: 0.4 }
    })
  });

  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text
    ?? "AI không phản hồi, thử lại nhé!";
}

// Hiện modal nhập key lần đầu → lưu localStorage
function showApiKeyModal() { ... }
```

> **Lấy API key miễn phí:** Vào [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) → "Create API Key".  
> Free tier: 15 requests/phút, 1 triệu tokens/ngày – **dư sức dùng cho 1 học sinh**.

---

## 5. File `js/progress.js` – Lưu tiến độ

```js
// Cấu trúc lưu trong localStorage:
// {
//   "01-doc-viet-so":   { done: 12, correct: 10, stars: 2, badge: true },
//   "02-bon-phep-tinh": { done: 20, correct: 20, stars: 3, badge: true },
//   ...
// }

function saveProgress(moduleId, correct, total) { ... }
function getProgress(moduleId) { ... }
function getTotalStars() { ... }
function resetAll() { ... }
```

---

## 6. File `js/generator.js` – Sinh bài tự động

> ✅ **Giải đáp câu hỏi "kết quả phải là số có 5 chữ số?"**
> - Phép cộng/trừ: **cả hai số hạng đầu vào đều là 5 chữ số**, kết quả ≤ 99 999 (5 chữ số).
> - Phép nhân: **số bị nhân là 5 chữ số** × 1 chữ số, kết quả giữ ≤ 99 999.
> - Phép chia: **số bị chia là 5 chữ số** ÷ 1 chữ số; thương là 4–5 chữ số (đúng như đề thật).
>
> ⚠️ **Sửa lỗi `sinhPhepTru`:** Phiên bản cũ cho `b = randomInt(1000, a)` → b có thể chỉ có 4 chữ số,
> không khớp đề thật (VD: `56 185 − 32 689`). Sửa lại `b` cũng là 5 chữ số.

```js
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soNgauNhien5Cu() { return randomInt(10000, 99999); }

// Phép cộng: cả hai đầu vào 5 chữ số, kết quả ≤ 99 999
function sinhPhepCong() {
  const a = randomInt(10000, 89999);
  const b = randomInt(10000, 99999 - a);   // b cũng 5 chữ số
  return { phepTinh: `${a} + ${b}`, dapAn: a + b };
}

// Phép trừ: cả hai đầu vào 5 chữ số, không âm
// ⚠️ ĐÃ SỬA: b >= 10000 để nhất quán với đề thật
function sinhPhepTru() {
  const a = randomInt(20000, 99999);
  const b = randomInt(10000, a - 1);       // b tối thiểu 5 chữ số, < a
  return { phepTinh: `${a} - ${b}`, dapAn: a - b };
}

// Phép nhân: 5 chữ số × 1 chữ số, kết quả ≤ 99 999
function sinhPhepNhan() {
  const b = randomInt(2, 9);
  const a = randomInt(10000, Math.floor(99999 / b));
  return { phepTinh: `${a} × ${b}`, dapAn: a * b };
}

// Phép chia: số bị chia 5 chữ số ÷ 1 chữ số
// Thương 4–5 chữ số (khớp đề thật)
function sinhPhepChia(coDu = false) {
  const b = randomInt(2, 9);
  const thuong = randomInt(1000, Math.floor(99999 / b));  // có thể 4 hoặc 5 chữ số
  const du = coDu ? randomInt(1, b - 1) : 0;
  const a = thuong * b + du;
  return { phepTinh: `${a} ÷ ${b}`, dapAn: thuong, du };
}

// Biểu thức 2 phép tính (5 dạng – xem Module 3)
function sinhBieuThuc(dang) { ... }

// Tìm X – 6 dạng cơ bản + 4 dạng nâng cao phương trình
function sinhTimX(dang) { ... }
```

---

## 7. File `js/ui.js` – Hàm UI dùng chung

```js
// Toast nhỏ góc dưới phải
function showToast(message, type) { ... }
// type: "success" | "error" | "hint"

// Modal hiện phản hồi AI
function showAIFeedback(htmlText) { ... }

// Animation 1–3 ngôi sao
function showStars(count) { ... }

// Cập nhật progress bar header
function updateProgressBar(moduleId) { ... }

// Confetti đơn giản (CSS animation)
function showConfetti() { ... }
```

---

## 8. Thiết kế UI chung

> ⚠️ **Sửa màu:** Bỏ màu cam kem `#FFF8F0` – dùng gradient trắng + xanh nhạt hiện đại.

**Màu sắc:**
```
Nền trang:   linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)
             (trắng → xanh sky rất nhạt – sáng, sạch, không chói mắt)
Card:        #FFFFFF  (trắng thuần)
Primary:     #38BDF8  (sky-400 – xanh trời tươi)
Đúng:        #22C55E  (green-500)
Sai:         #EF4444  (red-500)
Gợi ý AI:   #818CF8  (indigo-400)
Text chính: #1E293B  (slate-800)
```

**Tailwind class tương ứng:**
```html
<!-- Nền trang – dùng class tuỳ biến hoặc inline style -->
<body class="min-h-screen font-['Baloo_2']"
      style="background: linear-gradient(135deg,#fff 0%,#e0f2fe 100%)">

<!-- Card bài tập -->
<div class="bg-white rounded-2xl shadow-md p-6">

<!-- Nút chính -->
<button class="bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-xl px-6 py-3">

<!-- Phản hồi đúng -->
<div class="bg-green-50 border border-green-300 text-green-700 rounded-xl p-4">

<!-- Phản hồi sai -->
<div class="bg-red-50 border border-red-300 text-red-700 rounded-xl p-4">
```

**Font:** `Baloo 2` – tròn, to, thân thiện trẻ em.

**Layout chuẩn mỗi trang luyện tập:**
```
┌─────────────────────────────────────┐
│  ← Quay lại    Toán Lớp 3    ⭐ 24  │  ← Header cố định
├─────────────────────────────────────┤
│  ████████████░░░░░  8/10 câu        │  ← Progress bar module
├─────────────────────────────────────┤
│                                     │
│         [ Đề bài ]                  │
│                                     │
│         [ Ô nhập đáp án ]           │
│                                     │
│   [ ✅ Kiểm tra ]  [ 💡 Gợi ý AI ] │
│                                     │
├─────────────────────────────────────┤
│   [ Phản hồi / Giải thích AI ]      │
└─────────────────────────────────────┘
```

**Nút Gợi ý:** Gọi Gemini với prompt nhẹ – **không cho đáp án thẳng**, chỉ gợi ý bước đầu tiên.

---

## 9. Trang `on-li-thuyet.html` – Flashcard Công Thức

Bấm vào thẻ → lật xem công thức (CSS `transform: rotateY(180deg)`).

| Mặt trước | Mặt sau |
|---|---|
| Chu vi hình chữ nhật? | `C = (dài + rộng) × 2` |
| Diện tích hình chữ nhật? | `S = dài × rộng` |
| Chu vi hình vuông? | `C = cạnh × 4` |
| Diện tích hình vuông? | `S = cạnh × cạnh` |
| Tìm chiều dài? | `dài = S ÷ rộng` |
| Tìm cạnh hình vuông? | `cạnh = C ÷ 4` |
| X + 5 432 = 20 000 → X? | `X = 20 000 − 5 432` |
| X − 3 200 = 14 500 → X? | `X = 14 500 + 3 200` |
| 25 000 − X = 8 750 → X? | `X = 25 000 − 8 750` |
| X × 6 = 48 000 → X? | `X = 48 000 ÷ 6` |
| X ÷ 4 = 12 500 → X? | `X = 12 500 × 4` |
| Thứ tự khi có ngoặc? | Ngoặc → nhân/chia → cộng/trừ |
| 1m = ? cm | 100 cm |
| 1 km = ? m | 1 000 m |
| 1 kg = ? g | 1 000 g |
| 1 l = ? ml | 1 000 ml |
| 1 giờ = ? phút | 60 phút |
| 1 tuần = ? ngày | 7 ngày |
| 1 năm = ? tháng | 12 tháng |
| Số La Mã: XIV = ? | 14 |
| Số La Mã: XIX = ? | 19 |
| Số La Mã: XXI = ? | 21 |

---

## 10. Các Module Luyện Tập – Chi Tiết

---

### Module 1 – Đọc & Viết Số (`01-doc-viet-so.html`)

> ⚠️ **Sửa:** Bổ sung 2 dạng bài còn thiếu so với đề thật: **Số La Mã** và **Điền chữ số vào ô trống khi so sánh**.

| Dạng | Đề bài ví dụ | Kiểm tra |
|---|---|---|
| Số → Chữ | Cho số `74 305` → bé gõ chữ | So sánh chuỗi (normalize) |
| Chữ → Số | "7 chục nghìn, 4 trăm, 5 đơn vị" → gõ số | So sánh số nguyên |
| Giá trị hàng | Cho số + tên hàng → gõ giá trị | So sánh số |
| Số liền trước/sau | Cho số → gõ | So sánh số |
| Làm tròn | Cho số + hàng cần làm tròn → gõ | So sánh số |
| So sánh / sắp xếp | 4 số → gõ thứ tự tăng/giảm | So sánh mảng |
| Điền chữ số vào ô □ | `45 8□9 > 45 869` → tìm chữ số thích hợp | So sánh số |
| **Số La Mã – Ả Rập → La Mã** | Cho số `14` → bé gõ `XIV` | So sánh chuỗi |
| **Số La Mã – La Mã → Ả Rập** | Cho `XIX` → bé gõ `19` | So sánh số |
| **Số La Mã – sắp xếp** | Cho dãy `XI, IX, VII` → sắp xếp tăng dần | So sánh mảng |

**Phạm vi Số La Mã:** I → XXI (1–21), khớp với đề thi thực tế  
(Xuất hiện ở nhiều đề: "Số 19 viết theo số La Mã là XIX", "Số 16 viết là XVI", v.v.)

**Bảng sinh La Mã:**
```js
const LA_MA = {
  1:"I", 2:"II", 3:"III", 4:"IV", 5:"V",
  6:"VI", 7:"VII", 8:"VIII", 9:"IX", 10:"X",
  11:"XI", 12:"XII", 13:"XIII", 14:"XIV", 15:"XV",
  16:"XVI", 17:"XVII", 18:"XVIII", 19:"XIX", 20:"XX", 21:"XXI"
};
```

**AI tham gia:** Sai phần Số → Chữ hoặc Số La Mã → Gemini giải thích ngắn gọn.

**Prompt mẫu (Số La Mã):**
```
Số 14 viết bằng số La Mã. Bé lớp 3 gõ: "XIIII".
Đáp án đúng: "XIV".
Giải thích 2 câu thân thiện tại sao XIV đúng hơn XIIII.
```

---

### Module 2 – Bốn Phép Tính (`02-bon-phep-tinh.html`)

**Giao diện:** Phép tính cột dọc bằng CSS Grid, bé nhập kết quả vào ô.

**Sinh tự động:** Cộng, trừ, nhân, chia (xem generator.js – đã chuẩn 5 chữ số đầu vào).

**AI tham gia:** Chỉ ra bé tính nhầm hàng nào.

**Prompt mẫu:**
```
Bé lớp 3 tính: 45 819 + 4 483
Đáp án đúng: 50 302. Bé nhập: 49 302.
Giải thích 2-3 câu thân thiện, bé tính nhầm ở hàng nào.
```

---

### Module 3 – Biểu Thức Số (`03-bieu-thuc.html`)

> ⚠️ **Sửa:** Bổ sung dạng **Tính thuận tiện nhất** (xuất hiện trong đề thi thực tế).

**5 dạng sinh tự động:**

| Dạng | Ví dụ |
|---|---|
| Chỉ cộng/trừ | `16 350 + 36 540 − 2 704` |
| Nhân/chia trước | `7 081 − 1 629 × 4` |
| Có ngoặc nhân | `7 × (18 550 − 7 926)` |
| Có ngoặc chia | `(15 320 − 3 105) × 8` |
| **Tính thuận tiện nhất** | `2 500 + 3 500 + 4 500 + 5 500 + 6 500 + 7 500` hoặc `5 216 × 7 + 5 216 × 2 + 5 216` |

**Dạng "Tính thuận tiện nhất":**
- Kiểu 1: Nhóm các số thành tổng tròn → sinh tự động (VD: tổng 6 số mỗi số lệch 1 000)
- Kiểu 2: Nhân phân phối `a × b + a × c + a = a × (b + c + 1)` → kho bài viết sẵn ~10 bài
- Bé gõ kết quả + tuỳ chọn gõ cả "bước gộp" trung gian để AI chấm phương pháp

**Tùy chọn "Làm từng bước":** Hiện ô phụ nhập kết quả từng phép trung gian.

**AI tham gia:** Nhắc thứ tự thực hiện khi bé sai; với dạng thuận tiện, gợi ý cách nhóm số.

---

### Module 4 – Tìm X (`04-tim-x.html`)

> ⚠️ **Sửa lớn:** Plan cũ thiếu 2 dạng nâng cao phương trình và thiếu hoàn toàn dạng bài **"Tìm số"**
> kiểu viết chữ (rất phổ biến trong đề thật, khó ở chỗ bé phải tự "dịch" mô tả thành phép tính).

#### 4A – Tìm X dạng phương trình cơ bản (sinh tự động)

| Dạng | Ví dụ | Cách tìm X |
|---|---|---|
| Tìm số hạng | `X + 5 432 = 20 000` | `X = 20 000 − 5 432` |
| Tìm số bị trừ | `X − 3 200 = 14 500` | `X = 14 500 + 3 200` |
| Tìm số trừ | `25 000 − X = 8 750` | `X = 25 000 − 8 750` |
| Tìm thừa số | `X × 6 = 48 000` | `X = 48 000 ÷ 6` |
| Tìm số bị chia | `X ÷ 4 = 12 500` | `X = 12 500 × 4` |
| Tìm số chia | `60 000 ÷ X = 5` | `X = 60 000 ÷ 5` |

#### 4B – Tìm X dạng phương trình nâng cao (kho bài viết sẵn, ~15 bài/dạng)

> ⚠️ **Sửa:** Plan cũ chỉ có dạng 1 và 3; bổ sung đủ cả 4 dạng từ tài liệu `tìm_X_lớp_3.docx`.

| Dạng nâng cao | Mô tả | Ví dụ |
|---|---|---|
| **Nâng cao 1** | Vế trái: biểu thức 2 phép tính. Vế phải: số | `X × 4 + 200 = 5 000` |
| **Nâng cao 2** | Vế trái: biểu thức 2 phép tính. Vế phải: biểu thức | `X × 3 + 100 = 4 000 − 500` |
| **Nâng cao 3** | Vế trái: có ngoặc đơn. Vế phải: số | `(X + 300) × 5 = 4 000` |
| **Nâng cao 4** | Vế trái: có ngoặc đơn. Vế phải: biểu thức | `(X + 300) × 5 = 20 000 ÷ 4` |

**Cách làm (hướng dẫn cho AI):** Biến đổi từng bước về dạng cơ bản rồi tìm X.

#### 4C – Toán "Tìm Số" kiểu chữ (kho bài viết sẵn ~20 bài)

> ⚠️ **Bổ sung mới hoàn toàn.** Đây là dạng bài khó nhất trong phần Tìm X vì đề **không viết X**
> mà mô tả bằng lời – bé phải tự dựng phép tính. Xuất hiện nhiều trong đề ôn tập thực tế.

**Ví dụ đề bài dạng chữ (từ `ÔN_TẬP_CUỐI_HK2_theo_từng_dạng.docx`):**
- "Tìm số biết rằng lấy số đó chia cho 7 thì được thương là 9 và được số dư lớn nhất có thể."
- "Tìm số biết rằng lấy số đó chia cho 6 thì được thương là số nhỏ nhất có hai chữ số và được số dư lớn nhất có thể."
- "Tìm số biết rằng lấy số đó chia cho số lớn nhất có một chữ số thì được thương là số lớn nhất có hai chữ số."
- "Tìm số biết rằng lấy số đó nhân với 6 thì được tích là 4 212 bớt đi 612."
- "Tìm số biết rằng gấp số đó lên 8 lần thì được tích là 4 816 và thêm 648."
- "Tìm số lớn nhất có bốn chữ số khác nhau và số nhỏ nhất có ba chữ số. Tính tổng của hai số đó."

**Kho dữ liệu `data/tim-so.js`:**
```js
const TIM_SO = [
  {
    id: "ts001",
    de: "Tìm số biết rằng lấy số đó chia cho 7 thì được thương là 9 và được số dư lớn nhất có thể.",
    giaiBaiMau: "Số dư lớn nhất khi chia cho 7 là 6. Số cần tìm = 9 × 7 + 6 = 69.",
    dapAn: 69
  },
  // ...
];
```

**Giao diện:** Bé đọc đề → gõ đáp án số → Kiểm tra. Nếu sai, AI giải thích cách "dịch" đề.

**AI tham gia:** Nhắc lại quy tắc tìm thành phần chưa biết; với dạng chữ, giúp bé dịch mô tả → phép tính.

---

### Module 5 – Toán Có Lời Văn (`05-loi-van.html`)

> ⚠️ **Sửa:** Bổ sung nhóm bài `phan_so` (phân số đơn giản) vì xuất hiện trong đề thật.

**Kho bài `data/loi-van.js` – ~60 bài, chia nhóm:**

```js
const LOI_VAN = [
  {
    id: "lv001",
    nhom: "hinh_hoc",
    de: "Một mảnh vườn hình chữ nhật có chiều rộng 9m, chiều dài gấp 4 lần chiều rộng. Tính chu vi và diện tích.",
    dapAn: { chuVi: 90, dienTich: 324 },
    giaiBaiMau: "Chiều dài = 9 × 4 = 36 (m). Chu vi = (36 + 9) × 2 = 90 (m). Diện tích = 36 × 9 = 324 (m²)."
  },
  // ...
];
```

**Nhóm bài (6 nhóm cũ giữ nguyên + 1 mới):**

| Nhóm | Mô tả | Ví dụ từ đề thật |
|---|---|---|
| `gap_len_giam_di` | Gấp lên / giảm đi nhiều lần | "Ngày thứ hai bán được gấp 3 lần ngày thứ nhất" |
| `tong_hieu` | Tổng, hiệu hai số | "Kho có 80 000 bóng, chuyển đi 12 346 rồi 23 908, còn lại?" |
| `mua_ban` | Tính tiền, trả lại | "Mẹ mua 3 kg cam giá 22 700đ/kg, đưa 100 000đ, trả lại?" |
| `rut_don_vi` | Rút về đơn vị | "8 cốc cam, mỗi cốc 150ml, rót vào 3 cốc, mỗi cốc bao nhiêu?" |
| `hinh_hoc` | Tính chu vi, diện tích | "Chiều rộng 15m, chiều dài gấp 9 lần, tính diện tích" |
| `nhieu_buoc` | Bài 2–3 bước tổng hợp | "24 663 quyển vở, bán 11 238, chia đều 5 thư viện, mỗi thư viện bao nhiêu?" |
| **`phan_so`** *(mới)* | Bài liên quan phân số đơn giản (1/2, 1/3, 1/4, 3/4) | "Cắt đi 3/4 tấm vải 91 880m, còn lại?" / "Bán 1/3 số gạo 15 264kg, còn lại?" |

**Giao diện:** Bé gõ lời giải vào `<textarea>` → bấm "Nộp bài" → Gemini chấm.

**Prompt gửi Gemini:**
```
Đề bài: [đề bài]
Lời giải mẫu: [giaiBaiMau]
Đáp án: [dapAn]

Bé lớp 3 viết:
[lời giải của bé]

Chấm bài theo 3 tiêu chí:
1. Đáp số đúng chưa?
2. Các bước đúng hướng chưa?
3. Thiếu bước nào không?
Trả lời thân thiện, không quá 4 câu, dùng ngôn ngữ cho học sinh lớp 3.
```

---

### Module 6 – Đại Lượng & Đo Lường (`06-dai-luong.html`)

**Tab con trong cùng 1 trang:**

#### 6A – Đổi Đơn Vị (sinh tự động)

| Loại | Ví dụ đề bài |
|---|---|
| Độ dài | `9m 4dm = ___ dm` ; `850cm = ___m ___cm` ; `7m 3cm = ___ cm` |
| Khối lượng | `4kg 300g = ___ g` ; `6 200g = ___kg ___g` ; `5kg 92g = ___ g` |
| Dung tích | `3l 500ml = ___ ml` ; `4 500ml = ___l ___ml` ; `6 000ml = ___ l` |
| Thời gian | `2 giờ 15 phút = ___ phút` ; `3 ngày 4 giờ = ___ giờ` ; `3 giờ 40 phút = ___ phút` |
| Lịch | `4 tuần 3 ngày = ___ ngày` ; `2 năm 6 tháng = ___ tháng` |

#### 6B – Đọc Đồng Hồ

Hiển thị ~10 hình đồng hồ SVG tĩnh → bé gõ "__ giờ __ phút"  
(cũng hỏi cách đọc thay thế: "__ giờ kém __ phút").

#### 6C – Tính Khoảng Thời Gian (mở rộng)

> ⚠️ **Mở rộng:** Tài liệu `ÔN_TẬP_CUỐI_HK2_theo_từng_dạng.docx` có 25+ bài thời gian đa dạng.

**Bài đơn giản (sinh tự động):**
- Cho giờ bắt đầu + giờ kết thúc → tính số phút / giờ phút đã trôi qua

**Bài tình huống (kho bài ~15 bài):**
- "Bữa tối từ 18 giờ 30 phút đến 19 giờ 30 phút, kéo dài bao lâu?"
- "Buổi học từ 7 giờ 30 phút đến 9 giờ kém 20 phút, kéo dài bao nhiêu phút?"
- "Lan đi từ nhà lúc 7 giờ kém 5 phút, đến trường lúc 7 giờ 10 phút, đi mất bao nhiêu phút?"
- "Cứ 15 phút có một chuyến tàu. Từ 10 giờ đến 12 giờ có mấy chuyến?"
- "Đồng hồ quả lắc, từ 1 giờ đến 7 giờ 30 phút đánh bao nhiêu tiếng?"

**AI tham gia:** Giải thích quy đổi đơn vị phức hợp khi sai; giải thích cách tính khoảng thời gian qua nửa đêm hoặc qua đầu giờ.

---

### Module 7 – Hình Học (`07-hinh-hoc.html`)

**Tab con:**

#### 7A – Hình Chữ Nhật & Hình Vuông (sinh tự động)

- Tính chu vi từ chiều dài + chiều rộng
- Tính diện tích
- Tìm chiều dài khi biết chu vi + chiều rộng
- Tìm cạnh khi biết chu vi hình vuông
- Tìm chiều dài/rộng khi biết diện tích + một chiều

Kèm hình minh họa SVG đơn giản.

#### 7B – Hình Tròn (nhận biết, không tính toán)

Trắc nghiệm Đúng/Sai cho các phát biểu về tâm, bán kính, đường kính.  
(VD: "Ba điểm A, O, C thẳng hàng", "O là trung điểm của đoạn thẳng AB")

#### 7C – Khối Hộp Chữ Nhật & Khối Lập Phương

Trắc nghiệm: số mặt, số cạnh, số đỉnh, phân biệt 2 khối.  
(VD: "Các mặt của khối lập phương đều là hình chữ nhật – Đúng hay Sai?")

**AI tham gia:** Giải thích khi tính sai chu vi / diện tích; giải thích khi nhầm khái niệm bán kính / đường kính.

---

### Module 8 – Thống Kê & Xác Suất (`08-thong-ke.html`)

**Kho bảng `data/thong-ke.js` – ~15 bảng số liệu:**

```js
const THONG_KE = [
  {
    id: "tk001",
    tieuDe: "Số giờ đọc sách trong tuần",
    cot: ["Bạn", "Minh", "Chi", "Ngọc"],
    gia_tri: [null, 10, 9, 8],
    cauHoi: [
      { de: "Bạn đọc nhiều giờ nhất là ai?", dapAn: "Minh", kieu: "text" },
      { de: "Tổng số giờ của cả 3 bạn?", dapAn: 27, kieu: "so" }
    ]
  }
];
```

**Dạng bài:**
- Đọc bảng → trả lời trắc nghiệm + điền số
- Liệt kê khả năng xảy ra (tự luận ngắn → Gemini chấm)
- Tính thuận tiện: nhóm các số thành tổng tròn

**Prompt Gemini cho xác suất:**
```
Đề: [đề bài liệt kê khả năng]
Đáp án đúng: [đáp án]
Bé viết: [...]
Chấm ngắn gọn, thân thiện lớp 3.
```

---

## 11. Trang `thi-thu.html` – Chế Độ Thi Thử

**Cấu trúc đề ngẫu nhiên (mô phỏng đề thật):**

| Phần | Số câu | Điểm | Nguồn |
|---|---|---|---|
| Trắc nghiệm | 6 câu | 3 đ | Sinh tự động từ các module |
| Điền số / đổi đơn vị | 4 câu | 1 đ | generator.js |
| Đặt tính rồi tính | 4 phép | 2 đ | generator.js |
| Biểu thức | 2 câu | 1 đ | generator.js |
| Toán lời văn | 1 bài | 2 đ | data/loi-van.js |
| Bài nâng cao | 1 bài | 1 đ | Kho nâng cao |

**Luồng:** Làm bài → Nộp → AI chấm phần tự luận → Hiện điểm tổng + nhận xét từng phần.

---

## 12. Gamification

| Tính năng | Cách hoạt động |
|---|---|
| ⭐ Sao | 3 sao: đúng ngay; 2 sao: sai 1 lần; 1 sao: sai nhiều |
| 🏆 Huy hiệu | Hoàn thành 100% 1 module → mở huy hiệu, lưu localStorage |
| 📊 Tiến độ | Trang chủ: vòng tròn % hoàn thành từng module |
| 🔥 Streak | Học ≥ 1 bài/ngày → đếm chuỗi ngày, hiện trên header |
| 🎉 Confetti | Khi 3 sao hoặc mở huy hiệu (CSS animation thuần) |

---

## 13. Tổng Hợp Các Thay Đổi So Với v1

| # | Vị trí | Vấn đề cũ | Đã sửa thành |
|---|---|---|---|
| 1 | `ai.js` | Model `gemini-2.0-flash` | `gemini-2.5-flash` |
| 2 | Section 8 (UI) | Nền cam kem `#FFF8F0` | Gradient trắng → sky nhạt `#e0f2fe` |
| 3 | `generator.js` – `sinhPhepTru` | `b = randomInt(1000, a)` → b có thể 4 chữ số | `b = randomInt(10000, a-1)` → b luôn 5 chữ số |
| 4 | Module 1 | Thiếu dạng Số La Mã và điền chữ số vào ô | Bổ sung 3 dạng La Mã + dạng điền chữ số |
| 5 | Module 3 | Chỉ có 4 dạng biểu thức | Bổ sung dạng 5: Tính thuận tiện nhất |
| 6 | Module 4 | Nâng cao chỉ có dạng 1 & 3; thiếu dạng "Tìm số" bằng chữ | Bổ sung nâng cao 2 & 4; bổ sung tab 4C "Toán Tìm Số" kiểu văn |
| 7 | Module 5 | Thiếu nhóm bài phân số | Bổ sung nhóm `phan_so` |
| 8 | Module 6C | Mô tả quá sơ sài | Mở rộng kho 15 bài tình huống thời gian |
| 9 | `data/` | Chỉ có `loi-van.js` và `thong-ke.js` | Bổ sung `tim-so.js` cho dạng bài 4C |

---

## 14. Lộ Trình Build Gợi Ý

| Giai đoạn | Việc làm | File tạo |
|---|---|---|
| **Tuần 1** | Khung trang chủ, header, progress, `ai.js`, `generator.js` cơ bản | `index.html`, `js/*.js` |
| **Tuần 2** | Module 1–4: số học, phép tính, biểu thức, tìm X (đủ 3 tab) | `modules/01` → `04` |
| **Tuần 3** | Module 5 (lời văn + Gemini), Module 6 (đại lượng + thời gian) | `modules/05`, `06` |
| **Tuần 4** | Module 7–8, flashcard, thi thử | `modules/07`, `08`, `on-li-thuyet.html`, `thi-thu.html` |
| **Tuần 5** | Gamification, polish UI, test mobile | Tất cả |
