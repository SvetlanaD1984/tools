import  { timer } from './timer'
import calcDate from './datecalc'

function switcher(choose, datecalc, timer) {
    if (confirm(choose)) datecalc()
    else timer();
  }

function showCalc() {
  let url = document.getElementById('datecalc');
  document.location.href = url.value;
}

function showTimer() {
  let url = document.getElementById('timer');
  document.location.href = url.value;
}

switcher("Выберите раздел", showCalc, showTimer);


elem.addEventListener("click", calcDate); 
elem.addEventListener("click", timer);

