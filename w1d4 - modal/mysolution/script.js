"use strict";

let modal = document.querySelector("#modal_container");
let bck = document.querySelector("#products");

/*
function showModal() {
  console.log("Show modal");
  modal.classList.remove("hidden");
}
*/

//Hidden at the beginning
modal.classList.add("hidden");

//Show when a link is clicked
let details = document.querySelector(".link");
details.addEventListener("click", showModal);
function showModal() {
  console.log("Show modal");
  modal.classList.remove("hidden");
  bck.classList.add("hidden");
}

//The close button and HIDE
let closeButton = document.querySelector("#closebutton");
closeButton.addEventListener("click", hideModal);
function hideModal() {
  console.log("Hide modal");
  modal.classList.add("hidden");
  bck.classList.remove("hidden");
}
