const SKILLS = ['nghia_tu', 'y_chinh', 'suy_luan', 'cam_xuc'];

const MasteryManager = {
  /**
   * Tính tầng độ khó hiện tại của một kỹ năng dựa vào điểm mastery
   */
  getLayer: function(score) {
    if (score < 40) return 1;
    if (score < 70) return 2;
    return 3;
  },

  /**
   * Trả về sự thay đổi điểm số sau khi chơi 1 game
   */
  calculateScoreChange: function(isCorrect, timeTakenSec) {
    if (!isCorrect) return -2;
    return timeTakenSec < 10 ? 3 : 1;
  },

  /**
   * Cập nhật điểm và lưu lại lịch sử sau mỗi màn của ngày
   */
  processGameResult: function(skillKey, isCorrect, timeTakenSec) {
    const data = StorageManager.getData();
    const currentScore = data.mastery[skillKey] || 0;
    const change = this.calculateScoreChange(isCorrect, timeTakenSec);
    
    StorageManager.updateMastery(skillKey, currentScore + change);
  },

  /**
   * Phân bổ 4 câu hỏi trong ngày dựa trên điểm số (ưu tiên kỹ năng yếu)
   * Sử dụng thuật toán D'Hondt (Proportional Representation)
   * Trả về Object: { nghia_tu: 1, y_chinh: 2, suy_luan: 1, cam_xuc: 0 }
   */
  getAllocation: function() {
    const data = StorageManager.getData();
    const gaps = {};
    
    SKILLS.forEach(sk => {
        // Gap càng lớn tức là điểm càng thấp, cần ưu tiên. 
        // Lấy Max(1) để đảm bảo dù 100 điểm vẫn có một tí xíu tỉ lệ rơi vào.
        gaps[sk] = Math.max(1, 100 - data.mastery[sk]);
    });

    const allocs = { nghia_tu: 0, y_chinh: 0, suy_luan: 0, cam_xuc: 0 };
    let totalAssigned = 0;

    while (totalAssigned < 4) {
        let maxQuotient = -1;
        let selectedSkill = null;

        for (const skill of SKILLS) {
             if (allocs[skill] < 2) {
                 const quotient = gaps[skill] / (allocs[skill] + 1);
                 if (quotient > maxQuotient) {
                     maxQuotient = quotient;
                     selectedSkill = skill;
                 }
             }
        }

        if (selectedSkill) {
            allocs[selectedSkill]++;
            totalAssigned++;
        }
    }

    return allocs;
  },

  /**
   * Gọi lúc người dùng bắt đầu "Học Hôm Nay" để phạt decay
   * nếu bỏ học >= 3 ngày.
   */
  processDecay: function(todayStr) {
    const data = StorageManager.getData();
    if (!data.streak.last_played) return; // Chưa từng chơi

    const lastDate = new Date(data.streak.last_played);
    const todayDate = new Date(todayStr);
    
    lastDate.setHours(0,0,0,0);
    todayDate.setHours(0,0,0,0);
    
    const diffDays = Math.floor((todayDate - lastDate) / (1000 * 60 * 60 * 24));
    
    // Nếu hôm qua cuối chơi là ngày 1, hôm nay bắt đầu là ngày 5 => diff = 4
    // Số ngày nghỉ xen giữa là: ngày 2, 3, 4 (3 ngày liên tiếp không học)
    // Nghỉ >= 3 ngày -> decay 1đ (cho 3 ngày), 2đ cho 4 ngày, v.v.
    if (diffDays >= 4) {
       const decayAmount = diffDays - 3;
       SKILLS.forEach(sk => {
           StorageManager.updateMastery(sk, data.mastery[sk] - decayAmount);
       });
    }
  }
};
