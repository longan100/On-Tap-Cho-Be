// --- State Application ---
const state = {
    mode: 'multiply', // 'multiply', 'divide', 'add', 'subtract'
    currentTable: 2,
    config: {
        digits: 2,
        totalQuestions: 10
    },
    learningProgress: 0,
    questions: [], 
    currentQuestionIndex: 0,
    currentAnswer: '',
    expectedAnswer: 0,
    mistakesThisSession: [], 
    questionResults: [], 
    // Dữ liệu bảng hoàn thành, lưu vào localStorage
    tableProgress: {
        multiply: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
        divide: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
        addCount: 0,
        subtractCount: 0
    },
    sessionAddedCount: 0
};

// --- Khởi tạo ---
function init() {
    loadData();
    renderTableButtons();
    renderDots();
    startTable(state.currentTable);
}

// --- Toolbox UI Logic ---
let isToolboxOpen = true;

function toggleToolbox() {
    isToolboxOpen = !isToolboxOpen;
    const wrapper = document.getElementById('app-wrapper');
    const iconLeft = document.getElementById('toggle-icon-left');
    const iconRight = document.getElementById('toggle-icon-right');
    
    if (isToolboxOpen) {
        wrapper.classList.add('toolbox-open');
        iconLeft.style.display = 'block';
        iconRight.style.display = 'none';
    } else {
        wrapper.classList.remove('toolbox-open');
        iconLeft.style.display = 'none';
        iconRight.style.display = 'block';
    }
}

function autoCloseToolboxOnMobile() {
    if (window.innerWidth <= 768 && isToolboxOpen) {
        toggleToolbox();
    }
}

// --- LocalStorage ---
function loadData() {
    const saved = localStorage.getItem('cuuChuongProgress');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            state.tableProgress = { ...state.tableProgress, ...parsed };
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
                divide: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
                addCount: 0,
                subtractCount: 0
            };
            state.sessionAddedCount = 0;
            saveData();
            state.mode = 'multiply';
            document.getElementById('btn-multiply').classList.add('active');
            document.getElementById('btn-divide').classList.remove('active');
            document.getElementById('btn-add').classList.remove('active');
            document.getElementById('btn-subtract').classList.remove('active');
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

// --- Xếp hạng (Milestone Ranking) ---
function getTitle(count) {
    if (count < 10) return { title: "Tập Sự", icon: "🌱", color: "#64748b" };
    if (count < 20) return { title: "Chăm Chỉ", icon: "⭐", color: "#3b82f6" };
    if (count < 30) return { title: "Thông Thái", icon: "🧠", color: "#8b5cf6" };
    if (count < 40) return { title: "Cao Thủ", icon: "🔥", color: "#ef4444" };
    return { title: "Thiên Tài", icon: "👑", color: "#eab308" };
}

