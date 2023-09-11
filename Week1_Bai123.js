// CODE CHALLENGE #1
// let massMark=78
// let hightMark=1.69
// let massJohn=92
// let hightJohn=1.95
// let massMark=95
// let hightMark=1.88
// let massJohn=85
// let hightJohn=1.76
let Mark = {
    mass:78,
    hight:1.69,
    // BMI : ()=>{
    //     return mass/hight**2
    // }
}
let John = {
    mass:92,
    hight:1.95
}

let BMI = (mass, hight) => {
    return mass/hight**2
}

let flag = BMI(Mark.mass, Mark.hight) > BMI(John.mass, John.hight)
console.log(flag);

// CODE CHALLENGE #2
if (flag) {
    console.log("Mark có chỉ số BMI cao hơn John");
} else {
    console.log("John có chỉ số BMI cao hơn Mark");
}
// CODE CHALLENGE #3
let Dolphins = [99, 108, 89];
let Koalas = [88, 91, 110];

let AVG=(Dolphins)=>{
    return Dolphins.reduce((acc, cur)=>acc+cur, 0)/Dolphins.length;
}

if (AVG(Dolphins) > AVG(Koalas) && AVG(Dolphins)>100) {
    console.log("Team Dolphins is winner");
} else if (AVG(Koalas) > AVG(Dolphins) && AVG(Koalas)>100) {
    console.log("Team Koalas is winner");
} else if (AVG(Koalas) === AVG(Dolphins) && AVG(Koalas)>100) {
    console.log("Draw");
} else {
    console.log("No winner");
}