// SAIT JavaScript Project - CPNT 262
// by Joy Jingco
// ************************( MOBILE MENUE FOR ALL PAGES )***************************
var hamburgerIcon = document.querySelector('#hamburger-icon');
var menu = document.querySelector('#menu');
var closeButton = document.querySelector('#close-button');

function openMenu () {
    menu.className = 'menu';
}

function closeMenu () {
    menu.className = 'menu closed';
}

hamburgerIcon.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);



// ************************( Date)***************************

document.getElementById('clock').innerHTML = new Date();


// ******************************( VACATION PAGE )************************************

var asiaText = document.getElementById('asiaText')
var euroText = document.getElementById('euroText')
var southText = document.getElementById('southText')

var asiaDefault = document.getElementById('asia');
var asiaPkg = document.getElementById('asiaPkg');
var asiaVacay = document.getElementById('asia-vacay');

var euroDefault = document.getElementById('europe');
var euroPkg = document.getElementById('euroPkg');
var euroVacay = document.getElementById('euro-vacay');


var southDefault = document.getElementById('south-america');
var southPkg = document.getElementById('southPkg');
var southVacay = document.getElementById('south-vacay');


// ASIA MOUSE IN AND OUT
asiaVacay.addEventListener('mouseover', function(){

    asiaDefault.style.display ='none';
    asiaPkg.style.display='block';
    asiaText.style.display='block';
})
asiaVacay.addEventListener('mouseout', function(){
    asiaDefault.style.display ='block';
    asiaPkg.style.display='none';
    asiaText.style.display='none';
})


// EUROPE AMERICA MOUSE IN AND OUT
euroVacay.addEventListener('mouseover', function(){

    euroDefault.style.display ='none';
    euroPkg.style.display='block';
    euroText.style.display='block';
})
euroVacay.addEventListener('mouseout', function(){
    euroDefault.style.display ='block';
    euroPkg.style.display='none';
    euroText.style.display='none';
})


// SOUTH MOUSE IN AND OUT
southVacay.addEventListener('mouseover', function(){

    southDefault.style.display ='none';
    southPkg.style.display='block';
    southText.style.display='block';
})
southVacay.addEventListener('mouseout', function(){
    southDefault.style.display ='block';
    southPkg.style.display='none';
    southText.style.display='none';
})


// ******************************( AIRPLANE )************************************

var fly = true;

function planeFly() {
  var img = document.getElementById('plane');
  var currentLeft = parseInt(img.style.left);

  if (fly && (currentLeft > (window.innerWidth-img.width))) {
    fly = false;
  }

  if (!fly && (currentLeft <= 0)) {
    fly = true;
  }

  if (fly) {
    img.style.left = (currentLeft + 10) + 'px';
  } else {
    img.style.left = (currentLeft - 10) + 'px';
  }
}
setInterval(planeFly, 50);