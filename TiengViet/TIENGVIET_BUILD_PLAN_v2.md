# 📗 KẾ HOẠCH BUILD – MODULE TIẾNG VIỆT (Lớp 3, Cuối HK2)
> **v2 – Đã review & sửa theo tài liệu đề thi thực tế (12 đề)**

> **Mục tiêu:** Bé tự học và luyện tập toàn bộ chương trình Tiếng Việt lớp 3 HK2.  
> Chạy thẳng trên trình duyệt, không cần cài đặt gì.  
> AI (Google Gemini API – free) chấm bài tự luận, nhận xét câu văn, gợi ý khi sai.

---

## 1. Tech Stack

| Thành phần | Công nghệ |
|---|---|
| HTML/CSS | HTML5 + Tailwind CSS (CDN) |
| Logic | Vanilla JavaScript (ES6+) |
| AI chấm bài | Google Gemini API (`gemini-2.5-flash` – free tier) |
| Lưu tiến độ | `localStorage` |
| Font | Google Fonts CDN (`Baloo 2`) |

> ⚠️ **Sửa:** Đổi model từ `gemini-2.0-flash` → `gemini-2.5-flash`

**Dùng chung `js/ai.js`, `js/progress.js`, `js/ui.js` với module Toán** (nếu build chung 1 project).

---

## 2. Cấu trúc file

> ⚠️ **Sửa:** Thêm 2 module mới (Kiểu Câu & Mẫu Câu, Chính Tả) vì xuất hiện trong **100% đề thật**.

```
tieng-viet/
├── index.html
├── on-li-thuyet.html
├── thi-thu.html
├── modules/
│   ├── 01-doc-hieu.html          # Đọc hiểu văn bản
│   ├── 02-phan-loai-tu.html      # Phân loại từ
│   ├── 03-dong-nghia.html        # Từ đồng nghĩa / trái nghĩa
│   ├── 04-dau-cau.html           # Dấu câu
│   ├── 05-so-sanh.html           # Biện pháp so sánh
│   ├── 06-tap-lam-van.html       # Tập làm văn
│   ├── 07-kieu-cau.html          # Kiểu câu & Mẫu câu ← MỚI
│   └── 08-chinh-ta.html          # Chính tả ← MỚI
├── js/
│   ├── ai.js
│   ├── progress.js
│   └── ui.js
├── css/
│   └── custom.css
└── data/
    ├── bai-doc.js                # Kho ~15 bài đọc có câu hỏi (tăng từ 10)
    ├── tu-vung.js                # Kho từ vựng
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
├── modules/07-kieu-cau.html      ← MỚI
├── modules/08-chinh-ta.html      ← MỚI
└── thi-thu.html
```

---

## 4. Trang `on-li-thuyet.html` – Kiến Thức Nền

Trình bày dạng **accordion** – bấm tiêu đề để mở nội dung.

### 4.1 – Từ loại thường gặp lớp 3

| Loại từ | Ví dụ |
|---|---|
| Từ chỉ sự vật | mưa, gió, sông, núi, bạn bè |
| Từ chỉ hoạt động | chạy, nhảy, học, viết, gặm, đào |
| Từ chỉ trạng thái | vui, buồn, sợ hãi, lo lắng |
| Từ chỉ đặc điểm – tính cách | dũng cảm, hiền lành, độc ác, vị tha, chăm chỉ |
| Từ chỉ đặc điểm – hình dáng | cao lớn, bụ bẫm, vuông vắn, mềm mại |
| Từ chỉ đặc điểm – tính chất | dẻo dai, mềm, cứng, nhẵn nhụi |
| Từ chỉ hiện tượng tự nhiên | nắng, mưa, sấm, chớp, bão |

### 4.2 – Từ đồng nghĩa, trái nghĩa

- **Đồng nghĩa:** Cùng nghĩa hoặc gần nghĩa. VD: xinh đẹp – xinh xắn – dễ thương
- **Trái nghĩa:** Nghĩa đối lập. VD: dũng cảm ↔ hèn nhát; to ↔ nhỏ; gần ↔ xa
- **Từ địa phương đồng nghĩa:** vịt xiêm = con ngan; củ mì = củ sắn; đậu phộng = lạc; mè = vừng

### 4.3 – Dấu câu

> ⚠️ **Bổ sung:** Dấu hai chấm và dấu ngoặc kép hay bị bỏ sót trong plan cũ nhưng xuất hiện dày đặc trong đề thật.

| Dấu câu | Tác dụng chính | Ví dụ |
|---|---|---|
| Dấu chấm `.` | Kết thúc câu kể | Va-li-a trở thành diễn viên. |
| Dấu chấm hỏi `?` | Câu hỏi | Cháu biết phi ngựa chưa? |
| Dấu chấm than `!` | Câu cảm, câu cầu khiến | Chao ôi, hay quá! |
| Dấu phẩy `,` | Ngăn cách các thành phần / vế câu | Bé học toán, tiếng Việt và nhạc. |
| Dấu gạch ngang `–` | Đánh dấu lời thoại trực tiếp | – Dạ, cháu chưa biết ạ. |
| Dấu gạch ngang `–` | Liệt kê hoặc giải thích thêm | Tiết mục xiếc – cô gái phi ngựa. |
| **Dấu hai chấm `:`** | Báo hiệu lời nói trực tiếp | Ông nói: – Cháu theo bác nào. |
| **Dấu hai chấm `:`** | Báo hiệu phần giải thích | Lòng tôi thay đổi lớn: hôm nay tôi đi học. |
| **Dấu hai chấm `:`** | Báo hiệu phần liệt kê | Vườn có: táo, mít, bưởi và chôm chôm. |
| **Dấu ngoặc kép `""`** | Đánh dấu lời nói / suy nghĩ trực tiếp | Khỉ tự nhủ: "Mình không nên ham chơi." |
| **Dấu ngoặc kép `""`** | Trích dẫn tên tác phẩm / tiết mục | Tiết mục "Cô gái phi ngựa đánh đàn". |

