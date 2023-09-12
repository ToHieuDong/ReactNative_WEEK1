let Mark = {
    w: 78,
    h: 1.69,
    BMI: (w, h) => {
        return w / h ** 2;
    }
}
let John = {
    w: 92,
    h: 1.95,
    BMI: (w, h) => {
        return w / h ** 2;
    }
}

console.log(John.BMI());