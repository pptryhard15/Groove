console.log("Welcome to Spotify");
 // Initialize the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItmes = Array.from(document.getElementsByClassName('songItem')); 

let songs = [
    {songName: "Khuda Jaane", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "This City", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Kabhi Jo Badal Barse", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "It Girl", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Chahun Main Ya Na", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "I Like Me Better", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Starboy", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Party Monster", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Apna Bana Le", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
]

 // audioElement.play();
 // Handle play/pause click
 songItmes.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 })

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
 })

 // Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
 })

 myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
 })

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
        Element.classList.add('fa-play-circle');
        Element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element)=>{
    Element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>8){
        songIndex = 1;
    }
    else{
    songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
    songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

