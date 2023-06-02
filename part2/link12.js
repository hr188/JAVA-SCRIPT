const mybuttons = document.querySelectorAll(".buttons button");
mybuttons.forEach(function(btn) {
    btn.addEventListener('click', (e) => {
        console.log('e');
        e.target.style.backgroundColor = "red";
        e.target.style.color = "yellow";
    })
})