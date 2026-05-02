// Dữ liệu câu hỏi trắc nghiệm
const tracnghiemData = [
    {
        id: 1,
        question: "Biểu tượng của phần mềm trình chiếu là?",
        hasImage: true,
        options: [
            { text: "", image: "../images/hinh1.png" },
            { text: "", image: "../images/hinh2.png" },
            { text: "", image: "../images/hinh3.png" },
            { text: "", image: "../images/hinh4.png" }
        ],
        answer: 1
    },
    {
        id: 2,
        question: "Nút lệnh nào sau đây dùng để chọn cỡ chữ?",
        hasImage: true,
        options: [
            { text: "", image: "../images/hinh5.png" },
            { text: "", image: "../images/hinh6.png" },
            { text: "", image: "../images/hinh7.png" }
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
            { text: "Nháy đúp chuột vào biểu tượng", image: "../images/hinh8.png" },
            { text: "Nháy đúp chuột vào biểu tượng", image: "../images/hinh9.png" },
            { text: "Nháy đúp chuột vào biểu tượng", image: "../images/hinh10.png" }
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

// Dữ liệu câu hỏi tự luận
const tuluanData = [
    {
        id: 1,
        question: "Em làm thế nào để bảo vệ thông tin cá nhân và gia đình khi giao tiếp qua mạng Internet?",
        keywords: ['không cung cấp', 'tên', 'địa chỉ', 'người lạ', 'không gửi', 'không nhận', 'tệp', 'bảo vệ', 'mật khẩu'],
        fullAnswer: 'Bảo vệ thông tin cá nhân và gia đình: không nên cung cấp tên và địa chỉ cho người lạ, không gửi và nhận tệp từ người không quen biết, bảo vệ mật khẩu khi dùng máy tính.'
    },
    {
        id: 2,
        question: "Như thế nào là thực hiện công việc theo từng bước?",
        keywords: ['công việc', 'từng bước', 'việc nhỏ', 'thứ tự', 'xếp'],
        fullAnswer: 'Có nhiều công việc được thực hiện theo từng bước, mỗi bước là một việc nhỏ và các bước phải được xếp theo một thứ tự nhất định.'
    },
    {
        id: 3,
        question: "Chuyển thành dạng \"Nếu… thì…\"",
        subQuestions: [
            {
                id: 'a',
                text: 'a) Khi em đi học muộn, lớp em sẽ bị trừ điểm thi đua.',
                keywords: ['nếu', 'đi học muộn', 'thì', 'trừ điểm'],
                fullAnswer: 'Nếu em đi học muộn thì lớp em sẽ bị trừ điểm thi đua.'
            },
            {
                id: 'b',
                text: 'b) Khi đi bộ đi học, em cần đi trên vỉa hè.',
                keywords: ['nếu', 'đi bộ', 'thì', 'vỉa hè'],
                fullAnswer: 'Nếu em đi bộ đi học thì em cần đi trên vỉa hè.'
            },
            {
                id: 'c',
                text: 'c) Hôm nay trời mưa, Nam không đi đá bóng.',
                keywords: ['nếu', 'trời mưa', 'thì', 'không đá bóng'],
                fullAnswer: 'Nếu hôm nay trời mưa thì Nam không đi đá bóng.'
            },
            {
                id: 'd',
                text: 'd) Hôm nay học thể dục, Hoa mặc áo quần thể dục và đeo giày.',
                keywords: ['nếu', 'học thể dục', 'thì', 'áo quần', 'giày'],
                fullAnswer: 'Nếu hôm nay học thể dục thì Hoa mặc áo quần thể dục và đeo giày.'
            }
        ]
    },
    {
        id: 4,
        question: "Tại sao phải chia một việc thành nhiều việc nhỏ hơn?",
        keywords: ['chia', 'việc nhỏ', 'dễ hiểu', 'dễ thực hiện'],
        fullAnswer: 'Chia một việc thành những việc nhỏ hơn sẽ giúp chúng ta dễ hiểu và dễ thực hiện hơn.'
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
            <div class="options">
        `;
        
        q.options.forEach((option, optIndex) => {
            const letter = String.fromCharCode(65 + optIndex);
            const inputType = q.isMultiple ? 'checkbox' : 'radio';
            
            html += `<label class="option">`;
            html += `<input type="${inputType}" name="tn${index}" value="${optIndex}">`;
            html += `<span class="option-text">${letter}. `;
            
            if (q.hasImage && option.image) {
                html += option.text + `<img src="${option.image}" class="question-image" alt="${option.text}">`;
            } else {
                html += option.text;
            }
            
            html += `</span></label>`;
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
    const maxScore = 20;
    const percentage = (totalScore / maxScore) * 100;
    
    document.getElementById('tracnghiem-score').textContent = `📝 Trắc nghiệm: ${tnScore}/16 câu`;
    document.getElementById('tuluan-score').textContent = `✍️ Tự luận: ${Math.round(tlScore * 100) / 100}/4 câu`;
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
    tnSection.innerHTML = '<h4>📝 TRẮC NGHIỆM (16 câu)</h4>';
    
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
    tlSection.innerHTML = '<h4>✍️ TỰ LUẬN (4 câu)</h4>';
    
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
