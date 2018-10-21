
// THE SLIDE SHOW

var quoteIndex = 0;
quoteShow();

function quoteShow() {
    var i;
    var quotes = document.getElementsByClassName("quoteblock");
    for (i = 0; i < quotes.length; i++) {
       quotes[i].style.display = "none";  
    }
    quoteIndex++;
    if (quoteIndex > quotes.length) {quoteIndex = 1}    

    quotes[quoteIndex-1].style.display = "block";  
    setTimeout(quoteShow, 3000);
}