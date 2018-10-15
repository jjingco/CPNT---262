// var submitButton = document.getElementById('submit');
// var errorName = document.getElementById('errorName');
// var errorAge = document.getElementById('errorAge');
// var errorRange = document.getElementById('errorRange');

// submitButton.addEventListener('click', function(event) {
//     errorName.style.display ='none';
//     errorAge.style.display ='none';

//     var name = document.form1.txtName.value;
//     var age = parseInt(document.form1.txtAge.value);

//     if (!name) {
//         event.preventDefault();
//         errorName.style.display='block';
//     }

//     if (!age) {
//         event.preventDefault();
//         errorAge.style.display='block';
//     }
//     else if (age < 18) {
//         event.preventDefault();
//         errorRange.style.display='block';  
//     }

// });



// REGULAR EXPRESSIONS

var regEx1 = new RegExp('hi my name is')
var regEx2 = /I have a dog/;

console.log(regEx1.test("hi my name is Bob"));
console.log(regEx2.test('I have a dog named captain barkley'));

