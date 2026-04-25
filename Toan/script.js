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
    currentRemainder: '',
    activeInput: 'quotient',
    expectedAnswer: 0,
    mistakesThisSession: [], 
    questionResults: [], 
    // Dữ liệu bảng hoàn thành, lưu vào localStorage
    tableProgress: {
        multiply: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
        divide: { 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false },
        addCount: 0,
        subtractCount: 0,
        multiplyAdvCount: 0,
        divideAdvCount: 0,
        quizCount: 0,
        opStats: {
            add: { correct: 0, wrong: 0 },
            subtract: { correct: 0, wrong: 0 },
            multiply_adv: { correct: 0, wrong: 0 },
            divide_adv: { correct: 0, wrong: 0 }
        }
    },
    sessionAddedCount: 0,
    quizSelectedOps: [],
    quizResults: {}
};

const QUIZ_OPERATIONS = [
  { id: 'add', label: 'Cộng', icon: '+' },
  { id: 'subtract', label: 'Trừ', icon: '−' },
  { id: 'multiply_adv', label: 'Nhân', icon: '×' },
  { id: 'divide_adv', label: 'Chia', icon: '÷' },
];

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
            // Ensure opStats exists with defaults
            const defaultOpStats = {
                add: { correct: 0, wrong: 0 },
                subtract: { correct: 0, wrong: 0 },
                multiply_adv: { correct: 0, wrong: 0 },
                divide_adv: { correct: 0, wrong: 0 }
            };
            parsed.opStats = { ...defaultOpStats, ...(parsed.opStats || {}) };
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
                subtractCount: 0,
                multiplyAdvCount: 0,
                divideAdvCount: 0,
                quizCount: 0,
                opStats: {
                    add: { correct: 0, wrong: 0 },
                    subtract: { correct: 0, wrong: 0 },
                    multiply_adv: { correct: 0, wrong: 0 },
                    divide_adv: { correct: 0, wrong: 0 }
                }
            };
            state.sessionAddedCount = 0;
            saveData();
            state.mode = 'multiply';
            document.getElementById('btn-multiply').classList.add('active');
            document.getElementById('btn-divide').classList.remove('active');
            document.getElementById('btn-multiply-adv').classList.remove('active');
            document.getElementById('btn-divide-adv').classList.remove('active');
            document.getElementById('btn-add').classList.remove('active');
            document.getElementById('btn-subtract').classList.remove('active');
            document.getElementById('btn-quiz').classList.remove('active');
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
    if (!['add', 'subtract', 'multiply_adv', 'divide_adv', 'quiz'].includes(state.mode)) return;
    let count = 0;
    if (state.mode === 'add') count = state.tableProgress.addCount;
    else if (state.mode === 'subtract') count = state.tableProgress.subtractCount;
    else if (state.mode === 'multiply_adv') count = state.tableProgress.multiplyAdvCount || 0;
    else if (state.mode === 'divide_adv') count = state.tableProgress.divideAdvCount || 0;
    else if (state.mode === 'quiz') count = state.tableProgress.quizCount || 0;
    
    const rank = getTitle(count);
    
    if (state.mode === 'quiz') {
        document.getElementById('quiz-milestone-icon').innerText = rank.icon;
        document.getElementById('quiz-milestone-title').innerText = rank.title;
        document.getElementById('quiz-milestone-title').style.color = rank.color;
        document.getElementById('quiz-milestone-count').innerHTML = `${count}<span class="text-[10px] font-bold text-slate-500 ml-0.5">câu</span>`;
        
        const badge = document.getElementById('quiz-recent-added-badge');
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
    } else {
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
    const total = (state.mode === 'add' || state.mode === 'subtract' || state.mode === 'multiply_adv' || state.mode === 'divide_adv' || state.mode === 'quiz') ? state.config.totalQuestions : 10;
    
    for (let i = 0; i < total; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        
        if (state.questionResults[i] === 'correct') {
            dot.classList.add('filled', 'correct');
        }
        // null/undefined: dot rỗng – chưa làm đúng, phải làm lại
        
        container.appendChild(dot);
    }
}

