const body = document.body;
const btn = document.querySelector("button");

const intervalid = setInterval(() => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
}, 100);

btn.addEventListener('click', () => {
    clearInterval(intervalid);
    btn.textContent = body.style.backgroundColor;
});

console.log("kuch hora");