function updateMilestoneDisplay() {
    if (state.mode !== 'add' && state.mode !== 'subtract') return;
    const count = state.mode === 'add' ? state.tableProgress.addCount : state.tableProgress.subtractCount;
    const rank = getTitle(count);
    
    document.getElementById('milestone-icon').innerText = rank.icon;
    document.getElementById('milestone-title').innerText = rank.title;
    document.getElementById('milestone-title').style.color = rank.color;
    document.getElementById('milestone-count').innerHTML = `${count}<span class="text-[10px] font-bold text-slate-500 ml-0.5">câu</span>`;

    const badge = document.getElementById('recent-added-badge');
    if (badge) {
        if (state.sessionAddedCount > 0) {
            badge.innerText = `+${state.sessionAddedCount} hôm nay`;
            badge.classList.remove('hidden');
            badge.classList.remove('animate__bounceIn');
            void badge.offsetWidth; 
            badge.classList.add('animate__bounceIn');
        } else {
            badge.classList.add('hidden');
        }
    }
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
        if (state.tableProgress[state.mode] && state.tableProgress[state.mode][i]) {
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
    const total = (state.mode === 'add' || state.mode === 'subtract') ? state.config.totalQuestions : 10;
    
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        if (i < state.learningProgress) {
            dot.classList.add('filled');
            if (state.questionResults[i] === 'wrong') {
                dot.classList.add('wrong');
            } else {
                dot.classList.add('correct');
            }
        } else if (i === state.learningProgress) {
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
    document.getElementById('btn-add').classList.toggle('active', mode === 'add');
    document.getElementById('btn-subtract').classList.toggle('active', mode === 'subtract');
    
    if (mode === 'add' || mode === 'subtract') {
        document.getElementById('table-selector').style.display = 'none';
        document.getElementById('math-config').style.display = 'block';
        document.getElementById('progress-dots').innerHTML = '';
        document.getElementById('question-text').innerHTML = 'Sẵn sàng...';
        document.getElementById('answer-input').innerText = '';
        document.getElementById('answer-input').classList.remove('active');
        updateMilestoneDisplay();
    } else {
        document.getElementById('table-selector').style.display = 'flex';
        document.getElementById('math-config').style.display = 'none';
        renderTableButtons();
        startTable(state.currentTable);
    }
}

function startMathMode() {
    state.config.digits = parseInt(document.getElementById('config-digits').value);
    state.config.totalQuestions = parseInt(document.getElementById('config-questions').value);
    
    state.learningProgress = 0;
    state.currentQuestionIndex = 0;
    state.mistakesThisSession = [];
    state.questionResults = Array(state.config.totalQuestions).fill('correct');
    
    state.questions = [];
    const min = state.config.digits === 1 ? 1 : Math.pow(10, state.config.digits - 1);
    const max = Math.pow(10, state.config.digits) - 1;
    
    for (let i = 0; i < state.config.totalQuestions; i++) {
        let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
        let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
        
        if (state.mode === 'subtract' && n1 < n2) {
            let temp = n1; n1 = n2; n2 = temp;
        }
        state.questions.push({ num1: n1, num2: n2 });
    }
    
    renderDots();
    loadQuestion();
    autoCloseToolboxOnMobile();
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
    state.mistakesThisSession = []; 
    state.questionResults = Array(10).fill('correct'); 
    
    document.querySelectorAll('.table-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.num) === tableNum);
    });

    state.questions = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    renderDots();
    loadQuestion();
    autoCloseToolboxOnMobile();
}

function loadQuestion() {
    const qText = document.getElementById('question-text');
    const input = document.getElementById('answer-input');
    
    input.innerText = '';
    state.currentAnswer = '';
    input.className = 'answer-input active';
    
    if (state.mode === 'multiply' || state.mode === 'divide') {
        const num2 = state.questions[state.currentQuestionIndex];
        const num1 = state.currentTable;
        
        if (state.mode === 'multiply') {
            qText.innerHTML = `${num1} × ${num2} =`;
            state.expectedAnswer = num1 * num2;
        } else {
            const dividend = num1 * num2;
            qText.innerHTML = `${dividend} ÷ ${num1} =`;
            state.expectedAnswer = num2;
        }
    } else {
        const { num1, num2 } = state.questions[state.currentQuestionIndex];
        if (state.mode === 'add') {
            qText.innerHTML = `${num1} + ${num2} =`;
            state.expectedAnswer = num1 + num2;
        } else {
            qText.innerHTML = `${num1} - ${num2} =`;
            state.expectedAnswer = num1 - num2;
        }
    }
}

// --- Tương tác Numpad ---
function pressNum(num) {
    let maxLen = (state.mode === 'add' || state.mode === 'subtract') ? (state.config.digits + 1) : 3;
    if (state.currentAnswer.length >= maxLen) return;
    
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
let isTransitioning = false; 

function checkAnswer() {
    if (state.currentAnswer === '' || isTransitioning) return;
    
    const intAns = parseInt(state.currentAnswer);
    const inputEl = document.getElementById('answer-input');
    
    if (intAns === state.expectedAnswer) {
        isTransitioning = true;
        inputEl.className = 'answer-input correct';
        setTimeout(() => handleCorrect(), 400); 
    } else {
        inputEl.className = 'answer-input wrong';
        
        if (state.mode === 'multiply' || state.mode === 'divide') {
            state.questionResults[state.currentQuestionIndex] = 'wrong'; 
            renderDots(); 
            
            const num1 = state.currentTable;
            const num2 = state.questions[state.currentQuestionIndex];
            let mistakeStr = state.mode === 'multiply' 
                ? `${num1} × ${num2} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`
                : `${num1 * num2} ÷ ${num1} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`;
                
            if (!state.mistakesThisSession.includes(mistakeStr)) {
                state.mistakesThisSession.push(mistakeStr);
            }

            isTransitioning = true;
            setTimeout(() => handleCorrect(), 800); 
        } else {
            const min = state.config.digits === 1 ? 1 : Math.pow(10, state.config.digits - 1);
            const max = Math.pow(10, state.config.digits) - 1;
            let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (state.mode === 'subtract' && n1 < n2) {
                let temp = n1; n1 = n2; n2 = temp;
            }
            state.questions[state.currentQuestionIndex] = { num1: n1, num2: n2 };

            isTransitioning = true;
            setTimeout(() => {
                loadQuestion(); 
                isTransitioning = false;
            }, 800);
        }
    }
}

function handleCorrect() {
    state.learningProgress++;
    renderDots();
    
    const total = (state.mode === 'add' || state.mode === 'subtract') ? state.config.totalQuestions : 10;
    
    if (state.learningProgress >= total) {
        finishTable();
    } else {
        state.currentQuestionIndex++;
        loadQuestion();
        isTransitioning = false;
    }
}

function finishTable() {
    const titleEl = document.getElementById('congrats-title');
    const subtextEl = document.querySelector('.congrats-subtext');

    if (state.mode === 'add' || state.mode === 'subtract') {
        if (state.mode === 'add') {
            state.tableProgress.addCount += state.config.totalQuestions;
            state.sessionAddedCount += state.config.totalQuestions;
        } else {
            state.tableProgress.subtractCount += state.config.totalQuestions;
            state.sessionAddedCount += state.config.totalQuestions;
        }
        saveData();
        updateMilestoneDisplay();

        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#4f46e5', '#3b82f6', '#10b981', '#f43f5e', '#eab308']
        });
        
        titleEl.innerText = 'Tuyệt vời!';
        titleEl.style.color = 'var(--success)';
        subtextEl.innerHTML = `Bé đã rèn luyện xong ${state.config.totalQuestions} câu ${state.mode === 'add' ? 'Cộng' : 'Trừ'} rất xuất sắc!`;
        document.getElementById('congrats-overlay').classList.add('show');
        return;
    }

    if (state.mistakesThisSession.length === 0) {
        state.tableProgress[state.mode][state.currentTable] = true;
        saveData();
        renderTableButtons(); 
        
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
    
    if (state.mode === 'add' || state.mode === 'subtract') {
        startMathMode(); 
        return;
    }

    let nextTarget = 2;
    let found = false;
    
    for (let i = state.currentTable + 1; i <= 9; i++) {
        if (!state.tableProgress[state.mode][i]) {
            nextTarget = i;
            found = true;
            break;
        }
    }
    
    if (!found) {
        for (let i = 2; i <= 9; i++) {
            if (!state.tableProgress[state.mode][i]) {
                nextTarget = i;
                found = true;
                break;
            }
        }
    }
    
    if (!found) {
        nextTarget = state.currentTable; 
        Swal.fire({
            title: 'Tuyệt đỉnh! 🏆',
            text: 'Xin chúc mừng! Bạn đã chinh phục toàn bộ bảng cửu chương ở chế độ này!',
            icon: 'success',
            confirmButtonColor: '#10b981',
            confirmButtonText: 'Tuyệt quá!'
        });
        
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