// --- Logic Chuyển Mode / Bảng ---
function setMode(mode) {
    if (state.mode === mode) return;
    state.mode = mode;
    
    document.getElementById('btn-multiply').classList.toggle('active', mode === 'multiply');
    document.getElementById('btn-divide').classList.toggle('active', mode === 'divide');
    document.getElementById('btn-multiply-adv').classList.toggle('active', mode === 'multiply_adv');
    document.getElementById('btn-divide-adv').classList.toggle('active', mode === 'divide_adv');
    document.getElementById('btn-add').classList.toggle('active', mode === 'add');
    document.getElementById('btn-subtract').classList.toggle('active', mode === 'subtract');
    document.getElementById('btn-quiz').classList.toggle('active', mode === 'quiz');
    
    if (mode === 'quiz') {
        document.getElementById('table-selector').style.display = 'none';
        document.getElementById('math-config').style.display = 'none';
        document.getElementById('quiz-config').style.display = 'block';
        renderQuizOperations();
        
        document.getElementById('progress-dots').innerHTML = '';
        document.getElementById('question-text').innerHTML = 'Sẵn sàng...';
        document.getElementById('answer-input').innerText = '';
        document.getElementById('answer-remainder').innerText = '';
        document.getElementById('answer-input').classList.remove('active', 'wrong', 'correct');
        document.getElementById('answer-remainder').classList.remove('active', 'wrong', 'correct');
        updateMilestoneDisplay();
    } else if (mode === 'add' || mode === 'subtract' || mode === 'multiply_adv' || mode === 'divide_adv') {
        document.getElementById('table-selector').style.display = 'none';
        document.getElementById('math-config').style.display = 'block';
        document.getElementById('quiz-config').style.display = 'none';
        
        if (mode === 'divide_adv') {
            document.getElementById('config-division-container').style.display = 'block';
            document.getElementById('label-config-digits').innerText = 'Số Bị Chia';
        } else if (mode === 'multiply_adv') {
            document.getElementById('config-division-container').style.display = 'none';
            document.getElementById('label-config-digits').innerText = 'Thừa số A';
        } else {
            document.getElementById('config-division-container').style.display = 'none';
            document.getElementById('label-config-digits').innerText = 'Số chữ số';
        }
        
        document.getElementById('progress-dots').innerHTML = '';
        document.getElementById('question-text').innerHTML = 'Sẵn sàng...';
        document.getElementById('answer-input').innerText = '';
        document.getElementById('answer-remainder').innerText = '';
        document.getElementById('answer-input').classList.remove('active', 'wrong', 'correct');
        document.getElementById('answer-remainder').classList.remove('active', 'wrong', 'correct');
        updateMilestoneDisplay();
    } else {
        document.getElementById('table-selector').style.display = 'flex';
        document.getElementById('math-config').style.display = 'none';
        document.getElementById('quiz-config').style.display = 'none';
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
    state.questionResults = new Array(state.config.totalQuestions).fill(null);
    
    state.questions = [];
    const min = state.config.digits === 1 ? 1 : Math.pow(10, state.config.digits - 1);
    const max = Math.pow(10, state.config.digits) - 1;
    
    for (let i = 0; i < state.config.totalQuestions; i++) {
        if (state.mode === 'multiply_adv') {
            let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let n2 = Math.floor(Math.random() * 8) + 2; // 2..9
            state.questions.push({ num1: n1, num2: n2 });
        } else if (state.mode === 'divide_adv') {
            let n2 = Math.floor(Math.random() * 8) + 2; // 2..9
            let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
            if (n1 < n2) n1 += n2; // ensure dividend >= divisor
            
            let divType = document.getElementById('config-division').value;
            let isExact = divType === 'exact';
            if (divType === 'mixed') isExact = Math.random() > 0.5;
            
            let remainder = n1 % n2;
            if (isExact && remainder !== 0) {
                n1 = n1 - remainder;
                if (n1 < min) n1 += n2;
                remainder = 0;
            } else if (!isExact && remainder === 0) {
                n1 += 1;
                if (n1 > max) n1 -= n2;
                remainder = n1 % n2;
            }
            let quotient = Math.floor(n1 / n2);
            state.questions.push({ num1: n1, num2: n2, quotient: quotient, remainder: remainder });
        } else {
            let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
            let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
            
            if (state.mode === 'subtract' && n1 < n2) {
                let temp = n1; n1 = n2; n2 = temp;
            }
            state.questions.push({ num1: n1, num2: n2 });
        }
    }
    
    renderDots();
    loadQuestion();
    autoCloseToolboxOnMobile();
}

function renderQuizOperations() {
    const grid = document.getElementById('quiz-ops-grid');
    grid.innerHTML = '';
    
    QUIZ_OPERATIONS.forEach(op => {
        const card = document.createElement('div');
        card.className = 'quiz-op-card' + (state.quizSelectedOps.includes(op.id) ? ' selected' : '');
        card.dataset.opId = op.id;
        card.innerHTML = `<div class="op-icon">${op.icon}</div><span>${op.label}</span>`;
        card.onclick = () => toggleQuizOp(op.id);
        grid.appendChild(card);
    });
    
    // Show/hide division mode config
    const divMode = document.getElementById('quiz-div-mode');
    if (state.quizSelectedOps.includes('divide_adv')) {
        divMode.classList.remove('hidden');
    } else {
        divMode.classList.add('hidden');
    }
}

function toggleQuizOp(opId) {
    const idx = state.quizSelectedOps.indexOf(opId);
    if (idx === -1) {
        state.quizSelectedOps.push(opId);
    } else {
        state.quizSelectedOps.splice(idx, 1);
    }
    
    // Update UI
    document.querySelectorAll('.quiz-op-card').forEach(card => {
        card.classList.toggle('selected', state.quizSelectedOps.includes(card.dataset.opId));
    });
    
    // Show/hide division mode config
    const divMode = document.getElementById('quiz-div-mode');
    if (state.quizSelectedOps.includes('divide_adv')) {
        divMode.classList.remove('hidden');
    } else {
        divMode.classList.add('hidden');
    }
}

function startQuizMode() {
    if (state.quizSelectedOps.length === 0) {
        Swal.fire({
            title: 'Chưa chọn phép tính!',
            text: 'Vui lòng chọn ít nhất 1 phép tính để bắt đầu kiểm tra.',
            icon: 'warning',
            confirmButtonColor: '#4f46e5',
            confirmButtonText: 'OK'
        });
        return;
    }
    
    const digits = parseInt(document.getElementById('quiz-digits').value);
    const totalQuestions = parseInt(document.getElementById('quiz-total').value);
    const numOps = state.quizSelectedOps.length;
    const questionsPerOp = Math.floor(totalQuestions / numOps);
    let remainder = totalQuestions % numOps;
    
    const min = digits === 1 ? 1 : Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    
    // Read division type
    let divType = 'mixed';
    if (state.quizSelectedOps.includes('divide_adv')) {
        divType = document.getElementById('quiz-divide-type').value;
    }
    
    state.questions = [];
    state.quizResults = {};
    state.quizSelectedOps.forEach(opId => {
        state.quizResults[opId] = { correct: 0, wrong: 0 };
        
        let count = questionsPerOp + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;
        
        for (let i = 0; i < count; i++) {
            if (opId === 'multiply_adv') {
                let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
                let n2 = Math.floor(Math.random() * 8) + 2;
                state.questions.push({ n1, n2, operation: 'multiply_adv', expectedAnswer: n1 * n2 });
            } else if (opId === 'divide_adv') {
                let n2 = Math.floor(Math.random() * 8) + 2;
                let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
                if (n1 < n2) n1 += n2;
                
                let isExact = divType === 'exact';
                if (divType === 'mixed') isExact = Math.random() > 0.5;
                
                let rem = n1 % n2;
                if (isExact && rem !== 0) {
                    n1 = n1 - rem;
                    if (n1 < min) n1 += n2;
                    rem = 0;
                } else if (!isExact && rem === 0) {
                    n1 += 1;
                    if (n1 > max) n1 -= n2;
                    rem = n1 % n2;
                }
                let quotient = Math.floor(n1 / n2);
                state.questions.push({ n1, n2, operation: 'divide_adv', expectedAnswer: quotient, expectedRemainder: rem });
            } else if (opId === 'add') {
                let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
                let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
                state.questions.push({ n1, n2, operation: 'add', expectedAnswer: n1 + n2 });
            } else if (opId === 'subtract') {
                let n1 = Math.floor(Math.random() * (max - min + 1)) + min;
                let n2 = Math.floor(Math.random() * (max - min + 1)) + min;
                if (n1 < n2) { let temp = n1; n1 = n2; n2 = temp; }
                state.questions.push({ n1, n2, operation: 'subtract', expectedAnswer: n1 - n2 });
            }
        }
    });
    
    // Shuffle all questions
    shuffleArray(state.questions);
    
    state.config.digits = digits;
    state.config.totalQuestions = totalQuestions;
    state.learningProgress = 0;
    state.currentQuestionIndex = 0;
    state.mistakesThisSession = [];
    state.questionResults = new Array(totalQuestions).fill(null);
    
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
    state.questionResults = new Array(10).fill(null); 
    
    document.querySelectorAll('.table-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.num) === tableNum);
    });

    state.questions = shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    
    renderDots();
    loadQuestion();
    autoCloseToolboxOnMobile();
}

