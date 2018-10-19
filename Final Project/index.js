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



// ******************************( INDEX PAGE )************************************
var infoText = `<p> Serving vacation seekers since 2018, The International 
                is committed to the highest customer service standards.
                We operate between three continents to provide a variety 
                of vacations for all travelers whether you're looking for
                the adventure of a lifetime or you just want to escape for
                that sunny well-derserved beach retreat! </p> 
                <p> For a limited time only direct all exclusive Brazil adventures are 
                being sold at never-before seen prices! Bring your friends for a 
                girl's vacation or that special loved one! (You can even bring 
                your cat!) Come experience our internationally acclaimed services,
                luxyury resorts and spa packages only offered to restort guests! 
                Experience the exceptional dining options in one of our eight 
                restaurants onsight and take part in all our exclusive resort-guest-only
                activities! It's guaranteed to make the whole family smile!</p> 
                <p> Don't wait for this opportunity to pass!</p> <p>Book today!</p>`;
var companyInfo = document.getElementById('company-info');
companyInfo.innerHTML = infoText;
// if you have time add a book now button linking to your registration page


