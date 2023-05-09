//function bananan hai jo ki sare person ki info save karta hai
const usermethods= {
    about : function(){
        console.log(this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
    },
    Is18 : function(){
       return  this.age>=18;
    }
}
function createUser(username, lastname , email , age , adress){
    const user={};

    user.username = username;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    user.about = usermethods.about,
    user.Is18 = usermethods.Is18;
    return user;
}
const user1= createUser("sare","sare","tugrp@example.com", 18, "dhaka");
console.log(user1.about());

//function ko object ke inside mai declare karne se there is a issue of memory because every time the function is called there is  a new method created with each new user we will declare this will cause a  high wastage of memory because the method is doing the same job hence it should be declared outside 
//reference (bad practice)
// const user={};

// user.username = username;
// user.lastname = lastname;
// user.email = email;
// user.age = age;
// user.adress = adress;
// user.about = function(){
//     console.log(this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
// }
// user.Is18 = function(){
//    return  this.age>=18;
// }
// return user;


//good practice is to declare the method outside and use . operator in the function by this the method will be created only once;