function loadQuestion() {
    const qBox = document.querySelector('.question-box');
    const qText = document.getElementById('question-text');
    const input = document.getElementById('answer-input');
    
    input.innerText = '';
    state.currentAnswer = '';
    input.className = 'answer-input active';
    
    // Reset remainder input display and state for all modes
    document.getElementById('answer-remainder').innerText = '';
    document.getElementById('answer-remainder').className = 'answer-input';
    state.currentRemainder = '';
    
    if (state.mode === 'divide_adv' || (state.mode === 'quiz' && state.questions[state.currentQuestionIndex] && state.questions[state.currentQuestionIndex].operation === 'divide_adv')) {
        document.getElementById('remainder-label').style.display = 'inline';
        document.getElementById('answer-remainder').style.display = 'flex';
        state.activeInput = 'quotient';
        focusInput('quotient');
    } else {
        document.getElementById('remainder-label').style.display = 'none';
        document.getElementById('answer-remainder').style.display = 'none';
        state.activeInput = 'quotient';
    }

    // Check if the expression is likely to be long
    if (((state.mode === 'add' || state.mode === 'subtract' || state.mode === 'multiply_adv' || state.mode === 'divide_adv') && state.config.digits >= 4) || (state.mode === 'quiz' && state.config.digits >= 4)) {
        qBox.classList.add('long-expr');
    } else {
        qBox.classList.remove('long-expr');
    }
    
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
    } else if (state.mode === 'quiz') {
        const q = state.questions[state.currentQuestionIndex];
        const opSymbols = { add: '+', subtract: '−', multiply_adv: '×', divide_adv: '÷' };
        qText.innerHTML = `${q.n1} ${opSymbols[q.operation]} ${q.n2} =`;
        if (q.operation === 'divide_adv') {
            state.expectedAnswer = { quotient: q.expectedAnswer, remainder: q.expectedRemainder };
        } else {
            state.expectedAnswer = q.expectedAnswer;
        }
    } else if (state.mode === 'multiply_adv') {
        const { num1, num2 } = state.questions[state.currentQuestionIndex];
        qText.innerHTML = `${num1} × ${num2} =`;
        state.expectedAnswer = num1 * num2;
    } else if (state.mode === 'divide_adv') {
        const { num1, num2, quotient, remainder } = state.questions[state.currentQuestionIndex];
        qText.innerHTML = `${num1} ÷ ${num2} =`;
        state.expectedAnswer = { quotient, remainder };
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

function focusInput(target) {
    const isDivideMode = state.mode === 'divide_adv' || (state.mode === 'quiz' && state.questions[state.currentQuestionIndex] && state.questions[state.currentQuestionIndex].operation === 'divide_adv');
    if (!isDivideMode) return;
    state.activeInput = target;
    document.getElementById('answer-input').classList.toggle('active', target === 'quotient');
    document.getElementById('answer-remainder').classList.toggle('active', target === 'remainder');
}

function switchInput() {
    focusInput(state.activeInput === 'quotient' ? 'remainder' : 'quotient');
}

// --- Tương tác Numpad ---
function pressNum(num) {
    if (state.activeInput === 'remainder') {
        if (state.currentRemainder.length >= 2) return;
        state.currentRemainder += num.toString();
    } else {
        let maxLen = (state.mode === 'add' || state.mode === 'subtract') ? (state.config.digits + 1) : 3;
        if (state.mode === 'multiply_adv') maxLen = state.config.digits + 2;
        if (state.mode === 'divide_adv') maxLen = state.config.digits + 1;
        if (state.mode === 'quiz') {
            const q = state.questions[state.currentQuestionIndex];
            if (q.operation === 'add' || q.operation === 'subtract') maxLen = state.config.digits + 1;
            else if (q.operation === 'multiply_adv') maxLen = state.config.digits + 2;
            else if (q.operation === 'divide_adv') maxLen = state.config.digits + 1;
        }
        
        if (state.currentAnswer.length >= maxLen) return;
        state.currentAnswer += num.toString();
    }
    updateInputDisplay();
}

function deleteNum() {
    if (state.activeInput === 'remainder') {
        if (state.currentRemainder.length > 0) {
            state.currentRemainder = state.currentRemainder.slice(0, -1);
            updateInputDisplay();
        }
    } else {
        if (state.currentAnswer.length > 0) {
            state.currentAnswer = state.currentAnswer.slice(0, -1);
            updateInputDisplay();
        }
    }
}

function clearAnswer() {
    if (state.activeInput === 'remainder') {
        state.currentRemainder = '';
    } else {
        state.currentAnswer = '';
    }
    updateInputDisplay();
}

function updateInputDisplay() {
    const input = document.getElementById('answer-input');
    input.innerText = state.currentAnswer;
    input.classList.remove('wrong');
    
    const isDivideMode = state.mode === 'divide_adv' || (state.mode === 'quiz' && state.questions[state.currentQuestionIndex] && state.questions[state.currentQuestionIndex].operation === 'divide_adv');
    if (isDivideMode) {
        const inputRem = document.getElementById('answer-remainder');
        inputRem.innerText = state.currentRemainder;
        inputRem.classList.remove('wrong');
    }
}

// --- Kiểm Tra Đáp Án Cốt Lõi ---
let isTransitioning = false; 

function checkAnswer() {
    if (state.currentAnswer === '' || isTransitioning) return;
    
    const intAns = parseInt(state.currentAnswer);
    const inputEl = document.getElementById('answer-input');
    
    let isCorrect = false;
    let expectedRem = 0;
    let intRem = 0;
    
    const isDivideQ = state.mode === 'divide_adv' || (state.mode === 'quiz' && state.questions[state.currentQuestionIndex] && state.questions[state.currentQuestionIndex].operation === 'divide_adv');
    
    if (isDivideQ) {
        intRem = state.currentRemainder === '' ? 0 : parseInt(state.currentRemainder);
        expectedRem = state.expectedAnswer.remainder;
        isCorrect = (intAns === state.expectedAnswer.quotient && intRem === expectedRem);
    } else {
        isCorrect = (intAns === state.expectedAnswer);
    }
    
    if (isCorrect) {
        isTransitioning = true;
        inputEl.className = 'answer-input correct';
        if (isDivideQ) document.getElementById('answer-remainder').className = 'answer-input correct';
        
        state.questionResults[state.currentQuestionIndex] = 'correct';
        
        // Track quiz result
        if (state.mode === 'quiz') {
            const op = state.questions[state.currentQuestionIndex].operation;
            state.quizResults[op].correct++;
        }
        
        // Track opStats for competency table
        trackOpStat(true);
        
        setTimeout(() => handleCorrect(), 400);
    } else {
        inputEl.className = 'answer-input wrong';
        if (isDivideQ) document.getElementById('answer-remainder').className = 'answer-input wrong';
        
        // Track quiz result
        if (state.mode === 'quiz') {
            const op = state.questions[state.currentQuestionIndex].operation;
            state.quizResults[op].wrong++;
        }
        
        // Track opStats for competency table
        trackOpStat(false);
        
        // Track mistakes for table modes (affects table completion check)
        if (state.mode === 'multiply' || state.mode === 'divide') {
            const num1 = state.currentTable;
            const num2 = state.questions[state.currentQuestionIndex];
            let mistakeStr = state.mode === 'multiply' 
                ? `${num1} × ${num2} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`
                : `${num1 * num2} ÷ ${num1} = ${state.expectedAnswer} (Bạn nhập: ${intAns})`;
                
            if (!state.mistakesThisSession.includes(mistakeStr)) {
                state.mistakesThisSession.push(mistakeStr);
            }
        }
        
        // Sai → không qua câu mới, phải làm lại cho đến khi đúng
        isTransitioning = true;
        setTimeout(() => handleWrong(), 800);
    }
}

function handleCorrect() {
    state.learningProgress++;
    state.currentQuestionIndex++;
    renderDots();
    
    if (state.currentQuestionIndex >= state.questions.length) {
        finishTable();
    } else {
        loadQuestion();
        isTransitioning = false;
    }
}

function handleWrong() {
    // Không chuyển câu mới – reset đáp án để người dùng làm lại câu hiện tại
    state.currentAnswer = '';
    state.currentRemainder = '';
    isTransitioning = false;
    
    const inputEl = document.getElementById('answer-input');
    inputEl.innerText = '';
    inputEl.className = 'answer-input active';
    
    const isDivideQ = state.mode === 'divide_adv' || (state.mode === 'quiz' && state.questions[state.currentQuestionIndex] && state.questions[state.currentQuestionIndex].operation === 'divide_adv');
    if (isDivideQ) {
        const inputRem = document.getElementById('answer-remainder');
        inputRem.innerText = '';
        inputRem.className = 'answer-input';
        state.activeInput = 'quotient';
        focusInput('quotient');
    }
}

function finishTable() {
    const titleEl = document.getElementById('congrats-title');
    const subtextEl = document.querySelector('.congrats-subtext');

    if (state.mode === 'quiz') {
        state.tableProgress.quizCount += state.learningProgress;
        state.sessionAddedCount += state.learningProgress;
        saveData();
        updateMilestoneDisplay();

        // Build breakdown
        let totalCorrect = 0;
        let totalWrong = 0;
        let breakdownHtml = '<div class="quiz-breakdown">';
        QUIZ_OPERATIONS.forEach(op => {
            if (state.quizResults[op.id]) {
                const r = state.quizResults[op.id];
                totalCorrect += r.correct;
                totalWrong += r.wrong;
                breakdownHtml += `<div class="quiz-breakdown-row">
                    <span class="op-name">${op.icon} ${op.label}</span>
                    <span class="op-score">
                        <span class="correct-count">✓${r.correct}</span>
                        <span class="wrong-count">✗${r.wrong}</span>
                    </span>
                </div>`;
            }
        });
        breakdownHtml += '</div>';
        breakdownHtml += `<div class="quiz-total-score">${totalCorrect}/${state.config.totalQuestions}</div>`;

        const quizBreakdown = document.getElementById('quiz-breakdown');
        quizBreakdown.innerHTML = breakdownHtml;
        quizBreakdown.style.display = 'block';

        if (totalWrong === 0) {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#4f46e5', '#3b82f6', '#10b981', '#f43f5e', '#eab308']
            });
        }

        titleEl.innerText = 'Tuyệt vời!';
        titleEl.style.color = 'var(--success)';
        subtextEl.innerHTML = `Bé đã hoàn thành bài kiểm tra rất xuất sắc!`;
        document.getElementById('congrats-overlay').classList.add('show');
        return;
    }

    if (state.mode === 'add' || state.mode === 'subtract' || state.mode === 'multiply_adv' || state.mode === 'divide_adv') {
        if (state.mode === 'add') {
            state.tableProgress.addCount += state.learningProgress;
            state.sessionAddedCount += state.learningProgress;
        } else if (state.mode === 'subtract') {
            state.tableProgress.subtractCount += state.learningProgress;
            state.sessionAddedCount += state.learningProgress;
        } else if (state.mode === 'multiply_adv') {
            state.tableProgress.multiplyAdvCount += state.learningProgress;
            state.sessionAddedCount += state.learningProgress;
        } else if (state.mode === 'divide_adv') {
            state.tableProgress.divideAdvCount += state.learningProgress;
            state.sessionAddedCount += state.learningProgress;
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
        
        let label = state.mode === 'add' ? 'Cộng' : (state.mode === 'subtract' ? 'Trừ' : (state.mode === 'multiply_adv' ? 'Nhân' : 'Chia'));
        subtextEl.innerHTML = `Bé đã rèn luyện xong ${state.config.totalQuestions} câu ${label} rất xuất sắc!`;
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
    
    // Hide quiz breakdown
    const quizBreakdown = document.getElementById('quiz-breakdown');
    if (quizBreakdown) quizBreakdown.style.display = 'none';
    
    if (state.mode === 'quiz') {
        startQuizMode();
        return;
    }
    
    if (state.mode === 'add' || state.mode === 'subtract' || state.mode === 'multiply_adv' || state.mode === 'divide_adv') {
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

// --- Bảng Năng Lực (Competency Tracking) ---

function trackOpStat(isCorrect) {
    let opKey = null;
    
    if (state.mode === 'add') opKey = 'add';
    else if (state.mode === 'subtract') opKey = 'subtract';
    else if (state.mode === 'multiply_adv' || state.mode === 'multiply') opKey = 'multiply_adv';
    else if (state.mode === 'divide_adv' || state.mode === 'divide') opKey = 'divide_adv';
    else if (state.mode === 'quiz') {
        const q = state.questions[state.currentQuestionIndex];
        if (q) opKey = q.operation;
    }
    
    if (opKey && state.tableProgress.opStats[opKey]) {
        if (isCorrect) {
            state.tableProgress.opStats[opKey].correct++;
        } else {
            state.tableProgress.opStats[opKey].wrong++;
        }
        saveData();
    }
}

function openCompetencyModal() {
    const modal = document.getElementById('competency-modal');
    renderCompetencyChart();
    modal.classList.add('show');
}

function closeCompetencyModal() {
    const modal = document.getElementById('competency-modal');
    modal.classList.remove('show');
}

function renderCompetencyChart() {
    const container = document.getElementById('competency-content');
    const opStats = state.tableProgress.opStats;
    
    const ops = [
        { id: 'add', label: 'Cộng', icon: '+', color: '#3b82f6', bg: '#eff6ff' },
        { id: 'subtract', label: 'Trừ', icon: '−', color: '#f97316', bg: '#fff7ed' },
        { id: 'multiply_adv', label: 'Nhân', icon: '×', color: '#8b5cf6', bg: '#f5f3ff' },
        { id: 'divide_adv', label: 'Chia', icon: '÷', color: '#10b981', bg: '#ecfdf5' }
    ];
    
    let totalCorrect = 0;
    let totalWrong = 0;
    let html = '';
    
    ops.forEach(op => {
        const stats = opStats[op.id] || { correct: 0, wrong: 0 };
        const total = stats.correct + stats.wrong;
        const pct = total > 0 ? Math.round((stats.correct / total) * 100) : 0;
        totalCorrect += stats.correct;
        totalWrong += stats.wrong;
        
        // Determine level based on percentage
        let level = '';
        let levelColor = '';
        if (total === 0) { level = 'Chưa có dữ liệu'; levelColor = '#94a3b8'; }
        else if (pct >= 90) { level = 'Xuất sắc'; levelColor = '#10b981'; }
        else if (pct >= 70) { level = 'Tốt'; levelColor = '#3b82f6'; }
        else if (pct >= 50) { level = 'Trung bình'; levelColor = '#f59e0b'; }
        else { level = 'Cần luyện tập'; levelColor = '#ef4444'; }
        
        html += `
        <div class="comp-card">
            <div class="comp-card-header">
                <div class="comp-op-badge" style="background:${op.bg};color:${op.color}">
                    <span class="comp-op-icon">${op.icon}</span>
                    <span class="comp-op-label">${op.label}</span>
                </div>
                <span class="comp-level" style="color:${levelColor}">${level}</span>
            </div>
            <div class="comp-bar-track">
                <div class="comp-bar-correct" style="width:${pct}%;background:${op.color}"></div>
            </div>
            <div class="comp-stats-row">
                <span class="comp-pct" style="color:${op.color}">${pct}%</span>
                <span class="comp-detail">✓${stats.correct} đúng · ✗${stats.wrong} sai</span>
            </div>
        </div>`;
    });
    
    // Summary section
    const grandTotal = totalCorrect + totalWrong;
    const grandPct = grandTotal > 0 ? Math.round((totalCorrect / grandTotal) * 100) : 0;
    
    html += `
    <div class="comp-summary">
        <div class="comp-summary-title">Tổng quan</div>
        <div class="comp-summary-score">
            <span class="comp-summary-pct">${grandPct}%</span>
            <span class="comp-summary-detail">${totalCorrect}/${grandTotal} câu đúng</span>
        </div>
    </div>`;
    
    container.innerHTML = html;
}

// Run
init();
