// // BROWSWER INFO ACTIVITY
// console.log(navigator.userAgent);
// console.log(navigator.vendor);
// console.log(navigator.platform);



// // GEOLOCATION
// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     var altitude = position.coords.altitude;
//     var speed = position.coords.speed;
//     document.write('Your latitude is: '+latitude+
//         'Your longitude is: '+longitude);
// }
// function geoError (errorObj) {
//     alert('Uh oh, something went wrong');
// }
// navigator.geolocation.getCurrentPosition(success,geoError);




// // THE SCREEN OBJECT
// console.log(screen.height);
// console.log(screen.width);
// console.log(screen.colorDepth);
// console.log(screen.orientation);



// // DOCUMENT OBJECTS
// document.bgColor = 'peru';



// // FEATURE DETECTION
// function success(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     document.write('Your latitude is: '+latitude+
//         'Your longitude is: '+longitude);
// }
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(success);
// }
// else {
//     alert('Uh oh, something went wrong');
// }



// // GET ELEMENT BY ID
// var header = document.getElementById('header');
// console.log(header);
// // GET ELEMENT BY TAG NAME
// var listItems = document.getElementsByTagName('li');
// console.log(listItems);
// // DOM ACCESS: HTML 5
// var classItems=document.getElementsByClassName('nav-item');
// console.log(classItems);
// var firstItem = document.querySelector('#header');
// console.log(firstItem);
// var qrySelectorAll = document.querySelectorAll('.nav-item');
// console.log(qrySelectorAll);



// // DOM ACCESS: ADD AND REMOVE CLASSES --> look at extra material
// console.log(listItems[0].classList)
// // adding classes
// if (el.classList)  
//     el.classList.add(className);
// else 
//     el.classList+=' '+className;
// // removing classes 
// if (el.classList)
//     el.classList.remove(className);
// else el.className = el.className.replace(new RegExp())



// // GETELEMENTS
// var secondP = document.getElementsByTagName('p')[2];
// console.log(secondP)
// // ATTRIBUTES
// var kittenTransform = document.getElementById('cat1');
// kittenTransform.src = 'http://placekitten.com/500/900';
// var kittenTransform2 = document.getElementById('cat2');
// kittenTransform2.getAttribute('src');
// kittenTransform2.setAttribute('src',"http://placekitten.com/500/500");




// // STYLING - generally you leave this for css
// var header = document.getElementById('header');
// header.style.backgroundColor = 'coral';
// header.style.color = 'blue';
// header.style.padding = '10px';



// // INNER HTML
// var pagebody = document.getElementsByTagName('body')[0];
// pagebody.innerHTML += '<h1> And so it begins... </h1><p> ahhhhhhhh!!</p>';




// CREATING NEW NODES
var pageDiv = document.getElementsByTagName('div')[0];
var newPargph = document.createElement('p');
var pargphTxt = document.createTextNode('This is the new paragraph!');
newPargph.appendChild(pargphTxt);
pageDiv.appendChild(newPargph);
// testing the new node:
pageDiv.style.backgroundColor = 'pink';
pageDiv.style.padding = '10px 0';

