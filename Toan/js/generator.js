// Random number generator and exercise generators

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function soNgauNhien5Cu() {
    return randomInt(10000, 99999);
}

// ===== PHÉP TÍNH CƠ BẢN =====

// Phép cộng: cả hai đầu vào 5 chữ số, kết quả ≤ 99 999
function sinhPhepCong() {
    const a = randomInt(10000, 89999);
    const b = randomInt(10000, 99999 - a);
    return { phepTinh: `${a} + ${b}`, dapAn: a + b, a, b, phep: '+' };
}

// Phép trừ: cả hai đầu vào 5 chữ số, không âm
function sinhPhepTru() {
    const a = randomInt(20000, 99999);
    const b = randomInt(10000, a - 1);  // b tối thiểu 5 chữ số, < a
    return { phepTinh: `${a} − ${b}`, dapAn: a - b, a, b, phep: '−' };
}

// Phép nhân: 5 chữ số × 1 chữ số, kết quả ≤ 99 999
function sinhPhepNhan() {
    const b = randomInt(2, 9);
    const a = randomInt(10000, Math.floor(99999 / b));
    return { phepTinh: `${a} × ${b}`, dapAn: a * b, a, b, phep: '×' };
}

// Phép chia: số bị chia 5 chữ số ÷ 1 chữ số
function sinhPhepChia(coDu = false) {
    const b = randomInt(2, 9);
    const thuong = randomInt(1000, Math.floor(99999 / b));
    const du = coDu ? randomInt(1, b - 1) : 0;
    const a = thuong * b + du;
    return { 
        phepTinh: `${a} ÷ ${b}`, 
        dapAn: thuong, 
        du, 
        a, 
        b, 
        phep: '÷' 
    };
}

// ===== BIỂU THỨC =====

// Dạng 1: Chỉ cộng/trừ
function sinhBieuThuc1() {
    const a = randomInt(10000, 50000);
    const b = randomInt(10000, 40000);
    const c = randomInt(1000, 10000);
    const dapAn = a + b - c;
    return {
        bieuThuc: `${a} + ${b} − ${c}`,
        dapAn,
        dang: 1
    };
}

// Dạng 2: Nhân/chia trước
function sinhBieuThuc2() {
    const a = randomInt(5000, 20000);
    const b = randomInt(100, 500);
    const c = randomInt(2, 9);
    const dapAn = a - b * c;
    return {
        bieuThuc: `${a} − ${b} × ${c}`,
        dapAn,
        dang: 2
    };
}

// Dạng 3: Có ngoặc nhân
function sinhBieuThuc3() {
    const a = randomInt(2, 9);
    const b = randomInt(10000, 30000);
    const c = randomInt(5000, 15000);
    const dapAn = a * (b - c);
    return {
        bieuThuc: `${a} × (${b} − ${c})`,
        dapAn,
        dang: 3
    };
}

// Dạng 4: Có ngoặc chia
function sinhBieuThuc4() {
    const a = randomInt(10000, 30000);
    const b = randomInt(1000, 10000);
    const c = randomInt(2, 9);
    const dapAn = (a - b) * c;
    return {
        bieuThuc: `(${a} − ${b}) × ${c}`,
        dapAn,
        dang: 4
    };
}

// Dạng 5: Tính thuận tiện nhất
function sinhBieuThuc5() {
    // Kiểu 1: Nhóm các số thành tổng tròn
    const base = randomInt(2, 8) * 1000;
    const numbers = [];
    for (let i = 0; i < 6; i++) {
        numbers.push(base + i * 1000);
    }
    const dapAn = numbers.reduce((sum, n) => sum + n, 0);
    return {
        bieuThuc: numbers.join(' + '),
        dapAn,
        dang: 5,
        goi_y: `Nhóm các số: (${numbers[0]} + ${numbers[5]}) + (${numbers[1]} + ${numbers[4]}) + (${numbers[2]} + ${numbers[3]})`
    };
}

// ===== TÌM X CƠ BẢN =====

// Tìm số hạng
function sinhTimX1() {
    const b = randomInt(1000, 9999);
    const tong = randomInt(10000, 50000);
    const x = tong - b;
    return {
        phepTinh: `X + ${b} = ${tong}`,
        dapAn: x,
        dang: 1,
        cachLam: `X = ${tong} − ${b}`
    };
}

// Tìm số bị trừ
function sinhTimX2() {
    const b = randomInt(1000, 9999);
    const hieu = randomInt(10000, 50000);
    const x = hieu + b;
    return {
        phepTinh: `X − ${b} = ${hieu}`,
        dapAn: x,
        dang: 2,
        cachLam: `X = ${hieu} + ${b}`
    };
}

