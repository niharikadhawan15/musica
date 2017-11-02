
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
 var songs = [ {
        'name': 'Humma Song',
        'artist': 'Badshah, Jubin',
        'album': 'Ok Jaanu',
        'duration': '3:15',
        'fileName': 'songs/song2.mp3',
        'image': 'song2.jpg',
       'songNumber':'1',
       'slide': ["http://www.lyricsmint.com/wp-content/uploads/2016/12/TheHummaSong-OkJaanu-shraddhakapoor.jpg",
"http://stat2.bollywoodhungama.in/wp-content/uploads/2016/12/Ok-Jaanu-43.jpg",
"http://media1.bollywoodhungama.in/wp-content/uploads/2016/12/Ok-Jaanu-45.jpg",
"http://media.new.mensxp.com/media/content/2016/Dec/humma-humma-new-version-from-ok-jaanu980-1481802892_980x457.jpg"] 
    },
    {
        'name': 'Nashe Si Chadh Gayi',
        'artist': 'Arijit Singh',
        'album': 'Befikre',
        'duration': '2:34',
        'fileName': 'songs/song3.mp3',
       'image': 'song3.jpg',
       'songNumber':'2',
        'slide':['http://cdn.hdpicswale.in/assets/upload/bollywood-wallpapers/ranveer-singh-befikre-570/ranveer-singh-new-pics-from-befikre-3.jpeg',
        'https://2.bp.blogspot.com/-jiiJUGfSXdk/WAc7ut861DI/AAAAAAAAJHE/QMQ99Y7UwlcuSkmXlDKBtVNQawsaNp9GwCLcB/s1600/nashe-si-chadh-gayi-song-lyrics-mp3-video-befikre-songs-image-1.JPG',
        'data:image/jpeg;base64,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',
        'https://1.bp.blogspot.com/-4bcHSubLjRs/WCSVwtORWDI/AAAAAAAABCM/pQTsF5lsHPgvDhJhmmHrxz3nb-aihNBZgCLcB/s1600/NASHE%2BSI%2BCHADH%2BGAYI%2BLyrics.jpg']
    },
 {

        'name': 'Tamma again',
        'artist': 'Dev Negi',
        'album': 'Badrinath ki Dulhania',
        'duration': '2:56',
        'fileName': 'songs/song1.mp3',
        'image': 'song1.jpg',
       'songNumber':'3',
       'slide':['https://www.pinkvilla.com/files/styles/related-images/public/Badrinath-Ki-Dulhania-molestation-scene.jpg?itok=AriVvoFe',
       'http://media2.bollywoodhungama.in/wp-content/uploads/2017/02/Badrinath-Ki-Dulhania-77.jpg','http://media3.bollywoodhungama.in/wp-content/uploads/2017/02/Badrinath-Ki-Dulhania-22.jpg','http://www.andhrawishesh.com/media/k2/galleries/56954/Badrinath-Ki-Dulhania-Movie-Stills-05.jpg']
    },
   
    {
        'name': 'The Breakup Song',
        'artist': 'Arijit Singh, Badshah',
        'album': 'Ae Dil Hai Mushkil',
        'duration': '2:29',
        'fileName': 'songs/song4.mp3',
        'image': 'song4.jpg',
       'songNumber':'4',
       'slide': ["http://www.bollywoodlife.com/wp-content/uploads/photos/2016/10/812861.jpg",
"http://www.bollywoodlife.com/wp-content/uploads/photos/2016/10/812865.jpg",
"http://media.indiatimes.in/media/content/2016/Oct/2_1477655458.jpg",
"http://static.koimoi.com/wp-content/new-galleries/2016/10/the-breakup-song-ae-dil-hai-mushkil-ranbir-anushka-0001.jpg"] 
    }]
    
/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape=[ 
   
]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English=[
]




