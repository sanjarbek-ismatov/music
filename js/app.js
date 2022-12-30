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
const title = document.querySelector('#title')
let index = 2
audioTag.src = songs[index].src
title.textContent = `${songs[index].name} - ${songs[index].author}`
function playMusic(){
    if(audioTag.paused){
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
    setInterval(() => {
        const percent = audioTag.duration
        console.log(percent / audioTag.currentTime)
    }, 1000)
   
}
function changeEvent(){
    const percent = audioTag.duration / 100
    audioTag.currentTime = range.value * percent
}

function nextMusic(){
    range.value = 0
    if(index == songs.length - 1){
        index = 0
    }
    else{
        index++
    }
    title.textContent = `${songs[index].name} - ${songs[index].author}`
    audioTag.src = songs[index].src
    playMusic()
}
function prevMusic(){
    range.value = 0
     if(index == 0){
        index = songs.length - 1
    }
    else{
        index--
    }
    title.textContent = `${songs[index].name} - ${songs[index].author}`
    audioTag.src = songs[index].src
    playMusic()
}
next.addEventListener('click', nextMusic)
prev.addEventListener('click', prevMusic)
pause.addEventListener('click', playMusic)