const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

// Đọc tham số từ dòng lệnh
// Cú pháp: node generate-content.js <ky_nang> <tang> <lop> <so_luong>
const args = process.argv.slice(2);
if (args.length < 4) {
    console.log("Usage: node generate-content.js <ky_nang> <tang> <lop> <so_luong>");
    console.log("ky_nang bao gồm: nghia_tu, y_chinh, suy_luan, cam_xuc");
    process.exit(1);
}

const kyNang = args[0];
const tang = parseInt(args[1], 10);
const lop = parseInt(args[2], 10);
const soLuong = parseInt(args[3], 10);

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Lỗi: Yêu cầu xuất biến môi trường GEMINI_API_KEY trước khi chạy script.");
    console.error("VD (Windows cmd): set GEMINI_API_KEY=AIzaSy...");
    console.error("VD (Bash/PS): export GEMINI_API_KEY=AIzaSy...");
    process.exit(1);
}

// Bảng độ dài theo quy định CONTEXT.md mục 5.4
let wordLimit = "";
if (tang === 1) wordLimit = "60-80 từ";
else if (tang === 2) wordLimit = "100-120 từ";
else wordLimit = "150+ từ";

const prompText = `
Bạn là một chuyên gia giáo dục tiểu học chuyên về tiếng Việt. 
Hãy tạo ra ${soLuong} câu hỏi trắc nghiệm luyện đọc hiểu cho học sinh lớp ${lop}.
Kỹ năng yêu cầu cần hỏi: "${kyNang}"
Giải thích kỹ năng:
- nghia_tu: Đọc đoạn văn, hỏi nghĩa một từ in đậm dựa vào ngữ cảnh.
- y_chinh: Tìm ý chính, nội dung chủ đạo của đoạn văn.
- suy_luan: Đọc giữa các dòng chữ, suy luận điều sẽ xảy ra hoặc chi tiết bị ẩn.
- cam_xuc: Cảm xúc, ý định thực sự của nhân vật trong bài.

BẮT BUỘC RẤT CHẶT CHẼ CÁC QUY TẮC SAU:
1. Chiều dài đoạn văn giới hạn: ${wordLimit}
2. Từ vựng: Phù hợp học sinh lớp ${lop}, cấu trúc câu đơn giản không quá 15 từ, TRÁNH LUÔN từ Hán Việt khó.
3. Nội dung an toàn: Chỉ lấy bối cảnh Động vật, Thiên nhiên, Cuộc sống hằng ngày (gia đình, trường học), Bạn bè. Không bạo lực, tiêu cực.
4. Output PHẢI là một MẢNG CHỨA CÁC JSON OBJECT, KHÔNG DÙNG MARKDOWN BLOCK CỦA MARKDOWN KHI TRẢ VỀ. Trả về json nguyên gốc.

Một Object JSON mẫu phải cấu trúc như sau:
{
  "id": "random_string_id",
  "ky_nang": "${kyNang}",
  "tang": ${tang},
  "lop": ${lop},
  "doan_van": "Nội dung đoạn văn ở đây...",
  "cau_hoi": "Câu hỏi rành mạch ở đây?",
  "lua_chon": {
    "A": "Vui vẻ",
    "B": "Buồn bã",
    "C": "Sợ hãi",
    "D": "Ngạc nhiên"
  },
  "dap_an": "A",
  "giai_thich": "Giải thích trực tiếp và dễ hiểu lý do vì sao A lại đúng (để hiện sau khi trẻ trả lời)."
}
`;

async function generateQuestions() {
    console.log(`⏳ Đang gọi Gemini API sinh ${soLuong} câu hỏi môn [${kyNang}] tầng [${tang}]...`);
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompText }] }],
                generationConfig: {
                     temperature: 0.8,
                     responseMimeType: "application/json"
                }
            })
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`API Error: ${response.status} - ${err}`);
        }

        const data = await response.json();
        const textData = data.candidates[0].content.parts[0].text;
        
        let newQuestions = JSON.parse(textData);
        if (!Array.isArray(newQuestions)) {
             newQuestions = [newQuestions];
        }

        // Đọc data cũ từ questions.js
        const dataPath = path.join(__dirname, '../data/questions.js');
        let oldData = [];
        if (fs.existsSync(dataPath)) {
             const rawData = fs.readFileSync(dataPath, 'utf8');
             // Bóc "const questionsData = " và ";" ở cuối
             const jsonStr = rawData.replace('const questionsData = ', '').slice(0, -1);
             oldData = JSON.parse(jsonStr);
        }

        // Validate cơ bản
        newQuestions.forEach(q => {
             if (!q.id || !q.ky_nang || !q.tang) {
                 console.warn("⚠️ Có một phần tử sinh ra thiếu field thiết yếu:", q);
             }
        });

        // Thêm data mới
        oldData.push(...newQuestions);

        // Ghi lại dưới dạng js file
        const newRawData = 'const questionsData = ' + JSON.stringify(oldData, null, 2) + ';';
        fs.writeFileSync(dataPath, newRawData, 'utf8');
        console.log(`✅ Thành công! Đã thêm ${newQuestions.length} câu hỏi mới vào data/questions.js`);

    } catch (err) {
        console.error("❌ Lỗi sinh dữ liệu:", err.message);
    }
}

generateQuestions();
