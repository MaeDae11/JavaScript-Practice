
// if (!serviceLever) {
//     throw new Error("Value Error: please pass in a string as serviceLevel")
// }



// function hello(name) {
//     console.log(name);
// }

// hello("Mustache")





// prints Hello, world! if no name is given

// function hello(name) {
//     if (!name) {
//         name = "Hello, world!";
//     }
//     console.log(name);
// }
// hello()





// function madlib(name, subject) {
//     return name + "'s favorite subject in school is " + subject + ".";
// }

// when in console, if type   madlib(Katie, art) --> "Katie's favorite subject in school is art."






// tip calculator 1
// function tipAmount(bill, service) {
//     if (service === "poor") {
//         tip = (bill * .1); 
//     } else if (service === "good") {
//         tip = (bill * .15);
//     } else if (service === "great") {
//         tip = (bill * .2);
//     } else {
//         ("what kind of service did you have???");
//     }
//     return tip
// }






// tip calculator 2
// function totalAmount(bill, service) {
//     var tipAmount = 0;
//     var total = 0;
//     if (service === "poor") {
//         tipAmount = (bill * .1);
//         total = (bill + tipAmount);
//     } else if (service === "good") {
//         tipAmount = (bill * .15);
//         total = (bill + tipAmount);
//     } else if (service === "great") {
//         tipAmount = (bill * .2); 
//         total = (bill + tipAmount);
//     } else {
//         ("seriously, what kind of service did you have?");
//     }
//     return total;
// }





// tip calculator 3
// function splitAmount(bill, service, numberOfPeople) {
//     var tipAmount = 0;
//     var total = 0;
//     var amountPerPerson = 0;
//     if (service === "poor") {
//         tipAmount = (bill * .1); 
//         total = (bill + tipAmount);
//         amountPerPerson = (total / numberOfPeople);
//     } else if (service === "good") {
//         tipAmount = (bill * .15);
//         total = (bill + tipAmount);
//         amountPerPerson = (total / numberOfPeople);
//     } else if (service === "great") {
//         tipAmount = (bill * .20);
//         total = (bill + tipAmount);
//         amountPerPerson = (total / numberOfPeople);
//     } else {
//         ("what kind of friends do you have??");
//     }
//     return amountPerPerson;
// }