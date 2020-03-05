var arguments = process.argv;

console.log("Contents of process.argv", arguments);








function wordCount(testText){
    var textArray = testText.split(" ");

    //console.log(textArray);
    console.log("The text: " + testText + " has a total of " +textArray.length + " words in it.");
}


wordCount("hello how are you doing? I am fine, the weather is nice!");