### 4.4 – Kiểu câu

> ⚠️ **Bổ sung hoàn toàn:** Kiểu câu xuất hiện trong **mọi đề thi** nhưng không có trong plan cũ.

**Phân loại theo mục đích:**

| Kiểu câu | Dấu hiệu nhận biết | Ví dụ |
|---|---|---|
| Câu kể | Kể sự việc, miêu tả. Kết thúc bằng `.` | Sư tử nằm ngủ dưới gốc cây. |
| Câu hỏi | Hỏi thông tin. Có từ hỏi: ai, gì, đâu, khi nào, vì sao, thế nào. Kết thúc `?` | Cháu biết phi ngựa chưa? |
| Câu khiến | Yêu cầu, đề nghị. Có từ: hãy, đừng, chớ, xin, nhớ. | Hãy nhìn ngắm vẻ đẹp của chú bướm! |
| Câu cảm | Bộc lộ cảm xúc. Kết thúc `!`. Có từ: ôi, chao, ôi chao, thật, quá. | Chao ôi, hay quá! |

**Mẫu câu (bộ phận câu):**

| Mẫu câu | Trả lời | Ví dụ |
|---|---|---|
| Ai làm gì? | Chủ ngữ + vị ngữ (hành động) | Du khách cưỡi ngựa vòng quanh hồ. |
| Ai là gì? | Chủ ngữ + là + danh từ | Rít là một chàng thợ rèn. |
| Ai thế nào? | Chủ ngữ + vị ngữ (trạng thái, đặc điểm) | Những bông hoa tỏa ra mùi hương ngọt ngào. |

**Bộ phận trả lời câu hỏi bổ nghĩa:**

| Câu hỏi | Ví dụ trả lời |
|---|---|
| Khi nào? / Bao giờ? | Ngày xưa / Mùa đông / Buổi sáng |
| Ở đâu? | Trên cành cây / Dưới gốc cây |
| Để làm gì? | để xem lại móng / để tặng mẹ |
| Bằng gì? | bằng nan tre dán giấy bóng kính / bằng sắt |
| Như thế nào? | hiền lành, chăm chỉ / mạnh mẽ và đầy quyết tâm |
| Vì sao? | vì mình đã bỏ bạn lại chạy trốn |

### 4.5 – Biện pháp so sánh

**Cấu trúc:** `[Sự vật A]` + `[từ so sánh]` + `[sự vật B]`

**Từ so sánh thường gặp:** như, giống, tựa, là, hơn, kém, bằng, giống như, tựa như, như là

**Ví dụ từ đề thật:**
- "Bầu trời tối đen **như** mực."
- "Họ **như** con chim con đứng trên bờ tổ."
- "Tàu lá vắt vẻo mềm mại **như** cái đuôi én."
- "Tiếng chim buổi sáng **như** bản hòa ca rộn ràng."
- "Trẻ em **như** búp trên cành."

### 4.6 – Cấu trúc đoạn văn miêu tả đơn giản (lớp 3)

```
Câu 1: Giới thiệu đối tượng miêu tả
Câu 2-3: Miêu tả đặc điểm nổi bật (dùng hình ảnh so sánh)
Câu 4: Cảm nhận / nêu tình cảm
```

---

## 5. Các Module Luyện Tập – Chi Tiết

---

### Module 1 – Đọc Hiểu (`01-doc-hieu.html`)

> ⚠️ **Sửa:** Tăng kho lên 15 bài (từ 10). Bổ sung 2 dạng format câu hỏi còn thiếu.

**Kho bài `data/bai-doc.js` – ~15 bài đọc:**

```js
const BAI_DOC = [
  {
    id: "bd001",
    tieuDe: "Học Nghề",
    noiDung: `Hè năm ấy, Va-li-a theo bố mẹ đi xem xiếc...`,
    tracNghiem: [
      {
        cau: "Va-li-a theo bố mẹ đi xem xiếc vào mùa nào?",
        dang: "chon_1",   // ← A/B/C/D thông thường
        luaChon: ["Mùa xuân", "Mùa hè", "Mùa thu", "Mùa đông"],
        dapAn: 1
      },
      // ...
    ],
    tuLuan: [
      {
        cau: "Từ nhân vật Va-li-a, em rút ra được bài học gì?",
        giaiBaiMau: "Muốn đạt được ước mơ, cần phải kiên trì, chịu khó học từ những việc nhỏ nhất."
      }
    ]
  },
];
```

**Danh sách bài đọc đề xuất (~15 bài):**

