// Concatenation example
"a word" + "gabe";
"a number" + 100;
console.log("hello" + true);
100 + "a number";
console.log(100 + 100 + 100 + "hello");
console.log("hello" + 100 + 100 + 100);


function sentenceBuilder(person, place, action, item){
    var firstPart = " went to the ";
    var secondPart = ", and did ";
    var thirdPart = " but there was a problem, ";
    var fourthPart = " did not work.";

    var completeSentence = person + firstPart + place + secondPart + action + thirdPart + item + fourthPart;

    console.log(completeSentence);
}

"________ went to the ________, and did _________ but there was a problem, ________ did not work."

sentenceBuilder("dude", "London", "run", "secret message");


function getNumber(){
    var theSpecialNumber = 42;

    return theSpecialNumber;
}

console.log( getNumber() );

var newNumber = getNumber() + 100;

console.log(newNumber);

console.log( getNumber() / 50 );

function getName(){

    var firstName = "Duardo"

    return firstName;
}

console.log( getName() + " is a person." );

