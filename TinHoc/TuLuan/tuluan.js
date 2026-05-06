// Đáp án chuẩn cho từng câu hỏi
const correctAnswers = {
    1: {
        keywords: ['không cung cấp', 'tên', 'địa chỉ', 'người lạ', 'không gửi', 'không nhận', 'tệp', 'bảo vệ', 'mật khẩu'],
        fullAnswer: 'Bảo vệ thông tin cá nhân và gia đình: không nên cung cấp tên và địa chỉ cho người lạ, không gửi và nhận tệp từ người không quen biết, bảo vệ mật khẩu khi dùng máy tính.'
    },
    2: {
        keywords: ['công việc', 'từng bước', 'việc nhỏ', 'thứ tự', 'xếp'],
        fullAnswer: 'Có nhiều công việc được thực hiện theo từng bước, mỗi bước là một việc nhỏ và các bước phải được xếp theo một thứ tự nhất định.'
    },
    3: {
        a: {
            keywords: ['nếu', 'đi học muộn', 'thì', 'trừ điểm'],
            fullAnswer: 'Nếu em đi học muộn thì lớp em sẽ bị trừ điểm thi đua.'
        },
        b: {
            keywords: ['nếu', 'đi bộ', 'thì', 'vỉa hè'],
            fullAnswer: 'Nếu em đi bộ đi học thì em cần đi trên vỉa hè.'
        },
        c: {
            keywords: ['nếu', 'trời mưa', 'thì', 'không đá bóng'],
            fullAnswer: 'Nếu hôm nay trời mưa thì Nam không đi đá bóng.'
        },
        d: {
            keywords: ['nếu', 'học thể dục', 'thì', 'áo quần', 'giày'],
            fullAnswer: 'Nếu hôm nay học thể dục thì Hoa mặc áo quần thể dục và đeo giày.'
        }
    },
    4: {
        keywords: ['chia', 'việc nhỏ', 'dễ hiểu', 'dễ thực hiện'],
        fullAnswer: 'Chia một việc thành những việc nhỏ hơn sẽ giúp chúng ta dễ hiểu và dễ thực hiện hơn.'
    }
};

// Lưu trữ kết quả kiểm tra
let results = {
    1: null,
    2: null,
    3: null,
    4: null
};

let isSubmitted = false;

// Biến lưu trữ câu hỏi đã xáo trộn
let shuffledQuestions = [];

// Hàm xáo trộn mảng
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Hàm khởi tạo và đảo câu hỏi
function initQuestions() {
    // Tạo mảng câu hỏi với ID gốc
    const questionList = [
        { originalId: 1, data: correctAnswers[1] },
        { originalId: 2, data: correctAnswers[2] },
        { originalId: 3, data: correctAnswers[3] },
        { originalId: 4, data: correctAnswers[4] }
    ];
    
    // Xáo trộn câu hỏi
    shuffledQuestions = shuffleArray(questionList);
    
    // Render câu hỏi đã xáo trộn
    renderQuestions();
}

