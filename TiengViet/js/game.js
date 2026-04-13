const SKILL_NAMES = {
    'nghia_tu': 'Thám tử từ ngữ',
    'y_chinh': 'Ghép ý chính',
    'suy_luan': 'Bé đoán tiếp',
    'cam_xuc': 'Cảm xúc nhân vật'
};

const SKILL_COLORS = {
    'nghia_tu': 'bg-blue-100 text-blue-700 border-blue-300',
    'y_chinh': 'bg-green-100 text-green-700 border-green-300',
    'suy_luan': 'bg-purple-100 text-purple-700 border-purple-300',
    'cam_xuc': 'bg-yellow-100 text-yellow-700 border-yellow-300'
};

let questionsPool = [];
let todaysSession = [];
let currentIndex = 0;
let questionStartTime = 0;
let todayDateStr = new Date().toISOString().split('T')[0];
let sessionResults = [];

// Khởi tạo
document.addEventListener("DOMContentLoaded", () => {
    // Không dùng fetch nữa, lấy trực tiếp từ mảng `questionsData` ở file data/questions.js được nhúng vào HTML
    if (typeof questionsData === 'undefined') {
        document.getElementById('loading').innerText = "Lỗi khi tải dữ liệu câu hỏi. File questions.js chưa được load.";
        return;
    }
    questionsPool = questionsData;

    // 1. Phạt điểm nếu bỏ quá 3 ngày, bắt đầu phiên mới
    MasteryManager.processDecay(todayDateStr);

    // 2. Chốt số lượng cấu hỏi mỗi kỹ năng
    const allocations = MasteryManager.getAllocation(); // ex: { nghia_tu: 1, y_chinh: 2...}

    // 3. Lấy ra bộ 4 câu hỏi phù hợp nhất
    const data = StorageManager.getData();
    let selectedQuestions = [];

    // Lặp qua yêu cầu sinh để chọn ngẫu nhiên các câu
    Object.keys(allocations).forEach(skill => {
        let countNeed = allocations[skill];
        if (countNeed > 0) {
            let layerTarget = MasteryManager.getLayer(data.mastery[skill] || 0);

            // Tìm những câu phù hợp kỹ năng và bằng tầng yêu cầu
            let available = questionsPool.filter(q => q.ky_nang === skill && q.tang === layerTarget);
            
            // Fallback: nếu lỡ thiếu câu hỏi ở tầng đó do tạo chưa đủ -> lấy tầng gần nhất
            if (available.length < countNeed) {
                available = questionsPool.filter(q => q.ky_nang === skill);
            }

            // Shuffle trộn ngẫu nhiên available
            available.sort(() => 0.5 - Math.random());
            selectedQuestions.push(...available.slice(0, countNeed));
        }
    });

    if (selectedQuestions.length === 0) {
        document.getElementById('loading').innerText = "Hệ thống chưa có câu hỏi nào để hiển thị.";
        return;
    }

    // Trộn ngẫu nhiên thứ tự của 4 câu
    todaysSession = selectedQuestions.sort(() => 0.5 - Math.random());

    // Ẩn loading, hiện game
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');

    loadQuestion();
});

function loadQuestion() {
    if (currentIndex >= todaysSession.length) {
        endSession();
        return;
    }

    const q = todaysSession[currentIndex];
    
    // UI resets
    document.getElementById('current-q-index').innerText = (currentIndex + 1);

    // Hiển thị lớp và màu sắc theo lớp
    const classBadge = document.getElementById('class-badge');
    classBadge.innerText = `Lớp ${q.lop}`;
    // Áp dụng màu nền dựa trên lớp (Tailwind utility classes)
    const classColors = {
      3: 'bg-blue-100 text-blue-700 border-blue-300',
      4: 'bg-purple-100 text-purple-700 border-purple-300',
      5: 'bg-red-100 text-red-700 border-red-300'
    };
    const colorClass = classColors[q.lop] || 'bg-gray-100 text-gray-700 border-gray-300';
    classBadge.className = `px-4 py-1 rounded-full font-semibold border-2 ${colorClass}`;

    // Hiên thi ky nang
    const badge = document.getElementById('skill-badge');
    badge.innerText = SKILL_NAMES[q.ky_nang];
    badge.className = `px-4 py-1 rounded-full font-semibold border-2 ${SKILL_COLORS[q.ky_nang]}`;

    document.getElementById('doan-van').innerText = q.doan_van;
    document.getElementById('cau-hoi').innerText = q.cau_hoi;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    // Tạo 4 nút bấm lựa chọn
    ['A', 'B', 'C', 'D'].forEach(key => {
        if (!q.lua_chon[key]) return;
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 text-gray-700 text-lg font-medium transition-all";
        btn.innerText = `${key}. ${q.lua_chon[key]}`;
        btn.onclick = () => submitAnswer(key, btn);
        optionsContainer.appendChild(btn);
    });

    // Ẩn khu vực giải thích
    document.getElementById('explanation-box').classList.add('hidden');

    // Bắt đầu đếm giờ
    questionStartTime = Date.now();
}

function submitAnswer(chosenKey, btnElement) {
    // Disable all options
    const btns = document.getElementById('options-container').querySelectorAll('button');
    btns.forEach(b => {
        b.onclick = null;
        b.classList.remove('hover:border-blue-400', 'hover:bg-blue-50');
    });

    const timeTakenSec = Math.floor((Date.now() - questionStartTime) / 1000);
    const q = todaysSession[currentIndex];
    const isCorrect = (chosenKey === q.dap_an);

    // Style the selected / correct buttons
    if (isCorrect) {
        btnElement.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
    } else {
        btnElement.classList.add('bg-red-100', 'border-red-500', 'text-red-800');
        // Highlight real correct
        const correctIndex = ['A','B','C','D'].indexOf(q.dap_an);
        if (correctIndex >= 0) {
            btns[correctIndex].classList.add('bg-green-100', 'border-green-500', 'text-green-800');
        }
    }

    // Process Points and Store
    MasteryManager.processGameResult(q.ky_nang, isCorrect, timeTakenSec);
    sessionResults.push({
        ky_nang: q.ky_nang,
        dung: isCorrect,
        thoi_gian: timeTakenSec
    });

    // Show explanation
    const expBox = document.getElementById('explanation-box');
    const expIcon = document.getElementById('explanation-icon');
    const expTitle = document.getElementById('explanation-title');
    const expText = document.getElementById('explanation-text');
    
    expBox.classList.remove('hidden');
    expBox.classList.remove('border-red-300', 'bg-red-50', 'border-green-300', 'bg-green-50');

    if (isCorrect) {
        expBox.classList.add('border-green-300', 'bg-green-50');
        expIcon.innerText = "✅";
        expTitle.innerText = "Chính xác!";
        expTitle.classList.add('text-green-700');
        expTitle.classList.remove('text-red-700');
    } else {
        expBox.classList.add('border-red-300', 'bg-red-50');
        expIcon.innerText = "❌";
        expTitle.innerText = "Chưa đúng rồi!";
        expTitle.classList.add('text-red-700');
        expTitle.classList.remove('text-green-700');
    }

    expText.innerText = q.giai_thich;
    
    // Setup next button
    document.getElementById('next-btn').onclick = () => {
        currentIndex++;
        loadQuestion();
    };
}

function endSession() {
    // Lưu lịch sử bài học hôm nay
    StorageManager.addHistoryDay(todayDateStr, sessionResults);
    // Cập nhật chuỗi Streak vì đã học xong
    StorageManager.updateStreak(todayDateStr);

    // Chuyển màn hình
    document.getElementById('game-container').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
}
