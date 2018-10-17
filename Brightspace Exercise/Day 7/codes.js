var submitButton = document.getElementById('submit')


// Takes the Input and grabs the song

submitButton.addEventListener('click', function(event){
    event.preventDefault();
    var artist = document.getElementById('artist').value;
    var title = document.getElementById('title').value;
    var songInfo = document.getElementById('song-info');

    fetch('https://api.lyrics.ovh/v1/'+artist+'/'+title)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(JSON.stringify(data))
        var lyrics = data.lyrics.replace('\n',' <br> ')
        songInfo.innerHTML ='" '+ lyrics + ' "'
        console.log(lyrics)
    })
})




