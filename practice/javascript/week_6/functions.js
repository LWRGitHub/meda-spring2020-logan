// Intro to Functions

//Example of functions we have used so far.
console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

var currentTime = Date.now().toString();
console.log(currentTime)

//A function that belongs to a class ("library") is called a "Method."
// A variable that belongs to a class ("library") is called a "Property."

console.log("Hello");
console.log("Hello");
console.log("Hello");


console.log("Hello");
console.log("Hello");
console.log("Hello");

//The Syntax Structure of a Function definition.
function nameOfFunction(num){
    for(let i = 0; i < num; i++){
        console.log("Hello");
    }
}

nameOfFunction(3);
nameOfFunction(3);

/*
Similar to CSS Rulsets

selector{
    property: value;
    property: value;
}

*/

function strBoolInt(){
    console.log("string");
    console.log(true);
    console.log(2);
}

strBoolInt();

// Arguments and Parameters

//"hello" is the argument
console.log("hello \n", 100, true);

// text is the parameter (variable) that will exxept any data that is given to this function.
function takeDataIn(text1, text2){
    console.log(text1);
    console.log(text2);
}

takeDataIn("How are you doing?", 2);
takeDataIn("Goodbye!", true);


function adder( num1, num2){

    var sum = num1 + num2;

    console.log("The sum of " + num1 + " and " + num2 + " is " + sum);

}

adder(1,1);