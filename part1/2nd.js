let age  = 19;
name ="Himanshu";
//use of bacticks in string 
let stat =`my name  is ${name} and my age is ${age} `
console.log(stat);

//type of null
//bug
console.log(typeof null);
let myNumber =BigInt(93933943947092370);
// or let num = 9430980380480n; last mai n likh de
console.log(myNumber , typeof myNumber);
// console.log(Number.MAX_SAFE_INTEGER);

//comparison operator
let x = "7";
let y = 7;
console.log(x<y);


// == sirf value ka dhyan 
// === data type ka dhyan bhi dega
console.log(x==y); //true same case with !=
console.log(x===y); //false same case with !==

//truthy and falsy values false "" null undefined
let namee ="";
if(namee){
    console.log("name is true");
}
else{
    console.log("name is false");
}

//ternary operator 
let h = 3;
let ans = h>=4 ?" chotu" : "bada ";
console.log(ans);

// && || operator same as c++


//browser se input 
let winningnumber = 19;
let userguess = +prompt("guess a number");
//default mai prompt string input mai leta hai
//number input mai lene ke liye use +prompt
console.log(typeof userguess , userguess);

if(userguess === winningnumber){
    console.log("you win the game");
}
else{
    if(userguess < winningnumber){
        console.log("your number is smaller ");
    }
    if(userguess > winningnumber){
        console.log("your number is larger ");
    }
}



//switch case  same as c c++
//  syntax
    // switch(){
    //     case 0:
    //         console.log();
    //         break;
    //     case 1:
    //         console.log();
    //         break;
    //     case 2:
    //         console.log();   
    //         break;
    //     default:
    //         console.log();         
    // }


let i = 0;
while(i<9){
    console.log(i);
    i++;
}