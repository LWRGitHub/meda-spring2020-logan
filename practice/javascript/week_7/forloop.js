var counter = 0;


while( counter < 10 ){
    //Code to run per loop.
    counter = counter + 1;
    console.log(counter);

    //Ther ++ will add a 1 to the existing variable value;
    //counter++;

    // Ther -- will subtract a 1 to the existing variable value;
    //counter--;
}

// Inside the parentheses we have three parts: counter, condition, and code that changes the counter. The third part only runs after the code block.
for (var counter = 0; 10 > counter; counter++){
    console.log(counter);
}

var special = 1;

// Outer loop will run for 10 times, for each time we are executing another loop that will it self run 10 times.
for(var i = 0; i < 10; i++){

    //The inner loop that will runn once (ten times).
    for(var e = 0; e < 10; e++){
        console.log("running! " + special);
        special++;
    }
}


for(var i = 0; i <= 48; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}

for(var i = 0; i <= 48; i = i + 2){
    console.log(i);
}

