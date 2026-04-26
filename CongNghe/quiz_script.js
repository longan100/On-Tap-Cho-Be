// Dữ liệu câu hỏi
const questionsData = [
    {
        id: 1,
        question: "Vật liệu ống hút giấy, dây buộc, đất nặn, giấy bìa có tính chất?",
        image: null,
        options: ["Mềm.", "Thấm nước.", "Không thấm nước."],
        answer: 1
    },
    {
        id: 2,
        question: "Vật liệu nào không dùng làm thủ công?",
        image: null,
        options: ["Giấy màu", "Hồ dán", "Hoa", "Đáp án khác"],
        answer: 2
    },
    {
        id: 3,
        question: "Công dụng của giấy màu thủ công để làm thước kẻ bằng giấy là",
        image: null,
        options: ["dán các phần của thước kẻ vào nhau.", "cắt giấy, bìa.", "trang trí thước kẻ."],
        answer: 2
    },
    {
        id: 4,
        question: "Sắp xếp thứ tự để làm đồ dùng học tập là:<br>A. Tiến hành làm và trang trí sản phẩm.<br>B. Tìm hiểu sản phẩm mẫu.<br>C. Kiểm tra sản phẩm sau khi làm.<br>D. Lựa chọn vật liệu và dụng cụ phù hợp.",
        image: null,
        options: ["a - b - c - d.", "b - d - a - c.", "c - b - d - a.", "d - a - c - b."],
        answer: 1
    },
    {
        id: 5,
        question: "Sản phẩm thủ công dưới đây được làm từ vật liệu nào?",
        image: "img1",
        options: ["sản phẩm làm từ giấy thủ công.", "sản phẩm làm từ bìa, dây buộc.", "sản phẩm làm từ giấy thủ công, dây buộc."],
        answer: 2
    },
    {
        id: 6,
        question: "Để làm thành biển báo giao thông thì cần phải làm gì?",
        image: null,
        options: ["Lắp ráp các vật liệu với nhau", "Sơn màu cho biển báo giao thông", "Trang trí cho biển báo giao thông"],
        answer: 0
    },
    {
        id: 7,
        question: "Biển báo giao thông có ý nghĩa gì?",
        image: null,
        options: ["Hướng dẫn người và phương tiện giao thông đúng luật", "Làm đồ trang trí", "Để chỉ dẫn cho động vật"],
        answer: 0
    },
    {
        id: 8,
        question: "Nên làm gì khi thấy biển báo giao thông?",
        image: null,
        options: ["Không quan tâm", "Vi phạm các quy định", "Tuân thủ đúng các quy định mà biển báo hướng dẫn"],
        answer: 2
    },
    {
        id: 9,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img2",
        options: ["Cấm người đi bộ.", "Đường dành cho xe thô sơ.", "Đường cấm."],
        answer: 0
    },
    {
        id: 10,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img3",
        options: ["Dành cho người tàn tật.", "Dành cho người đi bộ.", "Đường dành cho xe thô sơ."],
        answer: 2
    },
    {
        id: 11,
        question: "Ý nghĩa biển báo trong hình dưới đây",
        image: "img4",
        options: ["Giao nhau có tín hiệu đèn.", "Cấm xe đạp.", "Đi bộ."],
        answer: 0
    },
    {
        id: 12,
        question: "Ý nghĩa của tên biển báo Đường người đi bộ sang ngang là:",
        image: null,
        options: [
            "Chỉ dẫn cho người đi bộ và người lái xe biết nơi dành cho người đi bộ sang ngang.",
            "Bắt buộc các loại xe thô sơ (kể cả xe của người tàn tật) và người đi bộ phải dùng đường dành riêng này để đi và cấm các xe cơ giới kể cả xe gắn máy, các xe được ưu tiên theo quy định đi vào đường đã đặt biển này.",
            "Báo cho các loại xe (thô sơ và cơ giới) phải chạy vòng theo đảo an toàn ở nơi đường giao nhau."
        ],
        answer: 0
    },
    {
        id: 13,
        question: "Đồ chơi nào an toàn khi chơi?",
        image: null,
        options: ["Chơi lắp ráp trong nhà", "Các bạn thả diều gần khu vực có đường điện cao thế", "Hai bạn chơi ô tô khi trời mưa"],
        answer: 0
    },
    {
        id: 14,
        question: "Đồ chơi phù hợp với lứa tuổi có lợi gì?",
        image: null,
        options: ["Giải trí", "Phát triển trí thông minh", "Cả hai đáp án trên đều đúng"],
        answer: 2
    },
    {
        id: 15,
        question: "Vật liệu nào dưới đây là vật liệu dùng để làm mô hình xe?",
        image: null,
        options: ["Túi giấy bóng", "Bút màu", "Kéo cắt giấy"],
        answer: 2
    },
    {
        id: 16,
        question: "Để làm gắn bánh xe vào trục bánh xe cần làm theo mấy bước?",
        image: null,
        options: ["Hai bước", "Ba bước", "Năm bước"],
        answer: 0
    },
    {
        id: 17,
        question: "Vì sao nên làm đồ chơi từ vật liệu đã qua sử dụng?",
        image: null,
        options: ["Để cho dễ làm", "Để trông đẹp hơn", "Để bảo vệ môi trường và tiết kiệm chi phí"],
        answer: 2
    },
    {
        id: 18,
        question: "Để sử dụng đồ chơi an toàn thì cần phải làm gì?",
        image: null,
        options: ["Cất đồ chơi sau khi chơi", "Không vứt pin đồ chơi bừa bãi", "Cả ba đáp án trên đều đúng"],
        answer: 2
    },
    {
        id: 19,
        question: "Cách chơi Rubik là",
        image: null,
        options: [
            "xoay các mặt của khối ru bích để đưa nó về để nó về hình dạng sao cho 6 mặt màu đồng nhất.",
            "chọn và xếp hình thích hợp vào khoảng trống của nó trên ngôi nhà.",
            "người chơi đứng vào khoảng trống trên thân máy bay, giữ máy bay ngang người sau đó chạy đua xem ai lái về đích trước."
        ],
        answer: 0
    },
    {
        id: 20,
        question: "Các món đồ chơi không phù hợp với lứa tuổi học sinh là",
        image: null,
        options: ["bộ đồ chơi xếp gỗ.", "bóng đá.", "đua xe mạo hiểm."],
        answer: 2
    },
    {
        id: 21,
        question: "Vật liệu và dụng cụ nào được chọn làm thước kẻ thẳng bằng giấy?",
        image: null,
        options: [
            "giấy bìa, giấy thủ công, keo dán, thước, bút chì, kéo.",
            "bút lông, giấy màu, băng keo, màu, giấy thủ công.",
            "giấy màu, băng keo, màu, giấy thủ công."
        ],
        answer: 0
    },
    {
        id: 22,
        question: "Khoanh tròn vào câu trả lời đúng nhất, ứng với yêu cầu chuẩn bị làm thước kẻ bằng giấy có độ dài không quá 20 cm.",
        image: null,
        options: [
            "2 hình chữ nhật có kích thước 3cm x 20cm.",
            "2 hình chữ nhật có kích thước 3cm x 21cm.",
            "4 hình chữ nhật có kích thước 3cm x 21cm."
        ],
        answer: 1
    },
    {
        id: 23,
        question: "Biển báo cấm xe đi ngược chiều gồm có mấy bộ phận.",
        image: null,
        options: ["3 bộ phận.", "5 bộ phận.", "4 bộ phận."],
        answer: 0
    },
    {
        id: 24,
        question: "Quan sát những hình sau đã cho, đâu là biển báo hướng dẫn người đi bộ.",
        image: "img5",
        options: ["a", "b", "c", "d"],
        answer: 1
    },
    {
        id: 25,
        question: "Bộ phận chính của mô hình xe đồ chơi gồm:",
        image: null,
        options: [
            "Đầu máy xe, càng mũi, đuôi xe.",
            "Thân xe, trục bánh xe, bánh xe.",
            "Buồng lái, càng mũi, bánh xe, đuôi xe."
        ],
        answer: 1
    },
    {
        id: 26,
        question: "Khi chọn vật liệu làm thủ công, cần chọn loại có tính chất như thế nào?",
        image: null,
        options: ["Phù hợp và an toàn.", "Tận dụng vật liệu tái chế.", "Tất cả các đáp án"],
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

// Biến lưu trữ câu hỏi đã xáo trộn và mapping đáp án
let shuffledQuestions = [];
let answerMapping = {}; // Lưu vị trí đáp án đúng sau khi xáo trộn

// Hàm khởi tạo quiz
function initQuiz() {
    // Xáo trộn thứ tự câu hỏi
    shuffledQuestions = shuffleArray(questionsData);
    
    // Xáo trộn đáp án cho mỗi câu hỏi
    shuffledQuestions = shuffledQuestions.map(q => {
        const shuffledOptions = q.options.map((opt, idx) => ({ text: opt, originalIndex: idx }));
        const shuffled = shuffleArray(shuffledOptions);
        
        // Tìm vị trí mới của đáp án đúng
        const newCorrectIndex = shuffled.findIndex(opt => opt.originalIndex === q.answer);
        
        return {
            ...q,
            options: shuffled.map(opt => opt.text),
            answer: newCorrectIndex
        };
    });
    
    renderQuestions();
}

// Hàm render câu hỏi
function renderQuestions() {
    const form = document.getElementById('quizForm');
    form.innerHTML = '';
    
    shuffledQuestions.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        let html = `
            <span class="question-number">Câu ${index + 1}</span>
            <div class="question-text">${q.question}</div>
        `;
        
        // Thêm hình ảnh nếu có
        if (q.image && typeof images !== 'undefined' && images[q.image]) {
            html += `<img src="${images[q.image]}" class="question-image" alt="Hình ảnh câu hỏi">`;
        }
        
        html += '<div class="options">';
        
        // Thêm các đáp án
        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex); // A, B, C, D...
            html += `
                <label class="option">
                    <input type="radio" name="q${index}" value="${optIndex}">
                    <span class="option-text">${letter}. ${option}</span>
                </label>
            `;
        });
        
        html += '</div>';
        questionCard.innerHTML = html;
        form.appendChild(questionCard);
    });
}

