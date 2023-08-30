let timer = document.querySelector(".timer");
let continueBtn = document.querySelector(".continue");
let stopBtn = document.querySelector(".stop");
let timerBtns = document.querySelectorAll(".timer button");
let timerScreen = document.querySelector(".timer h1");
let interval;
let hours = 0;
let seconds = 0;
let minutes = 2;
let milliseconds = 0;
timerScreen.innerHTML = `0${hours}h:0${minutes}m:0${seconds}s:0${milliseconds}ms`;
timerBtns.forEach((btn) => {
  btn.onclick = () => {
    let btnType = btn.getAttribute("data-type");
    if (btnType === "start") {
      startTimer();
    } else if (btnType === "stop") {
      stopTimer();
    } else if (btnType === "reset") {
      resetTimer();
    } else if (btnType === "continue") {
      continueTimer();
    }
  };
});
function startTimer() {
  stopBtn.style = "display:flex;";
  continueBtn.style = "display:none;";
  hours = 0;
  seconds = 0;
  minutes = 2;
  milliseconds = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    milliseconds--;
    if (milliseconds < 0) {
      milliseconds = 30;
      seconds--;
    } else if (seconds < 0) {
      seconds = 59;
      minutes--;
    } else if (minutes < 0) {
      minutes = 59;
    }
    timerScreen.innerHTML = `${hours < 10 ? `0${hours}` : hours}h:${
      minutes < 10 ? `0${minutes}` : minutes
    }m:${seconds < 10 ? `0${seconds}` : seconds}s:${
      milliseconds < 10 ? `0${milliseconds}` : milliseconds
    }ms`;
    if (hours <= 0 && minutes <= 0 && seconds <= 0 && milliseconds <= 0) {
      alert("Time's up!");
      resetTimer();
    }
  }, 33);
}
function continueTimer() {
  interval = setInterval(() => {
    milliseconds--;
    if (milliseconds < 0) {
      milliseconds = 30;
      seconds--;
    } else if (seconds < 0) {
      seconds = 59;
      minutes--;
    } else if (minutes < 0) {
      minutes = 59;
      hours--;
    }
    timerScreen.innerHTML = `${hours < 10 ? `0${hours}` : hours}h:${
      minutes < 10 ? `0${minutes}` : minutes
    }m:${seconds < 10 ? `0${seconds}` : seconds}s:${
      milliseconds < 10 ? `0${milliseconds}` : milliseconds
    }ms`;
    if (hours <= 0 && minutes <= 0 && seconds <= 0 && milliseconds <= 0) {
      alert("Time's up!");
      resetTimer();
    }
  }, 33);
  continueBtn.style = "display:none;";
}
function stopTimer() {
  clearInterval(interval);
  continueBtn.style = "display:flex;";
}
function resetTimer() {
  continueBtn.style = "display:none;";
  stopBtn.style = "display:none;";
  clearInterval(interval);
  seconds = 0;
  milliseconds = 0;
  minutes = 2;
  hours = 0;
  timerScreen.innerHTML = `0${hours}h:0${minutes}m:0${seconds}s:0${milliseconds}ms`;
}
