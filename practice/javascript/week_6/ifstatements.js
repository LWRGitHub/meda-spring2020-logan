// If-Else Statements, AKA conditional statements
// if (conditiona) {}

if(true){
    console.log("This code ran if the if statement was true.")
}

console.log("End of script");

//Comparison operators or "Comparitors"
/*
== equal to 
>= greater thatn or equal
> greater than
< lesser than
!= not equal (should not equal to be true)
*/

var age = 22;

if(age >= 21){
    console.log("Congratz!");
}

var password = 123456;

if (password == "abcdef"){
    console.log("welcome to your profile!");
}


var test = "1000";

if(test == 1000){
    console.log("Test!")
}

var sayHello;

//If and Else parts
if(sayHello){
    console.log("hello");
} else {
    console.log("goodbye");
}

//Truthy and Falsey values.

//If a variable is holding any of the following it will become a false boolean:
/*
LIST OF MOST COMMON FALSYS
undefined
null 
0
""
NAN

LIST OF MOST COMMON TRUTHYS
ANYTHING ELSE
"0"
-1

*/

var checkIfTrue = "0";

if (checkIfTrue){
    console.log("The " + checkIfTrue + " value is truthy");
} else {
    console.log("The '" + checkIfTrue + "' value is falsy.");
}

//Logical Onerators: && || !
/*
&& = both sides must be true.
|| = wither side must be true.
! = flip the current boolean. (if true, it becomes false, and if false, it becomes true).
*/

var firstBool = true;
var secondBool = false;

if(firstBool || secondBool){
    console.log("This has runned because the condition is true.")
}

var level;

if (level){
    console.log("You can")
}

