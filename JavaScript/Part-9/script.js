document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector('button');
    let input = document.querySelector('input');
    button.textContent = "Click Me!";
    document.body.appendChild(input);
    document.body.appendChild(button);
});
