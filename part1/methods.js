//methods are function inside objects 
//methods are private by default
function about() {
    console.log(`name is ${this.name} and age is ${this.age}`);
}
const person={
    name :'himanshu',
    age : 19,
    personinfo: about

}
const person1={
    name :'himan',
    age : 20,
    personinfo: about

}
const person3={
    name :'nshu',
    age : 30,
    personinfo: about

}
person3.personinfo();


 
///window object this and window
console.log(this);
"use strict"
//wrna window object aayega function mai