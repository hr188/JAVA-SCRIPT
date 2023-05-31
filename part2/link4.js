//get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute('href').slice(1));
link.setAttribute("href", "https://google.com");

let navitem = document.getElementsByTagName("a"); //returns a html collection of all the elements with class name nav -Item
console.log(navitem);

//lopping in html tags

for (let i = 0; i < navitem.length; i++) {

    const single = navitem[i];
    console.log(single);
    single.style.backgroundColor = "#fffe";
    single.style.color = "red";
}

//htmlcollection to array;
navitem = Array.from(navitem);
navitem.forEach((single) => {
    single.style.fontWeight = "bold";
});

const change = document.querySelectorAll(".nav-item");
change.style.fontWeight = "bold";