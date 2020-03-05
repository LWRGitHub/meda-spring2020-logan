// Defines what the pyramidBuilder does. Takes in on e argument.
function pyramid(num){

    var randomeNumber = Math.random() * num + 1;
    randomeNumber = Math.floor(randomeNumber);
    var pyramidRow = "";

    for (var i = 0; i < randomeNumber; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }
    pyramidRowArr = pyramidRow.split("");

    for (var i = 0; i < randomeNumber - 1; i++) {
        pyramidRowArr.pop();
        pyramidRow = pyramidRowArr.join("");
        console.log(pyramidRow);
    }
}

pyramid(20);