| ID | Tên bài | Thể loại |
|---|---|---|
| bd001 | Học Nghề | Truyện ngắn |
| bd002 | Cứu hộ trên biển | Truyện ngắn |
| bd003 | Khỉ con biết vâng lời | Truyện ngụ ngôn |
| bd004 | Mạo hiểm (Hai hạt giống) | Truyện ngụ ngôn |
| bd005 | Con gấu đã nói gì với anh | Truyện ngụ ngôn |
| bd006 | Bài học của gà con | Truyện loài vật |
| bd007 | Chuyện của loài kiến | Truyện dân gian |
| bd008 | Chuyện trong vườn | Truyện loài vật |
| bd009 | Cảnh làng Dạ | Văn miêu tả |
| bd010 | Chú dế sau lò sưởi | Truyện ngắn |
| bd011 | Cuộc chạy đua trong rừng | Truyện ngụ ngôn |
| bd012 | Sư tử và chuột nhắt | Truyện ngụ ngôn |
| bd013 | Hoa tặng mẹ | Truyện ngắn |
| bd014 | Nhớ lại buổi đầu đi học | Hồi ký |
| bd015 | Ba điều ước | Truyện cổ |

**3 dạng format câu hỏi trắc nghiệm (dựa trên đề thật):**

```js
// Dạng 1: Chọn 1 trong A/B/C/D (phổ biến nhất)
{ dang: "chon_1", luaChon: ["A...", "B...", "C...", "D..."], dapAn: 2 }

// Dạng 2: Nối cột (cột A – cột B) – xuất hiện ở một số đề
// VD: Đề 11 "Cuộc chạy đua trong rừng" – nối tên con vật với hoạt động
{ dang: "noi_cot",
  cotA: ["Thỏ Trắng, Thỏ Xám", "Ngựa Con"],
  cotB: ["thận trọng ngắm nghía đối thủ", "ung dung bước vào vạch xuất phát", "bay đi bay lại giữ trật tự"],
  dapAn: [[0,0],[1,1]]
}

// Dạng 3: Sắp xếp thứ tự – xuất hiện ít hơn
// VD: "Hãy sắp xếp các ý sau đây để được thứ tự công việc đàn kiến đã làm"
{ dang: "sap_xep",
  cac_y: ["Tha hạt cây về để dành", "Tập hợp thành đàn", "Chung sức đào hang"],
  dapAn: [1, 2, 0]
}
```

**Giao diện:**
1. Hiện bài đọc (scrollable nếu dài)
2. Trả lời trắc nghiệm (render đúng dạng) → chấm tự động
3. Viết tự luận → Gemini chấm

**Prompt Gemini cho tự luận:**
```
Bài đọc: [tên bài]
Câu hỏi: [câu hỏi tự luận]
Gợi ý đáp án: [giaiBaiMau]

Bé lớp 3 viết: [đáp án của bé]

Nhận xét ngắn gọn (3-4 câu):
- Bé trả lời đúng ý chính chưa?
- Câu văn có rõ ràng không?
- Có thể bổ sung gì thêm?
Dùng ngôn ngữ thân thiện, động viên.
```

---

### Module 2 – Phân Loại Từ (`02-phan-loai-tu.html`)

> ⚠️ **Sửa lớn:** Plan cũ chỉ có 3 nhóm phân loại cơ bản. Đề thật có thêm:
> - Sub-nhóm "tính cách / hình dáng / tính chất" (3 cột bảng)
> - Dạng "gạch dưới từ không thuộc nhóm"
> - Dạng multiple choice "dòng nào ghi đúng các từ chỉ đặc điểm?"
> - Tìm từ chỉ hoạt động/trạng thái trực tiếp trong câu

**Tab con:**

#### 2A – Kéo Thả Phân Nhóm (Drag & Drop)

**Kho từ `data/tu-vung.js` – các nhóm phân loại:**

```js
const BAI_PHAN_LOAI = [
  // Nhóm 2 cột – dạng cơ bản
  {
    id: "pl001",
    dang: "2_nhom",
    tuNgu: ["nắng", "lạnh", "gió", "nóng", "mưa", "mát rượi"],
    nhom: [
      { ten: "Từ chỉ hiện tượng tự nhiên", dapAn: ["nắng", "gió", "mưa"] },
      { ten: "Từ chỉ đặc điểm",            dapAn: ["lạnh", "nóng", "mát rượi"] }
    ]
  },

  // Nhóm 3 cột – từ đặc điểm theo loại (từ đề 7 thực tế)
  {
    id: "pl002",
    dang: "3_nhom",
    tuNgu: ["cao lớn", "mềm mại", "hiền lành", "độc ác", "dẻo dai", "bụ bẫm", "vị tha", "vuông vắn"],
    nhom: [
      { ten: "Từ chỉ đặc điểm tính cách",  dapAn: ["hiền lành", "độc ác", "vị tha"] },
      { ten: "Từ chỉ đặc điểm hình dáng",  dapAn: ["cao lớn", "bụ bẫm", "vuông vắn"] },
      { ten: "Từ chỉ đặc điểm tính chất",  dapAn: ["mềm mại", "dẻo dai"] }
    ]
  },

  // Nhóm hoạt động + trạng thái tách biệt (từ đề 6 thực tế)
  {
    id: "pl003",
    dang: "2_nhom",
    tuNgu: ["đậu", "bỏ đi", "liền nhảy", "sợ hãi", "kêu cứu", "chới với"],
    nhom: [
      { ten: "Từ chỉ hoạt động", dapAn: ["đậu", "bỏ đi", "liền nhảy", "kêu cứu"] },
      { ten: "Từ chỉ trạng thái", dapAn: ["sợ hãi", "chới với"] }
    ]
  },
];
```

