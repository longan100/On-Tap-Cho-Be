// Dữ liệu câu hỏi Công Nghệ Lớp 3 - 26 câu
const questionsData = [
    {
        id: 1,
        question: "Vật liệu ống hút giấy, dây buộc, đất nặn, giấy bìa có tính chất?",
        hasImage: false,
        options: [
            { text: "Mềm" },
            { text: "Thấm nước" },
            { text: "Không thấm nước" }
        ],
        answer: 1
    },
    {
        id: 2,
        question: "Vật liệu nào không dùng làm thủ công?",
        hasImage: false,
        options: [
            { text: "Giấy màu" },
            { text: "Hồ dán" },
            { text: "Hoa" },
            { text: "Đáp án khác" }
        ],
        answer: 2
    },
    {
        id: 3,
        question: "Công dụng của giấy màu thủ công để làm thước kẻ bằng giấy là",
        hasImage: false,
        options: [
            { text: "Dán các phần của thước kẻ vào nhau" },
            { text: "Cắt giấy, bìa" },
            { text: "Trang trí thước kẻ" }
        ],
        answer: 2
    },
    {
        id: 4,
        question: "Sắp xếp thứ tự để làm đồ dùng học tập là: a) Tiến hành làm và trang trí sản phẩm. b) Tìm hiểu sản phẩm mẫu. c) Kiểm tra sản phẩm sau khi làm. d) Lựa chọn vật liệu và dụng cụ phù hợp.",
        hasImage: false,
        options: [
            { text: "a - b - c - d" },
            { text: "b - d - a - c" },
            { text: "c - b - d - a" },
            { text: "d - a - c - b" }
        ],
        answer: 1
    },
    {
        id: 5,
        question: "Sản phẩm thủ công được làm từ vật liệu nào?",
        hasImage: true,
        imageUrl: "../đề ôn môn công nghệ cuối hk 2 lớp 3/image1.png",
        options: [
            { text: "Sản phẩm làm từ giấy thủ công" },
            { text: "Sản phẩm làm từ bìa, dây buộc" },
            { text: "Sản phẩm làm từ giấy thủ công, dây buộc" }
        ],
        answer: 2
    },
    {
        id: 6,
        question: "Để làm thành biển báo giao thông thì cần phải làm gì?",
        hasImage: false,
        options: [
            { text: "Lắp ráp các vật liệu với nhau" },
            { text: "Sơn màu cho biển báo giao thông" },
            { text: "Trang trí cho biển báo giao thông" }
        ],
        answer: 0
    },
    {
        id: 7,
        question: "Biển báo giao thông có ý nghĩa gì?",
        hasImage: false,
        options: [
            { text: "Hướng dẫn người và phương tiện giao thông đúng luật" },
            { text: "Làm đồ trang trí" },
            { text: "Để chỉ dẫn cho động vật" }
        ],
        answer: 0
    },
    {
        id: 8,
        question: "Nên làm gì khi thấy biển báo giao thông?",
        hasImage: false,
        options: [
            { text: "Không quan tâm" },
            { text: "Vi phạm các quy định" },
            { text: "Tuân thủ đúng các quy định mà biển báo hướng dẫn" }
        ],
        answer: 2
    },
    {
        id: 9,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        hasImage: true,
        imageUrl: "../đề ôn môn công nghệ cuối hk 2 lớp 3/image2.png",
        options: [
            { text: "Cấm người đi bộ" },
            { text: "Đường dành cho xe thô sơ" },
            { text: "Đường cấm" }
        ],
        answer: 0
    },
    {
        id: 10,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        hasImage: true,
        imageUrl: "../đề ôn môn công nghệ cuối hk 2 lớp 3/image3.png",
        options: [
            { text: "Dành cho người tàn tật" },
            { text: "Dành cho người đi bộ" },
            { text: "Đường dành cho xe thô sơ" }
        ],
        answer: 2
    },
    {
        id: 11,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        hasImage: true,
        imageUrl: "../đề ôn môn công nghệ cuối hk 2 lớp 3/image4.png",
        options: [
            { text: "Giao nhau có tín hiệu đèn" },
            { text: "Cấm xe đạp" },
            { text: "Đi bộ" }
        ],
        answer: 0
    },
    {
        id: 12,
        question: "Ý nghĩa của tên biển báo 'Đường người đi bộ sang ngang' là:",
        hasImage: false,
        options: [
            { text: "Chỉ dẫn cho người đi bộ và người lái xe biết nơi dành cho người đi bộ sang ngang" },
            { text: "Bắt buộc các loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi" },
            { text: "Báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau" }
        ],
        answer: 0
    },
    {
        id: 13,
        question: "Đồ chơi nào an toàn khi chơi?",
        hasImage: false,
        options: [
            { text: "Chơi lắp ráp trong nhà" },
            { text: "Các bạn thả diều gần khu vực có đường điện cao thế" },
            { text: "Hai bạn chơi ô tô khi trời mưa" }
        ],
        answer: 0
    },
    {
        id: 14,
        question: "Đồ chơi phù hợp với lứa tuổi có lợi gì?",
        hasImage: false,
        options: [
            { text: "Giải trí" },
            { text: "Phát triển trí thông minh" },
            { text: "Cả hai đáp án trên đều đúng" }
        ],
        answer: 2
    },
    {
        id: 15,
        question: "Vật liệu nào dưới đây là vật liệu dùng để làm mô hình xe?",
        hasImage: false,
        options: [
            { text: "Túi giấy bóng" },
            { text: "Bút màu" },
            { text: "Kéo cắt giấy" }
        ],
        answer: 2
    },
    {
        id: 16,
        question: "Để làm gắn bánh xe vào trục bánh xe cần làm theo mấy bước?",
        hasImage: false,
        options: [
            { text: "Hai bước" },
            { text: "Ba bước" },
            { text: "Năm bước" }
        ],
        answer: 0
    },
    {
        id: 17,
        question: "Vì sao nên làm đồ chơi từ vật liệu đã qua sử dụng?",
        hasImage: false,
        options: [
            { text: "Để cho dễ làm" },
            { text: "Để trông đẹp hơn" },
            { text: "Để bảo vệ môi trường và tiết kiệm chi phí" }
        ],
        answer: 2
    },
    {
        id: 18,
        question: "Để sử dụng đồ chơi an toàn thì cần phải làm gì?",
        hasImage: false,
        options: [
            { text: "Cất đồ chơi sau khi chơi" },
            { text: "Không vứt pin đồ chơi bừa bãi" },
            { text: "Cả ba đáp án trên đều đúng" }
        ],
        answer: 2
    },
    {
        id: 19,
        question: "Cách chơi Rubik là",
        hasImage: false,
        options: [
            { text: "Xoay các mặt của khối rubik để đưa nó về hình dạng sao cho 6 mặt màu đồng nhất" },
            { text: "Chọn và xếp hình thích hợp vào khoảng trống của nó trên ngôi nhà" },
            { text: "Người chơi đứng vào khoảng trống trên thân máy bay, giữ máy bay ngang người sau đó chạy đua xem ai lái về đích trước" }
        ],
        answer: 0
    },
    {
        id: 20,
        question: "Các món đồ chơi không phù hợp với lứa tuổi học sinh là",
        hasImage: false,
        options: [
            { text: "Bộ đồ chơi xếp gỗ" },
            { text: "Bóng đá" },
            { text: "Đua xe mạo hiểm" }
        ],
        answer: 2
    },
    {
        id: 21,
        question: "Vật liệu và dụng cụ nào được chọn làm thước kẻ thẳng bằng giấy?",
        hasImage: false,
        options: [
            { text: "Giấy bìa, giấy thủ công, keo dán, thước, bút chì, kéo" },
            { text: "Bút lông, giấy màu, băng keo, màu, giấy thủ công" },
            { text: "Giấy màu, băng keo, màu, giấy thủ công" }
        ],
        answer: 0
    },
    {
        id: 22,
        question: "Khoanh tròn vào câu trả lời đúng nhất, ứng với yêu cầu chuẩn bị làm thước kẻ bằng giấy có độ dài không quá 20 cm.",
        hasImage: false,
        options: [
            { text: "2 hình chữ nhật có kích thước 3cm x 20cm" },
            { text: "2 hình chữ nhật có kích thước 3cm x 21cm" },
            { text: "4 hình chữ nhật có kích thước 3cm x 21cm" }
        ],
        answer: 1
    },
    {
        id: 23,
        question: "Biển báo cấm xe đi ngược chiều gồm có mấy bộ phận?",
        hasImage: false,
        options: [
            { text: "3 bộ phận" },
            { text: "5 bộ phận" },
            { text: "4 bộ phận" }
        ],
        answer: 0
    },
    {
        id: 24,
        question: "Quan sát những hình sau đã cho, đâu là biển báo hướng dẫn người đi bộ?",
        hasImage: true,
        imageUrl: "../đề ôn môn công nghệ cuối hk 2 lớp 3/image5.png",
        options: [
            { text: "A" },
            { text: "B" },
            { text: "C" },
            { text: "D" }
        ],
        answer: 1
    },
    {
        id: 25,
        question: "Bộ phận chính của mô hình xe đồ chơi gồm:",
        hasImage: false,
        options: [
            { text: "Đầu máy xe, càng mũi, đuôi xe" },
            { text: "Thân xe, trục bánh xe, bánh xe" },
            { text: "Buồng lái, càng mũi, bánh xe, đuôi xe" }
        ],
        answer: 1
    },
    {
        id: 26,
        question: "Khi chọn vật liệu làm thủ công, cần chọn loại có tính chất như thế nào?",
        hasImage: false,
        options: [
            { text: "Phù hợp và an toàn" },
            { text: "Tận dụng vật liệu tái chế" },
            { text: "Tất cả các đáp án" }
        ],
        answer: 2
    }
];

