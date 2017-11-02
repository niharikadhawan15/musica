
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
var songs = [ {
       'name': 'Aajkal tere mere pyaar ke',
       'artist': 'Mohammed Rafi',
       'album': 'Brahmachari',
       'duration': '5:11',
       'fileName': 'songs/retroh1.mp3',
       'image': 'retroh2.jpg',
      'songNumber':'1',
      'slide': ["https://i.ytimg.com/vi/ookeJk1Bo7Y/hqdefault.jpg",
"https://i.ytimg.com/vi/QjFhTYkk1Jc/hqdefault.jpg",
"https://i.ytimg.com/vi/x_CvrpmVDWU/maxresdefault.jpg",
"https://i.ytimg.com/vi/j_apZ2iF0Gc/hqdefault.jpg"]
   },
   {
       'name': 'Jab koi baat bigad jaaye',
       'artist': ' Kumar Sanu',
       'album': 'Jurm',
       'duration': '7:55',
       'fileName': 'songs/retroh2.mp3',
      'image': 'retroh1.jpg',
      'songNumber':'2',
       'slide':['http://www.downvids.net/video/bestimages/img-song-jab-koi-baat-bigad-jaye-540.jpg',
       'https://i.pinimg.com/736x/6c/54/df/6c54df633a6e2e3c57e034773653a921--vinod-khanna-jab.jpg',
       'http://s1.dmcdn.net/APlJr/1280x720-VAs.jpg',
       'https://i3.ytimg.com/vi/wMUFmIyYD10/0.jpg']
   },
{

       'name': 'Pyaar hua',
       'artist': '  Manna Dey, Lata Mangeshkar',
       'album': 'Shree 420',
       'duration': '4:23',
       'fileName': 'songs/retroh3.mp3',
       'image': 'retroh3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/oXLzfldeDcM/maxresdefault.jpg',
      'http://2.bp.blogspot.com/-haMoMHIQi9A/U8gZvgXzhII/AAAAAAAABcc/1Qpt9caxetc/s1600/Shree+420+(1955)+-+Pyaar+Hua+Ikraar+Hua.jpg',
      'https://i3.ytimg.com/vi/Ktd1gIWjFXQ/0.jpg',
      'https://rrkelkar.files.wordpress.com/2012/01/pyar-hua-ikrar-hua.jpg']
   },

   {
     'name': 'Tera mujhse hai pehle ka',
     'artist': 'Kishore Kumar',
     'album': 'Aa Gale Lag Jaa ',
     'duration': '4:13',
     'fileName': 'songs/retroh4.mp3',
     'image': 'retroh4.jpg',
    'songNumber':'4',
    'slide': ["https://i.ytimg.com/vi/u6LF5yH0Hyg/hqdefault.jpg",
 "http://1.bp.blogspot.com/-wP_jeZk1D7g/VkSuLyLDKYI/AAAAAAAAApU/vbHVLSHdNl0/s1600/Tera%2BMujhse%2BHai%2BPehle%2BKa%2B%2528Duet%2529%2BMp3%2BSong.jpg",
 "http://www.zulm.net/urbanlegend/aglj/PDVD6.JPG",
 "http://www.fantastikindia.fr/site/IMG/jpg/Les-Quatre.jpg"]
   }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape= [ {
       'name': 'Manke',
       'artist': 'Gurdaas Maan',
       'album': 'Punjabi Top 12',
       'duration': '6:30',
       'fileName': 'songs/retrop1.mp3',
       'image': 'retrop1.jpg',
      'songNumber':'1',
      'slide': ["https://i.ytimg.com/vi/WrXqbls9Pps/maxresdefault.jpg",
"https://i.ytimg.com/vi/WrXqbls9Pps/maxresdefault.jpg",
"https://i.ytimg.com/vi/WrXqbls9Pps/maxresdefault.jpg",
"https://i.ytimg.com/vi/WrXqbls9Pps/maxresdefault.jpg"]
   },
   {
       'name': 'O Jag Jeondeyan De',
       'artist': ' Various',
       'album': 'Jag Jeondeyan De Mele',
       'duration': '5:42',
       'fileName': 'songs/retrop2.mp3',
      'image': 'retrop2.jpg',
      'songNumber':'2',
       'slide':['https://upload.wikimedia.org/wikipedia/en/5/52/Jag_Jeondeyan_De_Mele_%282009%29.jpg',
       'https://images-na.ssl-images-amazon.com/images/I/31B%2BqWkuIPL.jpg',
       'https://i.ytimg.com/vi/nyqPdD2fWpM/hqdefault.jpg',
       'https://i.ytimg.com/vi/_KcjjBC0E-g/hqdefault.jpg']
   },
{

       'name': 'Phulkari',
       'artist': 'Ranjit Bawa',
       'album': 'Single',
       'duration': '4:16',
       'fileName': 'songs/retrop3.mp3',
       'image': 'retrop3.jpg',
      'songNumber':'3',
      'slide':['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1oX5kTvTiSOtkm4amixLIWXy6ZpBOExO99dVNKfkpyIpRWz9goA',
      'http://www.bollywoodmasala.co/wp-content/uploads/2017/09/Phulkari-Lyrics-1.jpg',
      'https://i1.wp.com/vps461838.ovh.net/wp-content/uploads/2017/09/Phulkari.jpg',
      'https://i.ytimg.com/vi/qyZbbpG4qo8/hqdefault.jpg']
   },

   {
     'name': 'Pind diyan galiyan',
     'artist': 'Gurdaas maan',
     'album': 'Punjeeri  ',
     'duration': '6:29',
     'fileName': 'songs/retrop4.mp3',
     'image': 'retrop4.jpg',
    'songNumber':'4',
    'slide': ["https://i.ytimg.com/vi/6JbdhAwd2sY/maxresdefault.jpg",
 "https://s-media-cache-ak0.pinimg.com/originals/0f/1f/34/0f1f34dffe4a6824130489b05bda1e87.jpg",
 "https://i.ytimg.com/vi/6JbdhAwd2sY/maxresdefault.jpg",
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CkkqHPGk5chLvZuNjDhJ0gL1SsoHCFYQQDQmklZtTHNGHhGt0A"]
   }]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English= [{

       'name': 'If you wanna be happy',
       'artist': ' Jimmy Soul',
       'album': 'Single',
       'duration': '1:11',
       'fileName': 'songs/happye3.mp3',
       'image': 'happye3.jpg',
      'songNumber':'1',
      'slide':['https://is5-ssl.mzstatic.com/image/thumb/Music6/v4/7f/03/09/7f03098a-0142-4cf0-c66f-17b8fa7630c3/Jimmy_Soul_-_If_You_Wanna_Be_Happy.jpg/268x0w.jpg',
      'https://images.shazam.com/coverart/t5146735_s400.jpg',
      'https://joetroiano.files.wordpress.com/2010/11/if-you-wanna-be-happy-cover-2.jpg',
      'https://is5-ssl.mzstatic.com/image/thumb/Music4/v4/65/ef/d0/65efd099-22e6-2979-9719-b90600898d58/Jimmy_Soul_-_If_You_Wanna_Be_Happy.jpg/1200x630bb.jpg']
   },
   {
       'name': 'My heart will go on',
       'artist': 'Celina Dio',
       'album': 'Titanic',
       'duration': '5:10',
       'fileName': 'songs/retroe2.mp3',
      'image': 'retroe1.jpg',
      'songNumber':'2',
       'slide':['http://poster.keepcalmandposters.com/default/5613220_my_heart_will_go_on.jpg',
       'http://i.dailymail.co.uk/i/pix/2013/11/08/article-0-194B2A6F00000578-556_634x426.jpg',
       'https://i.ytimg.com/vi/Z7qB8ATDONo/maxresdefault.jpg',
       'https://images-na.ssl-images-amazon.com/images/I/91Th9k-PSWL._SL1500_.jpg']
   },
   {
       'name': 'Rain drops keep falling on my head',
       'artist': 'B.J. Thomas',
       'album': 'Single',
       'duration': '2:54',
       'fileName': 'songs/rainye2.mp3',
      'image': 'rainye2.jpg',
      'songNumber':'2',
       'slide':['https://i.ytimg.com/vi/XAJM7kT14aA/maxresdefault.jpg',
       'https://i.ytimg.com/vi/UGvHRhFKjy4/hqdefault.jpg',
       'https://images.genius.com/f901ecf047203e2a9f1936ac970f8434.460x460x1.jpg',
       'https://s-media-cache-ak0.pinimg.com/originals/a4/ce/4b/a4ce4bb4e87bb4889dc1492bdf9f49dd.jpg']
   },

   {
     'name': 'Right Now',
     'artist': 'ANd9GcQ8CkkqHPGk5chLvZuNjDhJ0gL1SsoHCFYQQDQmklZtTHNGHhGt0A',
     'album': 'Single ',
     'duration': '4:06',
     'fileName': 'songs/retroe4.mp3',
     'image': 'retroe4.jpg',
    'songNumber':'4',
    'slide': ["http://3.bp.blogspot.com/-19euzcpK4vg/UmP16e2Yx8I/AAAAAAAAAVg/O6pcOml7j98/s1600/akon.jpg",
 "https://upload.wikimedia.org/wikipedia/en/b/b7/Akon_Rightnow.jpg",
 "https://az58332.vo.msecnd.net/e88dd2e9fff747f090c792316c22131c/Images/Products47685-1200x1200-730579.jpg",
 "http://4.bp.blogspot.com/-TG5tH4A7s2E/Twk0r-VbqDI/AAAAAAAAAZ4/LqLeqazduSQ/s1600/Akon-Right+Now_www.allsongs.in.jpg"]
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
