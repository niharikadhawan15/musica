
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
var songs = [ {
       'name': 'Ishq wala love',
       'artist': 'Neeti Mohan, Salim Merchant',
       'album': 'Student of the year',
       'duration': '4:18',
       'fileName': 'songs/romh1.mp3',
       'image': 'romantich1.jpg',
      'songNumber':'1',
      'slide': ["http://img.xcitefun.net/users/2012/09/302191,xcitefun-ishq-wala-love.jpg",
"https://vignette1.wikia.nocookie.net/soty/images/9/99/Ishq-wala-love-song-images-9.jpg/revision/latest?cb=20130330141751",
"http://s1.dmcdn.net/CQq-Q/1280x720-Jfs.jpg",
"http://msworldsite.com/wp-content/uploads/2014/07/Ishq-Wala-Love-Student-Of-The-Year.jpg"]
   },
   {
       'name': 'Kaabil',
       'artist': 'Zubin Nautiyal',
       'album': 'Kaabil',
       'duration': '5:14',
       'fileName': 'songs/romh2.mp3',
      'image': 'romantich2.jpg',
      'songNumber':'2',
       'slide':['https://i.ytimg.com/vi/n4K_6sk0Yjs/maxresdefault.jpg',
       'https://i.ytimg.com/vi/p30vqH8vTFY/maxresdefault.jpg',
       'http://static.koimoi.com/wp-content/new-galleries/2016/11/hrithik-roshan-shoot-last-song-kaabil-1.jpg',
       'http://www.bollywoodlife.com/wp-content/uploads/2016/12/CzH2TshVQAI-YZ_.jpg']
   },
{

       'name': 'Tere sang yaara',
       'artist': ' Atif Aslam',
       'album': 'rustom',
       'duration': '4:49',
       'fileName': 'songs/romh3.mp3',
       'image': 'romantich3.jpg',
      'songNumber':'3',
      'slide':['https://2.bp.blogspot.com/-JVkmocg3XRQ/V4C5OP_xxjI/AAAAAAAAXZ4/w7mY3kwcn9IRUIH-in8Y3nUQlVcV8I7UgCLcB/s1600/rustom-05.jpg',
      'http://dekhnews.com/wp-content/uploads/2016/07/Akshay-1024x496.jpg','https://i.ytimg.com/vi/XhtHe22Qwcw/maxresdefault.jpg','http://st1.bollywoodlife.com/wp-content/uploads/photos/akshay-kumar-and-ileana-dcruzs-still-from-tere-sang-yara-song-of-rustom-201607-749620.jpg']
   },

   {
       'name': 'Tum hi ho',
       'artist': 'Arijit Singh',
       'album': 'Aashiqui 2',
       'duration': '4:24',
       'fileName': 'songs/romh4.mp3',
       'image': 'romantich4.jpg',
      'songNumber':'4',
      'slide': ["http://bsp.iitd.ac.in/reviewSys/reviews/images/sampledata/maxresdefault.jpg",
"http://www.bollywoodlife.com/wp-content/uploads/2013/04/Sunn-Raha-Hai-Na-Tu-4130410180453.jpg",
"http://4.bp.blogspot.com/-MLFMFnp6qsQ/UZvYVaLZq4I/AAAAAAAACL0/JRkcnPakq9U/s1600/Aashiqui-2.jpg",
"http://www.downvids.net/video/bestimages/img-tum-hi-ho-song-in-pushto-506.jpg"]
   }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape= [ {
       'name': 'Gani',
       'artist': ' Akhil',
       'album': 'Single',
       'duration': '4:18',
       'fileName': 'songs/romp1.mp3',
       'image': 'romp1.jpg',
      'songNumber':'1',
      'slide': ["https://i.ytimg.com/vi/Zd8xwiLWbm8/maxresdefault.jpg",
"https://i.ytimg.com/vi/K1z4RQrfBrU/0.jpg",
"http://video.djpunjab.in/thumbs/19750.jpg",
"http://lyricsed.com/wp-content/uploads/2016/07/Gani-Song-Lyrics-Akhil-Manni-Sandhu.jpg"]
   },
   {
       'name': 'Kangani',
       'artist': 'Rajvir Jawanda',
       'album': 'Single',
       'duration': '3:18',
       'fileName': 'songs/romp2.mp3',
      'image': 'romp2.jpg',
      'songNumber':'2',
       'slide':['https://i.ytimg.com/vi/alVjh1nTHzE/maxresdefault.jpg',
       'https://static.jatt.link/thumbs/iwmai.jpg',
       'https://i.ytimg.com/vi/yGM17Q9h8uU/maxresdefault.jpg',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDphl-QMZm5FIKB6w5wsYoEQ1lrSB3pGPAOatPNWOY-XzXl_3BmA']
   },
{

       'name': 'Khaab',
       'artist': ' Akhil',
       'album': 'Single',
       'duration': '3:21',
       'fileName': 'songs/romp3.mp3',
       'image': 'romp3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/zHxMzNxCj0w/maxresdefault.jpg',
      'http://s2.dmcdn.net/XTr_R.jpg',
      'http://youngsterchoice.com/wp-content/uploads/2016/02/Akhil-Punjabi-Singer.png',
      'https://pbs.twimg.com/media/CgugYQbW4AAN2Rq.jpg']
   },

   {
       'name': 'Kudi Mardi Ae Tere Te',
       'artist': 'Happy Raikoti',
       'album': '7knaalan',
       'duration': '4:14',
       'fileName': 'songs/romp4.mp3',
       'image': 'romp4.jpg',
      'songNumber':'4',
      'slide': ["https://i.ytimg.com/vi/tVGlwCGqbqU/maxresdefault.jpg",
"http://www.punjabicelebs.com/wp-content/uploads/2016/03/Kudi-Mardi-Ae-Tere-Te-Full-Mp3-Song-Download-By-Happy-Raikoti.png",
"http://www.lyricsted.com/wp-content/uploads/kudi-mardi-lyrics-happy-raikoti.jpg",
"http://s2.dmcdn.net/RTWl3.jpg"]
   }]

/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English= [
   {
       'name': 'Heroes',
       'artist': 'David Bowie',
       'album': 'Single',
       'duration': '5:52',
       'fileName': 'songs/rome1.mp3',
      'image': 'rome1.jpg',
      'songNumber':'1',
       'slide':['http://www.aquariumdrunkard.com/wp-content/uploads/2016/01/David-Bowie-Heroes-french.jpg',
       'https://i.ytimg.com/vi/4QBmTHwR3hg/hqdefault.jpg',
       'https://images.genius.com/a7154f4858076141eb01a69605ea95d2.1000x1000x1.jpg',
       'https://www.superseventies.com/oaaa/oaaa_bowie2.jpg']
   },
   {
         'name': 'I wanna be your boyfriend',
         'artist': 'Raymones',
         'album': 'Single',
         'duration': '3:18',
         'fileName': 'songs/rome1.mp3',
         'image': 'rome1.jpg',
        'songNumber':'2',
        'slide': ["https://images-na.ssl-images-amazon.com/images/I/51zmejbFxDL.jpg",
  "https://i.ytimg.com/vi/iS8oYNK73Ek/hqdefault.jpg",
  "https://upload.wikimedia.org/wikipedia/en/e/e3/PG_iwannabeyourboyfriend.jpg",
  "https://img.discogs.com/hdc5fU8U711kUJmLh52wF2VPb24=/fit-in/598x594/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1361011-1213156531.jpeg.jpg"]
     },
     {
         'name': 'Say yes',
         'artist': 'Elliot Smith',
         'album': 'Single',
         'duration': '2:19',
         'fileName': 'songs/happye4.mp3',
         'image': 'happye4.jpg',
        'songNumber':'4',
        'slide': ["https://i1.sndcdn.com/avatars-000291233196-2qkplo-t500x500.jpg",
  "https://images.genius.com/2153a2a9bd096e1be84fa67efa14450d.950x950x1.jpg",
  "https://cdn.shopify.com/s/files/1/1213/3060/products/alr-0039.jpg?v=1502629881",
  "https://i.ytimg.com/vi/NcalJSO6jDY/hqdefault.jpg"]
},
{

       'name': 'Say you love me',
       'artist': ' Jessie Ware',
       'album': 'Single',
       'duration': '4:08',
       'fileName': 'songs/rome3.mp3',
       'image': 'rome3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/3LRn1QHakWo/hqdefault.jpg',
      'http://okp-cdn.okayplayer.com/wp-content/uploads/2014/09/jessie-ware-say-you-love-me-video-main.jpeg',
      'https://static.stereogum.com/uploads/2014/08/Jessie-Ware-Say-You-Love-Me.jpg',
      'https://media.pitchfork.com/photos/5931ca03a28a096fc429029f/master/w_790/85a9bbbc.jpg']
   }

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

    $('.current-song-image').attr('src','songimg/' + songObj.image);
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
        setInterval(Slider, 2000);                          /*the slides in the slideshow will be changed at the time interval of 3 seconds*/

    });

    function Slider()
     {
       $("#slider").show("fast", function() {
        /*the source to the slides of current playing song is given here*/
       $(this).attr("src", currentPlayList[currentSong-1].slide[(currentPlayList[currentSong-1].slide.length++) % cnt]).show();
    });
    }
