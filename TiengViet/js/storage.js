const STORAGE_KEY = 'tiengviet_doc_hieu_data';

const DEFAULT_DATA = {
  mastery: {
    nghia_tu: 0,
    y_chinh: 0,
    suy_luan: 0,
    cam_xuc: 0
  },
  streak: {
    current: 0,
    last_played: null
  },
  history: [],
  trang_thai: 'chua_chan_doan'
};

const StorageManager = {
  /**
   * Đọc toàn bộ dữ liệu từ localStorage
   */
  getData: function() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error('Lỗi khi đọc dữ liệu localStorage:', e);
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  },

  /**
   * Lưu toàn bộ dữ liệu xuống localStorage
   */
  saveData: function(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  },

  /**
   * Cập nhật điểm mastery cụ thể từng kỹ năng
   */
  updateMastery: function(skillKey, newScore) {
    const data = this.getData();
    // Đảm bảo mastery nằm trong khoảng 0-100
    data.mastery[skillKey] = Math.max(0, Math.min(100, newScore));
    this.saveData(data);
  },

  /**
   * Khởi tạo điểm mastery sau chẩn đoán
   */
  initMasterySetup: function(masteryObj) {
    const data = this.getData();
    data.mastery = { ...data.mastery, ...masteryObj };
    data.trang_thai = 'da_chan_doan';
    this.saveData(data);
  },

  /**
   * Cập nhật chuỗi Streak theo ngày
   */
  updateStreak: function(todayStr) {
    const data = this.getData();
    const streak = data.streak;

    if (!streak.last_played) {
      streak.current = 1;
      streak.last_played = todayStr;
    } else if (streak.last_played !== todayStr) {
      // Kiểm tra xem ngày chơi cuối có phải là hôm qua không
      const lastDate = new Date(streak.last_played);
      const todayDate = new Date(todayStr);
      const diffTime = Math.abs(todayDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

      if (diffDays === 1) {
        streak.current += 1;
      } else if (diffDays > 1) {
        streak.current = 1; // Bị đứt chuỗi, reset lại
      }
      streak.last_played = todayStr;
    }
    
    this.saveData(data);
  },

  /**
   * Lưu lại lịch sử trả lời của một ngày
   */
  addHistoryDay: function(todayStr, resultArr) {
    const data = this.getData();
    
    let historyDay = data.history.find(h => h.date === todayStr);
    if (!historyDay) {
      data.history.push({
        date: todayStr,
        results: resultArr
      });
    } else {
      historyDay.results.push(...resultArr);
    }

    this.saveData(data);
  },

  /**
   * Lấy lịch sử của X ngày gần nhất (để làm report)
   */
  getRecentHistory: function(days = 7) {
    const data = this.getData();
    return data.history.slice(-days);
  },

  /**
   * Reset data (Dùng cho debug hoặc người dùng muốn xoá)
   */
  clearData: function() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
