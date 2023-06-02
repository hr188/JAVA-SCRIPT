console.log("starting");
const mybuttons = document.querySelectorAll(".buttons button");
console.log(mybuttons);

mybuttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let num = 0;
        for (let i = 0; i <= 10000000; i++) {
            num += i;
        }
        console.log('value of inner loop ', num);
        console.log(e.currentTarget.textContent);
    })
})

let onum = 0;
for (let i = 0; i <= 10000000; i++) {
    onum += i;
}
console.log(onum);
console.log("end");