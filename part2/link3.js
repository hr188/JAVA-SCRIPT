console.log("changes");
const mainheading = document.getElementById("main-heading");
console.log(mainheading.textContent);

// mainheading.textContent = " badal diya ";
// console.log(mainheading.textContent);

console.log(mainheading.innerText);


//styless change

const divst = document.querySelector("div.headline h2");
console.log(divst.style);

divst.style.color = "red";
divst.style.border = "2px solid white"