// Hàm xáo trộn mảng (Fisher-Yates shuffle)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Biến lưu trữ câu hỏi đã xáo trộn
let shuffledQuestions = [];
let currentFilter = 'all';
let quizSubmitted = false;

const form = document.getElementById('quizForm');
const resultBox = document.getElementById('resultBox');
const scoreDisplay = document.getElementById('scoreDisplay');
const resultMessage = document.getElementById('resultMessage');

// Hàm khởi tạo quiz
function initQuiz() {
    // Xáo trộn thứ tự câu hỏi
    shuffledQuestions = shuffleArray(questionsData);
    
    // Xáo trộn đáp án cho mỗi câu hỏi
    shuffledQuestions = shuffledQuestions.map(q => {
        const shuffledOptions = q.options.map((opt, idx) => ({ ...opt, originalIndex: idx }));
        const shuffled = shuffleArray(shuffledOptions);
        
        // Tìm vị trí mới của đáp án đúng
        let newAnswer;
        if (q.isMultiple) {
            // Với câu hỏi nhiều đáp án
            newAnswer = q.answer.map(correctIdx => 
                shuffled.findIndex(opt => opt.originalIndex === correctIdx)
            );
        } else {
            // Với câu hỏi đơn
            newAnswer = shuffled.findIndex(opt => opt.originalIndex === q.answer);
        }
        
        return {
            ...q,
            options: shuffled,
            answer: newAnswer
        };
    });
    
    renderQuestions();
}

