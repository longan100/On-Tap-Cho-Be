const SKILL_LABELS = {
    'nghia_tu': 'Thám tử từ ngữ (Hiểu Nghĩa)',
    'y_chinh': 'Ghép ý chính (Tóm Tắt)',
    'suy_luan': 'Bé đoán tiếp (Suy Luận)',
    'cam_xuc': 'Cảm xúc nhân vật'
};

const SKILL_COLORS = {
    'nghia_tu': 'bg-blue-500',
    'y_chinh': 'bg-green-500',
    'suy_luan': 'bg-purple-500',
    'cam_xuc': 'bg-yellow-500'
};

document.addEventListener("DOMContentLoaded", () => {
    const data = StorageManager.getData();
    
    // 1. Hiển thị Streak
    document.getElementById('streak-count').innerText = data.streak.current || 0;

    // 2. Phân tích gợi ý
    let lowestSkill = null;
    let lowestScore = 101;
    
    // Check if played recently
    let msg = "";
    if (!data.streak.last_played) {
        msg = "Bé chưa làm bài nào. Hãy bắt đầu bài chẩn đoán và học ngày đầu tiên nhé!";
    } else {
        const lastDate = new Date(data.streak.last_played);
        const todayDate = new Date();
        const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
        
        if (diffDays > 2) {
            msg = `Bé đã nghỉ ${diffDays} ngày rồi. Bố mẹ nhắc bé học đều lại để không bị giảm điểm kỹ năng nhé!`;
        } else {
            Object.keys(data.mastery).forEach(sk => {
                if (data.mastery[sk] < lowestScore) {
                    lowestScore = data.mastery[sk];
                    lowestSkill = sk;
                }
            });
            if (lowestScore < 50) {
                 msg = `Kỹ năng <b>${SKILL_LABELS[lowestSkill]}</b> đang hơi yếu. Tuần này hệ thống sẽ ưu tiên các câu hỏi phần này để bé cải thiện.`;
            } else {
                 msg = "Bé đang làm rất tốt và đều đặn các kỹ năng! Cứ tiếp tục phát huy nhé.";
            }
        }
    }
    document.getElementById('ai-suggestion').innerHTML = msg;

    // 3. Render Progress Bars
    const container = document.getElementById('skills-container');
    container.innerHTML = '';

    Object.keys(SKILL_LABELS).forEach(sk => {
        let score = data.mastery[sk] || 0;
        let layer = score < 40 ? 1 : score < 70 ? 2 : 3;
        
        const html = `
        <div class="mb-4 relative">
            <div class="flex justify-between items-end mb-2">
                <div>
                   <span class="font-bold text-gray-700">${SKILL_LABELS[sk]}</span>
                   <span class="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Tầng ${layer}</span>
                </div>
                <span class="font-black text-gray-800">${score}/100</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-3">
                <div class="${SKILL_COLORS[sk]} h-3 rounded-full transition-all duration-1000" style="width: ${score}%"></div>
            </div>
        </div>
        `;
        container.innerHTML += html;
    });
});
