// Elements
const pomodoroAppElement = document.getElementById("pomodoro-app");
const pomodoroCounterDisplayElement = document.getElementById(
  "pomodoroCounterDisplay"
);
const pomodoroFormElement = document.getElementsByClassName("pomorodoForm")[0];
const minuteInputElement = document.getElementById("minutesInputText");
const secondInputElement = document.getElementById("secondsInputText");
//pomodoroErrorList
const pomodoroListOfErrorsElement =
  document.getElementById("pomodoroErrorList");
const addPomodoroToListButton = document.getElementById("pomorodoForm-addBtn");
const pomodoroListElement = document.getElementById("PomodoroList");
const startOrPauseAPomodoroFromListButton = document.getElementById(
  "pomorodoForm-StartPauseBtn"
);

let minutesInputGlobal;
let secondsInputGlobal;

minuteInputElement.addEventListener("input", (e) => {
  addPomodoroToListButton.removeAttribute("disabled");
  paddedMinutes = String(minuteInputElement.value).padStart(2, "0");
  minuteInputElement.value = paddedMinutes;
  let minutesInput = Number(minuteInputElement.value);
  minutesInputGlobal = minutesInput;
});

secondInputElement.addEventListener("input", (e) => {
  addPomodoroToListButton.removeAttribute("disabled");
  paddedSeconds = String(secondInputElement.value).padStart(2, "0");
  secondInputElement.value = paddedSeconds;
  let secondsInput = Number(paddedSeconds);
  console.log(typeof secondsInput);
  secondsInputGlobal = secondsInput;
});

addPomodoroToListButton.addEventListener("click", (e) => {
  startOrPauseAPomodoroFromListButton.removeAttribute("disabled");
  pomodoroCounterDisplayElement.innerHTML = `${String(
    minuteInputElement.value
  ).padStart(2, "0")} : ${String(secondInputElement.value).padStart(2, "0")}`;
});

const changeImages = () => {
  if (secondsInputGlobal > 1) {
    secondsInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${minutesInputGlobal} : ${secondsInputGlobal}`;
  } else if (secondsInputGlobal === 1 && minutesInputGlobal !== 0) {
    secondsInputGlobal = 60;
    minutesInputGlobal--;
    pomodoroCounterDisplayElement.innerHTML = `${minutesInputGlobal} : ${secondsInputGlobal}`;
  } else {
    pomodoroListOfErrorsElement.innerHTML = "TIME'S UP!";
  }
};

startOrPauseAPomodoroFromListButton.addEventListener("click", (e) => {
  setInterval(() => {
    changeImages();
  }, 1000);
});

// let array = [3, 5, 26, 4];

// redBox.addEventListener("click", (e) => {
//   redBox.classList.toggle("greenbox", array.length > 2);
//   array.pop(); // changes back to red on the third click
//   console.log(array); // [3, 5]
// });

//  document.addEventListener("click", (e) => {
//    console.log("click detected");
//    clearInterval(intervalForImages);
//  });
