console.log("Welcome to Spotify");
//Initialize the Variables
let songIndex=0;
let audioElement=new Audio("SpotifyCloneProject/songs/1.mp3");
let masterPlay=document.getElementById("masterPlay");
let previous=document.getElementById("previous");
let next=document.getElementById("next");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterSongName=document.getElementById("masterSongName");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let count0=0;
let count1=0;
let count2=0;
let count3=0;
let count4=0;
let count5=0;
let count6=0;
let count7=0;
let count8=0;
let count9=0;
let songs=[
    {songName:"Warriyo - Mortals [NCS Release]",filePath:"spotifyCloneProject/songs/1.mp3",coverPath:"spotifyCloneProject/covers/1.jpg"},
    {songName:"Cielo - Huma-Huma",filePath:"spotifyCloneProject/songs/2.mp3",coverPath:"spotifyCloneProject/covers/2.jpg"},
    {songName:"DEAF KEV - Invincible [NCS Release]-320k",filePath:"spotifyCloneProject/songs/3.mp3",coverPath:"spotifyCloneProject/covers/3.jpg"},
    {songName:"Different Heaven & EH!DE - My Heart [NCS Release]",filePath:"spotifyCloneProject/songs/4.mp3",coverPath:"spotifyCloneProject/covers/4.jpg"},
    {songName:"Janji-Heroes-Tonight-feat-Johnning-NCS-Release",filePath:"spotifyCloneProject/songs/5.mp3",coverPath:"spotifyCloneProject/covers/5.jpg"},
    {songName:"Rabba - Salam-e-Ishq",filePath:"spotifyCloneProject/songs/6.mp3",coverPath:"spotifyCloneProject/covers/6.jpg"},
    {songName:"Sakhiyaan - Salam-e-Ishq",filePath:"spotifyCloneProject/songs/7.mp3",coverPath:"spotifyCloneProject/covers/7.jpg"},
    {songName:"Bhula Dena - Salam-e-Ishq",filePath:"spotifyCloneProject/songs/8.mp3",coverPath:"spotifyCloneProject/covers/8.jpg"},
    {songName:"Tumhari Kasam - Salam-e-Ishq",filePath:"spotifyCloneProject/songs/9.mp3",coverPath:"spotifyCloneProject/covers/9.jpg"},
    {songName:"Na Jaana - Salam-e-Ishq",filePath:"spotifyCloneProject/songs/10.mp3",coverPath:"spotifyCloneProject/covers/10.jpg"}
]
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
//Handle play/pause click
masterPlay.addEventListener("click",playPause);
function playPause(){
    if (audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        document.getElementById(String(songIndex)).classList.remove("fa-play-circle");
        document.getElementById(String(songIndex)).classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        document.getElementById(String(songIndex)).classList.remove("fa-pause-circle");
        document.getElementById(String(songIndex)).classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
}
//listen to Events
audioElement.addEventListener("timeupdate",()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
audioElement.addEventListener("ended",()=>{
    document.getElementById(String(songIndex)).classList.remove("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.add("fa-play-circle");
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`spotifyCloneProject/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    //audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.remove("fa-play-circle");
    document.getElementById(String(songIndex)).classList.add("fa-pause-circle");
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        if(parseInt(e.target.id)!=songIndex){
            songIndex = parseInt(e.target.id);
            makeAllPlays();
            audioElement.src = `spotifyCloneProject/songs/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;  
        }
        //audioElement.currentTime = 0;
        
        console.log(audioElement.currentTime)
        if(/*e.target.classList.value.indexOf("fa-play-circle")!=-1*/audioElement.paused || audioElement.currentTime<=0){
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else{
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        }
       
        
    })
})
document.getElementById("next").addEventListener("click",()=>{
    document.getElementById(String(songIndex)).classList.remove("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.add("fa-play-circle");
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`spotifyCloneProject/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    //audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.remove("fa-play-circle");
    document.getElementById(String(songIndex)).classList.add("fa-pause-circle");
})
document.getElementById("previous").addEventListener("click",()=>{
    document.getElementById(String(songIndex)).classList.remove("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.add("fa-play-circle");
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`spotifyCloneProject/songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    //audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    document.getElementById(String(songIndex)).classList.remove("fa-play-circle");
    document.getElementById(String(songIndex)).classList.add("fa-pause-circle");
})