#### 2B – Gạch Dưới Từ Không Thuộc Nhóm

> ⚠️ **Bổ sung mới:** Dạng này xuất hiện trong đề thật (Đề 6 – Đàn kiến con ngoan ngoãn).

Cho danh sách từ có 1 từ "lạc nhóm" → bé nhấn vào từ sai → kiểm tra.

```js
const BAI_GAI_TU = [
  {
    de: "Những từ chỉ sự vật ở làng quê:",
    tuNgu: ["cây đa", "bến nước", "thân yêu", "dòng sông", "con đò", "mái đình"],
    // "thân yêu" là từ lạc (chỉ tình cảm, không phải sự vật)
    sai: "thân yêu",
    giaiThich: '"thân yêu" là từ chỉ tình cảm, không phải từ chỉ sự vật làng quê.'
  },
];
```

#### 2C – Trắc Nghiệm "Dòng Nào Đúng?"

> ⚠️ **Bổ sung mới:** Dạng này xuất hiện trong đề thật (Đề 2 – Hoa tặng mẹ).

Cho 3 dòng danh sách từ → bé chọn dòng đúng hoàn toàn.

```js
const BAI_TRAC_NGHIEM_TU = [
  {
    cau: "Dòng nào dưới đây ghi đúng các từ chỉ đặc điểm?",
    luaChon: [
      "Xanh mát, thông minh, rực rỡ, vui đùa.",    // SAI: vui đùa là hoạt động
      "rực rỡ, thông minh, lễ phép, chạy nhảy.",   // SAI: chạy nhảy là hoạt động
      "Xanh mát, rực rỡ, thông minh, hiền lành."   // ĐÚNG
    ],
    dapAn: 2,
    giaiThich: '"vui đùa" và "chạy nhảy" là từ chỉ hoạt động, không phải đặc điểm.'
  },
];
```

#### 2D – Tìm Từ Trong Câu Cho Sẵn

Cho 1 câu → bé gõ hoặc chọn các từ chỉ sự vật / hoạt động / đặc điểm trong câu đó.

**Ví dụ:** "Sau này, nhạc sĩ Mô-da thường nhắc đến chú dế với tấm lòng biết ơn."  
→ Từ chỉ hoạt động: `nhắc`  
→ Từ chỉ đặc điểm: `biết ơn`

**AI tham gia:** Chỉ khi bé bấm "Giải thích tại sao sai".

---

### Module 3 – Từ Đồng Nghĩa & Trái Nghĩa (`03-dong-nghia.html`)

> ⚠️ **Sửa lớn:** Plan cũ chỉ có dạng gõ tự do và nối cột cơ bản. Đề thật có thêm 3 dạng nữa.

**Tab con:**

#### 3A – Tìm Từ Đồng Nghĩa (gõ tự do)

Cho từ gốc → bé gõ 1-2 từ đồng nghĩa → Gemini xác nhận.

**Prompt Gemini:**
```
Từ gốc: "xinh đẹp"
Bé lớp 3 điền từ đồng nghĩa: "xinh xắn"
Từ "xinh xắn" có phải từ đồng nghĩa với "xinh đẹp" không?
Trả lời "Đúng rồi!" hoặc "Chưa đúng, gợi ý: ..." (1 câu thôi).
```

#### 3B – Tìm Từ Trái Nghĩa (gõ tự do)

Tương tự 3A nhưng tìm từ trái nghĩa.

**Kho từ mẫu:**

| Từ gốc | Đồng nghĩa | Trái nghĩa |
|---|---|---|
| xinh đẹp | xinh xắn, dễ thương, duyên dáng | xấu xí |
| dũng cảm | can đảm, anh hùng, gan dạ | hèn nhát, nhút nhát |
| chăm chỉ | cần cù, chịu khó | lười biếng |
| nhanh nhẹn | lanh lẹ, hoạt bát | chậm chạp |
| biết ơn | nhớ ơn, tri ân | vong ơn, bội ơn, vô ơn |
| xấu hổ | hổ thẹn, mắc cỡ | tự hào, hiên ngang |
| trung thực | thành thật, thẳng thắn, ngay thẳng | gian dối, dối trá |
| cảm động | xúc động | thờ ơ, lạnh lùng |
| tuyên dương | khen ngợi, biểu dương | phê bình, chỉ trích |

#### 3C – Nối Từ (Drag & Drop)

Cột trái (từ gốc) → kéo nối sang cột phải (từ đồng / trái nghĩa).

#### 3D – Thay Thế Từ In Đậm Trong Câu

> ⚠️ **Bổ sung mới:** Dạng trắc nghiệm "chọn từ có nghĩa giống từ in đậm" xuất hiện trong nhiều đề thật.

Cho câu có từ in đậm → chọn từ thay thế nghĩa tương đương.

```js
const BAI_THAY_THE = [
  {
    cau: 'Hàng trăm bông hoa giấy nở **đỏ rực** cả một góc vườn.',
    luaChon: ["đỏ lên", "đỏ chói", "đỏ cả"],
    dapAn: 1,  // "đỏ chói"
    giaiThich: '"đỏ chói" mang nghĩa cường độ màu đỏ mạnh, gần nghĩa nhất với "đỏ rực".'
  },
];
```

