// script.js

document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('h1');

    title.addEventListener('mouseover', function () {
        const randomColor = getRandomColor();
        title.style.color = randomColor;
    });

    title.addEventListener('mouseout', function () {
        title.style.color = ''; // Reset color on mouseout
    });

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