// Hàm render câu hỏi
function renderQuestions() {
    form.innerHTML = '';
    
    shuffledQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        let html = `
            <span class="question-number">Câu ${index + 1}</span>
            <div class="question-text">${q.question}</div>
        `;
        
        // Thêm hình ảnh nếu có
        if (q.hasImage && q.imageUrl) {
            html += `<img src="${q.imageUrl}" class="question-image" alt="Hình minh họa câu hỏi ${index + 1}">`;
        }
        
        html += '<div class="options">';
        
        // Thêm các đáp án
        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex); // A, B, C, D...
            const inputType = q.isMultiple ? 'checkbox' : 'radio';
            
            html += `<label class="option">`;
            html += `<input type="${inputType}" name="q${index}" value="${optIndex}" onchange="updateSidebarPreview()">`;
            html += `<span class="option-text">${letter}. ${option.text}</span>`;
            html += `</label>`;
        });
        
        html += '</div>';
        questionCard.innerHTML = html;
        form.appendChild(questionCard);
    });
    
    // Khởi tạo sidebar preview
    updateSidebarPreview();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const totalQuestions = shuffledQuestions.length;
    quizSubmitted = true;
    
    // Kiểm tra từng câu hỏi
    shuffledQuestions.forEach((q, index) => {
        if (q.isMultiple) {
            // Câu hỏi nhiều đáp án (checkbox)
            const selectedAnswers = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`))
                .map(input => parseInt(input.value))
                .sort();
            
            const correctAnswers = [...q.answer].sort();
            const isCorrect = JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);
            
            q.userAnswer = selectedAnswers;
            q.isCorrect = isCorrect;
            
            if (isCorrect) {
                score++;
            }
            
            // Đánh dấu các đáp án
            document.querySelectorAll(`input[name="q${index}"]`).forEach(input => {
                const option = input.closest('.option');
                option.classList.add('disabled');
                
                if (correctAnswers.includes(parseInt(input.value))) {
                    option.classList.add('correct');
                } else if (input.checked) {
                    option.classList.add('incorrect');
                }
            });
        } else {
            // Câu hỏi đơn (radio button)
            const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
            
            q.userAnswer = selectedAnswer ? parseInt(selectedAnswer.value) : null;
            q.isCorrect = selectedAnswer && parseInt(selectedAnswer.value) === q.answer;
            
            if (q.isCorrect) {
                score++;
            }
            
            // Đánh dấu các đáp án
            document.querySelectorAll(`input[name="q${index}"]`).forEach(input => {
                const option = input.closest('.option');
                option.classList.add('disabled');
                
                if (parseInt(input.value) === q.answer) {
                    option.classList.add('correct');
                } else if (input.checked) {
                    option.classList.add('incorrect');
                }
            });
        }
    });
    
    // Hiển thị kết quả
    scoreDisplay.textContent = `${score}/${totalQuestions}`;
    
    let message = '';
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage === 100) {
        message = '🌟 Xuất sắc! Em làm bài hoàn hảo!';
    } else if (percentage >= 80) {
        message = '👏 Giỏi lắm! Em đã nắm vững kiến thức!';
    } else if (percentage >= 60) {
        message = '😊 Khá tốt! Cố gắng thêm nhé!';
    } else if (percentage >= 40) {
        message = '💪 Em cần ôn tập thêm một chút!';
    } else {
        message = '📚 Hãy xem lại bài học và thử lại nhé!';
    }
    
    resultMessage.textContent = message;
    resultBox.classList.add('show');
    
    // Vô hiệu hóa nút submit
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Đã nộp bài';
    }
    
    // Cập nhật sidebar
    updateSidebar();
    
    // Cuộn xuống kết quả
    setTimeout(() => {
        resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
});

function resetQuiz() {
    // Ẩn kết quả
    resultBox.classList.remove('show');
    
    // Kích hoạt lại nút submit
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Nộp bài';
    }
    
    // Đóng sidebar
    document.getElementById('sidebar').classList.remove('open');
    
    // Reset trạng thái
    quizSubmitted = false;
    currentFilter = 'all';
    
    // Khởi tạo lại quiz với câu hỏi và đáp án được xáo trộn mới
    initQuiz();
    
    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hàm toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Hàm cập nhật sidebar preview (trước khi nộp bài)
function updateSidebarPreview() {
    if (quizSubmitted) return;
    
    const sidebarContent = document.getElementById('sidebarContent');
    sidebarContent.innerHTML = '';
    
    let answeredCount = 0;
    let unansweredCount = 0;
    
    shuffledQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        
        let status = '';
        let icon = '';
        let hasAnswer = false;
        
        if (q.isMultiple) {
            const selectedAnswers = document.querySelectorAll(`input[name="q${index}"]:checked`);
            hasAnswer = selectedAnswers.length > 0;
        } else {
            const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
            hasAnswer = selectedAnswer !== null;
        }
        
        if (hasAnswer) {
            item.classList.add('correct');
            status = 'Đã trả lời';
            icon = '✅';
            answeredCount++;
        } else {
            item.classList.add('unanswered');
            status = 'Chưa trả lời';
            icon = '⚠️';
            unansweredCount++;
        }
        
        item.innerHTML = `
            <div class="question-number-badge">${index + 1}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToQuestion(index);
        sidebarContent.appendChild(item);
    });
    
    // Cập nhật thống kê
    document.getElementById('correctCount').textContent = answeredCount;
    document.getElementById('incorrectCount').textContent = '0';
    document.getElementById('unansweredCount').textContent = unansweredCount;
}

