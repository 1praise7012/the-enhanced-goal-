let current = 0;

const music = new Audio();

function startGame(){

document.getElementById("warning-screen").style.display="none";

document.getElementById("game-screen").style.display="block";

loadScene();

}

function loadScene(){

let scene = story[current];

document.getElementById("speaker").innerText = scene.speaker;

document.getElementById("text").innerText = scene.text;

document.getElementById("background").src = scene.bg;

if(scene.music){

music.src = scene.music;

music.play();

}

}

function nextScene(){

current++;

if(current >= story.length){

alert("END OF DAY 1");

return;

}

loadScene();

}
