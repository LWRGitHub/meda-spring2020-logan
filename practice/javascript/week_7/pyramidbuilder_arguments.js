function pyramidBuilder(height) {

    var pyramidHeight;

    if (height == undefined) {
        var randomNumber = (Math.random() * 20) + 1;
        pyramidHeight = Math.floor(randomNumber);
    } else {
        pyramidHeight = height;
    }

    var pyramidRow = "";

    for (var i = 0; i < pyramidHeight; i++) {
        pyramidRow = pyramidRow + "**";
        console.log(pyramidRow);
    }

    var pyramidArray = pyramidRow.split("");

    for (var i = 0; i < pyramidHeight - 1; i++) {
        pyramidArray.pop();
        pyramidArray.pop();
        pyramidRow = pyramidArray.join("");
        console.log(pyramidRow);
    }

}





var arguments = process.argv;
console.log(arguments);

var height = arguments[2];

height = parseInt(height);
console.log(height);

pyramidBuilder(height);