// Hàm render câu hỏi
function renderQuestions() {
    const container = document.querySelector('.content');
    
    // Xóa các câu hỏi cũ (giữ lại header và các phần khác)
    const oldQuestions = container.querySelectorAll('.question-card');
    oldQuestions.forEach(q => q.remove());
    
    // Tìm vị trí để chèn câu hỏi (sau header)
    const header = container.querySelector('.header');
    let insertPosition = header ? header.nextElementSibling : container.firstChild;
    
    // Định nghĩa nội dung câu hỏi
    const questionTexts = {
        1: 'Em làm thế nào để bảo vệ thông tin cá nhân và gia đình khi giao tiếp qua mạng Internet?',
        2: 'Như thế nào là thực hiện công việc theo từng bước?',
        3: 'Chuyển thành dạng "Nếu… thì…"',
        4: 'Tại sao phải chia một việc thành nhiều việc nhỏ hơn?'
    };
    
    const subQuestions = {
        a: 'a) Khi em đi học muộn, lớp em sẽ bị trừ điểm thi đua.',
        b: 'b) Khi đi bộ đi học, em cần đi trên vỉa hè.',
        c: 'c) Hôm nay trời mưa, Nam không đi đá bóng.',
        d: 'd) Hôm nay học thể dục, Hoa mặc áo quần thể dục và đeo giày.'
    };
    
    // Tạo các câu hỏi mới theo thứ tự đã xáo trộn
    shuffledQuestions.forEach((question, displayIndex) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.setAttribute('data-original-id', question.originalId);
        
        let html = `
            <span class="question-number">Câu ${displayIndex + 1}</span>
            <div class="question-text">${questionTexts[question.originalId]}</div>
        `;
        
        // Nếu là câu 3, thêm các phần con
        if (question.originalId === 3) {
            html += `
                <div class="sub-question">
                    <label class="sub-question-label">${subQuestions.a}</label>
                    <textarea class="answer-area" id="answer-input-${question.originalId}a" placeholder="Nhập câu trả lời của em..."></textarea>
                </div>
                <div class="sub-question">
                    <label class="sub-question-label">${subQuestions.b}</label>
                    <textarea class="answer-area" id="answer-input-${question.originalId}b" placeholder="Nhập câu trả lời của em..."></textarea>
                </div>
                <div class="sub-question">
                    <label class="sub-question-label">${subQuestions.c}</label>
                    <textarea class="answer-area" id="answer-input-${question.originalId}c" placeholder="Nhập câu trả lời của em..."></textarea>
                </div>
                <div class="sub-question">
                    <label class="sub-question-label">${subQuestions.d}</label>
                    <textarea class="answer-area" id="answer-input-${question.originalId}d" placeholder="Nhập câu trả lời của em..."></textarea>
                </div>
            `;
        } else {
            html += `<textarea class="answer-area" id="answer-input-${question.originalId}" placeholder="Nhập câu trả lời của em vào đây..."></textarea>`;
        }
        
        html += `<div class="result-display" id="result-${question.originalId}"></div>`;
        
        questionCard.innerHTML = html;
        
        // Chèn câu hỏi vào đúng vị trí
        const submitBtn = container.querySelector('.submit-all-btn');
        if (submitBtn) {
            container.insertBefore(questionCard, submitBtn);
        } else {
            container.appendChild(questionCard);
        }
    });
    
    // Thêm event listener cho các textarea mới
    document.querySelectorAll('.answer-area').forEach(textarea => {
        textarea.addEventListener('input', updateSidebarPreview);
    });
}

// Khởi tạo sidebar
function initSidebar() {
    updateSidebarPreview();
    
    // Thêm event listener cho các textarea
    document.querySelectorAll('.answer-area').forEach(textarea => {
        textarea.addEventListener('input', updateSidebarPreview);
    });
}

