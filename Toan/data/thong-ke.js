// Kho bảng thống kê (~15 bảng)

const THONG_KE = [
    {
        id: "tk001",
        tieuDe: "Số giờ đọc sách trong tuần",
        cot: ["Bạn", "Minh", "Chi", "Ngọc"],
        giaTri: [null, 10, 9, 8],
        cauHoi: [
            { de: "Bạn đọc nhiều giờ nhất là ai?", dapAn: "Minh", kieu: "text" },
            { de: "Tổng số giờ của cả 3 bạn?", dapAn: 27, kieu: "so" },
            { de: "Bạn đọc ít nhất là ai?", dapAn: "Ngọc", kieu: "text" }
        ]
    },
    {
        id: "tk002",
        tieuDe: "Số học sinh tham gia các câu lạc bộ",
        cot: ["Câu lạc bộ", "Toán", "Văn", "Anh", "Thể dục"],
        giaTri: [null, 45, 38, 52, 60],
        cauHoi: [
            { de: "Câu lạc bộ nào có nhiều học sinh nhất?", dapAn: "Thể dục", kieu: "text" },
            { de: "Tổng số học sinh tham gia cả 4 câu lạc bộ?", dapAn: 195, kieu: "so" },
            { de: "Câu lạc bộ Toán có bao nhiêu học sinh?", dapAn: 45, kieu: "so" }
        ]
    },
    {
        id: "tk003",
        tieuDe: "Số cây trồng được trong 4 ngày",
        cot: ["Ngày", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5"],
        giaTri: [null, 120, 135, 140, 125],
        cauHoi: [
            { de: "Ngày nào trồng được nhiều cây nhất?", dapAn: "Thứ 4", kieu: "text" },
            { de: "Tổng số cây trồng được trong 4 ngày?", dapAn: 520, kieu: "so" },
            { de: "Thứ 3 trồng được bao nhiêu cây?", dapAn: 135, kieu: "so" }
        ]
    },
    {
        id: "tk004",
        tieuDe: "Số quyển sách bán được trong tuần",
        cot: ["Thứ", "Hai", "Ba", "Tư", "Năm", "Sáu"],
        giaTri: [null, 234, 189, 256, 278, 312],
        cauHoi: [
            { de: "Thứ mấy bán được nhiều sách nhất?", dapAn: "Sáu", kieu: "text" },
            { de: "Tổng số sách bán được trong 5 ngày?", dapAn: 1269, kieu: "so" },
            { de: "Thứ Hai bán được bao nhiêu quyển?", dapAn: 234, kieu: "so" }
        ]
    },
    {
        id: "tk005",
        tieuDe: "Số học sinh đạt điểm 10 các môn",
        cot: ["Môn", "Toán", "Văn", "Anh", "Khoa học"],
        giaTri: [null, 28, 32, 25, 30],
        cauHoi: [
            { de: "Môn nào có nhiều học sinh đạt 10 nhất?", dapAn: "Văn", kieu: "text" },
            { de: "Tổng số học sinh đạt 10 cả 4 môn?", dapAn: 115, kieu: "so" },
            { de: "Môn Toán có bao nhiêu học sinh đạt 10?", dapAn: 28, kieu: "so" }
        ]
    },
    {
        id: "tk006",
        tieuDe: "Số km đi được mỗi ngày",
        cot: ["Ngày", "1", "2", "3", "4", "5"],
        giaTri: [null, 15, 18, 20, 17, 22],
        cauHoi: [
            { de: "Ngày nào đi được xa nhất?", dapAn: "5", kieu: "text" },
            { de: "Tổng số km đi được trong 5 ngày?", dapAn: 92, kieu: "so" },
            { de: "Ngày 3 đi được bao nhiêu km?", dapAn: 20, kieu: "so" }
        ]
    },
    {
        id: "tk007",
        tieuDe: "Số lượng trái cây bán được",
        cot: ["Loại", "Cam", "Táo", "Chuối", "Xoài"],
        giaTri: [null, 456, 389, 512, 423],
        cauHoi: [
            { de: "Loại trái cây nào bán được nhiều nhất?", dapAn: "Chuối", kieu: "text" },
            { de: "Tổng số trái cây bán được?", dapAn: 1780, kieu: "so" },
            { de: "Cam bán được bao nhiêu quả?", dapAn: 456, kieu: "so" }
        ]
    },
    {
        id: "tk008",
        tieuDe: "Số tiền tiết kiệm mỗi tháng (nghìn đồng)",
        cot: ["Tháng", "1", "2", "3", "4"],
        giaTri: [null, 150, 200, 180, 220],
        cauHoi: [
            { de: "Tháng nào tiết kiệm được nhiều nhất?", dapAn: "4", kieu: "text" },
            { de: "Tổng số tiền tiết kiệm được trong 4 tháng?", dapAn: 750, kieu: "so" },
            { de: "Tháng 2 tiết kiệm được bao nhiêu?", dapAn: 200, kieu: "so" }
        ]
    },
    {
        id: "tk009",
        tieuDe: "Số học sinh đi học bằng các phương tiện",
        cot: ["Phương tiện", "Xe đạp", "Xe máy", "Đi bộ", "Ô tô"],
        giaTri: [null, 125, 89, 156, 45],
        cauHoi: [
            { de: "Phương tiện nào được sử dụng nhiều nhất?", dapAn: "Đi bộ", kieu: "text" },
            { de: "Tổng số học sinh?", dapAn: 415, kieu: "so" },
            { de: "Có bao nhiêu học sinh đi xe đạp?", dapAn: 125, kieu: "so" }
        ]
    },
    {
        id: "tk010",
        tieuDe: "Số lượng sản phẩm sản xuất mỗi ngày",
        cot: ["Ngày", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6"],
        giaTri: [null, 1234, 1456, 1389, 1512, 1678],
        cauHoi: [
            { de: "Ngày nào sản xuất được nhiều nhất?", dapAn: "Thứ 6", kieu: "text" },
            { de: "Tổng số sản phẩm trong 5 ngày?", dapAn: 7269, kieu: "so" },
            { de: "Thứ 4 sản xuất được bao nhiêu sản phẩm?", dapAn: 1389, kieu: "so" }
        ]
    },
    {
        id: "tk011",
        tieuDe: "Số điểm kiểm tra của 4 bạn",
        cot: ["Bạn", "An", "Bình", "Chi", "Dũng"],
        giaTri: [null, 8, 9, 7, 10],
        cauHoi: [
            { de: "Bạn nào có điểm cao nhất?", dapAn: "Dũng", kieu: "text" },
            { de: "Tổng điểm của 4 bạn?", dapAn: 34, kieu: "so" },
            { de: "Bạn Chi có bao nhiêu điểm?", dapAn: 7, kieu: "so" }
        ]
    },
    {
        id: "tk012",
        tieuDe: "Số lượng xe bán được trong tháng",
        cot: ["Loại xe", "Xe đạp", "Xe máy", "Ô tô"],
        giaTri: [null, 234, 156, 45],
        cauHoi: [
            { de: "Loại xe nào bán được nhiều nhất?", dapAn: "Xe đạp", kieu: "text" },
            { de: "Tổng số xe bán được?", dapAn: 435, kieu: "so" },
            { de: "Xe máy bán được bao nhiêu chiếc?", dapAn: 156, kieu: "so" }
        ]
    },
    {
        id: "tk013",
        tieuDe: "Số học sinh tham gia các môn thể thao",
        cot: ["Môn", "Bóng đá", "Bóng rổ", "Cầu lông", "Bơi lội"],
        giaTri: [null, 78, 56, 64, 82],
        cauHoi: [
            { de: "Môn nào có nhiều học sinh nhất?", dapAn: "Bơi lội", kieu: "text" },
            { de: "Tổng số học sinh tham gia?", dapAn: 280, kieu: "so" },
            { de: "Bóng rổ có bao nhiêu học sinh?", dapAn: 56, kieu: "so" }
        ]
    },
    {
        id: "tk014",
        tieuDe: "Số lượng hoa bán được trong tuần",
        cot: ["Loại hoa", "Hồng", "Cúc", "Lan", "Hướng dương"],
        giaTri: [null, 345, 289, 412, 378],
        cauHoi: [
            { de: "Loại hoa nào bán được nhiều nhất?", dapAn: "Lan", kieu: "text" },
            { de: "Tổng số hoa bán được?", dapAn: 1424, kieu: "so" },
            { de: "Hoa hồng bán được bao nhiêu bông?", dapAn: 345, kieu: "so" }
        ]
    },
    {
        id: "tk015",
        tieuDe: "Số học sinh đạt học sinh giỏi các lớp",
        cot: ["Lớp", "3A", "3B", "3C", "3D"],
        giaTri: [null, 12, 15, 10, 14],
        cauHoi: [
            { de: "Lớp nào có nhiều học sinh giỏi nhất?", dapAn: "3B", kieu: "text" },
            { de: "Tổng số học sinh giỏi của 4 lớp?", dapAn: 51, kieu: "so" },
            { de: "Lớp 3C có bao nhiêu học sinh giỏi?", dapAn: 10, kieu: "so" }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = THONG_KE;
}
