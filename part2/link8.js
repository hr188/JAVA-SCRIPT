//intro to events
const btn = document.querySelector(".btn-headline");
console.dir(btn);

// btn.onclick = () => {
//         console.log("you clicked me ");
//     }
//not a good practice

//good practise
btn.addEventListener("click", () => {
    console.log('arrow function');
})