// Hàm toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Hàm cập nhật sidebar preview
function updateSidebarPreview() {
    const sidebarContent = document.getElementById('sidebarContent');
    sidebarContent.innerHTML = '';
    
    let answeredCount = 0;
    let unansweredCount = 0;
    
    // Sử dụng thứ tự đã xáo trộn
    shuffledQuestions.forEach((question, displayIndex) => {
        const q = {
            id: question.originalId,
            label: `Câu ${displayIndex + 1}${question.originalId === 3 ? ' (a,b,c,d)' : ''}`
        };
        const item = document.createElement('div');
        item.className = 'question-item';
        
        let status = '';
        let icon = '';
        let hasAnswer = false;
        
        if (isSubmitted && results[q.id] !== null) {
            // Sau khi nộp bài
            if (results[q.id] === 1) {
                item.classList.add('correct');
                status = 'Đúng';
                icon = '✅';
            } else if (results[q.id] === 0.5) {
                item.classList.add('partial');
                status = 'Được một phần';
                icon = '⚠️';
            } else {
                item.classList.add('incorrect');
                status = 'Sai';
                icon = '❌';
            }
        } else {
            // Trước khi nộp bài
            if (q.id === 3) {
                const answers = {
                    a: document.getElementById('answer-input-3a')?.value.trim(),
                    b: document.getElementById('answer-input-3b')?.value.trim(),
                    c: document.getElementById('answer-input-3c')?.value.trim(),
                    d: document.getElementById('answer-input-3d')?.value.trim()
                };
                hasAnswer = answers.a && answers.b && answers.c && answers.d;
            } else {
                const answer = document.getElementById(`answer-input-${q.id}`)?.value.trim();
                hasAnswer = answer && answer.length > 0;
            }
            
            if (hasAnswer) {
                item.classList.add('answered');
                status = 'Đã trả lời';
                icon = '✅';
                answeredCount++;
            } else {
                item.classList.add('unanswered');
                status = 'Chưa trả lời';
                icon = '⚠️';
                unansweredCount++;
            }
        }
        
        item.innerHTML = `
            <div class="question-number-badge">${displayIndex + 1}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToQuestion(displayIndex);
        sidebarContent.appendChild(item);
    });
    
    // Cập nhật thống kê
    if (!isSubmitted) {
        document.getElementById('answeredCount').textContent = answeredCount;
        document.getElementById('unansweredCount').textContent = unansweredCount;
    }
}

// Hàm cuộn đến câu hỏi
function scrollToQuestion(displayIndex) {
    const questionCards = document.querySelectorAll('.question-card');
    if (questionCards[displayIndex]) {
        questionCards[displayIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight câu hỏi
        questionCards[displayIndex].style.boxShadow = '0 0 20px rgba(168, 237, 234, 0.8)';
        setTimeout(() => {
            questionCards[displayIndex].style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 2000);
    }
    
    // Đóng sidebar trên mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// Hàm chuẩn hóa chuỗi (loại bỏ dấu, chuyển thường)
function normalizeString(str) {
    return str.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, 'd')
        .replace(/[^a-z0-9\s]/g, '')
        .trim();
}

// Hàm kiểm tra độ tương đồng
function checkSimilarity(userAnswer, keywords) {
    const normalized = normalizeString(userAnswer);
    let matchCount = 0;
    
    keywords.forEach(keyword => {
        if (normalized.includes(normalizeString(keyword))) {
            matchCount++;
        }
    });
    
    const similarity = (matchCount / keywords.length) * 100;
    return similarity;
}

// Hàm kiểm tra đáp án từng câu
function checkAnswer(questionNumber) {
    let userAnswer, similarity, resultDiv, resultClass, resultText;
    
    if (questionNumber === 3) {
        // Câu 3 có nhiều phần
        const answers = {
            a: document.getElementById('answer-input-3a').value.trim(),
            b: document.getElementById('answer-input-3b').value.trim(),
            c: document.getElementById('answer-input-3c').value.trim(),
            d: document.getElementById('answer-input-3d').value.trim()
        };
        
        if (!answers.a || !answers.b || !answers.c || !answers.d) {
            alert('Vui lòng trả lời đầy đủ tất cả các phần a, b, c, d!');
            return;
        }
        
        let totalScore = 0;
        let details = '';
        
        ['a', 'b', 'c', 'd'].forEach(part => {
            const score = checkSimilarity(answers[part], correctAnswers[3][part].keywords);
            totalScore += score;
            const status = score >= 70 ? '✅' : score >= 40 ? '⚠️' : '❌';
            details += `<br>${status} Phần ${part}: ${Math.round(score)}%`;
        });
        
        const avgScore = totalScore / 4;
        resultDiv = document.getElementById('result-3');
        
        if (avgScore >= 70) {
            resultClass = 'correct';
            resultText = `🎉 Tuyệt vời! Điểm trung bình: ${Math.round(avgScore)}%${details}`;
            results[3] = 1;
        } else if (avgScore >= 40) {
            resultClass = 'partial';
            resultText = `⚠️ Được một phần! Điểm trung bình: ${Math.round(avgScore)}%${details}<br><br>💡 Gợi ý: Hãy dùng cấu trúc "Nếu... thì..." cho tất cả các câu.`;
            results[3] = 0.5;
        } else {
            resultClass = 'incorrect';
            resultText = `❌ Chưa đúng! Điểm trung bình: ${Math.round(avgScore)}%${details}<br><br>💡 Gợi ý: Hãy chuyển đổi câu sang dạng "Nếu [điều kiện] thì [kết quả]"`;
            results[3] = 0;
        }
    } else {
        // Các câu khác
        userAnswer = document.getElementById(`answer-input-${questionNumber}`).value.trim();
        
        if (!userAnswer) {
            alert('Vui lòng nhập câu trả lời trước khi kiểm tra!');
            return;
        }
        
        similarity = checkSimilarity(userAnswer, correctAnswers[questionNumber].keywords);
        resultDiv = document.getElementById(`result-${questionNumber}`);
        
        if (similarity >= 70) {
            resultClass = 'correct';
            resultText = `🎉 Chính xác! Điểm: ${Math.round(similarity)}%`;
            results[questionNumber] = 1;
        } else if (similarity >= 40) {
            resultClass = 'partial';
            resultText = `⚠️ Được một phần! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${correctAnswers[questionNumber].fullAnswer}`;
            results[questionNumber] = 0.5;
        } else {
            resultClass = 'incorrect';
            resultText = `❌ Chưa chính xác! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${correctAnswers[questionNumber].fullAnswer}`;
            results[questionNumber] = 0;
        }
    }
    
    resultDiv.className = `result-display ${resultClass}`;
    resultDiv.innerHTML = resultText;
}

// Hàm nộp bài và tính điểm tổng
function submitAll() {
    // Kiểm tra tất cả các câu
    let hasEmptyAnswer = false;
    
    // Kiểm tra câu 1, 2, 4
    for (let i of [1, 2, 4]) {
        const answer = document.getElementById(`answer-input-${i}`).value.trim();
        if (!answer) {
            hasEmptyAnswer = true;
        }
    }
    
    // Kiểm tra câu 3
    const answers3 = {
        a: document.getElementById('answer-input-3a').value.trim(),
        b: document.getElementById('answer-input-3b').value.trim(),
        c: document.getElementById('answer-input-3c').value.trim(),
        d: document.getElementById('answer-input-3d').value.trim()
    };
    
    if (!answers3.a || !answers3.b || !answers3.c || !answers3.d) {
        hasEmptyAnswer = true;
    }
    
    if (hasEmptyAnswer) {
        alert('⚠️ Vui lòng trả lời đầy đủ tất cả các câu hỏi trước khi nộp bài!');
        return;
    }
    
    // Kiểm tra từng câu
    for (let i = 1; i <= 4; i++) {
        checkAnswer(i);
    }
    
    // Đánh dấu đã nộp bài
    isSubmitted = true;
    
    // Tính tổng điểm
    let totalScore = 0;
    
    for (let i = 1; i <= 4; i++) {
        if (results[i] !== null) {
            totalScore += results[i];
        }
    }
    
    const finalScore = (totalScore / 4) * 100;
    const scoreDisplay = document.getElementById('score-display');
    const scoreText = document.getElementById('score-text');
    
    let message = '';
    if (finalScore >= 90) {
        message = `Xuất sắc! Em đạt ${Math.round(finalScore)} điểm! 🌟🌟🌟`;
    } else if (finalScore >= 70) {
        message = `Tốt lắm! Em đạt ${Math.round(finalScore)} điểm! 🌟🌟`;
    } else if (finalScore >= 50) {
        message = `Khá! Em đạt ${Math.round(finalScore)} điểm! 🌟`;
    } else {
        message = `Em đạt ${Math.round(finalScore)} điểm. Hãy cố gắng hơn nhé! 💪`;
    }
    
    scoreText.textContent = message;
    scoreDisplay.className = 'score-display show';
    
    // Cập nhật sidebar
    updateSidebarPreview();
    
    // Scroll đến phần hiển thị điểm
    setTimeout(() => {
        scoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Khởi tạo khi trang load
window.onload = function() {
    initQuestions();
    initSidebar();
};
