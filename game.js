let current = 0;

const music = new Audio();

function startGame(){

document.getElementById("warning-screen").style.display="none";

document.getElementById("game-screen").style.display="block";

loadScene();

}

function loadScene(){

let scene = story[current];

const video = document.getElementById("cutscene-video");

document.getElementById("speaker").innerText = scene.speaker;

document.getElementById("text").innerText = scene.text;

document.getElementById("background").src = scene.bg;

/* MUSIC */

if(scene.music){

music.src = scene.music;

music.volume = 0.7;

music.play();

}

/* VIDEO */

if(scene.video){

video.src = scene.video;

video.style.display = "block";

video.play();

}else{

video.pause();

video.style.display = "none";

}

}

/* NEXT SCENE */

function nextScene(){

current++;

if(current >= story.length){

alert("END OF DAY 1");

return;

}

loadScene();

}
