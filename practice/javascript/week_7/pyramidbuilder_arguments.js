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

//Gets an array built by rocess.argv and stores in arguments variable.
var arguments = process.argv;
console.log(arguments);

// We grab the 3rd item from the arguments array and store it in height.
var height = arguments[2];

// We grab the 4th from arguments array and convert it to a number and then store in loops.
var loops = parseInt( arguments[3] );

// Take value of height, convert into a number, put it back into height.
height = parseInt(height);
console.log(height);

// We loop fro the amount of loops, and run pyramidBuilder with the approriate height value.
for (var i = 0; i < loops; i++){    
    pyramidBuilder(height);
}

