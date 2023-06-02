const print = () =>{
    console.log("hello")
}

function sum(number1 , number2){
    return number1 + number2;
}
print();
console.log(sum(1,2));

function fibbonaci(number1){
    let num1 = 1;
    let num2 = 0;
    let fib =0;

    for(let i =0 ; i<number1 ; i++){
        fib =(num1 + num2);
        num1 = num2;
        num2 = fib;
    }
    return fib;
}
console.log("fibb numbers");
console.log(fibbonaci(10));



// function expression
//syntax
// const funName() = function(){

// };


//arrow function
const isEven = number => {
    return number%2===0;
}

console.log(isEven(6));