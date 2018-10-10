// //****************** */ your try for WHILE LOOPS:

// var nineLoop = 9;
// var multiplier = 1;
// loopSum =0;

// while (multiplier <= 12) {
//     loopSum = nineLoop * multiplier;
//     console.log("9 x",multiplier,"=",loopSum);
//     multiplier = multiplier + 1;
// }

// // ***********Solution:

// var number = 1;

// while (number <13) {
//     console.log("9 x ",number," = "+9*number);
// }
// number = number + 1;


// //**************** */ solution for times table

// var number = 1;

// while(number <13) {
//     var counter = 1;
//     while (counter <13) {
//         console.log(counter +" x "+number+" = "+counter*number);
//         counter ++;
//     }
//     number = number + 1;
// }




// ***** For loops

// for (var number = 1; number < 13; number++) {
//     console.log("9 x ",number," = "+9*number);
// }

// for (var number = 1; number < 13; number++) {
//     for (var counter = 1; counter < 13; counter++) {
//         console.log(counter +" x "+number+" = "+counter*number);
//     }
// }



// Logic in For Loops

// for (var i = 0; i <= 20; i++ ){
//     if (i % 2 === 0 ) {
//         console.log(i + " is even.");
//     }
//     else {
//         console.log(i + " is odd.");
//     }
// }



// Break Statements

// for (var number = 1; number < 13; number++) {
//     for (var counter = 1; counter < 13; counter++) {
//         if ( counter === 6 || number === 6) {
//             console.log('I hate the number 6.');
//             break;
//         }
//         else {
//             console.log(counter +" x "+number+" = "+counter*number);
//         }
//     }
// }



// // Arrays, Length of arrays, etc. 

// var arrayName = [' ramen', ' pho', ' sushi', ' peperoni pizza', ' burgers'];
// console.log('Some of my favourite foods are:'+arrayName+'.');
// console.log('The length of this list is: ' +arrayName.length+ ' items!');

// var thirdItem = arrayName[3]; //targetting an item in the array
// console.log('Since it begins at 0, the third item is the fourth which is '+thirdItem+'!');

// arrayName[3] =' turkey dinner'; //switching out an item
// console.log('I am replacing pizza with'+arrayName[3]+'.');
// console.log(arrayName);

// arrayName.push(' candied apples'); //adding a new item
// console.log(arrayName);

// for (var i = 0; i < arrayName.length; i++) {
//     console.log(arrayName[i]);
// }



// OBJECTS

var objectName = {
    recipeTitle: 'Apple Pie',
    recipeDescription: 'Sweet and tangy covered with a golden brown crust.',
    ingredients: ['3 large grany smith apples', 'flour', 'salt', 'sugar', 'cinnamon'],
    directions:'Cut the apples and mix it in with the sugar and cinnamon, then proceed with the crust.',
    rating: 6,
    cooktime: 90
};

// var descriptionObject = objectName.recipeDescription;
// var descriptionIngredients = objectName['ingredients'];

// console.log(descriptionObject);
// console.log(descriptionIngredients);

objectName.servings="6"; //adding
objectName.rating = 5; //changing
delete objectName.cooktime; //deleting

// console.log(objectName)

// var movieArray = [
//     {movieName: 'Frozen', movieRating: 6},
//     {movieName: 'Toy Story 3', movieRating: 10},
//     {movieName: 'Brave' , movieRating: 8}
// ]

// for (var i = 0; i < movieArray.length; i++) {
//     var movie = movieArray[i];
//     console.log('I give '+movie.movieName+': '+movie.movieRating+' stars.');
// }

// function describeRecipe(recipe){
//     console.log(recipe.recipeTitle,'makes',recipe.servings,'slices.');
// }

// describeRecipe(objectName);

objectName.letscook = function(food) {
        console.log("I'm hungry! Let's cook "+food+'.');
} //adding in a a function

objectName.letscook(objectName.recipeTitle); //calling the new function


