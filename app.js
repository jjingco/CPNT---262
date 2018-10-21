var hamburgerIcon = document.querySelector('#hamburger-icon')
var menu = document.querySelector('#menu')
var closeButton = document.querySelector('#close-button')

function openMenu () {
    menu.className = 'menu'
}

function closeMenu () {
    menu.className = 'menu closed'
}

hamburgerIcon.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)
