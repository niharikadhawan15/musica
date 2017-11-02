// Virtual Piano JS . . . .

var PianoNoteWhiteKey=["C","D","E","F","G","A","B"];
var PianoNoteBlackKey=["C#","D#","F#","G#","A#"];

 function myPianoWhiteKey(filename,position,octave)
{   
//console.log(filename);
var Piano= $(filename);
Piano.on('click',function(){
    //console.log(i);    
     var piano = Synth.createInstrument('piano');
         piano.play(PianoNoteWhiteKey[position],octave,2);
    setTimeout(function(){ $(filename).addClass("animated tada");}, 30);
    setTimeout(function(){ $(filename).removeClass("animated tada");}, 90);         
     });
}

function myPianoBlackKey(filename,position,octave)
{
    var Piano=$(filename);
    Piano.click(function(){
        var piano = Synth.createInstrument('piano');
        piano.play(PianoNoteBlackKey[position],octave);
        setTimeout(function(){ $(filename).addClass("animated tada");}, 30);
        setTimeout(function(){ $(filename).removeClass("animated tada");}, 90);         
    });
}



window.onload = function() {
   for(var i =0; i < PianoNoteWhiteKey.length;i++)                     // for first 7 white keys with 4th octave 
   {                                  
   var name = '#WK' + i;  
   myPianoWhiteKey(name,i,4)
      }
   for(var i=0; i < PianoNoteWhiteKey.length;i++)                      // for 8-14 whiite keys with 5th octave
   {
    var name="#WK"+ (i+7);
    myPianoWhiteKey(name,i,5)
   }
   $('button#WK14').click(function(){                                    // for lst white key with 6th octave
    var piano = Synth.createInstrument('piano');
    piano.play('C', 6, 2);
    setTimeout(function(){ $('button#WK14').addClass("animated tada");}, 30);
    setTimeout(function(){ $('button#WK14').removeClass("animated tada");}, 90);
    });
   for(var i=0; i < PianoNoteBlackKey.length; i++)                      // for first five white keys with 4th octave
   {
    var name="#BK"+i;
    myPianoBlackKey(name,i,4)
   }
   for(var i=0; i < PianoNoteBlackKey.length; i++)                      // for later 5 black keys with 5th octve
   {
    var name="#BK"+(i+5);
    myPianoBlackKey(name,i,5)
   }
   for (var i=0; i < PianoKeyPressSound.length ; i++){
    myPianoKeyPressed(PianoKeyPressSound[i]);
   }
}














function myPianoKeyPressed(keyObj){
    var filename = keyObj.id;
    $("body").keypress(function(event){
    if(event.keyCode == keyObj.keyCodeCapital || event.keyCode == keyObj.keyCodeSmall){
        $(filename).click();
    }
});
}

var PianoKeyPressSound=[{
    'id': 'button#WK0',
    'keyCodeCapital':'65',
    'keyCodeSmall':'97'
},
{
    'id': 'button#WK1',
    'keyCodeCapital':'83',
    'keyCodeSmall':'115'
},
{
    'id': 'button#WK2',
    'keyCodeCapital':'68',
    'keyCodeSmall':'100'
},
{
    'id': 'button#WK3',
    'keyCodeCapital':'70',
    'keyCodeSmall':'102'
},
{
    'id': 'button#WK4',
    'keyCodeCapital':'71',
    'keyCodeSmall':'103'
},
{
    'id': 'button#WK5',
    'keyCodeCapital':'72',
    'keyCodeSmall':'104'
},
{
    'id': 'button#WK6',
    'keyCodeCapital':'74',
    'keyCodeSmall':'106'
},
{
    'id':'button#WK7',
    'keyCodeCapital':'75',
    'keyCodeSmall':'107'
},
{
    'id':'button#WK8',
    'keyCodeCapital':'76',
    'keyCodeSmall':'108'
},
{
    'id':'button#WK9',
    'keyCodeCapital':'90',
    'keyCodeSmall':'122'
},
{
    'id':'button#WK10',
    'keyCodeCapital':'88',
    'keyCodeSmall':'120'
},
{
    'id':'button#WK11',
    'keyCodeCapital':'67',
    'keyCodeSmall':'99'
},
{
    'id':'button#WK12',
    'keyCodeCapital':'86',
    'keyCodeSmall':'118'
},
{
    'id':'button#WK13',
    'keyCodeCapital':'66',
    'keyCodeSmall':'98'
},
{
    'id':'button#WK14',
    'keyCodeCapital':'78',
    'keyCodeSmall':'110'
},
{
    'id':'button#BK0',
    'keyCodeCapital':'81',
    'keyCodeSmall':'113'
},
{
    'id':'button#BK1',
    'keyCodeCapital':'87',
    'keyCodeSmall':'119'
},
{
    'id':'button#BK2',
    'keyCodeCapital':'69',
    'keyCodeSmall':'101'
},
{
    'id':'button#BK3',
    'keyCodeCapital':'82',
    'keyCodeSmall':'114'
},
{
    'id':'button#BK4',
    'keyCodeCapital':'84',
    'keyCodeSmall':'116'
},
{
    'id':'button#BK5',
    'keyCodeCapital':'89',
    'keyCodeSmall':'121'
},
{
    'id':'button#BK6',
    'keyCodeCapital':'85',
    'keyCodeSmall':'117'
},
{
    'id':'button#BK7',
    'keyCodeCapital':'73',
    'keyCodeSmall':'105'
},
{
    'id':'button#BK8',
    'keyCodeCapital':'79',
    'keyCodeSmall':'111'
},
{
    'id':'button#BK9',
    'keyCodeCapital':'80',
    'keyCodeSmall':'112'
}];

