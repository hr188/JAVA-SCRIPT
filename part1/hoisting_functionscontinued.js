//hoisitng we can use function before initiliazing 
//it cannot be done in case of function expression and arrow function

hello();
function hello() {
    return console.log("hello");
}

console.log("function inside fuction ");
//function inside function and lexical scope 
const app =()=>{
    const myFunc=() =>{
        console.log("hello from myFunc");
    }
    const mul =(num1,num2)=> {return num1*num2;}
    const addd =(num1,num2) => {return num1+num2;} 


    console.log("hello from inside app");
    console.log(addd(2,3));
    myFunc();
    
}
app();