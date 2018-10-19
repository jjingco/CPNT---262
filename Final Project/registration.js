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



// ******************************( REGISTRATION PAGE )************************************


function check() {
    var fname = document.register.firstN.value
    var lname = document.register.lastN.value
    var street = document.register.street.value
    var city = document.register.city.value
    var province = document.register.province.value
    var postal = document.register.postal.value
    var email = document.register.email.value
    var phone = document.register.phone.value

    
    if (!fname) {
        event.preventDefault();
        document.getElementById('errorFirstN').style.display = 'block'
    }
    if (!lname) {
        event.preventDefault();
        document.getElementById('errorLastN').style.display = 'block'
    }
    if (!street) {
        event.preventDefault();
        document.getElementById('errorAddress').style.display = 'block'
    }
    if (!city) {
        event.preventDefault();
        document.getElementById('errorCity').style.display = 'block'
    }
    if (!province) {
        event.preventDefault();
        document.getElementById('errorProvince').style.display = 'block'
    }
    if (!postal) {
        event.preventDefault();
        document.getElementById('errorPostal').style.display = 'block'
    }
    if (!email) {
        event.preventDefault();
        document.getElementById('errorEmail').style.display = 'block'
    }
    if (!phone) {
        event.preventDefault();
        document.getElementById('errorPhone').style.display = 'block'
    }
    else {
        event.preventDefault();
        document.getElementById('completed').style.display = 'block'
    }
    

}

