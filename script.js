let food1s = document.getElementById('food1');
let food2s = document.getElementById('food2');
let foods = document.getElementById('food');


food2s.addEventListener('click', ()=> {
    foods.style.backgroundImage = "url(image-2.avif)";
})

food1s.addEventListener('click', ()=> {
    foods.style.backgroundImage = "url(image-1.png)";
})