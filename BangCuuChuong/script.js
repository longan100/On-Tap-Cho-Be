// --- State Application ---
const state = {
    mode: 'multiply', // 'multiply' or 'divide'
    currentTable: 2,
    learningProgress: 0, // 0 to 10
    questions: [], // Array of multipliers 1-10 shuffled
    currentQuestionIndex: 0,
    currentAnswer: '',
    expectedAnswer: 0,
    mistakesThisSession: [], // Bổ sung mảng lưu các câu sai
    questionResults: [], // Lưu trạng thái câu đúng đầu tiên hay sai
    // Dữ liệu bảng hoàn thành, lưu vào localStorage
    tableProgress: {
        multiply: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
        divide: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false }
    }
};

// --- Khởi tạo ---
function init() {
    loadData();
    renderTableButtons();
    renderDots();
    startTable(state.currentTable);
}

// --- LocalStorage ---
function loadData() {
    const saved = localStorage.getItem('cuuChuongProgress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.tableProgress = parsed;
        } catch (e) {
            console.error("Lỗi đọc dữ liệu lưu trữ", e);
        }
    }
}

function saveData() {
    localStorage.setItem('cuuChuongProgress', JSON.stringify(state.tableProgress));
}

function resetAllData() {
    Swal.fire({
        title: 'Khôi phục tiến độ?',
        text: "Toàn bộ thành tích học tập bảng cửu chương sẽ bị xóa và làm lại từ đầu!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#94a3b8',
        confirmButtonText: 'Đúng, xóa đi!',
        cancelButtonText: 'Hủy'
    }).then((result) => {
        if (result.isConfirmed) {
            state.tableProgress = {
                multiply: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
                divide: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false }
            };
            saveData();
            state.mode = 'multiply';
            document.getElementById('btn-multiply').classList.add('active');
            document.getElementById('btn-divide').classList.remove('active');
            renderTableButtons();
            startTable(2);
            
            Swal.fire({
                title: 'Đã xóa!',
                text: 'Dữ liệu học tập đã bắt đầu lại từ đầu.',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

// --- Render Giao diện ---
function renderTableButtons() {
    const container = document.getElementById('table-selector');
    container.innerHTML = '';
    
    for (let i = 2; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.className = 'table-btn';
        btn.dataset.num = i;
        btn.innerText = i;
        
        if (i === state.currentTable) {
            btn.classList.add('active');
        }
        
        // Hiện dấu v nếu đã hoàn thành ở chế độ hiện tại
        if (state.tableProgress[state.mode][i]) {
            btn.classList.add('completed');
        }

        btn.onclick = () => {
            startTable(i);
        };
        
        container.appendChild(btn);
    }
}

function renderDots() {
    const container = document.getElementById('progress-dots');
    container.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        if (i < state.learningProgress) {
            // Các câu đã vượt qua
            dot.classList.add('filled');
            if (state.questionResults[i] === 'wrong') {
                dot.classList.add('wrong');
            } else {
                dot.classList.add('correct');
            }
        } else if (i === state.learningProgress) {
            // Câu đang làm hiện tại
            if (state.questionResults[i] === 'wrong') {
                dot.classList.add('filled');
                dot.classList.add('wrong');
            }
        }
        
        container.appendChild(dot);
    }
}

// --- Logic Chuyển Mode / Bảng ---
function setMode(mode) {
    if (state.mode === mode) return;
    state.mode = mode;
    
    document.getElementById('btn-multiply').classList.toggle('active', mode === 'multiply');
    document.getElementById('btn-divide').classList.toggle('active', mode === 'divide');
    
    renderTableButtons();
    startTable(state.currentTable);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startTable(tableNum) {
    state.currentTable = tableNum;
    state.learningProgress = 0;
    state.currentQuestionIndex = 0;
    state.mistakesThisSession = []; // Reset mảng câu sai
    state.questionResults = Array(10).fill('correct'); // Mặc định chấm màu xanh
    
    // Cập nhật UI nút
    document.querySelectorAll('.table-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.num) === tableNum);
    });

    // Tạo bộ 10 câu hỏi ngẫu nhiên từ 1 đến 10
    state.questions = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    renderDots();
    loadQuestion();
}

function loadQuestion() {
    const num2 = state.questions[state.currentQuestionIndex];
    const num1 = state.currentTable;
    
    const qText = document.getElementById('question-text');
    const input = document.getElementById('answer-input');
    
    input.innerText = '';
    state.currentAnswer = '';
    input.className = 'answer-input active';
    
    if (state.mode === 'multiply') {
        qText.innerHTML = `${num1} × ${num2} =`;
        state.expectedAnswer = num1 * num2;
    } else {
        // Với phép chia, ví dụ bảng 2: 2, 4, 6... 20 chia 2
        const dividend = num1 * num2;
        qText.innerHTML = `${dividend} ÷ ${num1} =`;
        state.expectedAnswer = num2;
    }
}

// --- Tương tác Numpad ---
function pressNum(num) {
    // Giới hạn max độ dài đáp án (ví dụ: 90) -> max 3 char
    if (state.currentAnswer.length >= 3) return;
    
    state.currentAnswer += num.toString();
    updateInputDisplay();
}

function deleteNum() {
    if (state.currentAnswer.length > 0) {
        state.currentAnswer = state.currentAnswer.slice(0, -1);
        updateInputDisplay();
    }
}

function clearAnswer() {
    state.currentAnswer = '';
    updateInputDisplay();
}

function updateInputDisplay() {
    const input = document.getElementById('answer-input');
    input.innerText = state.currentAnswer;
    input.classList.remove('wrong');
}

// --- Kiểm Tra Đáp Án Cốt Lõi ---
let isTransitioning = false; // Ngăn bấm thêm khi đang chuyển câu

function checkAnswer() {
    if (state.currentAnswer === '' || isTransitioning) return;
    
    const intAns = parseInt(state.currentAnswer);
    const inputEl = document.getElementById('answer-input');
    
    if (intAns === state.expectedAnswer) {
        // ĐÚNG
        isTransitioning = true;
        inputEl.className = 'answer-input correct';
        
        setTimeout(() => {
            handleCorrect();
        }, 400); // Đợi 0.4s khoe màu xanh r chuyển
    } else {
        // SAI
        inputEl.className = 'answer-input wrong';
        state.questionResults[state.currentQuestionIndex] = 'wrong'; // Đánh dấu điểm này là sai
        renderDots(); // Cập nhật thanh tiến độ lập tức để hiện màu đỏ
        
        // Ghi nhận mảng lỗi
        const num1 = state.currentTable;
        const num2 = state.questions[state.currentQuestionIndex];
        let mistakeStr = state.mode === 'multiply' 
            ? `${num1} × ${num2} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`
            : `${num1 * num2} ÷ ${num1} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`;
            
        if (!state.mistakesThisSession.includes(mistakeStr)) {
            state.mistakesThisSession.push(mistakeStr);
        }

        // Tự động chuyển câu sau hiệu ứng rung/màu đỏ
        isTransitioning = true;
        setTimeout(() => {
            handleCorrect();
        }, 800); 
    }
}

function handleCorrect() {
    state.learningProgress++;
    renderDots();
    
    if (state.learningProgress >= 10) {
        // Hoàn thành 1 bảng
        finishTable();
    } else {
        // Chuyển câu tiếp
        state.currentQuestionIndex++;
        loadQuestion();
        isTransitioning = false;
    }
}

function finishTable() {
    const titleEl = document.getElementById('congrats-title');
    const subtextEl = document.querySelector('.congrats-subtext');

    if (state.mistakesThisSession.length === 0) {
        // Lưu tiến độ bảng nếu không sai câu nào
        state.tableProgress[state.mode][state.currentTable] = true;
        saveData();
        renderTableButtons(); // Cập nhật lại dấu tick
        
        // Tung hoa giấy chúc mừng
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#4f46e5', '#3b82f6', '#10b981', '#f43f5e', '#eab308']
        });
        
        titleEl.innerText = 'Tuyệt vời!';
        titleEl.style.color = 'var(--success)';
        subtextEl.innerHTML = `Bạn đã hoàn thành bảng ${state.currentTable} ${state.mode === 'multiply' ? 'Nhân' : 'Chia'} không chệch nhịp nào.`;
    } else {
        titleEl.innerText = 'Chưa hoàn thành';
        titleEl.style.color = 'var(--error)';
        
        let htmlStr = `Bạn đã giải sai <b>${state.mistakesThisSession.length}</b> câu nên tiến độ không được xác nhận. Hãy làm lại cẩn thận hơn nhé:<br>`;
        htmlStr += `<ul style="text-align: left; background: var(--input-bg); padding: 10px 20px 10px 30px; border-radius: 8px; margin-top: 10px; font-size: 14px; list-style-type: disc;">`;
        state.mistakesThisSession.forEach(err => {
            htmlStr += `<li style="margin-bottom:6px;">${err}</li>`;
        });
        htmlStr += `</ul>`;
        subtextEl.innerHTML = htmlStr;
    }

    document.getElementById('congrats-overlay').classList.add('show');
}

function nextTable() {
    document.getElementById('congrats-overlay').classList.remove('show');
    isTransitioning = false;
    
    // Tìm bảng chưa học tiếp theo (từ 2 đến 9)
    let nextTarget = 2;
    let found = false;
    
    for (let i = state.currentTable + 1; i <= 9; i++) {
        if (!state.tableProgress[state.mode][i]) {
            nextTarget = i;
            found = true;
            break;
        }
    }
    
    // Nếu đã hoàn thành từ bảng hiện tại đến bảng 9, thì tìm lại từ bảng 2
    if (!found) {
        for (let i = 2; i <= 9; i++) {
            if (!state.tableProgress[state.mode][i]) {
                nextTarget = i;
                found = true;
                break;
            }
        }
    }
    
    // Nếu tất cả đã hoàn thành
    if (!found) {
        nextTarget = state.currentTable; // ở lại bài cũ
        Swal.fire({
            title: 'Tuyệt đỉnh! 🏆',
            text: 'Xin chúc mừng! Bạn đã chinh phục toàn bộ bảng cửu chương ở chế độ này!',
            icon: 'success',
            confirmButtonColor: '#10b981',
            confirmButtonText: 'Tuyệt quá!'
        });
        
        // Bắn pháo bông siêu to
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) { return Math.random() * (max - min) + min; }
        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) { return clearInterval(interval); }
            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }
    
    startTable(nextTarget);
}

// Bắt support cả phím thực của máy tính
document.addEventListener('keydown', (e) => {
    if (isTransitioning) return;
    if (e.key >= '0' && e.key <= '9') {
        pressNum(e.key);
    } else if (e.key === 'Backspace') {
        deleteNum();
    } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        clearAnswer();
    } else if (e.key === 'Enter') {
        checkAnswer();
    }
});

// Run
init();
