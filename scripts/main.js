// print 1-10
// function print10(x) {
//     while (x <= 10) {
//         console.log("x: " + x);
//         x++;
//     }
// }





// printing square of *****
// function printSquare(x) {
//     var i = 0;
//     while (i < x ) {
//         console.log(i + "*****")
//         i++;
//     }
// }



// another way to print square using .repeat
// function printBox(width, height) {
//     var i = 0;
//     while (i < height) {
//         if (i === 0) {
//             console.log("*".repeat(width));
//             i++;
//         }
//     }
// }



// banner around text
// var testText = prompt("Text? ");
// console.log("*".repeat((testText.length) + 4));
// console.log("*" + " " + testText + " " + "*")
// console.log("*".repeat((testText.length) + 4)); 







function factorsThing(x) {
    var factorsOfNumbers = [];
    var i = 0;
    while (i <= x) {
        if ((x % i) === 0) {
           factorsOfNumbers.push(i);
        } 
        i++;
    } 
    console.log(factorsOfNumbers);
}
