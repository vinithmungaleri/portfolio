// JavaScript to animate your name
window.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.querySelector(".centered-text h1");
    const nameText = "Vinith Mungaleri";
    let index = 0;

    function type() {
        if (index < nameText.length) {
            nameElement.innerHTML += nameText.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    type();
});
