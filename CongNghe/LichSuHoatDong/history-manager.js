// Module quản lý lịch sử học tập
// Lưu trữ trong localStorage

const HistoryManager = {
    STORAGE_KEY: 'congnghe_history',
    MAX_HISTORY_COUNT: 100, // Giới hạn số lượng lịch sử tối đa
    MAX_STORAGE_SIZE: 4 * 1024 * 1024, // 4MB (để an toàn, localStorage thường là 5-10MB)
    
    // Lấy tất cả lịch sử
    getAll() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },
    
    // Lấy một lịch sử theo ID
    getById(id) {
        const history = this.getAll();
        return history.find(item => item.id === id);
    },
    
    // Kiểm tra kích thước dữ liệu (bytes)
    getStorageSize() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? new Blob([data]).size : 0;
    },
    
    // Kiểm tra xem localStorage có đầy không
    isStorageFull() {
        try {
            const currentSize = this.getStorageSize();
            return currentSize >= this.MAX_STORAGE_SIZE;
        } catch (e) {
            return true;
        }
    },
    
    // Xóa lịch sử cũ nhất
    removeOldest() {
        let history = this.getAll();
        if (history.length === 0) return;
        
        // Sắp xếp theo timestamp (cũ nhất trước)
        history.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        
        // Xóa lịch sử cũ nhất
        history.shift();
        
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
        console.log('🗑️ Đã tự động xóa lịch sử cũ nhất để giải phóng bộ nhớ');
    },
    
    // Dọn dẹp lịch sử cũ nếu vượt quá giới hạn
    cleanupOldHistory() {
        let history = this.getAll();
        
        // Nếu vượt quá số lượng tối đa, xóa các lịch sử cũ nhất
        if (history.length > this.MAX_HISTORY_COUNT) {
            history.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            history = history.slice(0, this.MAX_HISTORY_COUNT);
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
            console.log(`🗑️ Đã tự động xóa ${history.length - this.MAX_HISTORY_COUNT} lịch sử cũ (vượt quá ${this.MAX_HISTORY_COUNT} lịch sử)`);
        }
        
        // Nếu dung lượng quá lớn, xóa dần các lịch sử cũ nhất
        while (this.isStorageFull() && history.length > 0) {
            this.removeOldest();
            history = this.getAll();
        }
    },
    
    // Thêm lịch sử mới
    add(historyData) {
        try {
            let history = this.getAll();
            const newItem = {
                id: Date.now().toString(), // ID duy nhất dựa trên timestamp
                timestamp: new Date().toISOString(),
                ...historyData
            };
            
            history.push(newItem);
            
            // Thử lưu
            try {
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
            } catch (e) {
                // Nếu lỗi (localStorage đầy), dọn dẹp và thử lại
                console.warn('⚠️ LocalStorage đầy, đang dọn dẹp lịch sử cũ...');
                this.cleanupOldHistory();
                
                // Thử lưu lại
                history = this.getAll();
                history.push(newItem);
                localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
            }
            
            // Dọn dẹp định kỳ
            this.cleanupOldHistory();
            
            return newItem.id;
        } catch (e) {
            console.error('❌ Lỗi khi lưu lịch sử:', e);
            alert('⚠️ Không thể lưu lịch sử. Vui lòng xóa bớt lịch sử cũ!');
            return null;
        }
    },
    
    // Xóa một lịch sử
    delete(id) {
        let history = this.getAll();
        history = history.filter(item => item.id !== id);
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    },
    
    // Xóa tất cả lịch sử
    deleteAll() {
        localStorage.removeItem(this.STORAGE_KEY);
    },
    
    // Lọc lịch sử theo loại
    filterByType(type) {
        const history = this.getAll();
        if (type === 'all') return history;
        return history.filter(item => item.type === type);
    },
    
    // Sắp xếp theo ngày (mới nhất trước)
    sortByDate(history, ascending = false) {
        return history.sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return ascending ? dateA - dateB : dateB - dateA;
        });
    },
    
    // Format ngày giờ
    formatDateTime(isoString) {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        
        return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
    
    // Tính phần trăm
    calculatePercentage(correct, total) {
        if (total === 0) return 0;
        return Math.round((correct / total) * 100);
    },
    
    // Lấy icon theo loại bài
    getTypeIcon(type) {
        const icons = {
            'tracnghiem': '📝',
            'tuluan': '✍️',
            'kiemtra': '🎯'
        };
        return icons[type] || '📄';
    },
    
    // Lấy tên loại bài
    getTypeName(type) {
        const names = {
            'tracnghiem': 'Trắc Nghiệm',
            'tuluan': 'Tự Luận',
            'kiemtra': 'Kiểm Tra'
        };
        return names[type] || 'Không xác định';
    },
    
    // Lấy màu theo điểm số
    getScoreColor(percentage) {
        if (percentage >= 90) return '#4caf50'; // Xanh lá
        if (percentage >= 80) return '#8bc34a'; // Xanh lá nhạt
        if (percentage >= 70) return '#ffc107'; // Vàng
        if (percentage >= 50) return '#ff9800'; // Cam
        return '#f44336'; // Đỏ
    },
    
    // Lấy đánh giá theo điểm số
    getScoreRating(percentage) {
        if (percentage >= 90) return 'Xuất sắc 🌟🌟🌟';
        if (percentage >= 80) return 'Giỏi 🌟🌟';
        if (percentage >= 70) return 'Khá 🌟';
        if (percentage >= 50) return 'Trung bình 💪';
        return 'Cần cố gắng 📚';
    },
    
    // Lấy thông tin trạng thái bộ nhớ
    getStorageInfo() {
        const history = this.getAll();
        const currentSize = this.getStorageSize();
        const sizeInMB = (currentSize / (1024 * 1024)).toFixed(2);
        const maxSizeInMB = (this.MAX_STORAGE_SIZE / (1024 * 1024)).toFixed(2);
        const percentUsed = ((currentSize / this.MAX_STORAGE_SIZE) * 100).toFixed(1);
        
        return {
            count: history.length,
            maxCount: this.MAX_HISTORY_COUNT,
            sizeInMB: sizeInMB,
            maxSizeInMB: maxSizeInMB,
            percentUsed: percentUsed,
            isFull: this.isStorageFull()
        };
    }
};

// Export để sử dụng trong các module khác
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HistoryManager;
}