#### 3E – Tìm Cặp Từ Đồng Nghĩa Theo Vùng Miền

> ⚠️ **Bổ sung mới:** Dạng bài đặc thù về từ địa phương, xuất hiện trong đề thật (Đề 7 – câu về vùng miền Nam/Bắc).

Cho đoạn văn → bé tìm và viết ra các cặp từ cùng nghĩa.

**Ví dụ từ đề thật:**
```
Bình theo bố mẹ vào Đồng Tháp. Bình nhanh chóng biết được vịt xiêm là con ngan,
củ mì là củ sắn, kẹo đậu phộng là kẹo lạc, muối mè là muối vừng...
```
→ Bé liệt kê: vịt xiêm = ngan; củ mì = sắn; đậu phộng = lạc; mè = vừng

#### 3F – Tìm Ca Dao / Tục Ngữ Có Cặp Từ Trái Nghĩa

> ⚠️ **Bổ sung mới:** Xuất hiện trong đề thật (Đề 5, Đề cuối HK2).

Cho chủ đề → bé gõ một câu ca dao/tục ngữ có cặp từ trái nghĩa → Gemini kiểm tra.

**Kho gợi ý:**
- "Gần mực thì đen, gần đèn thì sáng." (đen ↔ sáng)
- "Lời nói chẳng mất tiền mua, lựa lời mà nói cho vừa lòng nhau." (lắm ↔ ít / không trực tiếp)
- "Thương người như thể thương thân." (so sánh chứ không hẳn trái nghĩa)

**Prompt Gemini:**
```
Yêu cầu: Tìm một câu ca dao hoặc tục ngữ có chứa cặp từ trái nghĩa.
Bé lớp 3 viết: [câu của bé]
Kiểm tra: Câu có phải ca dao/tục ngữ không? Có cặp từ trái nghĩa không? Trả lời 1-2 câu thân thiện.
```

---

### Module 4 – Dấu Câu (`04-dau-cau.html`)

> ⚠️ **Sửa lớn:** Plan cũ chú trọng dấu gạch ngang nhưng **dấu hai chấm xuất hiện nhiều nhất** trong đề thật. Bổ sung dấu ngoặc kép và dạng điền hỗn hợp nhiều dấu.

**Tab con:**

#### 4A – Nhận Biết Tác Dụng Dấu Hai Chấm `:` ← ƯU TIÊN CAO

> Xuất hiện trong Đề 5, 8, 9, 10, 11 và nhiều đề khác.

Cho câu/đoạn văn → bé chọn tác dụng của dấu hai chấm.

```js
const BAI_HAI_CHAM = [
  {
    doan: `Dế kéo đàn hay đến nỗi cậu bé không nén nổi phải kêu lên:\n– Chao ôi, hay quá!`,
    cauHoi: "Dấu hai chấm trong câu trên có tác dụng gì?",
    luaChon: [
      "Báo hiệu lời nói trực tiếp của nhân vật",
      "Báo hiệu phần liệt kê",
      "Báo hiệu phần giải thích",
      "Báo hiệu câu hỏi"
    ],
    dapAn: 0,
    giaiThich: "Dấu hai chấm đứng trước lời nói của nhân vật → báo hiệu lời nói trực tiếp."
  },
  {
    doan: `Cảnh vật xung quanh đều thay đổi, vì chính lòng tôi đang có sự thay đổi lớn: hôm nay tôi đi học.`,
    dapAn: 2, // giải thích
    giaiThich: "Dấu hai chấm ở đây dẫn vào phần giải thích lý do thay đổi."
  },
  {
    doan: `Vườn nhà em trồng rất nhiều loại cây ăn quả như: cây táo, cây mít, cây chôm chôm và cây bưởi.`,
    dapAn: 1, // liệt kê
    giaiThich: "Dấu hai chấm ở đây dẫn vào danh sách liệt kê các loại cây."
  },
];
```

#### 4B – Nhận Biết Tác Dụng Dấu Gạch Ngang `–`

Cho đoạn văn → chọn tác dụng (lời thoại / liệt kê / giải thích).

```js
const BAI_GACH_NGANG = [
  {
    doan: `Ông Giám đốc nhìn em cười:\n– Thế cháu biết phi ngựa chưa?`,
    dapAn: 0, // đánh dấu lời nói trực tiếp
  },
];
```

#### 4C – Nhận Biết Tác Dụng Dấu Ngoặc Kép `""`

> ⚠️ **Bổ sung mới:** Xuất hiện trong Đề 3 (Khỉ con) và nhiều đề khác.

Cho câu → bé chọn tác dụng của dấu ngoặc kép.

```js
const BAI_NGOAC_KEP = [
  {
    doan: `Khỉ bèn tự nhủ: "Mình không nên ham chơi, về nhà kẻo mẹ mong".`,
    luaChon: [
      "Đánh dấu lời nói, suy nghĩ trực tiếp của nhân vật",
      "Đánh dấu phần liệt kê",
      "Báo hiệu câu hỏi",
      "Báo hiệu phần giải thích"
    ],
    dapAn: 0,
    giaiThich: "Dấu ngoặc kép bao quanh suy nghĩ nội tâm của Khỉ con."
  },
  {
    doan: `Va-li-a thích nhất tiết mục "Cô gái phi ngựa đánh đàn".`,
    dapAn: 0, // tên tác phẩm / tiết mục
    giaiThich: "Dấu ngoặc kép bao quanh tên tiết mục biểu diễn."
  },
];
```

