import { Howl } from './howler.js';

window.onload = function() {
  let sound = new Howl({
   src: ['./audio/song.mp3'],
  });
  }

function start() {
	window.timerId = window.setInterval(timer, 1000);
}

function stop() {
	window.clearInterval(window.timerId);
}


export function timer() {
	let elem = document.getElementById('meaning');
  
  if(elem <= 0) {
    alert("Время закончилось");
    sound.play(); 
    
  } else {
    elem.value = parseInt(elem.value)-1;
  }


 