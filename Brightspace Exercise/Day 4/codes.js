var quotes = ['"When you reach the end of your rope, tie a knot in it and hang on." --Franklin D. Roosevelt',
                '"There is nothing permanent except change."--Heraclitus',
                '"Good judgment comes from experience, and a ot of that comes from bad judgment."--Will Rogers',
                '"If you cannot do great things, do small things in a great way." --Napoleon Hill',
                '"The secret of getting ahead is getting started." --Mark Twain']
var quote1 = quotes[0];
var quote2 = quotes[1];
var quote3 = quotes[2];
var quote4 = quotes[3];
var quote5 =  document.getElementById('quote5');
quote5.innerHTML = quotes[4];
quote5.style.position ='absolute';
quote5.style.left ='0';
quote5.style.backgroundColor ='red';




var forward = true;

function quoteSlide() {

    var currentLeft = parseInt(quote5.style.left);

    if (forward) {
        quote5.style.left = (currentLeft +10) + 'px';
    } 
}

setInterval(quoteSlide,50);



https://javascript.info/js-animation