// 1
console.log("Always Hungry");
function alwaysHungry(arr) {
    var hungry = true;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log("yummy");
            hungry = false;
        }
    }

    if (hungry) {
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log();


// 2
console.log("High Pass Filter");
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log();


// 3
console.log("Better Than Average");
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length;

    var count = 0
    // count how many values are greated than the average
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > average) {
            count++;
        }
    }

    return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log();


// 4
console.log("Array Reverse");
function reverse(arr) {
    var yarra = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        yarra.push(arr[i]);
    }

    arr = yarra;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log();


// 5
console.log("Fibonacci Array");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // Start adding at the third slot
    for (var i = 2; i < n; i++) {
        var last = fibArr.length - 1;
        var secondLast = last - 1;
        var next = fibArr[last] + fibArr[secondLast];
        fibArr.push(next);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