/*To change song when we click on it*/
 function addSongNameClickEvent(songObj,position) 
        {  
            var songName = songObj.fileName; 
            var id="#song"+position
            $(id).click(function() {
            var audio = document.querySelector('audio');
            var currentSong = audio.src;                   
            if(currentSong.search(songName) !=-1)          /*if song is within the playlist then it is plyes/paused on click on the songname*/
            {
              console.log("if statement executing");
              toggleSong();
            }
            else
             {
                console.log("else statement executing");          /*otherwise the song will be played*/
                audio.src = songName;
                toggleSong();
                currentSongDetails(songObj);
            }
            });
        }


 /*to display the current song information such as name , song number, album and image of the song */
function currentSongDetails(songObj)
{ 
 
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album)
    currentSong=songObj.songNumber;
    $('#totalSongs').text(currentSong+'/'+currentPlayList.length);
}



function toggleSong() {
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
} 


/*this shows the welcome screen with the form that the user need to fill before going to the main screen 
where few limitations are added such as name should be more than 3 letters and email and password 
should be the specific one as displayed in the placeholder*/
$('.welcome-screen button').on('click', function() {
    var name = $('#name-input').val();
    var email = $('#emailinput').val();
    var pwd = $('#passwordinput').val();
    if (name.length > 3) /* name should be more than 3 letters */
        { 
        if(email=='test@acadview.com' && pwd=='JavascriptRocks') /* email should be test@acadview.com and the password should be JavascriptRocks*/
        {
             $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
            $('#playList').removeClass('hidden');
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
           
        }
        else {
            $('#name-input').addClass('error');    /* to display error message if validations are not met*/
            $('.input-wrapper').find('h4').text('Email or Password is incorrect.');
        }
    }
    else {
        $('#name-input').addClass('error');
        $('.input-wrapper').find('h4').text('Name should have more than 3 characters');   /* to display error message if validations are not met*/
    }
});


  $('.play-icon').on('click', function() {
        toggleSong()    
        });

    $('body').on('keypress', function(event) {
        if (event.keyCode == 32 && event.target.tagName!="INPUT") 
        /* this is used to make the user to be able 
          to pause and play the song with the spacebar and the song 
          should not paused when spacebar is used in input field*/
         {
            toggleSong() 
        }
    });


