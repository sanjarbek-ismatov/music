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
/**
 * main function working after fetching data
 * @param {{title: string; author: string; audio: string}[]} songs
 */
function main(songs) {
  /**
   * returns src for audio tag
   * @param {number} index
   * @returns {string}
   */
  function songSrc(index) {
    return `http://localhost:4000/files/audio/${songs[index].audio}`;
  }
  /**
   *
   * @param {number} index
   * @returns {string} title of page
   */
  function getTitle(index) {
    return `${songs[index].title} - ${songs[index].author}`;
  }
  let index = localStorage.index || 0;
  audioTag.src = songSrc(index);
  title.textContent = getTitle(index);

  audioTag.onloadedmetadata = () => {
    const toMinute = Math.floor(audioTag.duration / 60);
    const toSecond = Math.floor(audioTag.duration - toMinute * 60);
    fullTime.textContent = `${toMinute}:${
      toSecond > 9 ? toSecond : "0" + toSecond
    }`;
  };
  function playMusic() {
    localStorage.setItem("index", index);
    document.title = getTitle(index);
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
    title.textContent = getTitle(index);
    audioTag.src = songSrc(index);
    playMusic();
  }
  function prevMusic() {
    range.value = 0;
    if (index == 0) {
      index = songs.length - 1;
    } else {
      index--;
    }
    title.textContent = getTitle(index);
    audioTag.src = songSrc(index);
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
