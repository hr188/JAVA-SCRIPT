//advancement of code using prototype of functions
// const usermethods= {
//     about : function(){
//         console.log(this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
//     },
//     Is18 : function(){
//        return  this.age>=18;
//     }
// } this can be replaced by prototypes
function createUser(username, lastname , email , age , adress){
    const user=Object.create(createUser.prototype);

    user.username = username;
    user.lastname = lastname;
    user.email = email;
    user.age = age;
    user.adress = adress;
    
    return user;
}
createUser.prototype.about=function(){
    return (this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
}
createUser.prototype.Is18=function(){
    return  this.age>=18;
    }
const user1= createUser("sare","sare","tugrp@example.com", 18, "dhaka");
console.log(user1.about());