/*Display time in format of m:ss */
function fancyTimeFormat(time)
{   

    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

/*Function is updated every second to show current time of
 the song being played and for this i have used properties
  of progress bar and then it will update the progress bar*/
function updateCurrentTime(){
    var song=document.querySelector('audio');
    var currTime=Math.floor(song.currentTime);
    var dur=Math.floor(song.duration);
    var widths; 
    widths=currTime/dur*100;    
    $('.progress-filled').css("width", widths+'%'); 
    currTime=fancyTimeFormat(currTime);
    dur=fancyTimeFormat(dur);
    $('.progress-wrapper .time-elapsed').text(currTime);
    $('.progress-wrapper .song-duration').text(dur);
}




function timeJump() {
    var song = document.querySelector('audio')
    song.currentTime = song.duration - 5;
}

/*this is used to play the song from randomly ant time*/
function randomExcluded(min, max, excluded) {
    var n = Math.floor(Math.random() * (max-min) + min);
    if (n >= excluded) n++;
    return n;
}


/*this is used to change the contents of the playlist in the table when the
 user click on any new playlist present in the list*/
$('#songList1').on('click',function(){
    currentPlayList=playList_name[0];
    function1();
  
})

$('#songList2').on('click',function(){
    currentPlayList=playList_name[1];
    function1();

})

$('#songList3').on('click',function(){
    currentPlayList=playList_name[2];
    function1();
})

 /*array containing name of the playlist*/
var playList_name=[songs, mixtape, English]

/*whenever the page loads , the first playlist is selected by default*/
var currentPlayList=playList_name[0];   

/*it displays the details of the song in the table*/
function function1(){  
    for(var j=0; j<4; j++){
        if(currentPlayList==playList_name[j]) {
            currentSongDetails(playList_name[j][0]);
            var audio=document.querySelector('audio');
            audio.src=playList_name[j][0].fileName;
            for(var i=0; i<playList_name[j].length; i++){
                var song= $('#song'+(i+1)); 
                song.find('.song-sr').text((i+1));
                song.find('.song-name').text(playList_name[j][i].name); 
                song.find('.song-artist').text(playList_name[j][i].artist);
                song.find('.song-album').text(playList_name[j][i].album);
                song.find('.song-length').text(playList_name[j][i].duration);
                song.find('.song-number').text(playList_name[j][i].songNumber);
                addSongNameClickEvent(playList_name[j][i],i+1);

            }
            break;
        }
    }

    /*search and Sort Plugin*/
    $('#songs').DataTable({
        destroy: true,     /* Before populating table with new data, destroy old data*/
        paging:false      
    });
}


/*the volume-up and volume-off font-awesome is used and it is used 
to set the volume of song in the app. when volume-up is clicked then the
 song will be muted else the volume will be set to 100% */
$('.volume').on('click',function(){
    var song=document.querySelector('audio');
    $(this).toggleClass('fa-volume-up fa-volume-off')
    var check= $(this).hasClass('fa-volume-up');
    if(check==true){    
        song.volume=1;
        $('#vol_filled').css("width", 100+"%");
    }
    else{               
        song.volume=0;
        $('#vol_filled').css("width", 0+"%");
    }
})

/*this is used to Change Songs's timing on clicking at Progress Bar*/
$('.player-progress').on('click',function(event){
    var song=document.querySelector('audio');
    var seek=$('.player-progress');
    var song_seek=(event.pageX-event.target.offsetLeft)/seek[0].clientWidth;
    $('.progress-filled').css("width", song_seek+"%");
    song.currentTime=song.duration*song_seek;
})

/*this is used to change the volume using the volume slider where  it will be 100% in the beginning*/
    var vol=document.querySelector('audio');
    vol.volume=1;  
    $('#vol_filled').css("width",vol.volume*100+"%");
    $('#vol_slider').on('click',function(event){
        var song=document.querySelector('audio');
        var song_seek=(event.pageX-event.target.offsetLeft)/event.currentTarget.clientWidth;
        $('#vol_filled').css("width", song_seek*100+"%");
        song.volume=song_seek;
    })


/*  window.onload= function() when it is loaded then initially the detils of first song 
of the first playlist is selected as the default one*/
{ 
        function1();
            updateCurrentTime();
            setInterval(function() {
            updateCurrentTime();
            },1000);   /*it updates current time of music being played by 1 second*/
}

  
/*this will repeat the loop*/
    $('.fa-repeat').on('click', function(){
        $(this).toggleClass('disabled');    
        willLoop= 1 - willLoop;
    })

    $('.fa-random').on('click', function(){
        $(this).toggleClass('disabled');
        willShuffle= 1 -willShuffle;
    })

/*when the song ends then song that will be played depends on whether the shuffle , willloop is on or not*/
$('audio').on('ended', function(){
    var song=document.querySelector('audio');
    for(var j=0; j<4; j++){
        if(currentPlayList==playList_name[j]) {
            /*if shuffle is on then the next song that will be played will be decided by random function*/
            if(willShuffle==1)
            {
                currentSong= randomExcluded(1, playList_name[j].length, currentSong);
                song.src=playList_name[j][currentSong-1].fileName;
                toggleSong();
                currentSongDetails(playList_name[j][currentSong-1]);
            }

            /*if looping is on then the next song that will be played will be using the source of first song present in the playlist*/
            else if(willLoop==1)
            {    
                song.src=playList_name[j][0].fileName;
                toggleSong();
                currentSongDetails(playList_name[j][0]); 
                
            }
            else{ 
                if(currentSong<playList_name[j].length)
                {  
                     for(var i=0; i<4; i++)
                     {
                        if(currentPlayList==playList_name[i])
                         {
                            var song=document.querySelector('audio');
                            song.src=playList_name[i][currentSong].fileName;
                            toggleSong();
                            currentSongDetails(playList_name[i][currentSong]);            
                         }
                     }
                }

                /*otherwise next song that is present in the playlist will be played by default*/
                else
                {  
                    $('.play-icon').removeClass('fa-pause').addClass('fa-play');
                    song.currentTime=0;
                }
            }
        }
    }
})

$('.fa-step-forward').on('click', function(){
    var song = document.querySelector('audio');
    for(var j=0; j<4; j++){
        if(currentPlayList==playList_name[j]) {
            /*it check the condition that the song belongs to current playlist and
             is not the last song of the playlist then next song will be played*/
                if(currentSong<playList_name[j].length)
                {  
                    for(var j=0; j<4; j++)
                    {
                        if(currentPlayList==playList_name[j])
                         {
                            var song=document.querySelector('audio');
                            song.src=playList_name[j][currentSong].fileName;
                            toggleSong();
                            currentSongDetails(playList_name[j][currentSong]);            
                        }
                     }
                }

                /*if the song currently playing is the last song then next song that will be played
                 by the songify will be the first song present in the same playlist*/
                else
                {   
                song.src=playList_name[j][0].fileName; 
                toggleSong();
                currentSongDetails(playList_name[j][0]); 
                }  
            }
        
    }
})


//prev song using mouse
$('.fa-step-backward').on('click', function(){
    var song = document.querySelector('audio');
    for(var i=0; i<4; i++){
        if(currentPlayList==playList_name[i])
         {
            /*it checks the condition that the song should belong to the currentPlayList or not and 
            if it is first song then the last song of the playlist will be played in backward function*/
            if(currentSong==1)
            { 
                currentSong= playList_name[i].length - 1;  
                for(var i=0; i<4; i++)
                {
                    if(currentPlayList==playList_name[i]) 
                    {
                        var song=document.querySelector('audio');
                        song.src=playList_name[i][currentSong].fileName;
                        toggleSong();
                        currentSongDetails(playList_name[i][currentSong]);            
                    }
                 }
            }
           /* else the previous song will be played and 2 is subtracted from the currentSong because the indexing of array starts from zero */
            else
            {
                currentSong -= 2;   
                for(var i=0; i<4; i++)
                {
                    if(currentPlayList==playList_name[i])
                     {
                        var song=document.querySelector('audio');
                        song.src=playList_name[i][currentSong].fileName;
                        toggleSong();
                        currentSongDetails(playList_name[i][currentSong]);            
                    }
                }
           }
        }
    }
})

/*this loads the music file from the localStorage in the songify app and plays it*/
var jsmediatags = window.jsmediatags; 

$('#my-file').on('change', function(event) { 
  var file = event.target.files[0];                  /*this variable will store the first file from the chosen files*/
  var reader = new FileReader();                      /*here, it will start to read the  chosen file*/ 
  $(reader).on('load', function() {               
    var audio = document.querySelector('audio');
    audio.src = this.result;                 
    toggleSong();                             
  });
  reader.readAsDataURL(file);                 

/*this code sets the details of the song which is chosen from localStorage in the songify app*/
  jsmediatags.read(file, {
    onSuccess: function(tag) {    // onSuccess triggers in the event of a successful reading operation, as opposed to onError.
      document.querySelector('.current-song-album').innerHTML = tag.tags.album;   /*displays the album name*/
      document.querySelector('.current-song-name').innerHTML = tag.tags.title;   /* displays the song name*/
      document.querySelector('.current-song-image').setAttribute('src', 'img/desk.jpg'); /*it displays the default image as the image of the song*/
     console.log(currentSongNumber);
}
  }); 
});

   /*following is the function which gives the immersive functionality of slideshow in it.*/
    var cnt = currentPlayList[currentSong-1].slide.length;   /* this variable will store the count of number of slides*/
    $(function() {
   console.log(currentPlayList[currentSong-1].slide);
        setInterval(Slider, 4000);                          /*the slides in the slideshow will be changed at the time interval of 3 seconds*/

    });

    function Slider()
     {
       $("#slider").show("fast", function() {
        /*the source to the slides of current playing song is given here*/
       $(this).attr("src", currentPlayList[currentSong-1].slide[(currentPlayList[currentSong-1].slide.length++) % cnt]).show();   
    });
    }