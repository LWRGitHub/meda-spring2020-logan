const fs = require("fs");

var arguments = process.argv;

//console.log("Contents of process.argv", arguments);

function wordCount(testText){
    var textArray = testText.split(" ");
    console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

function charCount(testText){
    var textArray = testText.split("");
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}

var testToText = process.argv[4];
var mode = process.argv[2];
var type = process.argv[3];

if (type == "text" || type == 'txt'){

    if (mode == "words"){
        wordCount(testToText);
    } else if (mode == "chars"){
        charCount(testToText);
    } else {
        console.log("The only options for this program is 'words' or 'characters,' for the second argument.")
    }

} else if(type == "file"){

    // Node function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFileSync("filepath to file", "utf8");

    var text = fs.readFileSync(testToText, "utf8");

    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words"){
        wordCount(text);
    } else if (mode == "chars"){
        charCount(text);
    } else {
        console.log("The only options for this program is 'words' or 'characters,' for the second argument.");
    }

} else {
    console.log("Welcome to Paragraph Reader.\nYou can load in a string of file and tes for the amount of words or characters.\nExample for loading a file and testing for words:\n'node preader.js words file filetotest.text'\nAnother Eample for strings testing characters:\nnode preader.js characters text 'text to test'");
    console.log("The type of data can only be 'text' or 'file.'");
}







