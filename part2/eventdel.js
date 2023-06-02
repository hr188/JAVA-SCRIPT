console.log("hello world");
const grandparent = document.querySelector(".grandparent");
console.log(grandparent);
grandparent.addEventListener("click", (e) => {
    console.log(e.target);
})