// Hàm nộp bài
function submitQuiz() {
    let score = 0;
    const totalQuestions = shuffledQuestions.length;
    
    // Kiểm tra từng câu hỏi
    shuffledQuestions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        const options = document.querySelectorAll(`input[name="q${index}"]`);
        
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.answer) {
            score++;
        }
        
        // Đánh dấu các đáp án
        options.forEach((input, optIndex) => {
            const option = input.closest('.option');
            option.classList.add('disabled');
            
            if (optIndex === q.answer) {
                option.classList.add('correct');
            } else if (input.checked) {
                option.classList.add('incorrect');
            }
        });
    });
    
    // Hiển thị kết quả
    document.getElementById('scoreDisplay').textContent = `${score}/${totalQuestions}`;
    
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
    
    document.getElementById('resultMessage').textContent = message;
    document.getElementById('resultBox').classList.add('show');
    
    // Vô hiệu hóa nút submit
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Đã nộp bài';
    
    // Cuộn lên đầu trang để xem kết quả
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Hàm làm lại quiz
function resetQuiz() {
    // Ẩn kết quả
    document.getElementById('resultBox').classList.remove('show');
    
    // Kích hoạt lại nút submit
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Nộp bài';
    
    // Khởi tạo lại quiz với câu hỏi và đáp án được xáo trộn mới
    initQuiz();
    
    // Cuộn lên đầu trang
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Khởi tạo quiz khi trang tải
window.onload = initQuiz;