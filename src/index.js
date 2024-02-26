const express = require('express');
const app = express();
const port = 3000;

let secondsElapsed = 0;
let timerId = null;
let isPaused = false;

function createResponseData(message) {
    return {
        message: message,
        secondsElapsed: secondsElapsed,
        isPaused: isPaused,
        timerId: timerId ? "Interval ID Present" : "No Interval ID"
    };
}

app.get('/', (req, res) => {
    res.send(createResponseData("Welcome to the stopwatch server!"));
});

app.get('/start', (req, res) => {
    console.log(`Attempting to start: TimerID=${timerId}, isPaused=${isPaused}`);
    if (timerId === null && !isPaused) {
        timerId = setInterval(() => {
            secondsElapsed++;
        }, 1000);
        isPaused = false;
        res.send(createResponseData("Stopwatch started!"));
    } else {
        res.send(createResponseData("The stopwatch is already running or paused."));
    }
});

app.get('/pause', (req, res) => {
    console.log(`Attempting to pause: TimerID=${timerId}, isPaused=${isPaused}`);
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
        isPaused = true;
        res.send(createResponseData("Stopwatch paused."));
    } else {
        res.send(createResponseData("The stopwatch is not running."));
    }
});

app.get('/continue', (req, res) => {
    console.log(`Attempting to continue: TimerID=${timerId}, isPaused=${isPaused}`);
    if (timerId === null && isPaused) {
        timerId = setInterval(() => {
            secondsElapsed++;
        }, 1000);
        isPaused = false;
        res.send(createResponseData("Stopwatch continued."));
    } else {
        res.send(createResponseData("The stopwatch is not paused."));
    }
});

app.get('/reset', (req, res) => {
    console.log(`Resetting: TimerID=${timerId}, isPaused=${isPaused}`);
    clearInterval(timerId); // It's safe to call clearInterval even if timerId is null
    timerId = null;
    secondsElapsed = 0;
    isPaused = false;
    res.send(createResponseData("Stopwatch reset."));
});

app.get('/stopwatch', (req, res) => {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    res.send(createResponseData(`Time: ${minutes} minutes and ${seconds} seconds`));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});