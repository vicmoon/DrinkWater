const smallGlass = document.querySelectorAll(".glass-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

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
}
