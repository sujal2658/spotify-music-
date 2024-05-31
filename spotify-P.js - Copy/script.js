console.log("hey i am back");

//initialize the variables
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBary");

let songs = [
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "Audio/1.mp3",
    coverPath: "covers/1.jpg",
  },
];

//masterplay EventListener
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
  } else {
    audioElement.pause();
  }
});

//eventlishoner
// myProgressBar.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
// });
