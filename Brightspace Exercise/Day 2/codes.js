document.write("Successfully Linked Problem Set 2");



// 1.

var numbers = [1,4,1,5,9,2,6,5,3,5];
console.log(numbers);




// 2.

numbers[1] = 4.2;
console.log(numbers);



// 3.

numbers.push(3);
console.log(numbers);



// 4.
sumofNumbers = 0;
function sumOfArray (array) {
    for(var i = 0; i < array.length; i++ ) {
        if (array[i] > 5) {
            sumofNumbers = sumofNumbers + 0;
        }
        else {sumofNumbers = array[i] + sumofNumbers;}
    }
}

sumOfArray([3, 1, 2, 5, 9.9, 5, 11, 2, 7, 3, 0, 9, 3, 4, 8, 5]); // 33
console.log(sumofNumbers);



// 5.
var rect = {
    xCoordinate: 30, 
    yCoordinate: 50,
    width: 100,
    height: 50
};
console.log(rect);




//// 6.
console.log('('+rect.xCoordinate+','+rect.yCoordinate+')');




// 7.
rect.height = Math.sqrt(rect.width);
console.log(rect);



// 8.
var rectArea = rect.width*rect.height;
console.log(rectArea);



//9.
 var circle = {
     cx: 34,
     cy: 43,
     radius: numbers[9]
 };
 console.log(circle);




// 10.
var shapes=[rect,circle,'triangle','parabola','cone'];
console.log(shapes);



// 11.
var rightTriangle = {
    base: 33,
    height: 44
};
shapes.push(rightTriangle);
console.log(shapes);

// 12.
// hypotenuse = the square root of (a^2 + b^2)
// use the Math.sqrt() function and the .pow() function
rightTriangle.hypotenuse = Math.sqrt(Math.pow(rightTriangle.base,2)+ Math.pow(rightTriangle.height,2));
console.log(shapes);







