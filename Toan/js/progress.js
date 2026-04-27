// Progress management using localStorage

const STORAGE_KEY = 'toan_lop3_progress';
const STREAK_KEY = 'toan_lop3_streak';
const LAST_STUDY_KEY = 'toan_lop3_last_study';

// Get progress for a specific module
function getProgress(moduleId) {
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return allProgress[moduleId] || { done: 0, correct: 0, total: 0, stars: 0, badge: false };
}

// Save progress for a module
function saveProgress(moduleId, correct, total, stars = 0) {
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    
    if (!allProgress[moduleId]) {
        allProgress[moduleId] = { done: 0, correct: 0, total: 0, stars: 0, badge: false };
    }
    
    allProgress[moduleId].done = total;
    allProgress[moduleId].correct = correct;
    allProgress[moduleId].total = total;
    allProgress[moduleId].stars += stars;
    
    // Award badge if 100% complete
    if (correct === total && total > 0) {
        allProgress[moduleId].badge = true;
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
    
    // Update streak
    updateStreak();
}

// Get total stars across all modules
function getTotalStars() {
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    let total = 0;
    for (const moduleId in allProgress) {
        total += allProgress[moduleId].stars || 0;
    }
    return total;
}

// Get streak (consecutive days studied)
function getStreak() {
    return parseInt(localStorage.getItem(STREAK_KEY) || '0');
}

// Update streak
function updateStreak() {
    const today = new Date().toDateString();
    const lastStudy = localStorage.getItem(LAST_STUDY_KEY);
    
    if (lastStudy === today) {
        return; // Already studied today
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    let currentStreak = getStreak();
    
    if (lastStudy === yesterdayStr) {
        // Consecutive day
        currentStreak++;
    } else if (lastStudy !== today) {
        // Streak broken, start over
        currentStreak = 1;
    }
    
    localStorage.setItem(STREAK_KEY, currentStreak.toString());
    localStorage.setItem(LAST_STUDY_KEY, today);
}

// Reset all progress
function resetAll() {
    if (confirm('Bạn có chắc muốn xóa toàn bộ tiến độ không?')) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STREAK_KEY);
        localStorage.removeItem(LAST_STUDY_KEY);
        location.reload();
    }
}

// Get all badges earned
function getBadges() {
    const allProgress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const badges = [];
    for (const moduleId in allProgress) {
        if (allProgress[moduleId].badge) {
            badges.push(moduleId);
        }
    }
    return badges;
}

// Export progress as JSON (for backup)
function exportProgress() {
    const data = {
        progress: localStorage.getItem(STORAGE_KEY),
        streak: localStorage.getItem(STREAK_KEY),
        lastStudy: localStorage.getItem(LAST_STUDY_KEY)
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'toan-lop3-progress.json';
    a.click();
}

// Import progress from JSON
function importProgress(jsonString) {
    try {
        const data = JSON.parse(jsonString);
        if (data.progress) localStorage.setItem(STORAGE_KEY, data.progress);
        if (data.streak) localStorage.setItem(STREAK_KEY, data.streak);
        if (data.lastStudy) localStorage.setItem(LAST_STUDY_KEY, data.lastStudy);
        location.reload();
    } catch (e) {
        alert('File không hợp lệ!');
    }
}
