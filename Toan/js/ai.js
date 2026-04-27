// Parent password system for viewing answers

// Show answer (requires password verification EVERY TIME)
function showAnswer(answer, explanation = '') {
    // LUÔN yêu cầu mật khẩu mỗi lần xem đáp án
    showPasswordModal(() => displayAnswer(answer, explanation));
}

// Display answer after password verified
function displayAnswer(answer, explanation = '') {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-green-600 mb-4">✅ Đáp án</h2>
            <div class="bg-green-50 border-2 border-green-300 rounded-xl p-6 mb-4">
                <div class="text-3xl font-bold text-green-700 text-center mb-2">
                    ${answer}
                </div>
                ${explanation ? `<div class="text-slate-600 text-center mt-4">${explanation}</div>` : ''}
            </div>
            <button onclick="closeAnswerModal()" class="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-xl px-6 py-3 transition">
                Đóng
            </button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// Get wrong attempts count (per session, reset when correct)
function getWrongAttempts() {
    return parseInt(sessionStorage.getItem('wrong_attempts') || '0');
}

// Increment wrong attempts
function incrementWrongAttempts() {
    const count = getWrongAttempts() + 1;
    sessionStorage.setItem('wrong_attempts', count.toString());
    return count;
}

// Reset wrong attempts
function resetWrongAttempts() {
    sessionStorage.removeItem('wrong_attempts');
}

// Show password input modal
function showPasswordModal(onSuccess) {
    const wrongAttempts = getWrongAttempts();
    const maxAttempts = (typeof CONFIG !== 'undefined' && CONFIG.MAX_WRONG_ATTEMPTS) 
        ? CONFIG.MAX_WRONG_ATTEMPTS 
        : 3;
    
    if (wrongAttempts >= maxAttempts) {
        showToast('Đã nhập sai quá nhiều lần! Vui lòng reload trang.', 'error');
        return;
    }
    
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'passwordModal';
    overlay.innerHTML = `
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-amber-600 mb-4">🔒 Xác nhận phụ huynh</h2>
            <p class="text-slate-700 mb-4">
                Để xem đáp án, vui lòng nhập mật khẩu phụ huynh:
            </p>
            <input type="password" id="parentPasswordInput" 
                   class="w-full px-4 py-3 border-2 border-amber-300 rounded-xl mb-2 focus:outline-none focus:border-amber-500 text-center text-xl font-bold"
                   placeholder="Nhập mật khẩu..."
                   autocomplete="off">
            <p class="text-sm text-slate-500 mb-4">
                Số lần còn lại: <span class="font-bold text-red-500">${maxAttempts - wrongAttempts}</span>
            </p>
            <div class="flex gap-3">
                <button onclick="verifyPassword()" class="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl px-6 py-3 transition">
                    Xác nhận
                </button>
                <button onclick="closePasswordModal()" class="flex-1 bg-gray-300 hover:bg-gray-400 text-slate-700 font-bold rounded-xl px-6 py-3 transition">
                    Hủy
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);
    
    // Store callback
    window._passwordCallback = onSuccess;
    
    // Focus input
    document.getElementById('parentPasswordInput').focus();
    
    // Enter key to verify
    document.getElementById('parentPasswordInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyPassword();
    });
}

// Verify password
function verifyPassword() {
    const input = document.getElementById('parentPasswordInput');
    const password = input.value.trim();
    
    if (!password) {
        showToast('Vui lòng nhập mật khẩu!', 'error');
        return;
    }
    
    const correctPassword = (typeof CONFIG !== 'undefined' && CONFIG.PARENT_PASSWORD) 
        ? CONFIG.PARENT_PASSWORD 
        : '123456';
    
    if (password === correctPassword) {
        // Correct password
        resetWrongAttempts();
        
        // LƯU callback trước khi đóng modal
        const callback = window._passwordCallback;
        
        // Đóng modal
        closePasswordModal();
        
        // Execute callback SAU KHI đóng modal (dùng setTimeout để đảm bảo modal đã đóng)
        if (callback) {
            setTimeout(() => {
                callback();
            }, 100);
        }
    } else {
        // Wrong password
        const attempts = incrementWrongAttempts();
        const maxAttempts = (typeof CONFIG !== 'undefined' && CONFIG.MAX_WRONG_ATTEMPTS) 
            ? CONFIG.MAX_WRONG_ATTEMPTS 
            : 3;
        
        input.value = '';
        input.className = 'w-full px-4 py-3 border-2 border-red-500 rounded-xl mb-2 focus:outline-none focus:border-red-600 text-center text-xl font-bold';
        
        if (attempts >= maxAttempts) {
            closePasswordModal();
            showToast('Đã nhập sai quá nhiều lần! Reload trang để thử lại.', 'error');
        } else {
            showToast(`Mật khẩu sai! Còn ${maxAttempts - attempts} lần.`, 'error');
            
            // Update remaining attempts
            const remainingSpan = document.querySelector('.modal-content .text-red-500');
            if (remainingSpan) {
                remainingSpan.textContent = maxAttempts - attempts;
            }
        }
    }
}

// Close password modal
function closePasswordModal() {
    const overlay = document.getElementById('passwordModal');
    if (overlay) {
        overlay.remove();
    }
    // KHÔNG xóa callback ở đây nữa, để callback có thể chạy sau khi modal đóng
}

// Close answer modal
function closeAnswerModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.remove();
    }
}


