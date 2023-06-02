///event object
const allbutton = document.querySelectorAll(".buttons button");
console.log(allbutton);
for (let i of allbutton) {
    i.addEventListener("click", () => {
        console.log(this);
    })
}



//  arrow function ka this is window object and

// function ka this is lexical scope ke upar