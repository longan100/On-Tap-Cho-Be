// Dữ liệu câu hỏi trắc nghiệm Công Nghệ - 26 câu
const tracnghiemData = [
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

// Dữ liệu câu hỏi tự luận - 8 câu
const tuluanData = [
    {
        id: 1,
        question: "Em hãy kể tên các bước để làm mô hình biển báo giao thông.",
        keywords: ['bước 1', 'tìm hiểu', 'sản phẩm mẫu', 'bước 2', 'lựa chọn', 'vật liệu', 'dụng cụ', 'bước 3', 'làm đế', 'biển báo', 'cột', 'bước 4', 'lắp ráp', 'kiểm tra'],
        fullAnswer: 'Bước 1: Tìm hiểu sản phẩm mẫu. Bước 2: Lựa chọn vật liệu, dụng cụ. Bước 3: Làm đế, làm biển báo và làm cột biển báo. Bước 4: Lắp ráp, kiểm tra mô hình.'
    },
    {
        id: 2,
        question: "Khi lắp ráp mô hình biển báo giao thông đường bộ, em cần làm thế nào?",
        keywords: ['dán', 'mặt sau', 'biển báo', 'thân', 'lắp ráp', 'mấu cắm', 'kiểm tra'],
        fullAnswer: 'Dán mặt sau của biển báo vào thân mô hình. Lắp ráp thân biển báo vào mấu cắm mô hình. Kiểm tra mô hình sau khi lắp ráp xong.'
    },
    {
        id: 3,
        question: "Em hãy mô tả cách thực hiện làm mô hình máy bay theo thứ tự các bước?",
        keywords: ['bước 1', 'thiết kế', 'mẫu', 'bước 2', 'cắt', 'bộ phận', 'máy bay', 'bước 3', 'gắn', 'thân', 'sải cánh', 'bước 4', 'hoàn thành'],
        fullAnswer: 'Bước 1: Thiết kế mẫu. Bước 2: Cắt các bộ phận của máy bay giấy. Bước 3: Gắn thân và sải cánh. Bước 4: Hoàn thành sản phẩm.'
    },
    {
        id: 4,
        question: "Em hãy kể tên các bước chính để làm đồ dùng học tập?",
        keywords: ['bước 1', 'tìm hiểu', 'sản phẩm mẫu', 'bước 2', 'lựa chọn', 'nguyên vật liệu', 'bước 3', 'tiến hành', 'trang trí', 'bước 4', 'kiểm tra'],
        fullAnswer: 'Bước 1: Tìm hiểu sản phẩm mẫu. Bước 2: Lựa chọn nguyên vật liệu. Bước 3: Tiến hành làm và trang trí sản phẩm. Bước 4: Kiểm tra sản phẩm sau khi làm.'
    },
    {
        id: 5,
        question: "Một số việc học sinh có thể làm khi tham gia giao thông là:",
        keywords: ['tuân thủ', 'đèn', 'tín hiệu', 'đội', 'mũ bảo hiểm', 'xe máy', 'sang đường', 'vạch kẻ', 'người đi bộ'],
        fullAnswer: 'Tuân thủ đèn tín hiệu giao thông. Đội mũ bảo hiểm khi ngồi trên xe máy. Sang đường đúng chỗ có vạch kẻ đường dành cho người đi bộ.'
    },
    {
        id: 6,
        question: "Em hãy nêu các bước thực hiện làm thước kẻ bằng giấy?",
        keywords: ['bước 1', 'tạo hình', 'thước', 'bước 2', 'khung', 'bước 3', 'chia vạch', 'bước 4', 'hoàn thiện'],
        fullAnswer: 'Bước 1: Tạo hình của thước. Bước 2: Tạo khung thước. Bước 3: Chia vạch trên thước. Bước 4: Hoàn thiện sản phẩm.'
    },
    {
        id: 7,
        question: "Em hãy nêu các bước thực hiện làm biển báo giao thông cấm xe đi ngược chiều?",
        keywords: ['bước 1', 'làm biển báo', 'bước 2', 'cột', 'bước 3', 'đế', 'bước 4', 'hoàn thiện'],
        fullAnswer: 'Bước 1: Làm biển báo. Bước 2: Làm cột biển báo. Bước 3: Làm đế biển báo. Bước 4: Hoàn thiện sản phẩm.'
    },
    {
        id: 8,
        question: "Biển báo giao thông là gì?",
        keywords: ['sáng chế', 'loài người', 'biển báo', 'đường bộ', 'roma', 'hai nghìn năm', 'cột trụ', 'khoảng cách', 'nghị viện', 'phổ biến', 'quốc gia'],
        fullAnswer: 'Biển báo giao thông là một sáng chế vĩ đại của loài người. Những tấm biển báo giao thông đường bộ đầu tiên xuất hiện ở Rô-ma cách đây hơn hai nghìn năm. Đó là các biển báo dạng chữ viết ghi trên các cột trụ, ghi lại khoảng cách từ điểm đặt cột đến Nghị viện Rô-ma. Sau đó, hệ thống biển báo giao thông kiểu này đã trở nên phổ biến ở nhiều quốc gia.'
    }
];


// Hàm xáo trộn mảng
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Biến lưu trữ câu hỏi đã xáo trộn
let shuffledTracnghiem = [];
let tuluanResults = {};
let isSubmitted = false;

// Khởi tạo trắc nghiệm
function initTracnghiem() {
    shuffledTracnghiem = shuffleArray(tracnghiemData);
    
    shuffledTracnghiem = shuffledTracnghiem.map(q => {
        const shuffledOptions = q.options.map((opt, idx) => ({ ...opt, originalIndex: idx }));
        const shuffled = shuffleArray(shuffledOptions);
        
        let newAnswer;
        if (q.isMultiple) {
            newAnswer = q.answer.map(correctIdx => 
                shuffled.findIndex(opt => opt.originalIndex === correctIdx)
            );
        } else {
            newAnswer = shuffled.findIndex(opt => opt.originalIndex === q.answer);
        }
        
        return {
            ...q,
            options: shuffled,
            answer: newAnswer
        };
    });
    
    renderTracnghiem();
}

// Render trắc nghiệm
function renderTracnghiem() {
    const form = document.getElementById('tracnghiemForm');
    form.innerHTML = '';
    
    shuffledTracnghiem.forEach((q, index) => {
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
        
        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex);
            const inputType = q.isMultiple ? 'checkbox' : 'radio';
            
            html += `<label class="option">`;
            html += `<input type="${inputType}" name="tn${index}" value="${optIndex}">`;
            html += `<span class="option-text">${letter}. ${option.text}</span>`;
            html += `</label>`;
        });
        
        html += '</div><div class="result-display" id="tn-result-' + index + '"></div>';
        questionCard.innerHTML = html;
        form.appendChild(questionCard);
    });
}

