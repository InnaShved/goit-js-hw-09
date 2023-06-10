
// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. 
// Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною(disabled).
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopBtn.setAttribute('disabled', '');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
let intervalId = null;

startBtn.addEventListener('click', (e) => {
  if (!startBtn.hasAttribute('disabled')) {
    startBtn.setAttribute('disabled', '');
    intervalId = setInterval(() => { body.style.backgroundColor = getRandomHexColor() }, 1500);
    stopBtn.removeAttribute('disabled');
  };
  return;
});
  
stopBtn.addEventListener('click', (e) => {
  clearInterval(intervalId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled');
});