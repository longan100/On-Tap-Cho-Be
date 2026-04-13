let diagnosisQuestions = [];
let currentIndex = 0;
let results = {
    'nghia_tu': 0, // số câu đúng
    'y_chinh': 0,
    'suy_luan': 0,
    'cam_xuc': 0
};

async function startDiagnosis() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('loading').classList.remove('hidden');

    try {
        if (typeof questionsData === 'undefined') {
             throw new Error("Không tìm thấy questionsData. Bạn đã load đúng file questions.js chưa?");
        }
        const allQuestions = questionsData;
        
        // Lấy 2 câu tầng 1 cho mỗi kỹ năng
        const skills = ['nghia_tu', 'y_chinh', 'suy_luan', 'cam_xuc'];
        let pool = [];
        
        skills.forEach(sk => {
            const qs = allQuestions.filter(q => q.ky_nang === sk && q.tang === 1);
            qs.sort(() => 0.5 - Math.random());
            pool.push(...qs.slice(0, 2));
        });

        diagnosisQuestions = pool.sort(() => 0.5 - Math.random());

        document.getElementById('loading').classList.add('hidden');
        document.getElementById('game-container').classList.remove('hidden');
        loadQuestion();

    } catch (e) {
        document.getElementById('loading').innerText = "Lỗi khi tải dữ liệu bài test.";
        console.error(e);
    }
}

function loadQuestion() {
    if (currentIndex >= diagnosisQuestions.length) {
        finishDiagnosis();
        return;
    }

    const q = diagnosisQuestions[currentIndex];
    
    document.getElementById('current-q-index').innerText = (currentIndex + 1);
    document.getElementById('doan-van').innerText = q.doan_van;
    document.getElementById('cau-hoi').innerText = q.cau_hoi;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    ['A', 'B', 'C', 'D'].forEach(key => {
        if (!q.lua_chon[key]) return;
        const btn = document.createElement('button');
        btn.className = "w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 text-gray-700 text-lg font-medium transition-all";
        btn.innerText = `${key}. ${q.lua_chon[key]}`;
        btn.onclick = () => handleAnswer(key, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(chosenKey, btnElement) {
    // Disable all to prevent double clicking
    const btns = document.getElementById('options-container').querySelectorAll('button');
    btns.forEach(b => b.onclick = null);

    const q = diagnosisQuestions[currentIndex];
    const isCorrect = (chosenKey === q.dap_an);

    if (isCorrect) {
        results[q.ky_nang] += 1;
        btnElement.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
    } else {
        btnElement.classList.add('bg-red-100', 'border-red-500', 'text-red-800');
    }

    // Chuyển câu nhanh không cần giải thích
    setTimeout(() => {
        currentIndex++;
        loadQuestion();
    }, 700);
}

function finishDiagnosis() {
    document.getElementById('game-container').innerHTML = `
        <div class="text-center py-10">
            <h1 class="text-3xl font-extrabold text-blue-600 mb-4">Hoàn thành! 🎉</h1>
            <p class="text-lg text-gray-700 mb-6">Đang thiết lập chương trình học tối ưu nhất cho bé...</p>
        </div>
    `;

    // Tính toán điểm Mastery khởi điểm
    // 2 đúng => 60, 1 đúng => 35, 0 đúng => 15
    const computedMastery = {};
    Object.keys(results).forEach(sk => {
        const correct = results[sk];
        if (correct === 2) computedMastery[sk] = 60;
        else if (correct === 1) computedMastery[sk] = 35;
        else computedMastery[sk] = 15;
    });

    StorageManager.initMasterySetup(computedMastery);

    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}
