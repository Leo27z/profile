// music button

const repIcon = document.getElementById("repIcon");
function handleRepeat() {
  if (music.loop) {
    music.loop = false;
    repIcon.classList.replace("fa-sync", "fa-repeat"); // Ubah ikon kembali ke repeat
    repIcon.style.color = ""; // Kembalikan warna ke default
  } else {
    music.loop = true;
    repIcon.classList.replace("fa-repeat", "fa-sync"); // Ubah ikon menjadi aktif
    repIcon.style.color = "black"; // Ubah warna menjadi hitam
  }
}

const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  playBtn = document.getElementById("play"),
  background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
  {
    path: "assets/music/1.mp3",
    displayName: "Moon Halo",
    cover: "assets/music/1.jpg",
    artist: "Cover by Rainych Ran",
  },
  {
    path: "assets/music/2.mp3",
    displayName: "Hope's The Thing With Feathers",
    cover: "assets/music/2.jpg",
    artist: "Cover by Hans Rattlexnake",
  },
  {
    path: "assets/music/3.mp3",
    displayName: "Die With a Smile",
    cover: "assets/music/3.jpg",
    artist: "Bruno Mars and Lady Gaga",
  },
  {
    path: "assets/music/4.mp3",
    displayName: "Bye Bye Bye Opening Scene",
    cover: "assets/music/4.jpg",
    artist: "DEADPOOL & WOLVERINE ",
  },
];

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace("fa-play", "fa-pause");
  // Set button hover title
  playBtn.setAttribute("title", "Pause");
  music.play();
}

function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace("fa-pause", "fa-play");
  // Set button hover title
  playBtn.setAttribute("title", "Play");
  music.pause();
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);

// Ambil referensi elemen tombol play/pause
const playButton = document.getElementById("play");

// Fungsi untuk toggle play/pause
function togglePlayPause() {
  if (playButton.classList.contains("fa-play")) {
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
    playButton.title = "Pause";
    // Tambahkan logika untuk memulai musik
    console.log("Music played");
  } else {
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
    playButton.title = "Play";
    // Tambahkan logika untuk menghentikan musik
    console.log("Music paused");
  }
}
// var repIcon = document.querySelector(".repeat");
