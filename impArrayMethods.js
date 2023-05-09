// for each used to limit use of index 
const numbers = [1,2,3,4,5];
function printF(number , index){
    console.log(`index is ${index} number is ${number}`);
}
numbers.forEach(printF);

const users =[
    {firstname: "harsh" , age:'20'},
    {firstname: "harshh" , age:'20'},
    {firstname: "harshhh" , age:'20'},
    {firstname: "harshhh" , age:'20'},
    {firstname: "harshhhh" , age:'20'},

]
console.log("for each function");
users.forEach(function(user){console.log(user.firstname)});

console.log("for user of loop function");
//same kam can be donw using for of 
for(let user of users){
    console.log(user.firstname);
}


//map method important 
const num = [3,2,4,5,6];

const square = function (number , index){
    return `index is: ${index},  ${number*number}`;
}

const squaresnum = num.map(square);
console.log(squaresnum);