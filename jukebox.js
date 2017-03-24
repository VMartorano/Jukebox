var play=document.querySelector("#play")
var stop=document.querySelector("#stop")
var pause=document.querySelector("#pause")
var previous=document.querySelector("#previous")
var skip=document.querySelector("#skip")
var music=document.querySelector("#music")
var i=0;

function Jukebox() {
 this.songs = []
}

Jukebox.prototype.addSong = function(track){
 this.songs.push(track);
}

var jukebox = new Jukebox()
jukebox.addSong('04 Peace Frog.mp3')
jukebox.addSong('1-05 Excuse Me.mp3')
jukebox.addSong('Hold You Down (feat. Chris Brown & Jeremih) (Arman Cekin Remix).mp3')
jukebox.addSong('Thank You.mp3')
jukebox.addSong('06 Lemonade.m4a')
jukebox.addSong('Good For You (feat. A$AP Rocky) (NEBBRA Remix).mp3')

Jukebox.prototype.play = function(){
  music.src = jukebox.songs[i]
  music.play()
}

Jukebox.prototype.pause = function(){
 music.pause();
}

Jukebox.prototype.stop = function(){
 music.stop();
}

Jukebox.prototype.skip = function() {
  i++
  if(i < jukebox.songs.length){
    music.pause()
    music.src=jukebox.songs[i]
    music.play()
  } else {
    i = 0;
    music.pause()
    music.src=jukebox.songs[i]
    music.play()
  }
}

Jukebox.prototype.previous = function(){
 i--
 if (i >= 0 ){
   music.pause()
   music.src=jukebox.songs[i]
   music.play()
 } else {
   i = jukebox.songs.length -1;
   music.pause()
   music.src=jukebox.songs[i]
   music.play()
 }
}

play.addEventListener("click", function(event){
 event.preventDefault();
 jukebox.play()
})

stop.addEventListener("click", function(event){
 event.preventDefault();
 jukebox.stop()
})

pause.addEventListener("click", function(event){
 event.preventDefault();
 jukebox.pause()
})

skip.addEventListener("click", function(event){
 event.preventDefault();
 jukebox.skip()
})

previous.addEventListener("click", function(event){
 event.preventDefault();
 jukebox.previous()
})