#### 4D – Điền Dấu Phẩy Vào Chỗ Trống

Cho câu còn thiếu dấu phẩy → bé bấm đúng vị trí cần điền.

**Ví dụ từ đề thật:**
- "Buổi sáng sương muối phủ trắng cành cây bãi cỏ." → `sương muối phủ trắng cành cây[,] bãi cỏ`
- "Chúng em đã học bài làm bài và trực nhật lớp sạch sẽ." → `học bài[,] làm bài và...`
- "Vì thương dân Chử Đồng Tử và Công chúa đi khắp nơi dạy dân cách trồng lúa nuôi tằm dệt vải."

#### 4E – Điền Hỗn Hợp Dấu Câu Vào Đoạn Hội Thoại

> ⚠️ **Bổ sung mới:** Dạng phức hợp nhất – bé phải chọn đúng nhiều dấu khác nhau trong cùng đoạn văn.
> Xuất hiện trong Đề 8 (Chuyện trong vườn) và Đề 10.

Cho đoạn văn với các ô trống `□` → bé chọn dấu phù hợp cho từng ô.

**Ví dụ từ đề thật (Đề 10):**
```
Tuấn lên bảy tuổi, em rất hay hỏi [.] Một lần, em hỏi bố:
[–] Bố ơi, con nghe nói trái đất quay xung quanh mặt trời. Có đúng thế không, bố?
[–] Đúng đấy con ạ! Bố Tuấn đáp [.]
```

**Giao diện:** Bé click/tap vào ô trống → dropdown chọn: `.` / `?` / `!` / `,` / `:` / `–` / `""`

#### 4F – Viết Câu Dùng Đúng Dấu

Cho tình huống → bé viết 1 câu dùng đúng dấu câu được yêu cầu → Gemini kiểm tra.

---

### Module 5 – Biện Pháp So Sánh (`05-so-sanh.html`)

*(Giữ nguyên plan cũ – đã đầy đủ)*

**Tab con:**

#### 5A – Nhận Biết Câu Có Hình Ảnh So Sánh (trắc nghiệm)
#### 5B – Xác Định Từ So Sánh (gõ từ so sánh trong câu)
#### 5C – Điền Từ So Sánh (điền vào chỗ trống)
#### 5D – Gạch Dưới Hai Sự Vật Được So Sánh

> ⚠️ **Bổ sung mới:** Dạng "gạch dưới 2 sự vật" xuất hiện rõ trong Đề cuối – "Trẻ em như búp trên cành".

#### 5E – Đặt Câu Có Hình Ảnh So Sánh (AI chấm)

**Chủ đề gợi ý** (từ đề thật):
- Tả cánh đồng, dòng sông, bầu trời
- Tả em bé, ánh trăng
- Đặt câu về chú sư tử / chú dế / cây hoa

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

*(Giữ nguyên plan cũ – đã đầy đủ)*

#### 6A – Viết Đoạn Văn Miêu Tả (3-5 câu)

**Chủ đề** (10 chủ đề):

| STT | Chủ đề | Gợi ý |
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
| 10 | Địa điểm du lịch em đã đến | tả cảnh, nêu cảm nhận (từ Đề 4 – Đà Lạt) |

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

#### 6B – Hoàn Thiện Đoạn Văn (điền câu vào chỗ trống)

---

### Module 7 – Kiểu Câu & Mẫu Câu (`07-kieu-cau.html`) ← MODULE MỚI HOÀN TOÀN

> ⚠️ **Bổ sung hoàn toàn.** Kiểu câu xuất hiện trong **100% đề thi** nhưng không có trong plan cũ.
> Đây là module quan trọng thứ 2 sau đọc hiểu.

**Tab con:**

#### 7A – Nhận Biết Kiểu Câu (câu kể / hỏi / khiến / cảm)

Cho 1 câu → bé chọn kiểu câu đúng.

```js
const BAI_KIEU_CAU = [
  {
    cau: "Em hãy thử tưởng tượng nhé.",
    dapAn: "khien",
    giaiThich: "Câu có từ 'hãy' – đây là từ cầu khiến."
  },
  {
    cau: "Mặt trời chiếu những luồng sáng qua kẽ lá.",
    dapAn: "ke",
    giaiThich: "Câu kể sự việc, kết thúc bằng dấu chấm."
  },
  {
    cau: "Chao ôi, hay quá!",
    dapAn: "cam",
    giaiThich: "Câu có từ 'chao ôi', kết thúc bằng dấu chấm than – câu cảm."
  },
];
```

#### 7B – Nhận Biết Mẫu Câu (Ai làm gì? / Ai là gì? / Ai thế nào?)

Cho câu → bé chọn đúng mẫu câu.

```js
const BAI_MAU_CAU = [
  { cau: "Du khách cưỡi ngựa vòng quanh hồ Xuân Hương.",  dapAn: "ai_lam_gi" },
  { cau: "Rít là một chàng thợ rèn.",                      dapAn: "ai_la_gi" },
  { cau: "Những bông hoa tỏa ra mùi hương ngọt ngào.",     dapAn: "ai_the_nao" },
];
```

#### 7C – Chuyển Đổi Kiểu Câu (AI chấm)

