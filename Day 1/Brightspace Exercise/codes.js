document.write("Successfully Linked Exercises Day 1");


// 1.

var quote = 'A ship in port is safe, but that is not what ships are for. Sail out to sea and do new things.';

console.log(quote);
console.log(typeof quote);



// 2.

var quoteLength = quote.length;

console.log(quoteLength);



// 3.

var attributedQuote = quote + " - Rear Admiral Grace Hopper.";

console.log(attributedQuote);



// 4.

function attribute(quoteNew,author) {
    return quoteNew + author;
}

// console.log(attribute('The key to being a successful programmer is to learn how to learn.',
//             ' - Shannon Burns'));



// 5.

function sumOfNumbers (number1, number2) {
    return number1 + number2;
}



// 6.

function sumofLowNumbers (number1,number2,number3,number4,number5){
    if (number1 >= 7) {
        number1 = 0;
    }
    if (number2 >= 7) {
        number2 = 0;
    }
    if (number3 >= 7) {
        number3 = 0;
    }
    if (number4 >= 7) {
        number4 = 0;
    }
    if (number5 >= 7) {
        number5 = 0;
    }
    return number1+number2+number3+number4+number5;
}

// console.log(sumofLowNumbers(9,6,9,9,9))




// 7.
https://github.com/jjingco/CPNT---262/blob/master/Day%201/Brightspace%20Exercise/codes.js

