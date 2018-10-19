// SAIT JavaScript Project - CPNT 262
// by Joy Jingco
// ************************( MOBILE MENUE FOR ALL PAGES )***************************
var hamburgerIcon = document.querySelector('#hamburger-icon');
var menu = document.querySelector('#menu')
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



// ******************************( CONTACT PAGE )************************************

var agentNames = ['Captain Barkley', 'Commander Snuggles', 'Colonel Boots', 'Brigadier Fuzzy'];
var agentPhones = ['587-555-1234','587-555-5555','587-555-4321','587-555-1598'];
var agentEmails = ['C.Barkley@totallyFake.com','C.Snuggles@totallyFake.com',
                    'C.Boots@totallyFake.com','B.Fuzzy@totallyFake.com'];

agent.addEventListener('click', function(event){
    event.preventDefault()
    for (i = 0; i < agentNames.length; i++) {
        document.getElementById('form1').style.display ='none'
        var agentContact = document.getElementById('agent-contact');
        agentContact.style.display='block'
        agentContact.style.paddingTop ='50px';
    
        var agent = document.createElement('div');
        var phone = document.createElement('div');
        var email = document.createElement('div');
        email.style.marginBottom = '30px';
        agent.style.fontWeight='bold';
    
        agentContact.append(agent);
        agentContact.append(phone);
        agentContact.append(email);
    
        agent.innerHTML = agentNames[i];
        phone.innerHTML=agentPhones[i];
        email.innerHTML=agentEmails[i];
    }
        
})
