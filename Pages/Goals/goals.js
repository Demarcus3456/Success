"use strict"

const stepBack = document.querySelector('.step-back');
const stepList = document.querySelector('.steps-list');
const stepMenu = document.querySelector('.step-menu');



/* Closes step menu */
stepBack.addEventListener('click', function(){
    stepMenu.classList.add('hidden');
    stepList.classList.remove('hidden');
});