
import { Howl } from '../libs/howler.js';

  let sound = new Howl({
   src: ['song.mp3'],
  });
 

export function start() {
	window.timerId = window.setInterval(timer, 1000);
}

export function stop() {
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
}