// UI utility functions

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Show stars animation
function showStars(count) {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;font-size:80px;';
    
    for (let i = 0; i < count; i++) {
        const star = document.createElement('span');
        star.className = 'star-animation';
        star.textContent = '⭐';
        star.style.animationDelay = `${i * 0.2}s`;
        container.appendChild(star);
    }
    
    document.body.appendChild(container);
    
    setTimeout(() => container.remove(), 2000);
}

// Show confetti
function showConfetti() {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Update progress bar in header
function updateProgressBar(moduleId) {
    const progress = getProgress(moduleId);
    const progressBar = document.querySelector('.module-progress-bar');
    const progressText = document.querySelector('.module-progress-text');
    
    if (progressBar && progress.total > 0) {
        const percent = Math.round((progress.done / progress.total) * 100);
        progressBar.style.width = percent + '%';
        
        if (progressText) {
            progressText.textContent = `${progress.done}/${progress.total} câu`;
        }
    }
}

// Update header stats
function updateHeaderStats() {
    const totalStars = getTotalStars();
    const streak = getStreak();
    
    const starsEl = document.getElementById('totalStars');
    const streakEl = document.getElementById('streak');
    
    if (starsEl) starsEl.textContent = totalStars;
    if (streakEl) streakEl.textContent = streak;
}

// Show modal with custom content
function showModal(title, content, buttons = []) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    let buttonsHtml = '';
    if (buttons.length === 0) {
        buttonsHtml = `
            <button onclick="closeModal()" class="w-full bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-xl px-6 py-3 transition">
                Đóng
            </button>
        `;
    } else {
        buttonsHtml = buttons.map(btn => `
            <button onclick="${btn.onclick}" class="flex-1 ${btn.class} font-bold rounded-xl px-6 py-3 transition">
                ${btn.text}
            </button>
        `).join('');
    }
    
    overlay.innerHTML = `
        <div class="modal-content">
            <h2 class="text-2xl font-bold text-slate-800 mb-4">${title}</h2>
            <div class="text-slate-700 leading-relaxed mb-6">${content}</div>
            <div class="flex gap-3">
                ${buttonsHtml}
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Close modal
function closeModal() {
    const overlay = document.querySelector('.modal-overlay');
    if (overlay) {
        overlay.remove();
    }
}

// Format number with thousands separator
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Normalize Vietnamese text for comparison
function normalizeVietnamese(text) {
    return text
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/[àáạảãâầấậẩẫăằắặẳẵ]/g, 'a')
        .replace(/[èéẹẻẽêềếệểễ]/g, 'e')
        .replace(/[ìíịỉĩ]/g, 'i')
        .replace(/[òóọỏõôồốộổỗơờớợởỡ]/g, 'o')
        .replace(/[ùúụủũưừứựửữ]/g, 'u')
        .replace(/[ỳýỵỷỹ]/g, 'y')
        .replace(/đ/g, 'd');
}

// Compare two strings (Vietnamese-aware)
function compareStrings(str1, str2) {
    return normalizeVietnamese(str1) === normalizeVietnamese(str2);
}

// Shuffle array
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Create SVG rectangle
function createRectangleSVG(width, height, label = true) {
    const scale = 20; // pixels per unit
    const w = width * scale;
    const h = height * scale;
    
    return `
        <svg width="${w + 40}" height="${h + 40}" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="20" width="${w}" height="${h}" 
                  fill="#E0F2FE" stroke="#38BDF8" stroke-width="3" rx="4"/>
            ${label ? `
                <text x="${w/2 + 20}" y="${h + 35}" text-anchor="middle" 
                      font-size="16" font-weight="bold" fill="#0EA5E9">
                    ${width}m
                </text>
                <text x="10" y="${h/2 + 20}" text-anchor="middle" 
                      font-size="16" font-weight="bold" fill="#0EA5E9" 
                      transform="rotate(-90, 10, ${h/2 + 20})">
                    ${height}m
                </text>
            ` : ''}
        </svg>
    `;
}

// Create SVG square
function createSquareSVG(side, label = true) {
    return createRectangleSVG(side, side, label);
}

// Create clock SVG
function createClockSVG(hours, minutes) {
    const hourAngle = (hours % 12) * 30 + minutes * 0.5 - 90;
    const minuteAngle = minutes * 6 - 90;
    
    return `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="90" fill="white" stroke="#38BDF8" stroke-width="4"/>
            
            <!-- Hour markers -->
            ${[...Array(12)].map((_, i) => {
                const angle = i * 30 - 90;
                const x1 = 100 + 75 * Math.cos(angle * Math.PI / 180);
                const y1 = 100 + 75 * Math.sin(angle * Math.PI / 180);
                const x2 = 100 + 85 * Math.cos(angle * Math.PI / 180);
                const y2 = 100 + 85 * Math.sin(angle * Math.PI / 180);
                return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#0EA5E9" stroke-width="3"/>`;
            }).join('')}
            
            <!-- Hour hand -->
            <line x1="100" y1="100" 
                  x2="${100 + 50 * Math.cos(hourAngle * Math.PI / 180)}" 
                  y2="${100 + 50 * Math.sin(hourAngle * Math.PI / 180)}" 
                  stroke="#1E293B" stroke-width="6" stroke-linecap="round"/>
            
            <!-- Minute hand -->
            <line x1="100" y1="100" 
                  x2="${100 + 70 * Math.cos(minuteAngle * Math.PI / 180)}" 
                  y2="${100 + 70 * Math.sin(minuteAngle * Math.PI / 180)}" 
                  stroke="#38BDF8" stroke-width="4" stroke-linecap="round"/>
            
            <!-- Center dot -->
            <circle cx="100" cy="100" r="8" fill="#EF4444"/>
        </svg>
    `;
}

// Play sound effect (optional - using Web Audio API)
function playSound(type) {
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    if (type === 'correct') {
        oscillator.frequency.value = 523.25; // C5
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } else if (type === 'incorrect') {
        oscillator.frequency.value = 200;
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
