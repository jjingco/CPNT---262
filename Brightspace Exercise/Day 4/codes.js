var quotes = ['"When you reach the end of your rope, tie a knot in it and hang on." --Franklin D. Roosevelt',
                '"There is nothing permanent except change."--Heraclitus',
                '"Good judgment comes from experience, and a ot of that comes from bad judgment."--Will Rogers',
                '"If you cannot do great things, do small things in a great way." --Napoleon Hill',
                '"The secret of getting ahead is getting started." --Mark Twain']
var quote =  document.getElementById('quote');
quote.style.position ='absolute';
quote.style.backgroundColor ='red';

function quoteMachine() {
    for (var i = 0; i < quotes.length; i++) {
        quote.innerHTML = quotes[i];
        console.log(quotes[i]); 
        // buttons
        function navBack(event) {
            quote.innerHTML = quotes[i-1];
            console.log(quotes[i-1]);}
        function navForward(event) {
            quote.innerHTML = quotes[i+1];
            console.log(quotes[i+1]);}
    }
}
setInterval(quoteMachine,3000)


