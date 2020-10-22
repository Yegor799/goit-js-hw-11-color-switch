const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');
const body = document.querySelector('body');

start.addEventListener('click', onStartClick);
stop.addEventListener('click', onStopClick);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};    
    
    

function onStartClick() {
    start.disabled = true;
    timerId = setInterval(() => {
    return body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];   
   }, 1000);
}

function onStopClick() {
    clearInterval(timerId);
    start.disabled = false;
}




