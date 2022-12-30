const songs = [
    {name: "Колыбельная", author: "Jah khalib", src: './audios/audio-1.mp3'},
    {name: "Let Me Down Slowly", author: "Alec Bejamin", src: './audios/audio-2.mp3'},
    {name: "Берега", author: "Timran & Zell & Batrai", src: './audios/audio-3.mp3'},
    {name: "Фея", author: "SHAMI", src: './audios/audio-4.mp3'},
]
const audioTag = document.querySelector('#audio')
const next = document.querySelector('#next')
const pause = document.querySelector('#pause')
const prev = document.querySelector('#prev')
const range = document.querySelector('#range')
const img = document.querySelector('#img')
let index = 0
function playMusic(){
    if(audioTag.paused){
        audioTag.src = songs[index].src
        audioTag.play()
        img.classList.add('playing')
        pause.classList.add('fa-circle-pause')
        pause.classList.remove('fa-circle-play')
    }
    else{
        audioTag.pause()
        img.classList.remove('playing')
        pause.classList.remove('fa-circle-pause')
        pause.classList.add('fa-circle-play')
    }
   
}
function changeEvent(){
    const percent = audioTag.duration / 100
    audioTag.currentTime = range.value * percent
}
pause.addEventListener('click', playMusic)