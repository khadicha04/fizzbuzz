const body = document.querySelector("body");
const toggle = document.querySelector("#toggle");
const SunIcon = document.querySelector(".toggle .bxs-sun");
const MoonIcon = document.querySelector(".toggle .bx-moon");

toggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  SunIcon.className =
    SunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  MoonIcon.className =
    MoonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
});
const elForm = document.querySelector(".form");
const elText = document.querySelector(".form__text");
const elInput = document.querySelector(".form__input");
const CheckFizzBuzz = function (num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Buzz";
  } else if (num % 5 === 0) {
    return "Fizz";
  } else if (typeof num !== "Number") {
    return "Enter only Numbers!";
  } else {
    return num;
  }
};

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const InputVal = elInput.value;
  if (InputVal <= 0) {
    elText.textContent = "Enter Numbers more than 0!";
    elText.classList.remove("input-success");
    elText.classList.add("input-danger");
    return;
  } else {
    elText.classList.remove("input-danger");
    elText.classList.add("input-success");
  }
  elText.textContent = CheckFizzBuzz(InputVal);
});

////////////////////////////////////////////////////////

const strings = "  Javascript Lessons   ";
console.log(strings.length);
console.log(strings.trim());
console.log(strings.toUpperCase());

//loader?
function onReady(callback) {
  var intervalId = window.setInterval(function () {
    if (document.getElementsByTagName("body")[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 2000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? "block" : "none";
}

onReady(function () {
  setVisible(".page", true);
  setVisible("#loading", false);
});