// Hàm cập nhật sidebar (sau khi nộp bài)
function updateSidebar() {
    const sidebarContent = document.getElementById('sidebarContent');
    sidebarContent.innerHTML = '';
    
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;
    
    shuffledQuestions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        
        let status = '';
        let icon = '';
        
        if (q.userAnswer === null || (Array.isArray(q.userAnswer) && q.userAnswer.length === 0)) {
            item.classList.add('unanswered');
            status = 'Chưa trả lời';
            icon = '⚠️';
            unansweredCount++;
        } else if (q.isCorrect) {
            item.classList.add('correct');
            status = 'Đúng';
            icon = '✅';
            correctCount++;
        } else {
            item.classList.add('incorrect');
            status = 'Sai';
            icon = '❌';
            incorrectCount++;
        }
        
        item.innerHTML = `
            <div class="question-number-badge">${index + 1}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToQuestion(index);
        sidebarContent.appendChild(item);
    });
    
    // Cập nhật thống kê
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('unansweredCount').textContent = unansweredCount;
    
    // Áp dụng filter hiện tại
    filterQuestions(currentFilter);
}

// Hàm lọc câu hỏi
function filterQuestions(filter) {
    currentFilter = filter;
    const items = document.querySelectorAll('.question-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Cập nhật trạng thái nút filter
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes('Tất cả') && filter === 'all') {
            btn.classList.add('active');
        } else if (btn.textContent.includes('Sai') && filter === 'incorrect') {
            btn.classList.add('active');
        } else if (btn.textContent.includes('Chưa') && filter === 'unanswered') {
            btn.classList.add('active');
        }
    });
    
    items.forEach(item => {
        if (filter === 'all') {
            item.style.display = 'flex';
        } else if (filter === 'incorrect' && item.classList.contains('incorrect')) {
            item.style.display = 'flex';
        } else if (filter === 'unanswered' && item.classList.contains('unanswered')) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Hàm cuộn đến câu hỏi
function scrollToQuestion(index) {
    const questionCards = document.querySelectorAll('.question-card');
    if (questionCards[index]) {
        questionCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight câu hỏi
        questionCards[index].style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6)';
        setTimeout(() => {
            questionCards[index].style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 2000);
    }
    
    // Đóng sidebar trên mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// Khởi tạo quiz khi trang tải
window.onload = initQuiz;
