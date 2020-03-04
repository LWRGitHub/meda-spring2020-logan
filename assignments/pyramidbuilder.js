var randomeNumber = Math.random() * 20 + 1;
randomeNumber = Math.floor(randomeNumber);


var pyramidRow = "";

function pyramid(num){

    for (var i = 0; i < num; i++) {
        pyramidRow = pyramidRow + "*";
        console.log(pyramidRow);
    }
    pyramidRowArr = pyramidRow.split("");

    for (var i = 0; i < num - 1; i++) {
        pyramidRowArr.pop();
        pyramidRow = pyramidRowArr.join("");
        console.log(pyramidRow);
    }
}

pyramid(randomeNumber);

