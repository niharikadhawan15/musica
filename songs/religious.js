
var currentSong= 1; //Initially first song the playlist selected
var willLoop= 0;    //Loop is off initially
var willShuffle= 0; //Shuffle is off initially


/*following are the array of objects that describe the details of each song that is present in the playlist*/

/*this is the description of playlist 1 containing name,artist,album,duration,filename,image and song number of the song*/
var songs = [ {
       'name': 'Ganesh aarti',
       'artist': 'Anuradha Paudwal ',
       'album': 'Devichya Aartya',
       'duration': '2:55',
       'fileName': 'songs/relh1.mp3',
       'image': 'relh1.jpg',
      'songNumber':'1',
      'slide': ["http://dilsedeshi.com/wp-content/uploads/2017/07/name-of-ganesh-ji-sons-3.jpg",
"http://kulshreshthaworld.com/content/ganeshji.png",
"http://1.bp.blogspot.com/-2d-4D5uVjp4/VaxxSEO63EI/AAAAAAAATnM/wDYniBCDj7E/s1600/Shri%2Bganesh.jpg",
"https://www.mypanditg.com/wp-content/uploads/2016/01/ganeshG.jpg"]
   },
   {
       'name': 'Gaytri mantra',
       'artist': ' Suresh wadkar',
       'album': 'Gayatrimala',
       'duration': '8:28',
       'fileName': 'songs/relh2.mp3',
      'image': 'relh2.jpg',
      'songNumber':'2',

       'slide':['http://www.religiouskart.com/blog/wp-content/uploads/2016/11/Gayatri-mantra-om-1024x768.jpg',
       'http://atmanirvana.com/wp-content/uploads/2016/06/Gayatri-Mantra-Atmanirvana-copy.jpg',
       'https://wiralfeed.files.wordpress.com/2015/10/gayatri-mantra.jpg',
       'http://4.bp.blogspot.com/-hLnpUuIL7dQ/VeV3s4kFr5I/AAAAAAAAFRI/nOF5rbLKYzc/s1600/Gayatri%2B2.jpg']
   },
{











       'name': 'Om jai jagdish',
       'artist': '  Anuradha Paudwal ',
       'album': 'Devichya Aartya ',
       'duration': '4:50',
       'fileName': 'songs/relh3.mp3',
       'image': 'relh3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/vdwIUrh_4OQ/hqdefault.jpg',
      'https://cdn.dollsofindia.com/images/p/hindu-posters/abhimanyu-vadh-DC72_l.jpg',
      'https://i.ytimg.com/vi/gITkFVbvNSw/hqdefault.jpg',
      'http://blog.srisankaramatrimony.com/wp-content/uploads/2014/08/Ekadasi.jpg']
   },

   {
     'name': 'Om sai ram',
     'artist': 'Alka Yagnik, Abhijeet Bhattacharya',
     'album': 'Biwi no. 1 ',
     'duration': '7:28',
     'fileName': 'songs/relh4.mp3',
     'image': 'relh4.jpg',
    'songNumber':'4',
    'slide': ["https://i.ytimg.com/vi/xFBUwkRP6RM/maxresdefault.jpg",
 "https://i.ytimg.com/vi/QOEr9a7wV0I/hqdefault.jpg",
 "https://media.indiatimes.in/media/content/itimes/video/2015/Nov/1/1446389604-mujhe-maaf-karna-om-sai-ram-biwi-no-1-full-song-salman-khan-karisma-kapoor-563627643f0b3_666x500.jpg",
 "https://lh6.googleusercontent.com/-ckcM6AUa-_Q/TXn8cQXHZ9I/AAAAAAAAAIs/fzoLcoFoEo8/s1600/Biwi+No+1-DvdRip-63Rip.avi_007809935.jpg"]
   }]

