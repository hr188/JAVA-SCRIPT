//default parameters

function add (a , b){
    return a + b;
}
console.log(add(3,5));

//rest parameters
function myFunc(a,b,...c){
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is `,c)
}
myFunc(1,2,3,4,5,6,7,8,8,9,)

function addALL(...n){
    let sum = 0;
    if(Array.isArray(n)){
    for(let i =0 ; i <n.length ;i++){
        sum = sum + n[i];
    }
    }
    return sum;
}
console.log(addALL(2,3));



//parameter destructuring 
const person ={
    name : "himanshu",
    age : 25
}
//normal
function print(obj){
    console.log(obj.name);
    console.log(obj.age);
}
//destructuring imp
function printt({name , age}){
    console.log(name);
    console.log(age);
}
printt(person);



//calback functions
// function mai dusra function pass kar ke call back kar lete hai 
//in js we can put function as a  parameter for another function and can acess it inside that function it is refered to as callback functions 

function myFunc1(){
    console.log("hello from func 1 ");
}
function myfunc2(callback){

    callback();
}
myfunc2(myFunc1);


//functions returning functions
function myFunc3(){
    function hello(){
        return ("helloworld");
    }
    return hello;
}
const ans = myFunc3();
console.log(ans());