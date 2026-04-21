// Dữ liệu câu hỏi
const questions = [
    {
        id: 1,
        question: "Vật liệu ống hút giấy, dây buộc, đất nặn, giấy bìa có tính chất?",
        image: null,
        options: ["A. Mềm.", "B. Thấm nước.", "C. Không thấm nước."],
        answer: 1
    },
    {
        id: 2,
        question: "Vật liệu nào không dùng làm thủ công?",
        image: null,
        options: ["A. Giấy màu", "B. Hồ dán", "C. Hoa", "D. Đáp án khác"],
        answer: 2
    },
    {
        id: 3,
        question: "Công dụng của giấy màu thủ công để làm thước kẻ bằng giấy là",
        image: null,
        options: ["A. dán các phần của thước kẻ vào nhau.", "B. cắt giấy, bìa.", "C. trang trí thước kẻ."],
        answer: 2
    },
    {
        id: 4,
        question: "Sắp xếp thứ tự để làm đồ dùng học tập là:<br>" + 
                  "A. Tiến hành làm và trang trí sản phẩm.<br>" +
                  "B. Tìm hiểu sản phẩm mẫu.<br>" +
                  "C. Kiểm tra sản phẩm sau khi làm.<br>" +
                  "D. Lựa chọn vật liệu và dụng cụ phù hợp.",
        image: null,
        options: ["A. a - b - c - d.", "B. b - d - a - c.", "C. c - b - d - a.", "D. d - a - c - b."],
        answer: 1
    },
    {
        id: 5,
        question: "Sản phẩm thủ công dưới đây được làm từ vật liệu nào?",
        image: "img1",
        options: ["A. sản phẩm làm từ giấy thủ công.", "B. sản phẩm làm từ bìa, dây buộc.", "C. sản phẩm làm từ giấy thủ công, dây buộc."],
        answer: 2
    },
    {
        id: 6,
        question: "Để làm thành biển báo giao thông thì cần phải làm gì?",
        image: null,
        options: ["A. Lắp ráp các vật liệu với nhau", "B. Sơn màu cho biển báo giao thông", "C. Trang trí cho biển báo giao thông"],
        answer: 0
    },
    {
        id: 7,
        question: "Biển báo giao thông có ý nghĩa gì?",
        image: null,
        options: ["A. Hướng dẫn người và phương tiện giao thông đúng luật", "B. Làm đồ trang trí", "C. Để chỉ dẫn cho động vật"],
        answer: 0
    },
    {
        id: 8,
        question: "Nên làm gì khi thấy biển báo giao thông?",
        image: null,
        options: ["A. Không quan tâm", "B. Vi phạm các quy định", "C. Tuân thủ đúng các quy định mà biển báo hướng dẫn"],
        answer: 2
    },
    {
        id: 9,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img2",
        options: ["A. Cấm người đi bộ.", "B. Đường dành cho xe thô sơ.", "C. Đường cấm."],
        answer: 0
    },
    {
        id: 10,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img3",
        options: ["A. Dành cho người tàn tật.", "B. Dành cho người đi bộ.", "C. Đường dành cho xe thô sơ."],
        answer: 2
    },
    {
        id: 11,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img4",
        options: ["A. Giao nhau có tín hiệu đèn.", "B. Cấm xe đạp.", "C. Đi bộ."],
        answer: 0
    },
    {
        id: 12,
        question: "Ý nghĩa của tên biển báo Đường người đi bộ sang ngang là:",
        image: null,
        options: [
            "A. Chỉ dẫn cho người đi bộ và người lái xe biết nơi dành cho người đi bộ sang ngang.",
            "B. Bắt buộc các loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi và cấm các xe cơ giới kể cả xe gắn máy, các xe được ưu tiên theo quy định đi vào đường đã đặt biển này.",
            "C. Báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau."
        ],
        answer: 0
    },
    {
        id: 13,
        question: "Đồ chơi nào an toàn khi chơi?",
        image: null,
        options: ["A. Chơi lắp ráp trong nhà", "B. Các bạn thả diều gần khu vực có đường điện cao thế", "C. Hai bạn chơi ô tô khi trời mưa"],
        answer: 0
    },
    {
        id: 14,
        question: "Đồ chơi phù hợp với lứa tuổi có lợi gì?",
        image: null,
        options: ["A. Giải trí", "B. Phát triển trí thông minh", "C. Cả hai đáp án trên đều đúng"],
        answer: 2
    },
    {
        id: 15,
        question: "Vật liệu nào dưới đây là vật liệu dùng để làm mô hình xe?",
        image: null,
        options: ["A. Túi giấy bóng", "B. Bút màu", "C. Kéo cắt giấy"],
        answer: 2
    },
    {
        id: 16,
        question: "Để làm gắn bánh xe vào trục bánh xe cần làm theo mấy bước?",
        image: null,
        options: ["A. Hai bước", "B. Ba bước", "C. Năm bước"],
        answer: 0
    },
    {
        id: 17,
        question: "Vì sao nên làm đồ chơi từ vật liệu đã qua sử dụng?",
        image: null,
        options: ["A. Để cho dễ làm", "B. Để trông đẹp hơn", "C. Để bảo vệ môi trường và tiết kiệm chi phí"],
        answer: 2
    },
    {
        id: 18,
        question: "Để sử dụng đồ chơi an toàn thì cần phải làm gì?",
        image: null,
        options: ["A. Cất đồ chơi sau khi chơi", "B. Không vứt pin đồ chơi bừa bãi", "C. Cả ba đáp án trên đều đúng"],
        answer: 2
    },
    {
        id: 19,
        question: "Cách chơi Rubik là",
        image: null,
        options: [
            "A. xoay các mặt của khối ru bích để đưa nó về để nó về hình dạng sao cho 6 mặt màu đồng nhất.",
            "B. chọn và xếp hình thích hợp vào khoảng trống của nó trên ngôi nhà.",
            "C. người chơi đứng vào khoảng trống trên thân máy bay, giữ máy bay ngang người sau đó chạy đua xem ai lái về đích trước."
        ],
        answer: 0
    },
    {
        id: 20,
        question: "Các món đồ chơi không phù hợp với lứa tuổi học sinh là",
        image: null,
        options: ["A. bộ đồ chơi xếp gỗ.", "B. bóng đá.", "C. đua xe mạo hiểm."],
        answer: 2
    },
    {
        id: 21,
        question: "Vật liệu và dụng cụ nào được chọn làm thước kẻ thẳng bằng giấy?",
        image: null,
        options: [
            "A. giấy bìa, giấy thủ công, keo dán, thước, bút chì, kéo.",
            "B. bút lông, giấy màu, băng keo, màu, giấy thủ công.",
            "C. giấy màu, băng keo, màu, giấy thủ công."
        ],
        answer: 0
    },
    {
        id: 22,
        question: "Khoanh tròn vào câu trả lời đúng nhất, ứng với yêu cầu chuẩn bị làm thước kẻ bằng giấy có độ dài không quá 20 cm.",
        image: null,
        options: [
            "A. 2 hình chữ nhật có kích thước 3cm x 20cm.",
            "B. 2 hình chữ nhật có kích thước 3cm x 21cm.",
            "C. 4 hình chữ nhật có kích thước 3cm x 21cm."
        ],
        answer: 1
    },
    {
        id: 23,
        question: "Biển báo cấm xe đi ngược chiều gồm có mấy bộ phận.",
        image: null,
        options: ["A. 3 bộ phận.", "B. 5 bộ phận.", "C. 4 bộ phận."],
        answer: 2
    },
    {
        id: 24,
        question: "Quan sát những hình sau đã cho, đâu là biển báo hướng dẫn người đi bộ.",
        image: "img5",
        options: ["A. a", "B. b", "C. c", "D. d"],
        answer: 1
    },
    {
        id: 25,
        question: "Bộ phận chính của mô hình xe đồ chơi gồm:",
        image: null,
        options: [
            "A. Đầu máy xe, càng mũi, đuôi xe.",
            "B. Thân xe, trục bánh xe, bánh xe.",
            "C. Buồng lái, càng mũi, bánh xe, đuôi xe."
        ],
        answer: 1
    },
    {
        id: 26,
        question: "Khi chọn vật liệu làm thủ công, cần chọn loại có tính chất như thế nào?",
        image: null,
        options: ["A. Phù hợp và an toàn.", "B. Tận dụng vật liệu tái chế.", "C. Tất cả các đáp án"],
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

// Biến trạng thái quiz
let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let answered = false;
let shuffledQuestions = [];

// Hàm khởi tạo quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    answered = false;
    shuffledQuestions = shuffleArray(questions);
    showQuestion();
    updateProgress();
}

// Hàm hiển thị câu hỏi
function showQuestion() {
    answered = false;
    const question = shuffledQuestions[currentQuestion];
    
    // Cập nhật đếm câu hỏi
    document.getElementById('questionCounter').textContent = 
        `Câu ${currentQuestion + 1} / ${questions.length}`;
    
    // Hiển thị hình ảnh nếu có
    const imageContainer = document.getElementById('questionImage');
    if (question.image && typeof images !== 'undefined' && images[question.image]) {
        imageContainer.innerHTML = `<img src="${images[question.image]}" alt="Hình ảnh câu hỏi">`;
    } else {
        imageContainer.innerHTML = '';
    }
    
    // Hiển thị nội dung câu hỏi
    document.getElementById('questionText').innerHTML = question.question;
    
    // Hiển thị các đáp án
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(optionDiv);
    });
    
    // Ẩn nút câu tiếp theo
    document.getElementById('nextBtn').classList.remove('show');
}

