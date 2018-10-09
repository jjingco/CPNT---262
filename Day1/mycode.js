// original script:
// alert('Hello world');

// console.log('Secret message');


// new scripts:
// document.write('this is the document.write method');

// console.log('this is the console.log method');


// creating a variable 
// var firstTry = "this is my first try at this";

// console.log(firstTry)


// arithmetic operators:
// var twenty = 20;
// var seven = 7;

// console.log('this is the modulus times three:',twenty%seven*3);
// console.log('this is a simple subtraction/addition:',twenty-seven+2);


// working with strings:
// var firstName = 'Captain '
// var lastname = 'Barkley'
// var description = "He's always up to something ";
// description += 'staring at the bunny from afar...';

// console.log('Meet',firstName+lastname+'.');
// console.log(description);


// write a Function
// function testingFunction () {
//     console.log ('This is my function...');
//     }
// testingFunction();



//Arguments without return functions -spits out both callNames without stopping:

// function callName(firstname,lastName) {
//     console.log('Come here ' +firstname+lastName+'!')
//     }
//  callName('Count ','Wiskers');
//  callName('Captain ','Barkley');



//Arguments with return functions (saves the second variable for later):

// function callName(firstname,lastName) {
//     return firstname+lastName
//     }
// console.log('Come here ' + callName('Captain ','Barkley')+'!')

// var Wiskers = callName('Count ','Wiskers');



// Temperature Activitiy --> BOOLEAN VARIABLES

// var temperature = 10;

// if (temperature < -20) {
//     console.log ("Stay inside -you'll get frostbite!");
// }

// else if (temperature < 0){
//     console.log("Put a coat on, but don't forget the hat -it's freezing!");
// }

// else if (temperature < 10) {
//     console.log("Put a coat on. It's cold!");
// } 

// else {
//     console.log("It's",temperature,
//         "Suck it up princess. You don't need nothin'.");
// }



// LOGICAL OPERATORS

var temperature = 5;

if (temperature < -20) {
    console.log ("Stay inside -you'll get frostbite!");
}

else if (temperature < 10 && temperature >= 0) {
    console.log("Put a coat on. It's cold!");
} 

else if (temperature < 0 && temperature > -20){
    console.log("Put a coat on, but don't forget the hat -it's freezing!");
}

else {
    console.log("It's",temperature+
        "! Suck it up princess. You don't need nothin'.");
}
