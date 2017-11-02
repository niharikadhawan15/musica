
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
 var songs = [ {
        'name': 'Abhi to party',
        'artist': ' Aastha, Armaan Malik',
        'album': 'Khoobsurat',
        'duration': '2:59',
        'fileName': 'songs/partyh1.mp3',
        'image': 'partyh1.jpg',
       'songNumber':'1',
       'slide': ["https://4.bp.blogspot.com/-MMhDk2Lbjm4/VYQupQ-RJQI/AAAAAAAAAHM/Izv_Qe-yJlo/s1600/Abhi%2Btoh%2Bparty.jpg",
"http://s2.dmcdn.net/gzHb9.jpg",
"http://static.ibnlive.in.com/pix/slideshow/08-2014/abhi-toh-party/party01-aug27.jpg",
"http://static.ibnlive.in.com/pix/slideshow/08-2014/abhi-toh-party/party03-aug27.jpg"]
    },
    {
        'name': 'Chittiyan kalaiyan',
        'artist': 'Kanika Kapoor',
        'album': 'Roy',
        'duration': '4:05',
        'fileName': 'songs/partyh2.mp3',
       'image': 'partyh2.jpg',
       'songNumber':'2',
        'slide':['https://i.ytimg.com/vi/GBpthAXpkSM/maxresdefault.jpg',
        'https://e1nqwsrg9ua0g9ep-zippykid.netdna-ssl.com/wp-content/uploads/2015/01/jacqueline-fernandez-2.jpg',
        'http://www.lyricsbell.com/wp-content/uploads/2015/01/chittiyaan-kalaiyaan-roy.jpg',
        'https://i.ytimg.com/vi/U1eD54EZX8g/maxresdefault.jpg']
    },
 {

        'name': 'Kala chashma',
        'artist': '  Neha Kakkar, Amar Arshi',
        'album': 'Baar Baar dekho',
        'duration': '4:24',
        'fileName': 'songs/partyh3.mp3',
        'image': 'partyh3.jpg',
       'songNumber':'3',
       'slide':['https://i.ytimg.com/vi/ehFrMmW-7Pc/maxresdefault.jpg',
       'http://i.ndtvimg.com/i/2016-07/kala-chashma_640x480_41469595815.jpg','http://www.lyricstm.com/wp-content/uploads/2016/07/Kala-Chashma-Lyrics-Baar-Baar-Dekho.jpg','https://i.ytimg.com/vi/Yv9nhxntwqM/hqdefault.jpg']
    },

    {
        'name': 'Nashe si chad gayi',
        'artist': 'Arijit Singh, Caralisa Monteiro',
        'album': 'Befikre',
        'duration': '3:58',
        'fileName': 'songs/partyh4.mp3',
        'image': 'partyh4.jpg',
       'songNumber':'4',
       'slide': ["https://i.ytimg.com/vi/ZFQM5yV0aHc/maxresdefault.jpg",
"http://i.ndtvimg.com/i/2016-10/ranveer-singh-vaani-kapoor_640x480_41476784218.jpg",
"http://www.glint.tv/wp-content/uploads/2016/10/Kudi-Nashe-Si-Chad-Gayi-Oye-Befikre-Song.jpg",
"https://2.bp.blogspot.com/-jiiJUGfSXdk/WAc7ut861DI/AAAAAAAAJHE/QMQ99Y7UwlcuSkmXlDKBtVNQawsaNp9GwCLcB/s1600/nashe-si-chadh-gayi-song-lyrics-mp3-video-befikre-songs-image-1.JPG"]
    }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape= [ {
      'name': 'Chude wali baanh',
      'artist': 'Mankirt Aulakh',
      'album': 'Single',
      'duration': '3:14',
      'fileName': 'songs/wedp1.mp3',
      'image': 'wedp1.jpg',
     'songNumber':'1',
     'slide': ["https://i.ytimg.com/vi/jMPMSu9-01k/maxresdefault.jpg",
"https://gotolyrics.com/wp-content/uploads/2017/01/Choorhey-Wali-Bahhh-Lyrics-Mankirt-Aulakh.jpg",
"https://i.ytimg.com/vi/svl_8p0VvIQ/maxresdefault.jpg",
"https://s-media-cache-ak0.pinimg.com/originals/9b/e9/2f/9be92fa7c4b2deaf423279402c01acc4.jpg"]
  },
  {
      'name': 'gallan mithiyan',
      'artist': 'Mankirt Aulakh',
      'album': 'Single',
      'duration': '3:34',
      'fileName': 'songs/wedp2.mp3',
     'image': 'wedp2.jpg',
     'songNumber':'2',
      'slide':['http://s1.dmcdn.net/QQdMg/1280x720-EKZ.jpg',
      'https://i.ytimg.com/vi/9DhR9CKAHdQ/maxresdefault.jpg',
      'http://lyricsed.com/wp-content/uploads/2016/03/Gallan-Mithiyan-Lyrics-Mankirt-Aulakh-Himanshi-Khurana.jpg',
      'http://djpunjab.im/thumbs/639.jpg']
  },
  {

         'name': 'Ring',
         'artist': ' Neha Kakkar',
         'album': 'Single',
         'duration': '2:43',
         'fileName': 'songs/happyp3.mp3',
         'image': 'happyp3.jpg',
        'songNumber':'3',
        'slide':['https://i.ytimg.com/vi/wj3y4_prytg/maxresdefault.jpg',
        'http://t1.videoming.com/sft113/56169_7.jpg','https://s-media-cache-ak0.pinimg.com/originals/96/97/a4/9697a4b43dcfc6126a75da5505d7ca98.jpg','https://i.ytimg.com/vi/KNoTtp2qHzE/hqdefault.jpg']
     },

     {
         'name': 'Time table',
         'artist': 'Kulwinder Billa',
         'album': 'Time table',
         'duration': '4:42',
         'fileName': 'songs/happyp4.mp3',
         'image': 'happyp4.jpg',
        'songNumber':'4',
        'slide': ["http://s.mp3mad.co.in/cover/46633.jpg",
  "http://punjab2000.com/wp-content/uploads/2015/01/TimeTable_S.jpg",
  "http://s1.dmcdn.net/Lr0-2/x240-dhr.jpg",
  "http://feelyourlove.com/wp-content/uploads/2015/01/time-table.png"]
     }]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English=[ {
       'name': 'Happy Together',
       'artist': 'The turtles',
       'album': 'Single',
       'duration': '2:35',
       'fileName': 'songs/happye1.mp3',
       'image': 'happye1.jpg',
      'songNumber':'1',
      'slide': ["https://img.discogs.com/MQFw8K4lK6nUGpLeDcksUvN94os=/fit-in/400x401/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2084991-1333291310.jpeg.jpg",
"https://images.rapgenius.com/75ef3a3d120942ba52b22a535b5f9d60.220x216x1.jpg",
"https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Happy_Together_%28song%29.jpg/220px-Happy_Together_%28song%29.jpg",
"https://i.ytimg.com/vi/R_7PuqrVCWM/maxresdefault.jpg"]
   },
   {
       'name': 'Heroes',
       'artist': 'David Bowie',
       'album': 'Single',
       'duration': '5:52',
       'fileName': 'songs/rome1.mp3',
      'image': 'rome1.jpg',
      'songNumber':'2',
       'slide':['http://www.aquariumdrunkard.com/wp-content/uploads/2016/01/David-Bowie-Heroes-french.jpg',
       'https://i.ytimg.com/vi/4QBmTHwR3hg/hqdefault.jpg',
       'https://images.genius.com/a7154f4858076141eb01a69605ea95d2.1000x1000x1.jpg',
       'https://www.superseventies.com/oaaa/oaaa_bowie2.jpg']
   },
{

       'name': 'If you wanna be happy',
       'artist': ' Jimmy Soul',
       'album': 'Single',
       'duration': '1:11',
       'fileName': 'songs/happye3.mp3',
       'image': 'happye3.jpg',
      'songNumber':'3',
      'slide':['https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/7f/03/09/7f03098a-0142-4cf0-c66f-17b8fa7630c3/Jimmy_Soul_-_If_You_Wanna_Be_Happy.jpg/268x0w.jpg',
      'https://images.shazam.com/coverart/t5146735_s400.jpg',
      'https://joetroiano.files.wordpress.com/2010/11/if-you-wanna-be-happy-cover-2.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/65/ef/d0/65efd099-22e6-2979-9719-b90600898d58/Jimmy_Soul_-_If_You_Wanna_Be_Happy.jpg/1200x630bb.jpg']
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
   }]


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