Cho câu kể → bé chuyển thành câu hỏi hoặc câu khiến.

**Ví dụ từ đề thật:**
- "Hoa đang làm bài tập." → câu hỏi? / câu khiến?
- "Mấy cậu học trò mới bỡ ngỡ đứng nép bên người thân." → câu hỏi?
- "Em mượn bút của bạn." → câu khiến?

**Prompt Gemini:**
```
Câu gốc (câu kể): "[câu gốc]"
Yêu cầu: Chuyển thành câu [hỏi / khiến].
Bé lớp 3 viết: "[câu của bé]"

Kiểm tra:
1. Câu bé viết có đúng kiểu câu yêu cầu không?
2. Nội dung có giữ nguyên ý nghĩa gốc không?
3. Câu có tự nhiên, đúng ngữ pháp không?
Nhận xét 1-2 câu thân thiện.
```

#### 7D – Xác Định Bộ Phận Câu (Khi nào? / Ở đâu? / Để làm gì? / Bằng gì? / Như thế nào?)

Cho câu → bé gạch chân / chọn bộ phận trả lời câu hỏi được yêu cầu.

**Ví dụ từ đề thật:**
- "Con phải đến bác thợ rèn **để xem lại móng**." → Để làm gì?
- "Chiếc đèn ông sao được làm **bằng nan tre dán giấy bóng kính**." → Bằng gì?
- "Ngày xưa, ở một gia đình kia có ba anh em trai." → Khi nào? (`Ngày xưa`)
- "Những bông hoa đỏ tươi khoe sắc **trên cành**." → Ở đâu?

**Giao diện:** Bé tap/click vào từ/cụm từ muốn chọn → highlight → Kiểm tra.

#### 7E – Đặt Câu Khiến / Câu Cảm

Cho tình huống → bé viết câu đúng thể loại → Gemini kiểm tra.

**Ví dụ tình huống từ đề thật:**
- "Đặt câu khiến để nói với cô giáo khi em muốn cô giúp một việc gì đó."
- "Đặt câu cảm để khen tiết mục kể chuyện của bạn."
- "Đặt câu cảm nói về cây hoa giấy."

---

### Module 8 – Chính Tả (`08-chinh-ta.html`) ← MODULE MỚI HOÀN TOÀN

> ⚠️ **Bổ sung mới.** Xuất hiện trong đề thật (Đề 3 – điền d/gi/r) dù không thường xuyên như các module khác.

**Tab con:**

#### 8A – Điền Phụ Âm Đầu Dễ Nhầm

Điền `d / gi / r` vào chỗ trống cho thích hợp.

```js
const BAI_DIEN_AM = [
  {
    cau: "Đồng [__]uộng cho bông lúa. Chim tặng lời [__]eo ca. Anh bộ đội đến nhà cho em lòng [__]ũng cảm.",
    chotTrong: [
      { vi_tri: 0, dapAn: "r",  goi_y: "ruộng" },
      { vi_tri: 1, dapAn: "gi", goi_y: "gieo" },
      { vi_tri: 2, dapAn: "d",  goi_y: "dũng" },
    ]
  },
];
```

**Các cặp phụ âm thường gặp trong đề:**
- `d / gi / r` (phổ biến nhất)
- `c / k / qu`
- `ng / ngh`
- `g / gh`

#### 8B – Phân Biệt Dấu Thanh

Điền dấu thanh (hỏi/ngã) vào từ.

---

## 6. Trang `thi-thu.html` – Đề Thi Thử Tổng Hợp

> ⚠️ **Sửa:** Bổ sung phần Kiểu câu & Chính tả vào cơ cấu đề.

**Cấu trúc đề (mô phỏng đề thật HK2):**

| Phần | Nội dung | Điểm | Kiểm tra |
|---|---|---|---|
| **Đọc hiểu TN** | 1 bài đọc + 4-5 câu trắc nghiệm | 2 đ | Tự động |
| **Đọc hiểu TL** | 1-2 câu tự luận về bài đọc | 1-2 đ | Gemini |
| **Luyện từ** | Phân loại từ, tìm đồng nghĩa | 1 đ | Tự động + Gemini |
| **Dấu câu** | Nhận biết tác dụng (hai chấm / gạch ngang / ngoặc kép) | 0,5-1 đ | Tự động |
| **Kiểu câu** | Nhận biết + chuyển đổi câu | 0,5-1 đ | Tự động + Gemini |
| **So sánh** | Nhận biết + đặt câu so sánh | 0,5-1 đ | Tự động + Gemini |
| **Tập làm văn** | Viết đoạn văn 3-5 câu | 1-2 đ | Gemini |

---

## 7. Gamification (dùng chung với Toán)

*(Giữ nguyên plan cũ)*

| Tính năng | Cách hoạt động |
|---|---|
| ⭐ Sao | 3 sao: đúng ngay; 2 sao: sai 1 lần; 1 sao: sai nhiều |
| 🏆 Huy hiệu | Hoàn thành 100% 1 module → huy hiệu, lưu localStorage |
| 📊 Tiến độ | Trang chủ TV: vòng tròn % từng module |
| 🔥 Streak | Học ≥ 1 bài/ngày → đếm chuỗi, hiện trên header |
| 🎉 Confetti | Khi 3 sao hoặc mở huy hiệu |

---

## 8. Thiết kế UI

