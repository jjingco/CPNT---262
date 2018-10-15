var submitButton = document.myForm.submit;
var highScore = document.getElementById('high-score');
var defaultMsg = document.getElementById('default');



// First Question
submitButton.addEventListener('click', function(event){
    var food = document.myForm['food'];
    var clothes = document.myForm['clothes'].value;
    var lottery = document.myForm['lottery'].value;
    var city = document.myForm['city'].value;
    highScore.style.display = 'none';
    defaultMsg.style.display ='none';
    event.preventDefault();
    var score = 0


    if (food == 'nothing') {
        score = score + 0;
    }
    if (food == 'fruits') {
        score = score + 1;
    }
    if (food == 'bacon') {
        score = score + 2;
    }
    if (food == 'pastries') {
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
        defaultMsg.style.display ="block";
    }
    
})




// validate checkboxes
