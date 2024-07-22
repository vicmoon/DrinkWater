const smallGlass = document.querySelectorAll(".glass-small");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");
const body = document.querySelector(".body");
const title = document.querySelector("h1");
const goal = document.querySelector("h3");

updateBigCup();

smallGlass.forEach((glass, index) => {
  glass.addEventListener("click", () => highlightGlass(index));
  console.log("Clicked");
});

function highlightGlass(index) {
  if (
    smallGlass[index].classList.contains("full") &&
    !smallGlass[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallGlass.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullGlasses = document.querySelectorAll(".glass-small.full").length;
  const totalGlasses = smallGlass.length;

  if (fullGlasses === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  }
  if (fullGlasses === totalGlasses) {
    title.innerText = "Well done!";
    title.style.fontSize = "80px";
    title.style.color = "#FF4191";
    goal.style.visibility = "hidden";
    percentage.style.height = `${(fullGlasses / totalGlasses) * 350}px`;
    body.style.backgroundColor = "#0F67B1";
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullGlasses / totalGlasses) * 350}px`;
  }
}
