let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;
let lapCounter = 1;
let savedTime = 0;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapsContainer = document.getElementById('laps');

startStopButton.addEventListener('click', startStopwatch);
resetButton.addEventListener('click', resetStopwatch);
lapButton.addEventListener('click', addLap);

function startStopwatch() {
    if (!running) {
        startTime = new Date().getTime() - savedTime;
        tInterval = setInterval(updateDisplay, 1);
        running = true;
        startStopButton.innerHTML = "Pause";
    } else {
        clearInterval(tInterval);
        savedTime = new Date().getTime() - startTime;
        running = false;
        startStopButton.innerHTML = "Start";
    }
}

function resetStopwatch() {
    clearInterval(tInterval);
    running = false;
    savedTime = 0;
    display.innerHTML = "00:00:00.000";
    lapsContainer.innerHTML = '';
    lapCounter = 1;
    startStopButton.innerHTML = "Start";
}

function updateDisplay() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milliseconds = Math.floor((difference % 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 100) ? "0" + milliseconds : milliseconds;
    milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function addLap() {
    if (running) {
        const lapTime = document.createElement('div');
        lapTime.innerText = `Lap ${lapCounter}: ${display.innerHTML}`;
        lapsContainer.appendChild(lapTime);
        lapCounter++;
    }
}
