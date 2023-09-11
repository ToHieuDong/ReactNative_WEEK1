let Dolphins = [99, 108, 89];
let Koalas = [50, 49, 40];

let calcAverage = (team) => {
    return team.reduce((acc, cur) => acc + cur, 0) / team.length;
}

let checkWinner = (teamA, teamB) => {
    return calcAverage(teamA) / 2 > calcAverage(teamB);
}

if (checkWinner(Dolphins, Koalas)) {
    console.log("Dolphins is win");
} else if (checkWinner(Koalas, Dolphins)) {
    console.log("Koalas is win");
} else {
    console.log("No win");
}