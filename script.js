const BUTTON = document.querySelectorAll('.button');

document.addEventListener('DOMContentLoaded', function() {
    BUTTON.forEach((changeColour) => {
        changeColour.addEventListener('click', function() {
            const color = this.id;
            document.body.style.backgroundColor = color;
        })
    })
}) 