// Khởi tạo tự luận
function initTuluan() {
    const container = document.getElementById('tuluanForm');
    container.innerHTML = '';
    
    tuluanData.forEach((q, index) => {
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        
        let html = `
            <span class="question-number">Câu ${index + 1}</span>
            <div class="question-text">${q.question}</div>
        `;
        
        if (q.subQuestions) {
            q.subQuestions.forEach(sub => {
                html += `
                    <div class="sub-question">
                        <label class="sub-question-label">${sub.text}</label>
                        <textarea class="answer-area" id="tl-${index}-${sub.id}" placeholder="Nhập câu trả lời của em..."></textarea>
                    </div>
                `;
            });
        } else {
            html += `<textarea class="answer-area" id="tl-${index}" placeholder="Nhập câu trả lời của em vào đây..."></textarea>`;
        }
        
        html += `<div class="result-display" id="tl-result-${index}"></div>`;
        questionCard.innerHTML = html;
        container.appendChild(questionCard);
    });
}

// Hàm chuẩn hóa chuỗi
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
    
    return (matchCount / keywords.length) * 100;
}

// Kiểm tra trắc nghiệm
function checkTracnghiem() {
    let score = 0;
    
    shuffledTracnghiem.forEach((q, index) => {
        const resultDiv = document.getElementById(`tn-result-${index}`);
        
        if (q.isMultiple) {
            const selectedAnswers = Array.from(document.querySelectorAll(`input[name="tn${index}"]:checked`))
                .map(input => parseInt(input.value))
                .sort();
            
            const correctAnswers = [...q.answer].sort();
            const isCorrect = JSON.stringify(selectedAnswers) === JSON.stringify(correctAnswers);
            
            if (isCorrect) {
                score++;
                resultDiv.className = 'result-display correct';
                resultDiv.textContent = '✅ Chính xác!';
            } else {
                resultDiv.className = 'result-display incorrect';
                resultDiv.textContent = '❌ Chưa đúng!';
            }
            
            document.querySelectorAll(`input[name="tn${index}"]`).forEach(input => {
                const option = input.closest('.option');
                option.classList.add('disabled');
                
                if (correctAnswers.includes(parseInt(input.value))) {
                    option.classList.add('correct');
                } else if (input.checked) {
                    option.classList.add('incorrect');
                }
            });
        } else {
            const selectedAnswer = document.querySelector(`input[name="tn${index}"]:checked`);
            
            if (selectedAnswer && parseInt(selectedAnswer.value) === q.answer) {
                score++;
                resultDiv.className = 'result-display correct';
                resultDiv.textContent = '✅ Chính xác!';
            } else {
                resultDiv.className = 'result-display incorrect';
                resultDiv.textContent = '❌ Chưa đúng!';
            }
            
            document.querySelectorAll(`input[name="tn${index}"]`).forEach(input => {
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
    
    return score;
}

// Kiểm tra tự luận
function checkTuluan() {
    let totalScore = 0;
    
    tuluanData.forEach((q, index) => {
        const resultDiv = document.getElementById(`tl-result-${index}`);
        
        if (q.subQuestions) {
            let subTotalScore = 0;
            let details = '';
            
            q.subQuestions.forEach(sub => {
                const answer = document.getElementById(`tl-${index}-${sub.id}`).value.trim();
                const score = checkSimilarity(answer, sub.keywords);
                subTotalScore += score;
                
                const status = score >= 70 ? '✅' : score >= 40 ? '⚠️' : '❌';
                details += `<br>${status} Phần ${sub.id}: ${Math.round(score)}%`;
            });
            
            const avgScore = subTotalScore / q.subQuestions.length;
            totalScore += avgScore >= 70 ? 1 : avgScore >= 40 ? 0.5 : 0;
            
            if (avgScore >= 70) {
                resultDiv.className = 'result-display correct';
                resultDiv.innerHTML = `🎉 Tuyệt vời! Điểm TB: ${Math.round(avgScore)}%${details}`;
            } else if (avgScore >= 40) {
                resultDiv.className = 'result-display partial';
                resultDiv.innerHTML = `⚠️ Được một phần! Điểm TB: ${Math.round(avgScore)}%${details}`;
            } else {
                resultDiv.className = 'result-display incorrect';
                resultDiv.innerHTML = `❌ Chưa đúng! Điểm TB: ${Math.round(avgScore)}%${details}`;
            }
        } else {
            const answer = document.getElementById(`tl-${index}`).value.trim();
            const similarity = checkSimilarity(answer, q.keywords);
            
            if (similarity >= 70) {
                totalScore += 1;
                resultDiv.className = 'result-display correct';
                resultDiv.innerHTML = `🎉 Chính xác! Điểm: ${Math.round(similarity)}%`;
            } else if (similarity >= 40) {
                totalScore += 0.5;
                resultDiv.className = 'result-display partial';
                resultDiv.innerHTML = `⚠️ Được một phần! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${q.fullAnswer}`;
            } else {
                resultDiv.className = 'result-display incorrect';
                resultDiv.innerHTML = `❌ Chưa đúng! Điểm: ${Math.round(similarity)}%<br><br>💡 Đáp án: ${q.fullAnswer}`;
            }
        }
    });
    
    return totalScore;
}

// Nộp bài
document.getElementById('submitBtn').addEventListener('click', function() {
    // Kiểm tra đã trả lời đủ chưa
    let hasEmptyTN = false;
    for (let i = 0; i < shuffledTracnghiem.length; i++) {
        const checked = document.querySelector(`input[name="tn${i}"]:checked`);
        if (!checked) {
            hasEmptyTN = true;
            break;
        }
    }
    
    let hasEmptyTL = false;
    tuluanData.forEach((q, index) => {
        if (q.subQuestions) {
            q.subQuestions.forEach(sub => {
                const answer = document.getElementById(`tl-${index}-${sub.id}`).value.trim();
                if (!answer) hasEmptyTL = true;
            });
        } else {
            const answer = document.getElementById(`tl-${index}`).value.trim();
            if (!answer) hasEmptyTL = true;
        }
    });
    
    if (hasEmptyTN || hasEmptyTL) {
        alert('⚠️ Vui lòng trả lời đầy đủ tất cả các câu hỏi trước khi nộp bài!');
        return;
    }
    
    // Đánh dấu đã nộp bài
    isSubmitted = true;
    
    // Chấm điểm
    const tnScore = checkTracnghiem();
    const tlScore = checkTuluan();
    
    // Hiển thị kết quả
    const totalScore = tnScore + tlScore;
    const maxScore = 34; // 26 trắc nghiệm + 8 tự luận
    const percentage = (totalScore / maxScore) * 100;
    
    document.getElementById('tracnghiem-score').textContent = `📝 Trắc nghiệm: ${tnScore}/26 câu`;
    document.getElementById('tuluan-score').textContent = `✍️ Tự luận: ${Math.round(tlScore * 100) / 100}/8 câu`;
    document.getElementById('total-score').textContent = `${Math.round(totalScore * 100) / 100}/${maxScore}`;
    
    let message = '';
    if (percentage >= 90) {
        message = '🌟🌟🌟 Xuất sắc! Em làm bài rất tốt!';
    } else if (percentage >= 80) {
        message = '🌟🌟 Giỏi lắm! Em đã nắm vững kiến thức!';
    } else if (percentage >= 70) {
        message = '🌟 Khá tốt! Cố gắng thêm nhé!';
    } else if (percentage >= 50) {
        message = '💪 Em cần ôn tập thêm một chút!';
    } else {
        message = '📚 Hãy xem lại bài học và thử lại nhé!';
    }
    
    document.getElementById('result-message').textContent = message;
    document.getElementById('score-display').classList.add('show');
    
    // Vô hiệu hóa nút submit
    this.disabled = true;
    this.textContent = 'Đã nộp bài';
    
    // Cập nhật sidebar
    updateSidebarPreview();
    
    // Lưu lịch sử
    saveToHistory(tnScore, tlScore, maxScore);
    
    // Cuộn xuống kết quả
    setTimeout(() => {
        document.getElementById('score-display').scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
});

// Khởi tạo khi trang tải
window.onload = function() {
    initTracnghiem();
    initTuluan();
    initSidebar();
};

// Hàm toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Khởi tạo sidebar
function initSidebar() {
    updateSidebarPreview();
    
    // Thêm event listener cho các input trắc nghiệm
    document.addEventListener('change', function(e) {
        if (e.target.type === 'radio' || e.target.type === 'checkbox') {
            updateSidebarPreview();
        }
    });
    
    // Thêm event listener cho các textarea tự luận
    document.querySelectorAll('.answer-area').forEach(textarea => {
        textarea.addEventListener('input', updateSidebarPreview);
    });
}

// Hàm cập nhật sidebar preview
function updateSidebarPreview() {
    const sidebarContent = document.getElementById('sidebarContent');
    sidebarContent.innerHTML = '';
    
    let answeredCount = 0;
    let unansweredCount = 0;
    
    // Phần trắc nghiệm
    const tnSection = document.createElement('div');
    tnSection.className = 'sidebar-section';
    tnSection.innerHTML = '<h4>📝 TRẮC NGHIỆM (26 câu)</h4>';
    
    shuffledTracnghiem.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        
        let status = '';
        let icon = '';
        let hasAnswer = false;
        
        if (isSubmitted) {
            // Sau khi nộp bài - kiểm tra kết quả
            const resultDiv = document.getElementById(`tn-result-${index}`);
            if (resultDiv && resultDiv.classList.contains('correct')) {
                item.classList.add('correct');
                status = 'Đúng';
                icon = '✅';
            } else if (resultDiv && resultDiv.classList.contains('incorrect')) {
                item.classList.add('incorrect');
                status = 'Sai';
                icon = '❌';
            }
        } else {
            // Trước khi nộp bài
            if (q.isMultiple) {
                const checked = document.querySelectorAll(`input[name="tn${index}"]:checked`);
                hasAnswer = checked.length > 0;
            } else {
                const checked = document.querySelector(`input[name="tn${index}"]:checked`);
                hasAnswer = checked !== null;
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
            <div class="question-number-badge">${index + 1}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToTracnghiem(index);
        tnSection.appendChild(item);
    });
    
    sidebarContent.appendChild(tnSection);
    
    // Phần tự luận
    const tlSection = document.createElement('div');
    tlSection.className = 'sidebar-section';
    tlSection.innerHTML = '<h4>✍️ TỰ LUẬN (8 câu)</h4>';
    
    tuluanData.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        
        let status = '';
        let icon = '';
        let hasAnswer = false;
        
        if (isSubmitted) {
            // Sau khi nộp bài
            const resultDiv = document.getElementById(`tl-result-${index}`);
            if (resultDiv && resultDiv.classList.contains('correct')) {
                item.classList.add('correct');
                status = 'Đúng';
                icon = '✅';
            } else if (resultDiv && resultDiv.classList.contains('partial')) {
                item.classList.add('partial');
                status = 'Được phần';
                icon = '⚠️';
            } else if (resultDiv && resultDiv.classList.contains('incorrect')) {
                item.classList.add('incorrect');
                status = 'Sai';
                icon = '❌';
            }
        } else {
            // Trước khi nộp bài
            if (q.subQuestions) {
                let allAnswered = true;
                q.subQuestions.forEach(sub => {
                    const answer = document.getElementById(`tl-${index}-${sub.id}`)?.value.trim();
                    if (!answer) allAnswered = false;
                });
                hasAnswer = allAnswered;
            } else {
                const answer = document.getElementById(`tl-${index}`)?.value.trim();
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
            <div class="question-number-badge">TL${index + 1}</div>
            <div class="question-status">${status}</div>
            <div class="question-icon">${icon}</div>
        `;
        
        item.onclick = () => scrollToTuluan(index);
        tlSection.appendChild(item);
    });
    
    sidebarContent.appendChild(tlSection);
    
    // Cập nhật thống kê
    if (!isSubmitted) {
        document.getElementById('answeredCount').textContent = answeredCount;
        document.getElementById('unansweredCount').textContent = unansweredCount;
    }
}

// Hàm cuộn đến câu trắc nghiệm
function scrollToTracnghiem(index) {
    const questionCards = document.querySelectorAll('#tracnghiemForm .question-card');
    if (questionCards[index]) {
        questionCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight câu hỏi
        questionCards[index].style.boxShadow = '0 0 20px rgba(17, 153, 142, 0.8)';
        setTimeout(() => {
            questionCards[index].style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 2000);
    }
    
    // Đóng sidebar trên mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// Hàm cuộn đến câu tự luận
function scrollToTuluan(index) {
    const questionCards = document.querySelectorAll('#tuluanForm .question-card');
    if (questionCards[index]) {
        questionCards[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Highlight câu hỏi
        questionCards[index].style.boxShadow = '0 0 20px rgba(17, 153, 142, 0.8)';
        setTimeout(() => {
            questionCards[index].style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }, 2000);
    }
    
    // Đóng sidebar trên mobile
    if (window.innerWidth <= 768) {
        toggleSidebar();
    }
}

// Hàm lưu lịch sử
function saveToHistory(tnScore, tlScore, maxScore) {
    const totalScore = tnScore + tlScore;
    const correctCount = Math.round(totalScore);
    const incorrectCount = maxScore - correctCount;

    // Chuẩn bị dữ liệu chi tiết câu hỏi
    const questionsDetail = [];

    // Thêm câu trắc nghiệm
    shuffledTracnghiem.forEach((q, index) => {
        const resultDiv = document.getElementById(`tn-result-${index}`);
        const isCorrect = resultDiv && resultDiv.classList.contains('correct');

        questionsDetail.push({
            question: q.question,
            type: 'tracnghiem',
            imageUrl: q.hasImage ? q.imageUrl : null,
            options: q.options.map(opt => opt.text),
            userAnswer: q.isMultiple ? 
                Array.from(document.querySelectorAll(`input[name="tn${index}"]:checked`)).map(inp => parseInt(inp.value)) :
                (document.querySelector(`input[name="tn${index}"]:checked`) ? 
                    parseInt(document.querySelector(`input[name="tn${index}"]:checked`).value) : null),
            correctAnswer: q.answer,
            isCorrect: isCorrect,
            isPartial: false
        });
    });

    // Thêm câu tự luận
    tuluanData.forEach((q, index) => {
        const resultDiv = document.getElementById(`tl-result-${index}`);
        let isCorrect = false;
        let isPartial = false;

        if (resultDiv) {
            isCorrect = resultDiv.classList.contains('correct');
            isPartial = resultDiv.classList.contains('partial');
        }

        let userAnswer = '';
        if (q.subQuestions) {
            userAnswer = q.subQuestions.map(sub => {
                const ans = document.getElementById(`tl-${index}-${sub.id}`)?.value.trim() || '';
                return `${sub.text}: ${ans}`;
            }).join('\n');
        } else {
            userAnswer = document.getElementById(`tl-${index}`)?.value.trim() || '';
        }

        questionsDetail.push({
            question: q.question,
            type: 'tuluan',
            imageUrl: null,
            options: [],
            userAnswer: userAnswer,
            correctAnswer: q.fullAnswer || '',
            isCorrect: isCorrect,
            isPartial: isPartial
        });
    });

    // Tạo object lịch sử
    const historyData = {
        type: 'kiemtra',
        totalQuestions: maxScore,
        correctCount: correctCount,
        incorrectCount: incorrectCount,
        percentage: Math.round((totalScore / maxScore) * 100),
        questions: questionsDetail
    };

    // Lưu vào localStorage thông qua HistoryManager
    if (typeof HistoryManager !== 'undefined') {
        HistoryManager.add(historyData);
    }
}
