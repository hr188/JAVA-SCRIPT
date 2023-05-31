// const Rootnode = document.getRootNode();
// console.dir(Rootnode.childNodes[0]);

// const hr = document.querySelector("head");
// console.log(hr.nextSibling.nextSibling);
// const temp = hr.querySelector(".")

const body = document.querySelector("body");
console.log(body.children);
const header = body.querySelector("nav");
console.log(header.nextSibling);


///html using java script

const todo = document.querySelector(".todo-list");
// todo.innerHTML += "<li> New todo </li>";


//create element and appending
const newtodo = document.createElement("li");
const newTodoText = document.createTextNode("new todo item add using create element and  createtext node");
//alternate method for adding text in create element = 
newtodo.textContent = 'text of text content  ------'
newtodo.append(newTodoText);
todo.append(newtodo);

//prepend add in starting


// .remove se remove kar skte elements



//use of before and after

// afterbegin  ------//prepend
// beforebegin  -------before
// aftend       -------after
// beforeend --------- //append
todo.insertAdjacentHTML("beforebegin", " <li> teach students </li>");



//old methods of appending
//append child
//insert before
//replace child 
//remove child

//next file mai