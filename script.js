// get elements
const choiceContainer = document.querySelector(".chosen-container");
const optionsContainer = document.querySelector(".options");
const options = document.querySelectorAll(".option");
const userChoice = document.querySelector("#userChoice");
const btnIcon = document.querySelector("button i");

// variables
let clicks = 0;

// functions
function handleClick() {
  optionsContainer.classList.toggle("hidden");
  if (clicks % 2 === 0) {
    btnIcon.classList.add("rotRight");
    btnIcon.classList.remove("rotLeft");
    setTimeout(() => {
      btnIcon.classList.remove("fa-chevron-down");
      btnIcon.classList.add("fa-chevron-up");
      btnIcon.classList.remove("rotRight");
    }, 250);
  } else {
    btnIcon.classList.remove("rotRight");
    btnIcon.classList.add("rotLeft");
    setTimeout(() => {
      btnIcon.classList.remove("fa-chevron-up");
      btnIcon.classList.add("fa-chevron-down");
      btnIcon.classList.remove("rotLeft");
    }, 250);
  }
  clicks++;
}

function handleChoice(e) {
  e.preventDefault();
  handleClick();
  const target = e.target.innerHTML;
  optionsContainer.classList.add("hidden");
  userChoice.innerHTML = target;
  document.querySelector("p").style.paddingLeft = "unset";
}

// eventListeners
choiceContainer.addEventListener("click", handleClick);
options.forEach((opt) => opt.addEventListener("click", handleChoice));
