let button = document.querySelector(".button");
let pink = document.querySelector(".pink");
button.addEventListener("click", away);
function away() {
  pink.classList.add("hide");
}
