// We are telling Node to include the FS library.
const fs = require("fs");

// We grab the values that were typed in the terminal and store them in the arguments variable.
var arguments = process.argv;

//console.log("Contents of process.argv", arguments);

//Sefinitions of functions

// Function 1: wordCount wil count the amount of words that are in the string provided in the parameter.
function wordCount(testText){
    var textArray = testText.split(" ");
    console.log("The text has a total of " + textArray.length + " word(s) in it.");
}

// Function 2: charCount will count the amount of characters that are in the string provided in the parameter.
function charCount(testText){
    var textArray = testText.split("");
    console.log("The text has a total of " + textArray.length + " character(s) in it.");
}

// Individual variables holding important parts from the terminal command.

// The actual file or text to test.
var testToText = process.argv[4];

// Either words or characters
var mode = process.argv[2];

// Either file or string
var type = process.argv[3];

// If the mode is text then run..
if (type == "text" || type == 'txt'){

    // An if statement that then tests whether we want to count words or characters.
    if (mode == "words"){
        wordCount(testToText);
    } else if (mode == "chars"){
        charCount(testToText);
    // If there is no value of wrds or characters then we tell the user what the options are.
    } else {
        console.log("The only options for this program is 'words' or 'characters,' for the second argument.")
    }

//Test if the mode i file, if it is, then runn...
} else if(type == "file"){

    // Node function to read files.
    // This function returns a string of the contents of the file you read.
    // fs.readFileSync("filepath to file", "utf8");
    var text = fs.readFileSync(testToText, "utf8");

    // Ceck if the mode is words or characters
    if (mode == "words" || mode == "word" || mode == "Word" || mode == "Words"){
        // If it is words, then run the wordCount function.
        wordCount(text);
    } else if (mode == "chars"){
        // I fit is characters, run the charCount function.
        charCount(text);
    } else {
        // Tell the user that we can only do characters or words.
        console.log("The only options for this program is 'words' or 'characters,' for the second argument.");
    }


} else {
    // They probably mispelled the mode, or they are new to the program.
    console.log("Welcome to Paragraph Reader.\nYou can load in a string of file and tes for the amount of words or characters.\nExample for loading a file and testing for words:\n'node preader.js words file filetotest.text'\nAnother Eample for strings testing characters:\nnode preader.js characters text 'text to test'");
    console.log("Error: The type of data can only be 'text' or 'file.'");
}







