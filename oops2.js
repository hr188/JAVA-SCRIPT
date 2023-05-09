// prototypes

const obj ={
    name: 'John',
    age: 30,
}

const obj2 = Object.create(obj); //by this method we can acess age member of obj and obj will act as  a prototype for obj2
console.log(obj2.__proto__);
console.log(obj.age);

//previous code can be further modified with the help of proto
const usermethods= {
    about : function(){
        console.log(this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
    },
    Is18 : function(){
       return  this.age>=18;
    }
}
function createUser(username, lastname , email , age , adress){
    const user=Object.create(usermethods);

    user.username = username;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    
    return user;
}
const user1= createUser("sare","sare","tugrp@example.com", 18, "dhaka");
console.log(user1.about());




// javascript mai functions are functions + object 
//example
console.log(" prototype masti ");
function hello(){
    console.log("hello");
}
console.log(hello.name); //.name tells the name of functions

//you can add your own properties
hello.myownproperty = "hellooooooo";
console.log(hello.myownproperty);

// function provides more useful properties 
// function provies us free space which is a object which is prototype
// prototype is a link between function and object
console.log(hello.prototype);

//only functions provide us prototype;
hello.prototype.abc = "abc";
console.log(hello.prototype.abc);