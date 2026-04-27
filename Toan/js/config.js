// ⚠️ QUAN TRỌNG: Đặt mật khẩu phụ huynh vào đây
// Mật khẩu này dùng để xem đáp án (chỉ phụ huynh biết)

const CONFIG = {
    // Mật khẩu để xem đáp án (thay đổi thành mật khẩu của bạn)
    PARENT_PASSWORD: '123',
    
    // Số lần nhập sai tối đa trước khi khóa
    MAX_WRONG_ATTEMPTS: 3
};

// Export config
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
