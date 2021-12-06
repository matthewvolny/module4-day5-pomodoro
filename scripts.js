// Elements
const pomodoroAppElement = document.getElementById("pomodoro-app");
const pomodoroCounterDisplayElement = document.getElementById(
  "pomodoroCounterDisplay"
);
const pomodoroFormElement = document.getElementsByClassName("pomorodoForm")[0];
const minuteInputElement = document.getElementById("minutesInputText");
const secondInputElement = document.getElementById("secondsInputText");
const pomodoroListOfErrorsElement =
  document.getElementById("pomodoroErrorList");
const addPomodoroToListButton = document.getElementById("pomorodoForm-addBtn");
const pomodoroListElement = document.getElementById("PomodoroList");
const startOrPauseAPomodoroFromListButton = document.getElementById(
  "pomorodoForm-StartPauseBtn"
);

let minutesInputGlobal = 0;
let secondsInputGlobal = 0;

//minutes user interface - conversion to number
minuteInputElement.addEventListener("input", (e) => {
  addPomodoroToListButton.removeAttribute("disabled");
  paddedMinutes = String(minuteInputElement.value).padStart(2, "0");
  if (paddedMinutes.charAt(2) !== "") {
    paddedMinutes = paddedMinutes.slice(1);
  }
  minuteInputElement.value = paddedMinutes;
  minutesInputGlobal = paddedMinutes;
});

//seconds user interface - conversion to number
secondInputElement.addEventListener("input", (e) => {
  addPomodoroToListButton.removeAttribute("disabled");
  paddedSeconds = String(secondInputElement.value).padStart(2, "0");
  if (paddedSeconds.charAt(2) !== "") {
    paddedSeconds = paddedSeconds.slice(1);
  }
  secondInputElement.value = paddedSeconds;
  secondsInputGlobal = paddedSeconds;
});

//add button - add input time to countdown timer display
addPomodoroToListButton.addEventListener("click", (e) => {
  startOrPauseAPomodoroFromListButton.removeAttribute("disabled");
  pomodoroCounterDisplayElement.innerHTML = `${String(
    minuteInputElement.value
  ).padStart(2, "0")} : ${String(secondInputElement.value).padStart(2, "0")}`;
});

//clock function
const changeImages = () => {
  if (secondsInputGlobal > 1 && minutesInputGlobal > 0) {
    secondsInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${String(
      minutesInputGlobal
    ).padStart(2, "0")} : ${String(secondsInputGlobal).padStart(2, "0")}`;
    console.log("1");
  } else if (secondsInputGlobal === 1 && minutesInputGlobal > 0) {
    secondsInputGlobal = 60;
    minutesInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${String(
      minutesInputGlobal
    ).padStart(2, "0")} : ${String(secondsInputGlobal).padStart(2, "0")}`;
  } else if (secondsInputGlobal > 0 && minutesInputGlobal == 0) {
    secondsInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${String(
      minutesInputGlobal
    ).padStart(2, "0")} : ${String(secondsInputGlobal).padStart(2, "0")}`;
  } else if (secondsInputGlobal == 0 && minutesInputGlobal > 0) {
    secondsInputGlobal = 60;
    minutesInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${String(
      minutesInputGlobal
    ).padStart(2, "0")} : ${String(secondsInputGlobal).padStart(2, "0")}`;
  } else {
    pomodoroListOfErrorsElement.innerHTML = "TIME'S UP!";
    pomodoroCounterDisplayElement.innerHTML = `${String(
      minutesInputGlobal
    ).padStart(2, "0")} : ${String(secondsInputGlobal).padStart(2, "0")}`;
    clearInterval(intervalTimer);
    console.log("will log once if interval stopped");
  }
};

//start button - calls clock function every second
startOrPauseAPomodoroFromListButton.addEventListener("click", (e) => {
  let intervalTimer = setInterval(() => {
    changeImages();
  }, 1000);
});
