// Kho bài toán có lời văn (~60 bài, chia 7 nhóm)

const LOI_VAN = [
    // ===== NHÓM 1: GẤP LÊN / GIẢM ĐI =====
    {
        id: "lv001",
        nhom: "gap_len_giam_di",
        de: "Một cửa hàng ngày thứ nhất bán được 12 346 quyển vở. Ngày thứ hai bán được gấp 3 lần ngày thứ nhất. Hỏi ngày thứ hai bán được bao nhiêu quyển vở?",
        dapAn: 37038,
        giaiBaiMau: "Ngày thứ hai bán được: 12 346 × 3 = 37 038 (quyển vở)"
    },
    {
        id: "lv002",
        nhom: "gap_len_giam_di",
        de: "Một vườn cây có 15 264 cây cam và 5 088 cây chanh. Số cây cam gấp mấy lần số cây chanh?",
        dapAn: 3,
        giaiBaiMau: "Số cây cam gấp số cây chanh: 15 264 ÷ 5 088 = 3 (lần)"
    },
    {
        id: "lv003",
        nhom: "gap_len_giam_di",
        de: "Một kho có 24 663 quyển vở. Kho thứ hai có số vở gấp 4 lần kho thứ nhất. Hỏi kho thứ hai có bao nhiêu quyển vở?",
        dapAn: 98652,
        giaiBaiMau: "Kho thứ hai có: 24 663 × 4 = 98 652 (quyển vở)"
    },
    
    // ===== NHÓM 2: TỔNG HIỆU =====
    {
        id: "lv004",
        nhom: "tong_hieu",
        de: "Một kho có 80 000 bóng đèn. Lần thứ nhất chuyển đi 12 346 bóng, lần thứ hai chuyển đi 23 908 bóng. Hỏi kho còn lại bao nhiêu bóng đèn?",
        dapAn: 43746,
        giaiBaiMau: "Tổng số bóng chuyển đi: 12 346 + 23 908 = 36 254 (bóng). Còn lại: 80 000 − 36 254 = 43 746 (bóng)"
    },
    {
        id: "lv005",
        nhom: "tong_hieu",
        de: "Một trường có 1 245 học sinh. Năm ngoái có 1 189 học sinh. Hỏi năm nay trường tăng thêm bao nhiêu học sinh?",
        dapAn: 56,
        giaiBaiMau: "Số học sinh tăng thêm: 1 245 − 1 189 = 56 (học sinh)"
    },
    {
        id: "lv006",
        nhom: "tong_hieu",
        de: "Tổng của hai số là 45 678. Một số là 23 456. Tìm số còn lại.",
        dapAn: 22222,
        giaiBaiMau: "Số còn lại: 45 678 − 23 456 = 22 222"
    },
    
    // ===== NHÓM 3: MUA BÁN =====
    {
        id: "lv007",
        nhom: "mua_ban",
        de: "Mẹ mua 3 kg cam, mỗi kg giá 22 700 đồng. Mẹ đưa 100 000 đồng. Hỏi mẹ được trả lại bao nhiêu tiền?",
        dapAn: 31900,
        giaiBaiMau: "Tiền mua cam: 22 700 × 3 = 68 100 (đồng). Trả lại: 100 000 − 68 100 = 31 900 (đồng)"
    },
    {
        id: "lv008",
        nhom: "mua_ban",
        de: "Một cửa hàng bán 5 cái bàn, mỗi cái giá 1 250 000 đồng. Hỏi cửa hàng thu được bao nhiêu tiền?",
        dapAn: 6250000,
        giaiBaiMau: "Số tiền thu được: 1 250 000 × 5 = 6 250 000 (đồng)"
    },
    {
        id: "lv009",
        nhom: "mua_ban",
        de: "Bố mua 4 quyển sách, mỗi quyển giá 45 000 đồng và 2 cái bút giá 15 000 đồng mỗi cái. Hỏi bố phải trả bao nhiêu tiền?",
        dapAn: 210000,
        giaiBaiMau: "Tiền sách: 45 000 × 4 = 180 000 (đồng). Tiền bút: 15 000 × 2 = 30 000 (đồng). Tổng: 180 000 + 30 000 = 210 000 (đồng)"
    },
    
    // ===== NHÓM 4: RÚT VỀ ĐƠN VỊ =====
    {
        id: "lv010",
        nhom: "rut_don_vi",
        de: "Có 8 cốc nước cam, mỗi cốc 150ml. Rót đều vào 3 cốc. Hỏi mỗi cốc mới chứa bao nhiêu ml?",
        dapAn: 400,
        giaiBaiMau: "Tổng nước cam: 150 × 8 = 1 200 (ml). Mỗi cốc mới: 1 200 ÷ 3 = 400 (ml)"
    },
    {
        id: "lv011",
        nhom: "rut_don_vi",
        de: "Một xe tải chở 6 thùng gạo, mỗi thùng 125kg. Chia đều cho 5 cửa hàng. Hỏi mỗi cửa hàng nhận được bao nhiêu kg gạo?",
        dapAn: 150,
        giaiBaiMau: "Tổng gạo: 125 × 6 = 750 (kg). Mỗi cửa hàng: 750 ÷ 5 = 150 (kg)"
    },
    
    // ===== NHÓM 5: HÌNH HỌC =====
    {
        id: "lv012",
        nhom: "hinh_hoc",
        de: "Một mảnh vườn hình chữ nhật có chiều rộng 9m, chiều dài gấp 4 lần chiều rộng. Tính chu vi và diện tích mảnh vườn.",
        dapAn: { chuVi: 90, dienTich: 324 },
        giaiBaiMau: "Chiều dài: 9 × 4 = 36 (m). Chu vi: (36 + 9) × 2 = 90 (m). Diện tích: 36 × 9 = 324 (m²)"
    },
    {
        id: "lv013",
        nhom: "hinh_hoc",
        de: "Một hình vuông có cạnh 15m. Tính chu vi và diện tích hình vuông đó.",
        dapAn: { chuVi: 60, dienTich: 225 },
        giaiBaiMau: "Chu vi: 15 × 4 = 60 (m). Diện tích: 15 × 15 = 225 (m²)"
    },
    {
        id: "lv014",
        nhom: "hinh_hoc",
        de: "Một mảnh đất hình chữ nhật có chiều dài 25m, chiều rộng 12m. Tính diện tích mảnh đất.",
        dapAn: 300,
        giaiBaiMau: "Diện tích: 25 × 12 = 300 (m²)"
    },
    {
        id: "lv015",
        nhom: "hinh_hoc",
        de: "Một hình chữ nhật có chu vi 80m, chiều dài 25m. Tính chiều rộng.",
        dapAn: 15,
        giaiBaiMau: "Nửa chu vi: 80 ÷ 2 = 40 (m). Chiều rộng: 40 − 25 = 15 (m)"
    },
    
    // ===== NHÓM 6: NHIỀU BƯỚC =====
    {
        id: "lv016",
        nhom: "nhieu_buoc",
        de: "Một thư viện có 24 663 quyển vở. Bán đi 11 238 quyển. Số vở còn lại chia đều cho 5 thư viện nhỏ. Hỏi mỗi thư viện nhỏ nhận được bao nhiêu quyển?",
        dapAn: 2685,
        giaiBaiMau: "Số vở còn lại: 24 663 − 11 238 = 13 425 (quyển). Mỗi thư viện: 13 425 ÷ 5 = 2 685 (quyển)"
    },
    {
        id: "lv017",
        nhom: "nhieu_buoc",
        de: "Một cửa hàng có 3 thùng táo, mỗi thùng 125 quả. Bán đi 180 quả. Hỏi còn lại bao nhiêu quả táo?",
        dapAn: 195,
        giaiBaiMau: "Tổng táo: 125 × 3 = 375 (quả). Còn lại: 375 − 180 = 195 (quả)"
    },
    {
        id: "lv018",
        nhom: "nhieu_buoc",
        de: "Một xe tải chở 8 thùng gạo, mỗi thùng 150kg. Đã bán 600kg. Hỏi còn lại bao nhiêu kg gạo?",
        dapAn: 600,
        giaiBaiMau: "Tổng gạo: 150 × 8 = 1 200 (kg). Còn lại: 1 200 − 600 = 600 (kg)"
    },
    
    // ===== NHÓM 7: PHÂN SỐ =====
    {
        id: "lv019",
        nhom: "phan_so",
        de: "Một tấm vải dài 91 880m. Cắt đi 3/4 tấm vải. Hỏi còn lại bao nhiêu mét vải?",
        dapAn: 22970,
        giaiBaiMau: "Phần cắt đi: 91 880 × 3 ÷ 4 = 68 910 (m). Còn lại: 91 880 − 68 910 = 22 970 (m)"
    },
    {
        id: "lv020",
        nhom: "phan_so",
        de: "Một kho có 15 264kg gạo. Bán đi 1/3 số gạo. Hỏi còn lại bao nhiêu kg gạo?",
        dapAn: 10176,
        giaiBaiMau: "Phần bán đi: 15 264 ÷ 3 = 5 088 (kg). Còn lại: 15 264 − 5 088 = 10 176 (kg)"
    },
    {
        id: "lv021",
        nhom: "phan_so",
        de: "Một sợi dây dài 48m. Cắt đi 1/4 sợi dây. Hỏi còn lại bao nhiêu mét dây?",
        dapAn: 36,
        giaiBaiMau: "Phần cắt đi: 48 ÷ 4 = 12 (m). Còn lại: 48 − 12 = 36 (m)"
    },
    {
        id: "lv022",
        nhom: "phan_so",
        de: "Một bể nước chứa 240 lít. Đã dùng 1/2 số nước. Hỏi còn lại bao nhiêu lít nước?",
        dapAn: 120,
        giaiBaiMau: "Phần đã dùng: 240 ÷ 2 = 120 (lít). Còn lại: 240 − 120 = 120 (lít)"
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LOI_VAN;
}
