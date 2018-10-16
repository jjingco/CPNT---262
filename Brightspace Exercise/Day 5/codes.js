var submitButton = document.myForm.submit;
var highScore = document.getElementById('high-score');
var defaultMsg = document.getElementById('default');

// validating Food portion
function check1() {
    var chk1 = document.myForm.nothing.checked || document.myForm.fruits.checked
                || document.myForm.bacon.checked || document.myForm.pastries.checked
    if (chk1 == false){
        event.preventDefault();
        document.getElementById('errorFood').style.display="block";
    }
    else {
        event.preventDefault();
        document.getElementById('breakfast').style.display ='none';
        document.getElementById('clothes').style.display = 'block';
    }   
}

// Validating clothes
function check2() {
    var chk2 = document.myForm.jeans.checked || document.myForm.blazer.checked
    if (chk2 == false){
        event.preventDefault();
        document.getElementById('errorOutfit').style.display="block";
    }
    else {
        event.preventDefault();
        document.getElementById('clothes').style.display ='none';
        document.getElementById('lottery').style.display = 'block';
    }   
}


// Validating lottery
function check3() {
    var chk3 = document.myForm.jeans.checked || document.myForm.blazer.checked
    if (chk3 == false){
        event.preventDefault();
        document.getElementById('errorOutfit').style.display="block";
    }
    else {
        event.preventDefault();
        document.getElementById('lottery').style.display ='none';
        document.getElementById('city').style.display = 'block';
    }   
}

// Validating city
function check4() {
    var chk4 = document.getElementById("cityQ");
    if (chk4.value == ""){
        event.preventDefault();
        document.getElementById('errorCity').style.display="block";
    }
    else {
        event.preventDefault();
        document.getElementById('city').style.display ='none';
        document.getElementById('user').style.display = 'block';
    }   
}

// Validating user
function check5() {
    var chk5 = document.myForm.nameForm.value;
    if (!chk5){
        event.preventDefault();
        document.getElementById('errorName').style.display="block";
    }
    else {
        event.preventDefault();
        document.getElementById('user').style.display ='none';
        document.getElementById('outcomes').style.display = 'block';
    }   
}

// Evaluating All the Questions
submitButton.addEventListener('click', function(event){
    var nothing = document.myForm['nothing'];
    var fruits = document.myForm['fruits'];
    var bacon = document.myForm['bacon'];
    var pastries = document.myForm['pastries'];
    var clothes = document.myForm['jeans'].value;
    var clothes = document.myForm['blazer'].value;
    var lottery = document.myForm['lottery'].value;
    var city = document.myForm['cityQ'].value;
    highScore.style.display = 'none';
    defaultMsg.style.display ='none';
    event.preventDefault();
    var score = 0


    if (nothing == 'nothing') {
        score = score + 0;
    }
    if (fruits == 'fruits') {
        score = score + 1;
    }
    if (bacon == 'bacon') {
        score = score + 2;
    }
    if (pastries == 'pastries') {
        score = score + 3;
    }
    if (clothes == 'jeans') {
        score = score + 1;
    }
    if (clothes == 'blazer') {
        score = score + 0;
    }
    if (lottery == 'bills') {
        score = score + 1;
    }
    if (lottery == 'invest') {
        score = score + 3;
    }
    if (lottery == 'shop') {
        score = score + 1;
    }
    if (lottery == 'island') {
        score = score + 2;
    }
    if (city == 'spain') {
        score = score + 4;
    }
    if (city == 'uk') {
        score = score + 2;
    }
    if (city == 'paris') {
        score = score + 3;
    }
    if (city == 'usa') {
        score = score + 1;
    }
    if (score > 7) {
        highScore.style.display = 'block';
    } 

    if (score <= 7) {
        defaultMsg.style.display ='block';
    }
    
    console.log(score);
})





