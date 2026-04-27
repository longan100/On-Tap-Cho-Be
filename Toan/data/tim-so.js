// Kho bài "Tìm số biết rằng..." (~20 bài)

const TIM_SO = [
    {
        id: "ts001",
        de: "Tìm số biết rằng lấy số đó chia cho 7 thì được thương là 9 và được số dư lớn nhất có thể.",
        giaiBaiMau: "Số dư lớn nhất khi chia cho 7 là 6. Số cần tìm = 9 × 7 + 6 = 69.",
        dapAn: 69
    },
    {
        id: "ts002",
        de: "Tìm số biết rằng lấy số đó chia cho 6 thì được thương là số nhỏ nhất có hai chữ số và được số dư lớn nhất có thể.",
        giaiBaiMau: "Số nhỏ nhất có hai chữ số là 10. Số dư lớn nhất khi chia cho 6 là 5. Số cần tìm = 10 × 6 + 5 = 65.",
        dapAn: 65
    },
    {
        id: "ts003",
        de: "Tìm số biết rằng lấy số đó chia cho số lớn nhất có một chữ số thì được thương là số lớn nhất có hai chữ số.",
        giaiBaiMau: "Số lớn nhất có một chữ số là 9. Số lớn nhất có hai chữ số là 99. Số cần tìm = 99 × 9 = 891.",
        dapAn: 891
    },
    {
        id: "ts004",
        de: "Tìm số biết rằng lấy số đó nhân với 6 thì được tích là 4 212 bớt đi 612.",
        giaiBaiMau: "Tích là: 4 212 − 612 = 3 600. Số cần tìm = 3 600 ÷ 6 = 600.",
        dapAn: 600
    },
    {
        id: "ts005",
        de: "Tìm số biết rằng gấp số đó lên 8 lần thì được tích là 4 816 và thêm 648.",
        giaiBaiMau: "Tích là: 4 816 + 648 = 5 464. Số cần tìm = 5 464 ÷ 8 = 683.",
        dapAn: 683
    },
    {
        id: "ts006",
        de: "Tìm số lớn nhất có bốn chữ số khác nhau và số nhỏ nhất có ba chữ số. Tính tổng của hai số đó.",
        giaiBaiMau: "Số lớn nhất có 4 chữ số khác nhau: 9 876. Số nhỏ nhất có 3 chữ số: 100. Tổng: 9 876 + 100 = 9 976.",
        dapAn: 9976
    },
    {
        id: "ts007",
        de: "Tìm số biết rằng lấy số đó chia cho 8 thì được thương là 125 và số dư là 3.",
        giaiBaiMau: "Số cần tìm = 125 × 8 + 3 = 1 003.",
        dapAn: 1003
    },
    {
        id: "ts008",
        de: "Tìm số biết rằng lấy số đó trừ đi 1 234 thì được 5 678.",
        giaiBaiMau: "Số cần tìm = 5 678 + 1 234 = 6 912.",
        dapAn: 6912
    },
    {
        id: "ts009",
        de: "Tìm số biết rằng lấy 10 000 trừ đi số đó thì được 3 456.",
        giaiBaiMau: "Số cần tìm = 10 000 − 3 456 = 6 544.",
        dapAn: 6544
    },
    {
        id: "ts010",
        de: "Tìm số biết rằng lấy số đó cộng với 2 345 thì được 8 000.",
        giaiBaiMau: "Số cần tìm = 8 000 − 2 345 = 5 655.",
        dapAn: 5655
    },
    {
        id: "ts011",
        de: "Tìm số biết rằng lấy số đó nhân với 7 thì được 4 900.",
        giaiBaiMau: "Số cần tìm = 4 900 ÷ 7 = 700.",
        dapAn: 700
    },
    {
        id: "ts012",
        de: "Tìm số biết rằng lấy số đó chia cho 5 thì được 1 234.",
        giaiBaiMau: "Số cần tìm = 1 234 × 5 = 6 170.",
        dapAn: 6170
    },
    {
        id: "ts013",
        de: "Tìm số biết rằng lấy số đó chia cho 9 thì được thương là 456 và số dư là 7.",
        giaiBaiMau: "Số cần tìm = 456 × 9 + 7 = 4 111.",
        dapAn: 4111
    },
    {
        id: "ts014",
        de: "Tìm số biết rằng lấy số đó chia cho 4 thì được thương là số lớn nhất có ba chữ số.",
        giaiBaiMau: "Số lớn nhất có ba chữ số là 999. Số cần tìm = 999 × 4 = 3 996.",
        dapAn: 3996
    },
    {
        id: "ts015",
        de: "Tìm số biết rằng lấy số đó nhân với số nhỏ nhất có một chữ số khác 0 thì được 5 432.",
        giaiBaiMau: "Số nhỏ nhất có một chữ số khác 0 là 1. Số cần tìm = 5 432 ÷ 1 = 5 432.",
        dapAn: 5432
    },
    {
        id: "ts016",
        de: "Tìm số biết rằng gấp số đó lên 6 lần rồi cộng thêm 120 thì được 840.",
        giaiBaiMau: "Số đó gấp 6 lần là: 840 − 120 = 720. Số cần tìm = 720 ÷ 6 = 120.",
        dapAn: 120
    },
    {
        id: "ts017",
        de: "Tìm số biết rằng lấy số đó nhân với 5 rồi trừ đi 250 thì được 1 000.",
        giaiBaiMau: "Số đó nhân 5 là: 1 000 + 250 = 1 250. Số cần tìm = 1 250 ÷ 5 = 250.",
        dapAn: 250
    },
    {
        id: "ts018",
        de: "Tìm số biết rằng lấy số đó chia cho 3 rồi cộng thêm 456 thì được 1 000.",
        giaiBaiMau: "Số đó chia 3 là: 1 000 − 456 = 544. Số cần tìm = 544 × 3 = 1 632.",
        dapAn: 1632
    },
    {
        id: "ts019",
        de: "Tìm số biết rằng lấy số đó cộng với chính nó thì được 2 468.",
        giaiBaiMau: "Số đó cộng với chính nó = số đó × 2. Số cần tìm = 2 468 ÷ 2 = 1 234.",
        dapAn: 1234
    },
    {
        id: "ts020",
        de: "Tìm số biết rằng lấy số đó nhân với 4 rồi cộng với chính số đó thì được 1 000.",
        giaiBaiMau: "Số đó × 4 + số đó = số đó × 5. Số cần tìm = 1 000 ÷ 5 = 200.",
        dapAn: 200
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TIM_SO;
}
