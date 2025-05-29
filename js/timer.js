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
  } else if(parseInt(value) < 10) {
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
  } else if(parseInt(value) < 10) {
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
  } else if(parseInt(value) < 10) {
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

  timeoutId = setTimeout(() => {
    // 1초마다 inputSec 1씩 차감, 
    /*
      1초마다 inputSec 1씩 차감
      inputSec이 0인 경우 inputMin, inputHrs 0보다 큰 경우 한해 inputMin부터 1씩 차감
    */
  }, 1000);
});

btnPause.addEventListener('click', () => {
  clearTimeout(timeoutId);
});

btnReset.addEventListener('click', () => {
  inputHrs.value = '00';
  inputMin.value = '00';
  inputSec.value = '00';
  disabledBtn();
  btnStart.style.display = 'block';
  btnPause.style.display = 'none';
});