//property
Math.PI;
Math.SQRT2;

//Methond
Math.random();

function random(){

}


var myArray = [null, undefined, NaN, 0, "", false];

console.log(myArray[3]);


myArray[2] = 100;

console.log(myArray);

myArray[6] = {};

console.log(myArray);

myArray[0] = null;
myArray[1] = null;
myArray[2] = null;

//ToDo: convert this into a loop, to empty all existing items.

// for(let i = 0; i < myArray.length; i++){
//     myArray[i] = null;
// }

// Array push method. argument provided is added to the end of the array.

myArray.push("hello there!");

console.log(myArray);

// Array pop method. No argument, removes and RETURNS the last item in the array.

var removedDataPiece = myArray.pop();

console.log(myArray);
console.log(removedDataPiece);

// Array shift method. no argument, removes and RETURNS the first item in the array.

var removedFirstItem = myArray.shift();

console.log(myArray);
console.log(removedFirstItem);

// Array unshift method, argument provided is added to the start of the array.

myArray.unshift(1000);
console.log(myArray);

// Array length property. Returns the amount of items in the array in the form of a Number.

console.log( myArray.length );


//Looping through each item of an array and cosole logging it's value.

for (var i = 0; i < myArray.length; i++){

    console.log(myArray[i]);

}
