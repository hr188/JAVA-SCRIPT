//object is reference type
// object ke liye curly Braces 

const person ={name:"himanshu",
    age:"19",
    hobbies:['sing','play' ,'dance']
}
console.log(person.hobbies);
//add key value pair in obj
person.gender= "MALE";
console.log(person);

// other method to acess objects
console.log(person['age']);

//constant se nikalte hai obj ki value
const key = 'email';
person[key] = 'himanshu@gmail.com';
console.log(person);


//iteration in obj
//for loop
for(var ke in person){
    console.log(`${ke}: ${person[key]}`);
}
//object.key
console.log(Object.keys(person));
const val = Array.isArray(Object.keys(person));
console.log(val);