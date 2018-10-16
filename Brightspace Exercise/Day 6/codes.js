var noColours = parseInt($('#noColours'));
var  hueCol = $('#hueCol');
var lumin = $('lumin');
var randomCol = randomColor({hue: hueCol,luminosity: lumin})



$('#submit').click(function(event){
    event.preventDefault();
    for(var i = 1; i < noColours; i++) {
        $('#colours').append('<div class ="palette"></div>')
        $('.palette').css({'background-color':randomCol})
        $('.palette').css({'height':'100px'})
        $('.palette').css({'width':'100px'})
        $('.palette').css({'margin':'10px'})
    }
});