> ⚠️ **Sửa:** Đồng bộ với module Toán – bỏ nền xanh lá `#F0FDF4`, dùng gradient nhất quán.
> Phân biệt Tiếng Việt với Toán bằng màu **primary** khác, không phải màu nền.

```
Nền trang:   linear-gradient(135deg, #ffffff 0%, #e0f2fe 100%)
             (giống Toán – trắng → sky xanh nhạt)
Card:        #FFFFFF
Primary TV:  #A78BFA   (violet-400 – phân biệt với Toán sky-400)
Đúng:        #22C55E   (green-500)
Sai:         #EF4444   (red-500)
Gợi ý AI:   #818CF8   (indigo-400)
Text chính: #1E293B   (slate-800)
```

**Tailwind class tương ứng:**
```html
<body style="background: linear-gradient(135deg,#fff 0%,#e0f2fe 100%)">

<!-- Nút chính Tiếng Việt -->
<button class="bg-violet-400 hover:bg-violet-500 text-white font-bold rounded-xl px-6 py-3">
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

## 9. Tổng Hợp Các Thay Đổi So Với v1

| # | Vị trí | Vấn đề cũ | Đã sửa |
|---|---|---|---|
| 1 | `ai.js` | `gemini-2.0-flash` | `gemini-2.5-flash` |
| 2 | UI màu | Nền xanh lá `#F0FDF4` riêng lẻ | Gradient trắng→sky (đồng bộ Toán), dùng violet-400 làm màu primary riêng |
| 3 | Module 2 | Chỉ có 3 nhóm cơ bản, 1 dạng kéo thả | Thêm sub-nhóm 3 cột (tính cách/hình dáng/tính chất), dạng gạch từ sai, trắc nghiệm "dòng nào đúng", tìm từ trong câu cho sẵn |
| 4 | Module 3 | Gõ tự do + nối cột | Thêm: thay thế từ in đậm (trắc nghiệm), từ đồng nghĩa theo vùng miền, ca dao trái nghĩa |
| 5 | Module 4 | Chỉ có dấu gạch ngang là chủ yếu | Bổ sung dấu hai chấm (ưu tiên cao), dấu ngoặc kép, điền dấu phẩy, điền hỗn hợp vào đoạn hội thoại |
| 6 | Cấu trúc file | 6 module | Tăng lên 8 module (thêm 07-kieu-cau, 08-chinh-ta) |
| 7 | **Thiếu hoàn toàn** | Không có module Kiểu câu & Mẫu câu | Thêm Module 7 với 5 tab: nhận biết kiểu câu, mẫu câu, chuyển đổi câu, xác định bộ phận, đặt câu |
| 8 | **Thiếu hoàn toàn** | Không có module Chính tả | Thêm Module 8: điền d/gi/r, c/k, ng/ngh |
| 9 | `data/bai-doc.js` | ~10 bài | Tăng lên ~15 bài, liệt kê đủ tên từ đề thật |
| 10 | Module 1 | Chỉ có format A/B/C/D | Thêm format nối cột và sắp xếp thứ tự |
| 11 | `thi-thu.html` | Không có phần Kiểu câu | Thêm phần Kiểu câu & Mẫu câu vào cơ cấu đề |

---

## 10. Lộ Trình Build Gợi Ý

| Giai đoạn | Việc làm | File tạo |
|---|---|---|
| **Tuần 1** | Khung trang chủ TV, header, chuẩn bị 15 bài đọc | `index.html`, `data/bai-doc.js` |
| **Tuần 2** | Module 1: Đọc hiểu (3 dạng TN + Gemini chấm TL) | `modules/01-doc-hieu.html` |
| **Tuần 3** | Module 2-3: Phân loại từ (4 dạng), Đồng nghĩa/Trái nghĩa (6 dạng) | `modules/02`, `03` |
| **Tuần 4** | Module 4-5: Dấu câu (6 dạng), Biện pháp so sánh | `modules/04`, `05` |
| **Tuần 5** | Module 7: Kiểu câu & Mẫu câu (5 dạng) – ưu tiên cao | `modules/07` |
| **Tuần 6** | Module 6: Tập làm văn + Module 8: Chính tả | `modules/06`, `08` |
| **Tuần 7** | Flashcard lý thuyết, chế độ thi thử, gamification | `on-li-thuyet.html`, `thi-thu.html` |

---

## 11. Ghi Chú Khi Viết Prompt Gemini Cho Tiếng Việt

- Luôn chỉ định **"học sinh lớp 3"** để AI dùng ngôn ngữ phù hợp
- Yêu cầu **không viết lại bài giúp bé** – chỉ nhận xét và gợi ý
- Giới hạn **3-5 câu** để tránh AI viết dài, bé không đọc hết
- Yêu cầu **khen điểm tốt trước**, sau đó mới góp ý cải thiện
- Với bài phân loại từ: cho AI xác nhận **có/không** kèm 1 ví dụ thêm
- Với câu so sánh: yêu cầu AI kiểm tra **cả 3 yếu tố**: có từ so sánh, hình ảnh phù hợp, đúng ngữ pháp
- Với kiểu câu: yêu cầu AI kiểm tra **cả nội dung lẫn hình thức** (dấu câu, từ cầu khiến...)
- Với chuyển đổi câu: nhắc AI kiểm tra **bé có giữ nguyên ý nghĩa gốc không**
