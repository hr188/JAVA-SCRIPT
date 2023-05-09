"use strict";
console.log("hello world");

//variables
//variables can store can information

var firstname = 'harshit';

console.log(firstname);

firstname = 'himanshu'

console.log(firstname);

var value1 = 5;
console.log(value1**0.5)


//let keyword 
//let keyword is a variable that can be used to store information
//prefer using let in js
// let hr = 1;
// let hr = 3;
// cannot be declared because we are using let

const pi = 3.14;
//we cannot change value of constant 



//string indexing 
let str = 'MASTI';
//0 based indexing 
let l = str.length;

let index = str.indexOf('M');
console.log(str[1]);
console.log(index);
console.log(l);

//string immutable hai
//trim new string mai update hogi ya phir wpais usi variable mai dal lo
let strr = ' himanshu       ';
strr = strr.toUpperCase();
console.log(strr);

//slcing 
let str1 = 'MASTI';
let str2 = str1.slice(0,4); //end index include nhi hota
console.log(str2);

//data types in js
// string "harshit"
// number 5
// boolean true
// null
// undefined
// BigInt

let age = 34;
let name ='HIMANSHU'
console.log("hitti");
console.log(typeof name);

//convert number to string;
age = age+ "";
console.log(typeof age);

//convert string to number 
// let num = +"5";
let oo = +"77";
console.log(typeof oo);

//concatenation of two string 

let str11 = "himanshu";
let str12 = "harshit";
let str13 = str11 +" "+ str12;
console.log(str13);


let str111 = "10";
let str122= "30";
let str133 = + str111 + + str122;
console.log(str133);