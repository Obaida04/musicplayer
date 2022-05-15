let songIndex =0;
let audioElement = new Audio('1.mpeg');
let masterPlay= document.getElementById('masterPlay');
let progressBar= document.getElementById('progressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs =[
   {songName: "Dhokha", filePath:"songs/1.mpeg",coverPath:"cover/1.jpg"},
   {songName: " Pyar Karte ho na", filePath:"songs/2.mpeg",coverPath:"cover/2.jpg"},
   {songName: "Mere zindagi hai tu", filePath:"songs/3.mpeg",coverPath:"cover/3.jpg"},
   {songName: "Tu kya hua juda", filePath:"songs/4.mpeg",coverPath:"cover/4.jpg"},
   {songName: "fir mulaqat hoge", filePath:"songs/5.mpeg",coverPath:"cover/5.jpg"},
   {songName: "khushi jab bhe tere", filePath:"songs/6.mpeg",coverPath:"cover/6.jpg"},
   {songName: "Raataan Lambiyan", filePath:"songs/7.mpeg",coverPath:"cover/7.jpg"},
   {songName: " Barsaat ki Dhun", filePath:"songs/8.mpeg",coverPath:"cover/8.jpg"},
   {songName: "Zindagi kuch to bata", filePath:"songs/9.mpeg",coverPath:"cover/9.jpg"},
   {songName: "Bedardi se pyar", filePath:"songs/10.mpeg",coverPath:"cover/10.jpg"},
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})
//audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change',()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mpeg`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mpeg`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

