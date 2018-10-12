// var square = document.getElementById('square');
// square.style.position ="absolute";
// square.style.left ='100px';
// square.style.top='100px';


// MAKE A CLOCK

// function updateTime () {
//     document.getElementById('output')
//     .innerHTML =new Date ();
// }

// setInterval(updateTime,1000);



// CAT WALK
var walkForwards = true;
var img = document.getElementById('cat');
img.style.position = "absolute";
img.style.bottom = "0px";
img.style.left = '0px';


function catWalk() {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;

  }

  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.left = (currentLeft + 10) + 'px';
  } 
  else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
setInterval(catWalk, 50);



// // BUTTONS
// function sayHi (event) {
//     alert('Hi!');
// }

var mybutton = document.getElementById('mybutton');
// mybutton.addEventListener('mouseover', function(event) {
//     alert('Hi! This is mouseover!');
// } );

var link = document.getElementById ('mylink');
link.addEventListener('click',function(event){
    event.preventDefault();
    document.write('Page Cannot Be Displayed');
  
})

mybutton.addEventListener('click', function(event){
    btn = event.currentTarget;
    btn.style.backgroundColor = 'pink';
    btn.innerHTML = 'Clicked!'
}) 