// Tìm số trừ
function sinhTimX3() {
    const a = randomInt(20000, 60000);
    const hieu = randomInt(5000, 15000);
    const x = a - hieu;
    return {
        phepTinh: `${a} − X = ${hieu}`,
        dapAn: x,
        dang: 3,
        cachLam: `X = ${a} − ${hieu}`
    };
}

// Tìm thừa số
function sinhTimX4() {
    const b = randomInt(2, 9);
    const tich = randomInt(10000, 50000);
    const x = Math.floor(tich / b);
    const tichChinhXac = x * b;
    return {
        phepTinh: `X × ${b} = ${tichChinhXac}`,
        dapAn: x,
        dang: 4,
        cachLam: `X = ${tichChinhXac} ÷ ${b}`
    };
}

// Tìm số bị chia
function sinhTimX5() {
    const b = randomInt(2, 9);
    const thuong = randomInt(2000, 10000);
    const x = thuong * b;
    return {
        phepTinh: `X ÷ ${b} = ${thuong}`,
        dapAn: x,
        dang: 5,
        cachLam: `X = ${thuong} × ${b}`
    };
}

// Tìm số chia
function sinhTimX6() {
    const a = randomInt(20000, 60000);
    const x = randomInt(2, 9);
    const thuong = Math.floor(a / x);
    const aChinhXac = thuong * x;
    return {
        phepTinh: `${aChinhXac} ÷ X = ${thuong}`,
        dapAn: x,
        dang: 6,
        cachLam: `X = ${aChinhXac} ÷ ${thuong}`
    };
}

// ===== ĐỌC VIẾT SỐ =====

// Số La Mã
const LA_MA = {
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V",
    6: "VI", 7: "VII", 8: "VIII", 9: "IX", 10: "X",
    11: "XI", 12: "XII", 13: "XIII", 14: "XIV", 15: "XV",
    16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX", 21: "XXI"
};

const LA_MA_NGUOC = Object.fromEntries(
    Object.entries(LA_MA).map(([k, v]) => [v, parseInt(k)])
);

function soSangLaMa(so) {
    return LA_MA[so] || "";
}

function laMaSangSo(laMa) {
    return LA_MA_NGUOC[laMa] || 0;
}

// Sinh bài số La Mã
function sinhBaiLaMa(loai) {
    const so = randomInt(1, 21);
    const laMa = soSangLaMa(so);
    
    if (loai === 'arab-to-roman') {
        return {
            de: `Viết số ${so} bằng số La Mã`,
            dapAn: laMa,
            loai: 'text'
        };
    } else {
        return {
            de: `Số La Mã ${laMa} viết bằng số Ả Rập là`,
            dapAn: so,
            loai: 'number'
        };
    }
}

