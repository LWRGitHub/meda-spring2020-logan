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