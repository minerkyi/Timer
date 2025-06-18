// input 요소
const inputHrs = document.querySelector('.box-hrs input');
const inputMin = document.querySelector('.box-min input');
const inputSec = document.querySelector('.box-sec input');

// button 요소
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnReset = document.querySelector('.btn-reset');

inputHrs.addEventListener('blur', (e) => {
  const value = e.target.value.trim();

  if(!/\d/.test(value)) {
    e.target.value = '00';
  } else if(parseInt(value) > 23) {
    e.target.value = '23';
  } else if(value.length < 2) {
    e.target.value = '0' + value;
  }

  disabledBtn();
});

inputMin.addEventListener('blur', (e) => {
  const value = e.target.value.trim();

  if(!/\d/.test(value)) {
    e.target.value = '00';
  } else if(parseInt(value) > 59) {
    e.target.value = '59';
  } else if(value.length < 2) {
    e.target.value = '0' + value;
  }

  disabledBtn();
});

inputSec.addEventListener('blur', (e) => {
  const value = e.target.value.trim();

  if(!/\d/.test(value)) {
    e.target.value = '00';
  } else if(parseInt(value) > 59) {
    e.target.value = '59';
  } else if(value.length < 2) {
    e.target.value = '0' + value;
  }

  disabledBtn();
});

function disabledBtn() {
  if(inputHrs.value === '00' && inputMin.value === '00' && inputSec.value === '00') {
    btnStart.setAttribute('disabled', '');
    btnReset.setAttribute('disabled', '');
  } else {
    btnStart.removeAttribute('disabled');
    btnReset.removeAttribute('disabled');
  }
}

let timeoutId;
btnStart.addEventListener('click', () => {
  btnStart.style.display = 'none';
  btnPause.style.display = 'block';

  timeoutId = setInterval(() => {
    const hrs = parseInt(inputHrs.value);
    const min = parseInt(inputMin.value);
    const sec = parseInt(inputSec.value);
    let totalSec = 0;
    totalSec = (hrs * 60 * 60) + (min * 60) + sec;
    totalSec += -1;

    console.log(hrs, min, sec, totalSec);

    if(totalSec === -1) {
      clearInterval(timeoutId);
      inputHrs.value = '00';
      inputMin.value = '00';
      inputSec.value = '00';
      disabledBtn();
      btnStart.style.display = 'block';
      btnPause.style.display = 'none';
      alert('종료');
    } else {
      const hours = parseInt(totalSec / 3600);
      const minute = parseInt((totalSec % 3600) / 60);
      const second = parseInt((totalSec % 3600) % 60);

      console.log(hours, minute, second);

      inputHrs.value = hours < 10 ? '0' + hours : '' + hours;
      inputMin.value = minute < 10 ? '0' + minute : '' + minute;
      inputSec.value = second < 10 ? '0' + second : '' + second;
    }
  }, 1000);
});

btnPause.addEventListener('click', () => {
  clearInterval(timeoutId);
  btnStart.style.display = 'block';
  btnPause.style.display = 'none';
});

btnReset.addEventListener('click', () => {
  clearInterval(timeoutId);
  inputHrs.value = '00';
  inputMin.value = '00';
  inputSec.value = '00';
  disabledBtn();
  btnStart.style.display = 'block';
  btnPause.style.display = 'none';
});