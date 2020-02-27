function adder(num1, num2){
    return num1 + num2;
}

console.log( adder(100, "Tony") );
/*
1) 100 and Tony get sent to the Adder function.
2) Adder function runs, and places 100 and Tony, into num1 and num2.
3) Before we can rturn a value, we need to add/ concatenate. We call num1 and num2 for its values, and then add/concatenate them together.
4) The return keyword says that we will return this sigle value back to whereever the function was called.
5) Thadddewr function has returned "100Tony" as a sigle string and is rplaced by that value.
6) Because the value is inside of the console.log arguments area, it will be sent off to the console.log function.
*/




function taxCalculator(itemPrice){

    return parseInt((itemPrice * 0.085).toFixed(2));
    
}

var laptopPrice = 999.95;
var laptopTax = taxCalculator(laptopPrice);

console.log(`$${laptopTax + laptopPrice}`);

/*

Create a function called mathifier

This function will take two Numbers

with these two numbers, you will add them, then add the sum to the first number, and then multiply that by the second number.

The function will return the result.

*/

function mathifier(num1, num2){
    return ((num1 + num2) + num1) * num2;
}

console.log(mathifier(2,4));

/*

This function will be called mathResaults

This fuction take only 2 numbers.

This function will console.log Each of the following:
The sum of these two numbers.
The difference of these two numbers.
the product of these two numbers.
the dividend of these two numbers.
the leftovers of these two numbers. (modulo)

*/

function mathResaults(num1, num2) {
    console.log(num1, num2);
    console.log(num1 + num2);
    if(num1 <= num2){
        console.log(num2 - num1);
    } else {
        console.log(num1 - num2);
    }
    console.log(num1 * num2);
    if(num1 <= num2){
        console.log(num2 / num1);
    } else {
        console.log(num1 / num2);
    }
    console.log(num1 % num2);
    console.log(num2 % num1);
}

mathResaults(2,5);

function mathResaults2(num1, num2){

    console.log(num1, num2);
    console.log(num1 + num2);

    console.log(num1 - num2);

    console.log(num1 * num2);

    console.log(num1 / num2);

    console.log(num1 % num2);

}

mathResaults2(2,5);

