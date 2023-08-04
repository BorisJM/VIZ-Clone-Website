"use strict";

const imageCoverContainer = document.querySelector(".cover-img");
const imageCover = document.querySelector(".image-itself");
const volumesContainer = document.querySelector(".volumes-container");
const toggleBtn = document.querySelectorAll(".menu-toggle");
const navBar = document.querySelector(".nav-menu");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
imageCoverContainer.addEventListener("mouseover", function () {
  imageCover.style.transform = `scale(1.1)`;
});

imageCoverContainer.addEventListener("mouseout", function () {
  imageCover.style.transform = `scale(1)`;
});

toggleBtn.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    navBar.classList.toggle("nav-open");
    body.classList.toggle("hideScroll");
    overlay.classList.toggle("hidden");
  })
);

overlay.addEventListener("click", function (e) {
  navBar.classList.toggle("nav-open");
  body.classList.toggle("hideScroll");
  overlay.classList.toggle("hidden");
});
