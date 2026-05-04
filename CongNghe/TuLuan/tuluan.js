// Đáp án chuẩn cho từng câu hỏi
const correctAnswers = {
    1: {
        keywords: ['tìm hiểu', 'sản phẩm mẫu', 'lựa chọn', 'vật liệu', 'dụng cụ', 'làm đế', 'biển báo', 'cột', 'lắp ráp', 'kiểm tra'],
        fullAnswer: 'Bước 1: Tìm hiểu sản phẩm mẫu. Bước 2: Lựa chọn vật liệu, dụng cụ. Bước 3: Làm đế, làm biển báo và làm cột biển báo. Bước 4: Lắp ráp, kiểm tra mô hình.'
    },
    2: {
        keywords: ['dán', 'mặt sau', 'biển báo', 'thân', 'lắp ráp', 'mấu cắm', 'kiểm tra'],
        fullAnswer: 'Dán mặt sau của biển báo vào thân mô hình. Lắp ráp thân biển báo vào mấu cắm mô hình. Kiểm tra mô hình sau khi lắp ráp xong.'
    },
    3: {
        keywords: ['thiết kế', 'mẫu', 'cắt', 'bộ phận', 'máy bay', 'gắn', 'thân', 'cánh', 'hoàn thành'],
        fullAnswer: 'Bước 1: Thiết kế mẫu. Bước 2: Cắt các bộ phận của máy bay giấy. Bước 3: Gắn thân và sải cánh. Bước 4: Hoàn thành sản phẩm.'
    },
    4: {
        keywords: ['tìm hiểu', 'sản phẩm mẫu', 'lựa chọn', 'nguyên vật liệu', 'tiến hành', 'trang trí', 'kiểm tra'],
        fullAnswer: 'Bước 1: Tìm hiểu sản phẩm mẫu. Bước 2: Lựa chọn nguyên vật liệu. Bước 3: Tiến hành làm và trang trí sản phẩm. Bước 4: Kiểm tra sản phẩm sau khi làm.'
    },
    5: {
        keywords: ['tuân thủ', 'đèn tín hiệu', 'đội', 'mũ bảo hiểm', 'xe máy', 'sang đường', 'vạch kẻ', 'người đi bộ'],
        fullAnswer: 'Tuân thủ đèn tín hiệu giao thông. Đội mũ bảo hiểm khi ngồi trên xe máy. Sang đường đúng chỗ có vạch kẻ đường dành cho người đi bộ.'
    },
    6: {
        keywords: ['tạo hình', 'thước', 'tạo khung', 'chia vạch', 'hoàn thiện'],
        fullAnswer: 'Bước 1: Tạo hình của thước. Bước 2: Tạo khung thước. Bước 3: Chia vạch trên thước. Bước 4: Hoàn thiện sản phẩm.'
    },
    7: {
        keywords: ['làm biển báo', 'làm cột', 'làm đế', 'hoàn thiện'],
        fullAnswer: 'Bước 1: Làm biển báo. Bước 2: Làm cột biển báo. Bước 3: Làm đế biển báo. Bước 4: Hoàn thiện sản phẩm.'
    },
    8: {
        keywords: ['sáng chế', 'loài người', 'rô ma', 'hai nghìn năm', 'cột trụ', 'khoảng cách', 'nghị viện', 'phổ biến'],
        fullAnswer: 'Biển báo giao thông là một sáng chế vĩ đại của loài người. Những tấm biển báo giao thông đường bộ đầu tiên xuất hiện ở Rô-ma cách đây hơn hai nghìn năm. Đó là các biển báo dạng chữ viết ghi trên các cột trụ, ghi lại khoảng cách từ điểm đặt cột đến Nghị viện Rô-ma. Sau đó, hệ thống biển báo giao thông kiểu này đã trở nên phổ biến ở nhiều quốc gia.'
    }
};

// Lưu trữ kết quả kiểm tra
let results = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null
};

let isSubmitted = false;

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
    
    const questions = [
        { id: 1, label: 'Câu 1' },
        { id: 2, label: 'Câu 2' },
        { id: 3, label: 'Câu 3' },
        { id: 4, label: 'Câu 4' },
        { id: 5, label: 'Câu 5' },
        { id: 6, label: 'Câu 6' },
        { id: 7, label: 'Câu 7' },
        { id: 8, label: 'Câu 8' }
    ];
    
    questions.forEach(q => {
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
            const answer = document.getElementById(`answer-input-${q.id}`)?.value.trim();
            hasAnswer = answer && answer.length > 0;
            
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
            <div class="question-number-badge">${q.id}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToQuestion(q.id);
        sidebarContent.appendChild(item);
    });
    
    // Cập nhật thống kê
    if (!isSubmitted) {
        document.getElementById('answeredCount').textContent = answeredCount;
        document.getElementById('unansweredCount').textContent = unansweredCount;
    }
}