// Đọc số thành chữ (chuẩn tiếng Việt theo quy tắc SGK lớp 3)
function docSo(so) {
    if (so === 0) return 'không';
    
    const chu = ['', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
    
    // Chuyển thành chuỗi 5 chữ số
    let str = so.toString().padStart(5, '0');
    let result = [];
    
    const chucNghin = parseInt(str[0]);
    const nghin = parseInt(str[1]);
    const tram = parseInt(str[2]);
    const chuc = parseInt(str[3]);
    const donVi = parseInt(str[4]);
    
    // ===== PHẦN NGHÌN (chục nghìn + nghìn) =====
    if (chucNghin > 0 || nghin > 0) {
        if (chucNghin > 0) {
            if (chucNghin === 1) {
                result.push('mười');
            } else {
                result.push(chu[chucNghin] + ' mươi');
            }
            
            if (nghin === 0) {
                // Không có nghìn
            } else if (nghin === 1 && chucNghin >= 1) {
                result.push('mốt');
            } else if (nghin === 5 && chucNghin >= 1) {
                result.push('lăm');
            } else if (nghin === 4 && chucNghin >= 2) {
                result.push('tư');
            } else {
                result.push(chu[nghin]);
            }
        } else {
            // Chỉ có nghìn, không có chục nghìn
            result.push(chu[nghin]);
        }
        
        result.push('nghìn');
    }
    
    // ===== PHẦN TRĂM =====
    if (tram > 0) {
        result.push(chu[tram] + ' trăm');
    } else if (result.length > 0 && (chuc > 0 || donVi > 0)) {
        // Trăm = 0 nhưng có chục/đơn vị → đọc "không trăm"
        result.push('không trăm');
    }
    
    // ===== PHẦN CHỤC =====
    if (chuc > 0) {
        if (chuc === 1) {
            result.push('mười');
        } else {
            result.push(chu[chuc] + ' mươi');
        }
    } else if (donVi > 0 && (tram > 0 || result.length > 0)) {
        // Chục = 0, có đơn vị → đọc "linh"
        result.push('linh');
    }
    
    // ===== PHẦN ĐƠN VỊ =====
    if (donVi > 0) {
        if (chuc >= 2) {
            // Sau chục ≥ 2
            if (donVi === 1) {
                result.push('mốt');
            } else if (donVi === 4) {
                result.push('tư');
            } else if (donVi === 5) {
                result.push('lăm');
            } else {
                result.push(chu[donVi]);
            }
        } else if (chuc === 1) {
            // Sau chục = 1 (mười)
            if (donVi === 5) {
                result.push('lăm');
            } else {
                result.push(chu[donVi]);
            }
        } else {
            // Chục = 0 (đã có "linh" ở trên)
            result.push(chu[donVi]);
        }
    }
    
    return result.join(' ');
}

// ===== ĐẠI LƯỢNG =====

// Đổi đơn vị độ dài
function sinhDoiDonViDoDai() {
    const loai = randomInt(1, 3);
    
    if (loai === 1) {
        // m, dm -> dm
        const m = randomInt(1, 20);
        const dm = randomInt(0, 9);
        return {
            de: `${m}m ${dm}dm = ___ dm`,
            dapAn: m * 10 + dm,
            donVi: 'dm'
        };
    } else if (loai === 2) {
        // cm -> m, cm
        const cm = randomInt(100, 999);
        const m = Math.floor(cm / 100);
        const cmDu = cm % 100;
        return {
            de: `${cm}cm = ___m ___cm`,
            dapAn: [m, cmDu],
            donVi: ['m', 'cm']
        };
    } else {
        // m, cm -> cm
        const m = randomInt(1, 20);
        const cm = randomInt(1, 99);
        return {
            de: `${m}m ${cm}cm = ___ cm`,
            dapAn: m * 100 + cm,
            donVi: 'cm'
        };
    }
}

// Đổi đơn vị khối lượng
function sinhDoiDonViKhoiLuong() {
    const loai = randomInt(1, 2);
    
    if (loai === 1) {
        // kg, g -> g
        const kg = randomInt(1, 20);
        const g = randomInt(1, 999);
        return {
            de: `${kg}kg ${g}g = ___ g`,
            dapAn: kg * 1000 + g,
            donVi: 'g'
        };
    } else {
        // g -> kg, g
        const g = randomInt(1000, 9999);
        const kg = Math.floor(g / 1000);
        const gDu = g % 1000;
        return {
            de: `${g}g = ___kg ___g`,
            dapAn: [kg, gDu],
            donVi: ['kg', 'g']
        };
    }
}

// Đổi đơn vị thời gian
function sinhDoiDonViThoiGian() {
    const loai = randomInt(1, 3);
    
    if (loai === 1) {
        // giờ, phút -> phút
        const gio = randomInt(1, 5);
        const phut = randomInt(0, 59);
        return {
            de: `${gio} giờ ${phut} phút = ___ phút`,
            dapAn: gio * 60 + phut,
            donVi: 'phút'
        };
    } else if (loai === 2) {
        // ngày, giờ -> giờ
        const ngay = randomInt(1, 5);
        const gio = randomInt(0, 23);
        return {
            de: `${ngay} ngày ${gio} giờ = ___ giờ`,
            dapAn: ngay * 24 + gio,
            donVi: 'giờ'
        };
    } else {
        // tuần, ngày -> ngày
        const tuan = randomInt(1, 8);
        const ngay = randomInt(0, 6);
        return {
            de: `${tuan} tuần ${ngay} ngày = ___ ngày`,
            dapAn: tuan * 7 + ngay,
            donVi: 'ngày'
        };
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        randomInt,
        soNgauNhien5Cu,
        sinhPhepCong,
        sinhPhepTru,
        sinhPhepNhan,
        sinhPhepChia,
        sinhBieuThuc1,
        sinhBieuThuc2,
        sinhBieuThuc3,
        sinhBieuThuc4,
        sinhBieuThuc5,
        sinhTimX1,
        sinhTimX2,
        sinhTimX3,
        sinhTimX4,
        sinhTimX5,
        sinhTimX6,
        soSangLaMa,
        laMaSangSo,
        sinhBaiLaMa,
        docSo,
        sinhDoiDonViDoDai,
        sinhDoiDonViKhoiLuong,
        sinhDoiDonViThoiGian
    };
}