/*this is the description of playlist 2 containing name,artist,album,duration,filename,image and song number of the song*/
var mixtape= [ {
       'name': 'Daata ji',
       'artist': ' Nachattar Gill',
       'album': 'Single',
       'duration': '4:17',
       'fileName': 'songs/relp1.mp3',
       'image': 'relp1.jpg',
      'songNumber':'1',
      'slide': ["http://www.lyricsted.com/wp-content/uploads/2016/02/Daata-Ji-Lyrics-Ardaas-Nachhatar-Gill.jpg",
"http://s2.dmcdn.net/TjRkl/1280x720-VWg.jpg",
"https://i.ytimg.com/vi/J3VyGruoed4/maxresdefault.jpg",
"https://images-na.ssl-images-amazon.com/images/I/81LJVtNeL5L._SL1443_.jpg"]
   },
   {
       'name': 'Gobind de lal',
       'artist': ' Diljit Dosanjh',
       'album': 'Sikh 2',
       'duration': '3:37',
       'fileName': 'songs/relp2.mp3',
      'image': 'relp2.jpg',
      'songNumber':'2',

       'slide':['https://i.ytimg.com/vi/IrzjYX1yJOs/maxresdefault.jpg',
       'https://i.ytimg.com/vi/hQVk4IfQcNI/maxresdefault.jpg',
       'https://i.ytimg.com/vi/kltVimUE0t8/maxresdefault.jpg',
       'https://s2-ssl.dmcdn.net/CZJ2i/1280x720-otO.jpg']
   },
{











       'name': 'Mere saahib',
       'artist': '  Gippy Grewal ',
       'album': 'Ardaas ',
       'duration': '3:37',
       'fileName': 'songs/relp3.mp3',
       'image': 'relp3.jpg',
      'songNumber':'3',
      'slide':['https://i.ytimg.com/vi/rkWf4guM2Jg/maxresdefault.jpg',
      'https://2.bp.blogspot.com/-gahfRfrWLjg/VuAQEiNrlgI/AAAAAAAABHU/Cnpj-TjNQBQ/s1600/Mere%2BSahib.jpg',
      'http://4.bp.blogspot.com/-B6V3NX5_s-U/VrJ0QTjq7dI/AAAAAAAAAn0/oB0ed1oIHU8/s1600/ardaas%2Bgippy.jpg',
      'http://s2.dmcdn.net/U_Ynz.jpg']
   },

   {
     'name': 'Saai',
     'artist': 'Satinder Sartaj',
     'album': 'Single ',
     'duration': '2:54',
     'fileName': 'songs/relp4.mp3',
     'image': 'relp4.jpg',
    'songNumber':'4',
    'slide': ["https://i.ytimg.com/vi/vmPXCjZgbJU/maxresdefault.jpg",
 "https://i.ytimg.com/vi/UU9AkyTnrIM/maxresdefault.jpg",
 "https://media.indiatimes.in/media/content/itimes/video/2015/Nov/1/1446389604-mujhe-maaf-karna-om-sai-ram-biwi-no-1-full-song-salman-khan-karisma-kapoor-563627643f0b3_666x500.jpg",
 "https://i.ytimg.com/vi/og7LGtNjmvE/hqdefault.jpg"]
   }]
/*this is the description of playlist 3 containing name,artist,album,duration,filename,image and song number of the song*/
var English= [ {
       'name': 'King is born',
       'artist': 'Aloe Blacc',
       'album': 'We are one',
       'duration': '3:10',
       'fileName': 'songs/rele3.mp3',
       'image': 'rele3.jpg',
      'songNumber':'1',
      'slide': ["https://www.cjmmusic.com/wp-content/uploads/2014/11/2-e1416658742132.png",
"http://seacoastworship.com/uploads/54f8b215-d1ec-4700-b076-7fa52fcbf83a/A-King-is-Born_2560x1440%20(1).jpg",
"https://i.ytimg.com/vi/cSLrFVR-Hqw/maxresdefault.jpg",
"https://shimg.greatsong.net/share/BGY54/default.png"]
   },
   {
       'name': 'Overture ',
       'artist': ' Times Square Church Choir',
       'album': 'Prophecy Fulfilled',
       'duration': '3:05',
       'fileName': 'songs/rele1.mp3',
      'image': 'rele1.jpg',
      'songNumber':'2',

       'slide': ["https://i.ytimg.com/vi/0ItO9-X5Fk8/maxresdefault.jpg",
 "https://mormontabernaclechoir.org/content/dam/motab/blog/2017/02/mozart-mendelssohn-847.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
 "https://i2.wp.com/www.theaterscene.net/wp-content/uploads/2016/11/Resized-475-St.-Thomas-Boys-Choir.jpg?fit=475%2C317",
 "https://welltempered.files.wordpress.com/2017/05/madison-youth-choirs-girlchoir.jpg"]
   },
{











       'name': 'Sacrifice',
       'artist': ' Elton John ',
       'album': 'Single ',
       'duration': '5:08',
       'fileName': 'songs/rele4.mp3',
       'image': 'rele4.jpg',
      'songNumber':'3',
      'slide':['https://upload.wikimedia.org/wikipedia/en/1/15/EltonJohnSacrifice7InchSingleCover.jpg',
      'https://i.ytimg.com/vi/LiXUHZmAi3c/hqdefault.jpg',
      'https://4.bp.blogspot.com/-R3ka6q28p4s/UyLlC18hQNI/AAAAAAAARaM/BfrBrJeLzeU/w1200-h630-p-k-no-nu/elton.john.rio.jpg',
      'https://i.pinimg.com/236x/5b/55/71/5b55719550461c319563454fb3fba255--rock-quotes-music-music.jpg']
   },

   {
     'name': 'We shall overcome ',
     'artist': ' Gaurav Dasgupta ',
     'album': 'Single ',
     'duration': '3:04',
     'fileName': 'songs/rele2.mp3',
     'image': 'rele2.jpg',
    'songNumber':'4',
    'slide':['https://i.ytimg.com/vi/YhvgQMv_DOA/hqdefault.jpg',
    'https://i.ytimg.com/vi/uxFxs6drJCw/hqdefault.jpg',
    'https://i.ytimg.com/vi/mEiy_V77frk/hqdefault.jpg',
    'http://childledchaos.me.uk/wp-content/uploads/2014/03/weshallovercomeint-500x252.jpg']
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
