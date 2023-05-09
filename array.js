let fruits = ["apple", "mango", "grapes"];
var mixed = ["2", "mango", "4"];


console.log(mixed);
mixed[1]="grapes";
console.log(mixed);

//type of array is object;
//to check Array.isArray(name);

//push pop in array
fruits.push("mango");
console.log(fruits);
fruits.pop();
console.log(fruits);

//unshift and shift 
fruits.unshift("PINEAPPLE");//add in starting 
console.log(fruits);
fruits.shift();
console.log(fruits);//remove from staring 

//array ko clone 
let array1 = ['item1', 'item2'];
//array 1 == array2 if we use then the changes will be reflected in both the arrays because they are objects and share same adress in the   memory so we use other method to clone the arrays 

//method 1 
let array2 = array1.slice(0);

//method2
let array3 = [].concat(array2);
console.log(array2===array3)
console.log(array1 , array2 , array3);
//method 3 spread operator
let array4 = [...array3];

// copy and add new items 
let array5 = array4.slice(0).concat(['item1','item2']);
                //or
let array6 = [...array4, 'item1', 'item2'];
let array7 = [].concat(array6 , array5);
console.log(array7);

//array length = array.length

for(let i =0 ; i< array7.length ; i++){
    console.log(array7[i].toUpperCase());
}

//array using constant 
// we can chqnge because adress is same in heap memopry
const arr=[ 1 ,2 ,3 ,4 ,5 ];
arr.push(45);
console.log(arr);
//for of loop mainly used
for(let num of arr){
    console.log(num);
}

//for in loop //will return index
for(let num in arr){
    console.log(arr[num]);
}

//array destructing
const mylal= ['madhav' , 'noob' , 'prashant'];
//spread operator use karke we can make new aray for rest of arrays
let [myvar1 , myvar2 ,...newarr]= mylal;
//shortcut for
// let myvar1 = mylal[0];
// let myvar2 = mylal[1];
console.log(newarr);