// Hàm cuộn đến câu hỏi
function scrollToQuestion(questionId) {
    const questionCards = document.querySelectorAll('.question-card');
    if (questionCards[questionId - 1]) {
        questionCards[questionId - 1].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight câu hỏi
        questionCards[questionId - 1].style.boxShadow = '0 0 20px rgba(168, 237, 234, 0.8)';
        setTimeout(() => {
            questionCards[questionId - 1].style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
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
    const userAnswer = document.getElementById(`answer-input-${questionNumber}`).value.trim();
    
    if (!userAnswer) {
        alert('Vui lòng nhập câu trả lời trước khi kiểm tra!');
        return;
    }
    
    const similarity = checkSimilarity(userAnswer, correctAnswers[questionNumber].keywords);
    const resultDiv = document.getElementById(`result-${questionNumber}`);
    
    let resultClass, resultText;
    
    if (similarity >= 60) {
        resultClass = 'correct';
        resultText = `🎉 Chính xác! Điểm: ${Math.round(similarity)}%`;
        results[questionNumber] = 1;
    } else if (similarity >= 30) {
        resultClass = 'partial';
        resultText = `⚠️ Được một phần! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${correctAnswers[questionNumber].fullAnswer}`;
        results[questionNumber] = 0.5;
    } else {
        resultClass = 'incorrect';
        resultText = `❌ Chưa chính xác! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${correctAnswers[questionNumber].fullAnswer}`;
        results[questionNumber] = 0;
    }
    
    resultDiv.className = `result-display ${resultClass}`;
    resultDiv.innerHTML = resultText;
}

// Hàm nộp bài và tính điểm tổng
function submitAll() {
    // Kiểm tra tất cả các câu
    let hasEmptyAnswer = false;
    
    for (let i = 1; i <= 8; i++) {
        const answer = document.getElementById(`answer-input-${i}`).value.trim();
        if (!answer) {
            hasEmptyAnswer = true;
        }
    }
    
    if (hasEmptyAnswer) {
        alert('⚠️ Vui lòng trả lời đầy đủ tất cả các câu hỏi trước khi nộp bài!');
        return;
    }
    
    // Kiểm tra từng câu
    for (let i = 1; i <= 8; i++) {
        checkAnswer(i);
    }
    
    // Đánh dấu đã nộp bài
    isSubmitted = true;
    
    // Tính tổng điểm
    let totalScore = 0;
    
    for (let i = 1; i <= 8; i++) {
        if (results[i] !== null) {
            totalScore += results[i];
        }
    }
    
    const finalScore = (totalScore / 8) * 100;
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
    
    // Lưu lịch sử
    saveToHistory(totalScore, 8);
    
    // Scroll đến phần hiển thị điểm
    setTimeout(() => {
        scoreDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
}

// Hàm lưu lịch sử
function saveToHistory(totalScore, totalQuestions) {
    // Tính số câu đúng (làm tròn)
    const correctCount = Math.round(totalScore);
    const incorrectCount = totalQuestions - correctCount;

    // Chuẩn bị dữ liệu chi tiết câu hỏi
    const questionsDetail = [];
    for (let i = 1; i <= 8; i++) {
        const userAnswer = document.getElementById(`answer-input-${i}`).value.trim();
        questionsDetail.push({
            question: Object.keys(correctAnswers)[i - 1] ? 
                document.querySelectorAll('.question-card')[i - 1]?.querySelector('.question-text')?.textContent || `Câu ${i}` : 
                `Câu ${i}`,
            type: 'tuluan',
            imageUrl: null,
            options: [],
            userAnswer: userAnswer,
            correctAnswer: correctAnswers[i]?.fullAnswer || '',
            isCorrect: results[i] === 1,
            isPartial: results[i] === 0.5
        });
    }

    // Tạo object lịch sử
    const historyData = {
        type: 'tuluan',
        totalQuestions: totalQuestions,
        correctCount: correctCount,
        incorrectCount: incorrectCount,
        percentage: Math.round((totalScore / totalQuestions) * 100),
        questions: questionsDetail
    };

    // Lưu vào localStorage thông qua HistoryManager
    if (typeof HistoryManager !== 'undefined') {
        HistoryManager.add(historyData);
    }
}

// Khởi tạo khi trang load
window.onload = initSidebar;
