const mainbutton = document.querySelector("button");
console.log(mainbutton);
const body = document.body;
const currentcolor = document.querySelector(".current-color");


const randomcolorgenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const randomcolor = `rgb(${red},${blue},${green})`;
    return randomcolor;
}

mainbutton.addEventListener('click', () => {
    const randomcolor = randomcolorgenerator();
    body.style.backgroundColor = randomcolor;
    currentcolor.textContent = randomcolor;
})