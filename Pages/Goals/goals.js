"use strict";

const stepBack = document.querySelector(".step-back");
const stepList = document.querySelector(".steps-list");
const stepMenu = document.querySelector(".step-menu");
const stepBtn = document.querySelector(".step-btn");

const goals = document.querySelector(".goals");
const life = document.querySelector(".life");
const steps = document.querySelector(".steps");
const list = document.querySelector(".list");
const goalsBtn = document.querySelector(".goals-btn");
const lifeBtn = document.querySelector(".life-btn");
const stepsBtn = document.querySelector(".steps-btn");
const listBtn = document.querySelector(".list-btn");

const oneBtn = document.querySelector(".oneBtn");
const twoBtn = document.querySelector(".twoBtn");
const threeBtn = document.querySelector(".threeBtn");
const fourBtn = document.querySelector(".fourBtn");
const fiveBtn = document.querySelector(".fiveBtn");
const sixBtn = document.querySelector(".sixBtn");
const sevenBtn = document.querySelector(".sevenBtn");
const eightBtn = document.querySelector(".eightBtn");
const nineBtn = document.querySelector(".nineBtn");
const tenBtn = document.querySelector(".tenBtn");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const ten = document.querySelector(".ten");

/* Closes step menu */
stepBack.addEventListener("click", function () {
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Open step menu */
stepBtn.addEventListener("click", function () {
  stepMenu.classList.remove("hidden");
  stepList.classList.add("hidden");
});

/* Opens step 1 */
oneBtn.addEventListener("click", function () {
  one.classList.remove("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 2 */
twoBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.remove("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 3 */
threeBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.remove("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 4 */
fourBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.remove("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 5 */
fiveBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.remove("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 6 */
sixBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.remove("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 7 */
sevenBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.remove("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 8 */
eightBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.remove("hidden");
  nine.classList.add("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 9 */
nineBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.remove("hidden");
  ten.classList.add("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens step 10 */
tenBtn.addEventListener("click", function () {
  one.classList.add("hidden");
  two.classList.add("hidden");
  three.classList.add("hidden");
  four.classList.add("hidden");
  five.classList.add("hidden");
  six.classList.add("hidden");
  seven.classList.add("hidden");
  eight.classList.add("hidden");
  nine.classList.add("hidden");
  ten.classList.remove("hidden");
  stepMenu.classList.add("hidden");
  stepList.classList.remove("hidden");
});

/* Opens Steps */
stepsBtn.addEventListener("click", function () {
  life.classList.add("hidden");
  goals.classList.add("hidden");
  list.classList.add("hidden");
  steps.classList.remove("hidden");
});

/* Opens Lists */
listBtn.addEventListener("click", function () {
  life.classList.add("hidden");
  goals.classList.add("hidden");
  list.classList.remove("hidden");
  steps.classList.add("hidden");
});

/* Opens Life */
lifeBtn.addEventListener("click", function () {
  life.classList.remove("hidden");
  goals.classList.add("hidden");
  list.classList.add("hidden");
  steps.classList.add("hidden");
});

/* Opens Goals */
goalsBtn.addEventListener("click", function () {
  life.classList.add("hidden");
  goals.classList.remove("hidden");
  list.classList.add("hidden");
  steps.classList.add("hidden");
});
