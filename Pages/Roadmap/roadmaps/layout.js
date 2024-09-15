"use strict";

const steps = document.getElementById("steps");
const stepsBtn = document.querySelector(".steps-btn");
const detail = document.getElementById("detail");
const detailBtn = document.querySelector(".detail-btn");
const breakdown = document.getElementById("breakdown");
const breakdownBtn = document.querySelector(".breakdown-btn");
const items = document.getElementById("items");
const itemsBtn = document.querySelector(".items-btn");
const vision = document.querySelector(".vision");

/* Opens Steps */
stepsBtn.addEventListener("click", function () {
  steps.classList.remove("hidden");
  detail.classList.add("hidden");
  breakdown.classList.add("hidden");
  items.classList.add("hidden");
  vision.classList.add("hidden");
});

/* Opens Detail */
detailBtn.addEventListener("click", function () {
  steps.classList.add("hidden");
  detail.classList.remove("hidden");
  breakdown.classList.add("hidden");
  items.classList.add("hidden");
  vision.classList.add("hidden");
});

/* Opens Breakdown */
breakdownBtn.addEventListener("click", function () {
  steps.classList.add("hidden");
  detail.classList.add("hidden");
  breakdown.classList.remove("hidden");
  items.classList.add("hidden");
  vision.classList.add("hidden");
});

/* Opens Items */
itemsBtn.addEventListener("click", function () {
  steps.classList.add("hidden");
  detail.classList.add("hidden");
  breakdown.classList.add("hidden");
  items.classList.remove("hidden");
  vision.classList.add("hidden");
});