// Hàm kiểm tra đáp án
function checkAnswer(selectedIndex) {
    if (answered) return;
    answered = true;
    
    const question = shuffledQuestions[currentQuestion];
    const options = document.querySelectorAll('.option');
    
    // Lưu đáp án của ngườdùng
    userAnswers.push({
        questionId: question.id,
        question: question.question,
        userAnswer: selectedIndex,
        correctAnswer: question.answer,
        isCorrect: selectedIndex === question.answer
    });
    
    // Kiểm tra đúng/sai
    if (selectedIndex === question.answer) {
        score++;
        options[selectedIndex].classList.add('correct');
    } else {
        options[selectedIndex].classList.add('wrong');
        options[question.answer].classList.add('correct');
    }
    
    // Vô hiệu hóa các đáp án
    options.forEach(option => option.classList.add('disabled'));
    
    // Hiển thị nút câu tiếp theo
    document.getElementById('nextBtn').classList.add('show');
}

// Hàm chuyển sang câu hỏi tiếp theo
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

// Hàm cập nhật thanh tiến trình
function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Hàm hiển thị kết quả
function showResults() {
    document.getElementById('quizScreen').classList.add('hide');
    document.getElementById('resultScreen').classList.add('show');
    
    // Hiển thị điểm
    document.getElementById('scoreDisplay').textContent = 
        `${score} / ${questions.length}`;
    
    // Tính phần trăm
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('percentage').textContent = `${percentage}%`;
    
    // Nhận xét
    let comment = '';
    if (percentage >= 90) {
        comment = 'Xuất sắc! Bạn đã nắm vững kiến thức!';
    } else if (percentage >= 70) {
        comment = 'Rất tốt! Bạn đã hiểu bài khá tốt!';
    } else if (percentage >= 50) {
        comment = 'Khá! Bạn cần ôn tập thêm một chút.';
    } else {
        comment = 'Bạn cần ôn tập lại bài kỹ hơn nhé!';
    }
    document.getElementById('comment').textContent = comment;
    
    // Hiển thị các câu trả lời sai
    const wrongAnswers = userAnswers.filter(ans => !ans.isCorrect);
    const wrongContainer = document.getElementById('wrongAnswers');
    
    if (wrongAnswers.length > 0) {
        let html = '<h3>Các câu trả lời sai:</h3>';
        wrongAnswers.forEach(wrong => {
            html += `
                <div class="wrong-item">
                    <span class="q-num">Câu ${wrong.questionId}:</span> ${wrong.question}<br>
                    <span class="user-ans">Bạn chọn: ${String.fromCharCode(65 + wrong.userAnswer)}</span><br>
                    <span class="correct-ans">Đáp án đúng: ${String.fromCharCode(65 + wrong.correctAnswer)}</span>
                </div>
            `;
        });
        wrongContainer.innerHTML = html;
    } else {
        wrongContainer.innerHTML = '<h3>Chúc mừng! Bạn đã trả lời đúng tất cả các câu!</h3>';
    }
}

// Hàm làm lại quiz
function restartQuiz() {
    document.getElementById('quizScreen').classList.remove('hide');
    document.getElementById('resultScreen').classList.remove('show');
    initQuiz();
}

// Khởi tạo quiz khi trang tải
window.onload = initQuiz;
