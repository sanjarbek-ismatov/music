// const songs = [
//   { name: "Колыбельная", author: "Jah khalib", src: "./audios/audio-1.mp3" },
//   {
//     name: "Let Me Down Slowly",
//     author: "Alec Bejamin",
//     src: "./audios/audio-2.mp3",
//   },
//   {
//     name: "Берега",
//     author: "Timran & Zell & Batrai",
//     src: "./audios/audio-3.mp3",
//   },
//   { name: "Фея", author: "SHAMI", src: "./audios/audio-4.mp3" },
//   {
//     name: "Ты Cо Мной",
//     author: "Lina Lee feat Ваня Дмитриенко",
//     src: "./audios/audio-5.mp3",
//   },
//   {
//     name: "Arcade",
//     author: "Duncan Laurence feat Fletcher",
//     src: "./audios/audio-6.mp3",
//   },
//   {
//     name: "No lie",
//     author: "Sean Paul & Dua Lipa",
//     src: "./audios/audio-7.mp3",
//   },
// ];
const audioTag = document.querySelector("#audio");
const next = document.querySelector("#next");
const pause = document.querySelector("#pause");
const prev = document.querySelector("#prev");
const playPause = document.querySelector("#playPause");
const range = document.querySelector("#range");
const img = document.querySelector("#img");
const title = document.querySelector("#title");
const currentTime = document.querySelector("#currentTime");
const fullTime = document.querySelector("#fullTime");
const volume = document.querySelector("#volume");
const volumePercent = document.querySelector("#volumePercent");
fetch("http://localhost:4000/files")
  .then((res) => res.json())
  .then((data) => main(data));
function main(songs) {
  let index = localStorage.index || 0;
  audioTag.src = `http://localhost:4000/files/audio/${songs[index].audio}`;
  title.textContent = `${songs[index].title} - ${songs[index].author}`;

  audioTag.onloadedmetadata = () => {
    const toMinute = Math.floor(audioTag.duration / 60);
    const toSecond = Math.floor(audioTag.duration - toMinute * 60);
    fullTime.textContent = `${toMinute}:${
      toSecond > 9 ? toSecond : "0" + toSecond
    }`;
  };
  function playMusic() {
    localStorage.setItem("index", index);
    document.title = `${songs[index].title} - ${songs[index].author}`;
    if (audioTag.paused) {
      audioTag.play();
      img.classList.add("playing");
      pause.classList.add("fa-pause");
      pause.classList.remove("fa-play");
      setInterval(() => {
        const percent = (audioTag.currentTime / audioTag.duration) * 100;
        range.value = percent;
        const toMinute = Math.floor(audioTag.currentTime / 60);
        const toSecond = Math.floor(audioTag.currentTime - toMinute * 60);
        currentTime.textContent = `${toMinute}:${
          toSecond > 9 ? toSecond : "0" + toSecond
        }`;
        if (audioTag.ended) {
          nextMusic();
        }
      }, 500);
    } else {
      audioTag.pause();
      img.classList.remove("playing");
      pause.classList.remove("fa-pause");
      pause.classList.add("fa-play");
    }
  }

  function nextMusic() {
    range.value = 0;
    if (index == songs.length - 1) {
      index = 0;
    } else {
      index++;
    }
    title.textContent = `${songs[index].title} - ${songs[index].author}`;
    audioTag.src = `http://localhost:4000/files/audio/${songs[index].audio}`;
    playMusic();
  }
  function prevMusic() {
    range.value = 0;
    if (index == 0) {
      index = songs.length - 1;
    } else {
      index--;
    }
    title.textContent = `${songs[index].title} - ${songs[index].author}`;
    audioTag.src = `http://localhost:4000/files/audio/${songs[index].audio}`;
    playMusic();
  }
  next.addEventListener("click", nextMusic);
  prev.addEventListener("click", prevMusic);
  playPause.addEventListener("click", playMusic);
}
function changeEvent() {
  const percent = audioTag.duration / 100;
  audioTag.currentTime = range.value * percent;
}
function changeVolume() {
  audioTag.volume = +volume.value / 100;
  volumePercent.textContent = `Ovoz: ${volume.value}%`;
}
