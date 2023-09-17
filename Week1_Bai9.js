function printForecast(arr) {
    return arr.forEach(element => {
        console.log("\n"+element+"oC");
    });
}

let arr = [17, 21, 23];

printForecast(arr);