// // JQUERY PRINCIPLES 

// $('h1').css({'color':'blue'})
// $('#id-div').css({'background-color':'pink'});



// $(document).ready(function() { 
//     var links = $('a');
//     links.each(function() {
//         var link = $(this);
//         link.text(link.text()+'!');
//     });
// });

// // alternatively:

// function loopThroughList () {
//     var links = $('a');
//     links.each(function() {
//         var link = $(this);
//         link.text(link.text()+'!');
//     });
// }

// $(document).ready(function(){
//     loopThroughList();
// })


// // events using JQUERY
// $('button').on('click', function(){
//     console.log('clicked!')
// })

// $('body').on('keypress', function(event){
//     console.log(event);
//     console.log(event.which);
//     console.log(event.target);
// })


// $('form').on('submit',function(event){
//     event.preventDefault();
//     console.log('not submitting the form!')
// });



// Animation

$('#error').hide();
// $('#error').fadeIn(1000);
$('#error').show(1000, function(){
    $(this).addClass('alert')
});

$('#random').animate({
    opacity:0.25,
    left:'+50'
}, 5000, function(){

})

var array = [1,2,3];
$.each(array, function(index,value){
    // code goes here kind of like a forloop
})


// found on: https://api.jquery.com/category/effects/