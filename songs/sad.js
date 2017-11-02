
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
var songs = [ {
       'name': 'Kabira',
       'artist': 'Arijit Singh, Harshdeep Kaur',
       'album': 'Yeh Jawaani Hai Deewani',
       'duration': '4:30',
       'fileName': 'songs/sadh1.mp3',
       'image': 'sadh1.jpg',
      'songNumber':'1',
      'slide': ["http://cdn.indiamarks.com/wp-content/uploads/Yeh-Jawaani-Hai-Deewanis-Kabira-Song.jpg",
"https://i.ytimg.com/vi/D6nqDWcBXSE/maxresdefault.jpg",
"http://s1.dmcdn.net/GYQNl/1280x720-F1C.jpg",
"https://s1-ssl.dmcdn.net/Bca5y.jpg"]
   },
   {
       'name': 'Sun Raha Hai Naa Tu ',
       'artist': 'Ankit Tiwari',
       'album': 'Aashiqui 2',
       'duration': '6:30',
       'fileName': 'songs/sadh2.mp3',
      'image': 'sahh2.png',
      'songNumber':'2',
       'slide':['https://i.ytimg.com/vi/75kkH5dbK8g/maxresdefault.jpg',
       'https://i.ytimg.com/vi/wCjHH3UVpkU/maxresdefault.jpg',
       'http://2.bp.blogspot.com/-w2nPvEgESOA/U1v_0G_N1eI/AAAAAAAAAII/tqcFkyjItH8/s1600/sun+raha+hai+na+tu.PNG',
       'http://www.lyricsfall.com/wp-content/uploads/2015/02/sun-raha-hai-na-tu-song-from-aashiqui-2-movie.jpg']
   },
{

       'name': 'Tujhe bhula diya',
       'artist': ' Mohit Chauhan, Shekhar Ravjiani',
       'album': 'Anjaana Anjaani',
       'duration': '4:41',
       'fileName': 'songs/sadh3.mp3',
       'image': 'sadh3.jpg',
      'songNumber':'4',
      'slide':['https://i.ytimg.com/vi/FNHIAQNvy2M/maxresdefault.jpg',
      'https://media.indiatimes.in/media/content/itimes/photo/2014/Jul/22/1406025445-download-tujhe-bhula-diya-anjaana-anjaani-dvd-rip-pc-videos-in.jpg','https://media.indiatimes.in/media/content/itimes/photo/2014/Jul/22/1406025449-download-tujhe-bhula-diya-mp-song-songs-fever-songs-fever.jpg','http://s1.dmcdn.net/N9QzT/1280x720-kYC.jpg']
   },

   {
       'name': 'Tu jaane na',
       'artist': 'Atif Aslam',
       'album': 'Ajab Prem Ki Ghazab Kahani',
       'duration': '5:43',
       'fileName': 'songs/sadh4.mp3',
       'image': 'sadh4.jpg',
      'songNumber':'3',
      'slide': ["http://www.filmapia.com/sites/default/files/filmapia/pub/scene/scene/vlcsnap-2010-12-02-23h58m34s223.png",
"https://i.ytimg.com/vi/-rTAPMNhHaI/maxresdefault.jpg",
"http://s2.dmcdn.net/IB5LK/1280x720-2N_.jpg",
"http://i.imgur.com/zEIX1.jpg"]
   }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape= [ {
       'name': 'Dooriyan',
       'artist': 'Guri',
       'album': 'Single',
       'duration': '3:45',
       'fileName': 'songs/sadp1.mp3',
       'image': 'sadp1.jpg',
      'songNumber':'1',
      'slide': ["http://lyricsraag.com/wp-content/uploads/2017/06/DOORIYAN-Full-Song-Guri-Latest-Punjabi.jpg",
"https://i.ytimg.com/vi/EWFfgVGPqcQ/maxresdefault.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZlc4GdjZggIwtDSUcqggjvm8HAdYYaK61421THqEgA67kggc4ug",
"https://i.ytimg.com/vi/91HjM-EIpsg/maxresdefault.jpg"]
   },
   {
       'name': 'Ishqan De Lekhe ',
       'artist': 'Sajjan Adeeb',
       'album': 'Single',
       'duration': '3:20',
       'fileName': 'songs/sadp2.mp3',
      'image': 'sadp2.jpg',
      'songNumber':'2',
       'slide':['https://i.ytimg.com/vi/NBo1bzEfnnk/maxresdefault.jpg',
       'http://www.lyricsted.com/wp-content/uploads/2016/09/ishqan-de-lekhe-sajjan-adeeb-punjabi-400x231.jpg',
       'https://i.ytimg.com/vi/at0d1de7T5Q/hqdefault.jpg',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ihPSS-5ZKkOqGTQ66sJn_DL61fSblrNPoXRw2wPG_JTbciU2FQ']
   },
{

       'name': 'Oh Kyu Ni Jaan',
       'artist': ' Ninja',
       'album': 'Single',
       'duration': '3:41',
       'fileName': 'songs/sadp3.mp3',
       'image': 'sadp3.jpg',
      'songNumber':'3',
      'slide':['http://lyricsbros.com/wp-content/uploads/Oh-Kyu-Ni-Jaan-Ske-Lyrics-By-Ninja.jpg',
      'https://3.bp.blogspot.com/-XJNd9RyLL6E/WFDj5ctMqaI/AAAAAAAANQc/LgCOv98lroEJ1b8xv0Gk5P004qjRRHT7gCLcB/s1600/Oh-Kyu-Ni-Jaan-Ske-Song-by-Ninja.jpg','http://s1.dmcdn.net/fcQIi.jpg','http://s2.dmcdn.net/kKD9q.jpg']
   },

   {
       'name': 'Qismat',
       'artist': 'Ammy Virk',
       'album': 'Single',
       'duration': '4:04',
       'fileName': 'songs/sadp4.mp3',
       'image': 'sadp4.jpg',
      'songNumber':'4',
      'slide': ["http://www.androidmobilezone.com/protected/uploads/media/cover/thumb/Qismat.jpg",
"http://lyricsraag.com/wp-content/uploads/2017/07/qismat-song-with-lyrics-ammy-virk.jpg",
"http://lyricswala.in/wp-content/uploads/2017/07/qismat-ammy-virk-lyrics.jpg",
"https://i0.wp.com/lyricsvani.com/wp-content/uploads/2017/07/qismat-Lyrics.jpg?resize=800%2C445"]
   }]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English= [ {
       'name': 'Hallelujah ',
       'artist': 'Rufus wainwright',
       'album': 'Single',
       'duration': '4:16',
       'fileName': 'songs/sade1.mp3',
       'image': 'sade1.jpg',
      'songNumber':'1',
      'slide': ["https://images.genius.com/b20bbb71f8c587230e62883ec199cc15.640x640x1.jpg",
"https://www.theguitarlesson.com/wp-content/uploads/2012/10/hallelujah-guitar-lesson-shrek-rufus-wainwright.jpg",
"https://i.ytimg.com/vi/nBB_DA1ecBA/maxresdefault.jpg",
"https://i.ytimg.com/vi/JQUYuPwGchI/hqdefault.jpg"]
   },
   {
       'name': 'Someone like you ',
       'artist': 'Adele',
       'album': 'Single',
       'duration': '4:36',
       'fileName': 'songs/sade2.mp3',
      'image': 'sade2.png',
      'songNumber':'2',
       'slide':['https://upload.wikimedia.org/wikipedia/en/2/2d/Adele_-_Someone_Like_You.jpg',
       'http://cdn4.sosueme.ie/wp-content/uploads/_organised/a/Adele-Someone-Like-You-Lyrics.png',
       'http://eddie11.com/wp-content/uploads/2015/03/Adele-Someone-Like-You.png',
       'http://www.turkceokunusu.com/wp-content/uploads/2014/07/Adele-Someone-Like-You.png']
   },
{

       'name': 'Stay with me',
       'artist': ' Sam Smith',
       'album': 'Single',
       'duration': '2:48',
       'fileName': 'songs/sade3.mp3',
       'image': 'sade3.jpg',
      'songNumber':'3',
      'slide':['https://themusicworkshop.com/wp-content/uploads/2014/09/sam-smith-stay-with-me.jpg',
      'https://s-media-cache-ak0.pinimg.com/originals/80/29/8a/80298acbcaeca6621bedeaddc17d0276.jpg',
      'http://lightning100.com/files/2014/05/1780061_542964429135587_632092958_o.jpg',
      'https://images.rapgenius.com/0dcf0f7c9247edf39868ffe264d3b542.600x600x1.jpg']
   },

   {
       'name': 'The heart wants',
       'artist': 'Selena Gomez',
       'album': 'Single',
       'duration': '3:39',
       'fileName': 'songs/sade4.mp3',
       'image': 'sade4.jpg',
      'songNumber':'4',
      'slide': ["http://www.picslyrics.net/images/20710-selena-gomez-the-heart-wants-what-it-wants.jpg",
"https://images.genius.com/c4c245d3851ee365007f90bd2828e835.1000x1000x1.jpg",
"https://images.genius.com/36f142ed5c94d77435f606271111c22e.1000x1000x1.png",
"https://i1.imgiz.com/rshots/7902/selena-gomez-the-heart-wants-what-it-wants-lyrics_7902393-54690_640x360.jpg"]
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
