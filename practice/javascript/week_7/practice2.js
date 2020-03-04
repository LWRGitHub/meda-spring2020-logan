var employeeSalaries = [100000, 10000, 1000000, 55000, 75000, 24000, 32000, 40000, 29500, 72000];

// Update all of these values so we add a 5% bonus if they make less than 50000, or 2.5% if they make more thatn 50000.

function salaryConverter(arr){

    for(let i = 0; i < arr.length; i++){

        console.log(`Employee ${i}:`)
        var salary = arr[i];

        if( salary < 50000){

            console.log("Old salary: " + salary);
            salary = salary + (salary * .05);
            console.log("New Salary: " + salary);

            arr[i] = salary;
        } else {
            console.log("Old salary: " + salary);
            salary = salary + (salary * .025);
            console.log("New Salary: " + salary);

            arr[i] = salary;
        }
    }
    return arr;
}

console.log(salaryConverter(employeeSalaries));


function salaryBonus(salary, bonus){

    return salary + (salary * bonus);

}


var test = salaryBonus(10000, .10);
var test2 = 

console.log(test);