const dayInput = document.querySelector("#day-input");
const monthInput = document.querySelector("#month-input");
const yearInput = document.querySelector("#year-input");

const dayText = document.querySelector("#day-text");
const monthText = document.querySelector("#month-text");
const yearText = document.querySelector("#year-text");

const inputs = [dayInput, monthInput, yearInput];
const texts = [dayText, monthText, yearText];

const titles = document.querySelectorAll(".title");
const arrowIcon = document.querySelector("#arrow-icon");
const reset = document.querySelector("#reset");
const required = document.querySelectorAll(".required");

let currentYear = new Date().getFullYear();

dayInput.addEventListener("keypress", () => {
  if(dayInput.value.length > 1) {
    dayInput.value = dayInput.value.slice(0, 1);
  }
});

monthInput.addEventListener("keypress", () => {
  if(monthInput.value.length > 1) {
    monthInput.value = monthInput.value.slice(0, 1);
  }
});

yearInput.addEventListener("keypress", () => {
  if(yearInput.value.length > 1) {
    yearInput.value = yearInput.value.slice(0, 3);
  }
});

arrowIcon.addEventListener("click", () => {
  const dayInputValue = dayInput.value;
  const monthInputValue = monthInput.value;
  const yearInputValue = yearInput.value;

  if(dayInputValue === "" && monthInputValue === "" && yearInputValue === "") {
    titles.forEach(e => e.style.color = "#de5f5f");
    inputs.forEach(e => e.style.borderColor = "#de5f5f");
    required.forEach(e => e.style.visibility = "visible");
  } else if (dayInputValue > 31 || dayInputValue < 1 || dayInputValue === "") {
    titles[0].style.color = "#de5f5f";
    dayInput.style.borderColor = "#de5f5f";
    required[0].style.visibility = "visible";
    required[0].innerHTML = "Must be a valid day";
  } else if (monthInputValue > 12 || monthInputValue < 1 || monthInputValue === "") {
    titles[1].style.color = "#de5f5f";
    monthInput.style.borderColor = "#de5f5f";
    required[1].style.visibility = "visible";
    required[1].innerHTML = "Must be a valid month";
  }
   else if (yearInputValue > currentYear || yearInputValue < 1000 || yearInputValue === "") {
    titles[2].style.color = "#de5f5f";
    yearInput.style.borderColor = "#de5f5f";
    required[2].style.visibility = "visible";
    required[2].innerHTML = "Must be a valid year";
  } else {
    const inputDate = new Date(`${yearInputValue}-${monthInputValue}-${dayInputValue}`);
    const currentDate = new Date();

    if (inputDate > currentDate) {
      titles.forEach(e => e.style.color = "#de5f5f");
      inputs.forEach(e => e.style.borderColor = "#de5f5f");
      required.forEach(e => e.style.visibility = "visible");
      required[0].innerHTML = "Must be a valid day";
      required[1].innerHTML = "Must be a valid month";
      required[2].innerHTML = "Must be a valid year";
    } else {
      const differenceInMilliseconds = currentDate - inputDate;
      dayText.innerHTML = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
      monthText.innerHTML = Math.floor(differenceInMilliseconds / (1000 * 24 * 60 * 60 * 30.44));
      yearText.innerHTML = Math.floor(differenceInMilliseconds / (1000 * 24 * 60 * 60 * 365.25));
    }
  }
});

inputs.forEach(e => {
  e.addEventListener("click", () => {
    inputs.forEach(e => e.style.borderColor = "#c6c4c4");
    titles.forEach(e => e.style.color = "#908f8f");
    required.forEach(e => e.style.visibility = "hidden");
  });
});

reset.addEventListener("click", () => {
  inputs.forEach(e => e.value = "");
  texts.forEach(e => e.innerHTML = "--");
});