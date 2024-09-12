const links = document.querySelector('.ul-links');
const menuBtn = document.getElementById('menu');

/* Opens menu */
menuBtn.addEventListener('click', function(){
    links.classList.remove('hidden');
    menuBtn.classList.add('hidden');
})