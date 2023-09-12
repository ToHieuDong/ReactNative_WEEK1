let tip = (billValue) => {
    if (billValue > 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

let tips = bills.map((item) => {
    return tip(item);
})
console.log("Danh sach tips: "+tips);

let totals = bills.map((item, index) => {
    return item + tips[index];
})
console.log("\nDanh sach tong thanh tien: "+totals);

// Bonus:
let calcAverage = totals.reduce((s, num)=>{
    return s+=num
}, 0)
console.log(calcAverage);