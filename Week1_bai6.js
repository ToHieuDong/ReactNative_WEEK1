let billValue = 380

let tip = (billValue) => {
    if (billValue > 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}


let bills = [125, 555, 44]
console.log(bills);

// let tips = (bills) => {
//     let tips = [];
//     bills.forEach(element => {
//         tips.push(tip(element));
//     });
//     return tips;
// }
// console.log(tips(bills));

let tips = bills.map((item) => {
    return tip(item);
})
console.log(tips);

let totals = bills.map((item, index) => {
    return item + tips[index];
})
console.log(totals);