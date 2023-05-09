//new keyword
//proto ko prototype se link karega automatically

// previous code updation 

function createUser(username, lastname , email , age , adress){
    // const user=Object.create(createUser.prototype); this line can be replaced the link which was created through proto is made with the help of new keyword

    this.username = username;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.adress = adress;
    
   
}
createUser.prototype.about=function(){
    return (this.username + " " + this.lastname + " " + this.email + " " + this.age + " " + this.adress);
}
createUser.prototype.Is18=function(){
    return  this.age>=18;
    }
const user1= new createUser("sare","sare","tugrp@example.com", 18, "dhaka");
console.log(user1);
console.log(user1.about());

for(key in user1){
    console.log(key);//print properties of proto also
    //to avoid this we use hasownproperty
    
}
for(key in user1){
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}