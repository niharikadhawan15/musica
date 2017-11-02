
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
var songs = [ {
       'name': 'Dulhe ka sehra',
       'artist': 'Nusrat Fateh Ali Khan',
       'album': 'Dhadkan',
       'duration': '4:35',
       'fileName': 'songs/wedh1.mp3',
       'image': 'wedh1.jpg',
      'songNumber':'1',
      'slide': ["https://qph.ec.quoracdn.net/main-qimg-ddf171acacc0e57f561f618203abb915-c",
"http://delhi.bollywoodshaadis.com/img/article-2012123388424231362000.jpg",
"https://i.ytimg.com/vi/b2UuTm6khTE/maxresdefault.jpg",
"http://s2.dmcdn.net/MubU8/x360-PwU.jpg"]
   },
   {
       'name': 'Gal meethi meethi',
       'artist': 'Mika Singh',
       'album': 'Aisha',
       'duration': '4:15',
       'fileName': 'songs/wedh2.mp3',
      'image': 'wedh2.jpg',
      'songNumber':'2',
       'slide':['https://s-media-cache-ak0.pinimg.com/originals/c2/9d/37/c29d37368e1c2aadda96b57d0ea25907.jpg',
       'http://s2.dmcdn.net/oIdz/1280x720-YZ2.jpg',
       'https://s3-us-west-2.amazonaws.com/fullonshaadi/wp-content/uploads/2016/06/Fullonweddmig-Mehendi-Ceremony-5-songs-for-mehendi-ceremony-Songs-for-mehendi-5.jpg',
       'http://2.bp.blogspot.com/-Hcy8Z_Qi6pI/VV7k5I5nBYI/AAAAAAAACrs/42KkT45GNws/w1200-h630-p-k-no-nu/gal_mithi_mithi_bol.jpg']
   },
{

       'name': 'London thumakda',
       'artist': ' Neha Kakkar, Sonu Kakkar',
       'album': 'Queen',
       'duration': '3:47',
       'fileName': 'songs/wedh3.mp3',
       'image': 'wedh3.jpg',
      'songNumber':'3',
      'slide':['http://www.lyricsted.com/wp-content/uploads/2014/06/Queen-Album-cover.jpg',
      'http://cdn.lyricsmint.com/kanganaqueenlondon.jpg',
      'http://i.ndtvimg.com/mt/movies/2014-01/londonthumakda.jpg',
      'http://lyricsed.com/wp-content/uploads/2016/04/London-Thumakda-Lyrics-queen.jpg']
   },

   {
       'name': 'Wedding da season',
       'artist': 'Neha Kakkar, Amaal Mallik',
       'album': 'Wedding da season',
       'duration': '3:45',
       'fileName': 'songs/wedh4.mp3',
       'image': 'wedh4.jpg',
      'songNumber':'4',
      'slide': ["http://www.photosfall.com/wp-content/uploads/2015/11/shilpa-shetty-is-dancing-nicely-in-wedding-da-season-song.jpg",
"https://i.ytimg.com/vi/6fFguf0vnNM/maxresdefault.jpg",
"http://videomusicshow.com/wp-content/uploads/2016/09/Shilpa-Shetty-Wedding-Da-Season-Video-Song-Neha-Kakkar-Mika-Singh-Ganesh-Acharya.jpg",
"http://s1.dmcdn.net/QL6Zz/1280x720-FXE.jpg"]
   }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape=[
  {
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

        'name': 'shaadi.com',
        'artist': ' Sharry Maan',
        'album': 'Single',
        'duration': '3:38',
        'fileName': 'songs/wedp3.mp3',
        'image': 'sedp3.jpg',
       'songNumber':'3',
       'slide':['http://www.lyricsted.com/wp-content/uploads/2017/02/shaadi-dot-com-sharry-maan-400x217.jpg',
       'http://djjohalhd.video/data/thumbs/1034.jpg',
       'https://www.gabruu.com/wp-content/uploads/2017/02/16123467_213053955831808_7862851905016299520_n-696x870.jpg',
       'http://bollywoodmasala.co/wp-content/uploads/2017/02/Shaadi-Dot-Com-Lyrics-1.jpg']
    },

    {
        'name': 'veer ji viyohn',
        'artist': 'Jassi Sidhu',
        'album': 'speedy singhs',
        'duration': '3:32',
        'fileName': 'songs/wedp4.mp3',
        'image': 'wedp4.jpg',
       'songNumber':'4',
       'slide': ["https://i.ytimg.com/vi/iTxW3NNHuyw/maxresdefault.jpg",
 "http://2.bp.blogspot.com/-I2CUGTgdxcA/VYfedUnuZRI/AAAAAAAADlc/Bv5VMe94-LQ/s1600/Veer_Ji_Viyohn_Image.jpg",
 "https://s-media-cache-ak0.pinimg.com/originals/e6/b2/9f/e6b29ffe3d54dd8a969d4cc8a8eea2cb.jpg",
 "https://i.ytimg.com/vi/rlmDJysT7ZI/hqdefault.jpg"]
    }
]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English=[ {
       'name': 'Marry you',
       'artist': 'Bruno Mars',
       'album': 'Single',
       'duration': '3:50',
       'fileName': 'songs/wede1.mp3',
       'image': 'wede1.png',
      'songNumber':'1',
      'slide': ["http://hypetrak.com/images/2011/09/bruno-mars-marry-you-urban-noize.png",
"https://i.ytimg.com/vi/99yl0hLtHpY/maxresdefault.jpg",
"https://img.discogs.com/h3tB6NUaL57znndXqe3QEcCBoy4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3291030-1355645699-3962.png.jpg",
"http://3.bp.blogspot.com/-GYsGlCmdHaI/UMcqj0b8WRI/AAAAAAAAAZc/DaW_j2cId6E/s640/bruno-mars-love-love-song-marry-you-song-Favim.com-256269.jpg"]
   },
   {
          'name': 'Marry you1',
          'artist': 'Bruno Mars',
          'album': 'Single',
          'duration': '3:50',
          'fileName': 'songs/wede1.mp3',
          'image': 'wede1.png',
         'songNumber':'2',
         'slide': ["http://hypetrak.com/images/2011/09/bruno-mars-marry-you-urban-noize.png",
   "https://i.ytimg.com/vi/99yl0hLtHpY/maxresdefault.jpg",
   "https://img.discogs.com/h3tB6NUaL57znndXqe3QEcCBoy4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-3291030-1355645699-3962.png.jpg",
   "http://3.bp.blogspot.com/-GYsGlCmdHaI/UMcqj0b8WRI/AAAAAAAAAZc/DaW_j2cId6E/s640/bruno-mars-love-love-song-marry-you-song-Favim.com-256269.jpg"]
 },
{

       'name': 'Will you marry me',
       'artist': ' Divya , Jonita',
       'album': 'Bhoomi',
       'duration': '3:54',
       'fileName': 'songs/wede2.mp3',
       'image': 'wede3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/7ERhPcxAdFQ/maxresdefault.jpg',
      'http://images.indianexpress.com/2017/08/bhoomi-song-7591.jpg',
      'http://waploft.me/siteuploads/thumb/sft180/89881_7.jpg',
      'http://ste.india.com/sites/default/files/2017/08/29/620508-bhoomi-song.jpg']
   },

   {

          'name': 'Will you marry me',
          'artist': ' Divya , Jonita',
          'album': 'Bhoomi',
          'duration': '3:54',
          'fileName': 'songs/wede2.mp3',
          'image': 'wede3.jpg',
         'songNumber':'4',
         'slide':['https://i.ytimg.com/vi/7ERhPcxAdFQ/maxresdefault.jpg',
         'http://images.indianexpress.com/2017/08/bhoomi-song-7591.jpg',
         'http://waploft.me/siteuploads/thumb/sft180/89881_7.jpg',
         'http://ste.india.com/sites/default/files/2017/08/29/620508-bhoomi-song.jpg']
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
