//Coding Challenge #4
// let billValue = 275
// let billValue = 45
let billValue = 380

let tip = (billValue) => {
    if (billValue > 50 && billValue < 300) {
        return billValue * 0.15;
    } else {
        return billValue * 0.2;
    }
}

console.log("Bill Value:" + billValue + "\nTip: " + tip(billValue) + "\nTotal: " + (billValue + tip(billValue)));