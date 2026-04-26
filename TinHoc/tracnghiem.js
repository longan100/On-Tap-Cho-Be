// Dữ liệu câu hỏi gốc
const questionsData = [
    {
        id: 1,
        question: "Biểu tượng của phần mềm trình chiếu là?",
        hasImage: true,
        options: [
            { text: "A", image: "images/hinh1.png" },
            { text: "B", image: "images/hinh2.png" },
            { text: "C", image: "images/hinh3.png" },
            { text: "D", image: "images/hinh4.png" }
        ],
        answer: 1
    },
    {
        id: 2,
        question: "Nút lệnh nào sau đây dùng để chọn cỡ chữ?",
        hasImage: true,
        options: [
            { text: "A", image: "images/hinh5.png" },
            { text: "B", image: "images/hinh6.png" },
            { text: "C", image: "images/hinh7.png" }
        ],
        answer: 2
    },
    {
        id: 3,
        question: "Nếu tín hiệu đèn giao thông dành cho người đi bộ hiện màu gì thì em có thể sang đường?",
        hasImage: false,
        options: [
            { text: "Màu xanh" },
            { text: "Màu đỏ" },
            { text: "Màu vàng" },
            { text: "Màu tím" }
        ],
        answer: 0
    },
    {
        id: 4,
        question: "Để chèn được thông tin dạng chữ, số, hình ảnh vào trang trình chiếu, em chọn thẻ nào sau đây?",
        hasImage: false,
        options: [
            { text: "Home" },
            { text: "Design" },
            { text: "Slide Show" },
            { text: "Insert" }
        ],
        answer: 3
    },
    {
        id: 5,
        question: "Để khởi động phần mềm Word em thực hiện thao tác nào?",
        hasImage: true,
        options: [
            { text: "Nháy đúp chuột vào biểu tượng", image: "images/hinh8.png" },
            { text: "Nháy đúp chuột vào biểu tượng", image: "images/hinh9.png" },
            { text: "Nháy đúp chuột vào biểu tượng", image: "images/hinh10.png" }
        ],
        answer: 0
    },
    {
        id: 6,
        question: "Đâu không phải thông tin cá nhân?",
        hasImage: false,
        options: [
            { text: "Địa chỉ của gia đình em" },
            { text: "Số căn cước công dân của bố em" },
            { text: "Số điện thoại của mẹ" },
            { text: "Số điện thoại của công an phường" }
        ],
        answer: 3
    },
    {
        id: 7,
        question: '"Nhấn và giữ nút trái chuột, đồng thời di chuyển chuột đến vị trí khác rồi thả nút trái chuột ra" là mô tả thao tác nào?',
        hasImage: false,
        options: [
            { text: "Kéo thả chuột" },
            { text: "Nháy chuột" },
            { text: "Lăn nút cuộn" },
            { text: "Di chuyển chuột" }
        ],
        answer: 0
    },
    {
        id: 8,
        question: "Máy tính có thể hỗ trợ em làm những việc gì dưới đây? (Chọn nhiều đáp án)",
        hasImage: false,
        isMultiple: true,
        options: [
            { text: "Nhặt rau phụ mẹ nấu cơm tối" },
            { text: "Chơi bóng đá cùng bạn ngoài sân bóng" },
            { text: "Học bài online" },
            { text: "Tạo bài trình chiếu" }
        ],
        answer: [2, 3]
    },
    {
        id: 9,
        question: "Một bài trình chiếu thường bao gồm các thành phần nào?",
        hasImage: false,
        options: [
            { text: "Văn bản, hình ảnh" },
            { text: "Âm thanh, video" },
            { text: "Các trang chiếu được đánh số thứ tự" },
            { text: "Tất cả các phương án trên" }
        ],
        answer: 3
    },
    {
        id: 10,
        question: "Phần mềm trình chiếu thường được dùng để:",
        hasImage: false,
        options: [
            { text: "Tạo bảng tính tự động" },
            { text: "Tạo các bài thuyết trình, giảng dạy, quảng cáo" },
            { text: "Soạn thảo văn bản dài" },
            { text: "Vẽ tranh nghệ thuật" }
        ],
        answer: 1
    },
    {
        id: 11,
        question: "Trang đầu tiên trong bài trình chiếu thường là:",
        hasImage: false,
        options: [
            { text: "Trang nội dung" },
            { text: "Trang tiêu đề" },
            { text: "Trang kết thúc" },
            { text: "Trang ảnh" }
        ],
        answer: 1
    },
    {
        id: 12,
        question: "Khi chuông báo thức reo, em thức dậy. Điều kiện ở đây là gì?",
        hasImage: false,
        options: [
            { text: "Em thức dậy" },
            { text: "Em ngủ tiếp" },
            { text: "Chuông báo thức reo" },
            { text: "Trời sáng" }
        ],
        answer: 2
    },
    {
        id: 13,
        question: 'Trong câu "Nếu trời mưa thì em mặc áo mưa", đâu là điều kiện?',
        hasImage: false,
        options: [
            { text: "Em mặc áo mưa" },
            { text: "Trời mưa" },
            { text: "Trời nắng" },
            { text: "Em đi học" }
        ],
        answer: 1
    },
    {
        id: 14,
        question: "Phát biểu nào sau đây không phải là công việc thực hiện theo điều kiện?",
        hasImage: false,
        options: [
            { text: "Nếu đến ngã tư thì dừng lại" },
            { text: "Nếu trời nắng thì đi đá bóng" },
            { text: "Em đang học bài" },
            { text: "Nếu hết bút thì mua bút mới" }
        ],
        answer: 2
    },
    {
        id: 15,
        question: '"Nếu em chăm chỉ học hành thì…". Điền vào vế sau sao cho hợp lí:',
        hasImage: false,
        options: [
            { text: "Em sẽ đạt học sinh giỏi" },
            { text: "Em sẽ là học sinh trung bình" },
            { text: "Em sẽ được cô giáo khen" },
            { text: "Cả A và C đều đúng" }
        ],
        answer: 3
    },
    {
        id: 16,
        question: "Những công việc em thường làm mỗi buổi sáng trước khi đi học theo đúng thứ tự:",
        hasImage: false,
        options: [
            { text: "Thức dậy → Vệ sinh cá nhân → Ăn sáng → Thay quần áo → Đi học" },
            { text: "Thức dậy → Ăn sáng → Thay quần áo → Đi học" },
            { text: "Ăn sáng → Thay quần áo → Vệ sinh cá nhân → Đi học" },
            { text: "Thức dậy → Ăn sáng → Thay quần áo → Vệ sinh cá nhân → Đi học" }
        ],
        answer: 0
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
            <div class="options">
        `;
        
        // Thêm các đáp án
        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex); // A, B, C, D...
            const inputType = q.isMultiple ? 'checkbox' : 'radio';
            
            html += `<label class="option">`;
            html += `<input type="${inputType}" name="q${index}" value="${optIndex}">`;
            html += `<span class="option-text">${letter}. `;
            
            if (q.hasImage && option.image) {
                html += `${option.text} <img src="${option.image}" class="question-image" alt="${option.text}">`;
            } else {
                html += option.text;
            }
            
            html += `</span></label>`;
        });
        
        html += '</div>';
        questionCard.innerHTML = html;
        form.appendChild(questionCard);
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let score = 0;
    const totalQuestions = shuffledQuestions.length;
    
    // Kiểm tra từng câu hỏi
    shuffledQuestions.forEach((q, index) => {
        if (q.isMultiple) {
            // Câu hỏi nhiều đáp án (checkbox)
            const selectedAnswers = Array.from(document.querySelectorAll(`input[name="q${index}"]:checked`))
                .map(input => parseInt(input.value))
                .sort();
            
            const correctAnswers = [...q.answer].sort();
            const isCorrect = JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);
            
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
            
            if (selectedAnswer && parseInt(selectedAnswer.value) === q.answer) {
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
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đã nộp bài';
    
    // Cuộn lên đầu trang để xem kết quả
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function resetQuiz() {
    // Ẩn kết quả
    resultBox.classList.remove('show');
    
    // Kích hoạt lại nút submit
    const submitBtn = form.querySelector('.submit-btn');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Nộp bài';
    
    // Khởi tạo lại quiz với câu hỏi và đáp án được xáo trộn mới
    initQuiz();
    
    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Khởi tạo quiz khi trang tải
window.onload = initQuiz;