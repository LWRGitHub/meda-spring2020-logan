var myFirstVar = 1000;

var yearsLeft = 1000;

//Units in meters
var buildingHeightMeters = 100;

var humanAge = 16;

var humanAgeDays = 5840;

// Bad name
var x = "Super Important"

//Equal sign, everything on the right side always happpens first.
var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

// When using variable names on the right side of the equal sign, your are calling for valuse and then you are running the operators, and finally you are storing the final value into the variable total.
var total = product + sum;

console.log(total);


var radius = 5000;

var diameterOfCircle = 2 * radius;
// Math.PI
var perimeterOfCircle = Math.PI * diameterOfCircle;

console.log("The diameter of the circles with a radius of " + radius + " is " + diameterOfCircle + ". The perimeter of the circle is " + perimeterOfCircle);

//Rounds to the nearest whole number.
var rounded = Math.round(3.14);

console.log(rounded);

//Round down
var roundedDown = Math.floor(45.9);

// let somevariable = ;

// let
// const

var someNumber = Math.floor((Math.random() * 10) + 1);

console.log(someNumber);

const variable1 = "10", variable2 = 100, variable3 = true;

console.log(variable1);
console.log(variable2);
console.log(variable3);

//Calling before Defining
console.log(howAreYou);
var howAreYou = "Hello";

//We reassign the howAreYou value to 100, then we call howAreYou for it's value and assign that to coolVariable.
var coolVariable = howAreYou = 100;

console.log(coolVariable);
