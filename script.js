const smallGlass = document.querySelectorAll(".glass-small");
s;
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateBigCup();

smallGlass.forEach((glass, index) => {
  glass.addEventListener("click", () => highlightGlass(index));
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
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullGlasses / totalGlasses) * 350}px`;
    // percentage.innerText = `${(fullGlasses / totalGlasses) * 100}%`;
  }
}
