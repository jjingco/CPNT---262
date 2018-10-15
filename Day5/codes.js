// // NAME value --> use your console for the following codes:

// var email = document.myForm.email.value;
// var nameform = document.myForm['nameForm'].value;
// var sub =  document.myForm['sub'].value;
// console.log(email);
// console.log(nameform);
// console.log(sub);

// var checkboxList = document.myForm.feature;
// for (var i = 0; i < checkboxList.length; i++) {
//   if (checkboxList[i].checked) {
//     console.log (checkboxList[i].value);
//   }
// }

// var submitButton = document.myForm.sub;

// submitButton.addEventListener("click", function (event) {
  
//   event.preventDefault();
  
//   var email = document.myForm.email.value;
//   var nameform = document.myForm['nameForm'].value;
//   console.log(email);
//   console.log(nameform);
//   document.write('Thank you '+nameform+'! Your request has been submitted!');

// });



// DATA VALIDATION  --> client side validation only

document.myForm.sub.addEventListener("click", 
function (event) {
  myForm.checkValidity ();
  myForm.reportValidity ();
  event.preventDefault();
});