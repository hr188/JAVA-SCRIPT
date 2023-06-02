//important file

// call in js 

const user1={
    name :"himanshu",
    age : 19,
    about : function(hobby , favmusician){
        console.log(this.name , this.age, hobby ,favmusician);
    }
}
const user2={
    name :"nshu",
    age : 19,

}

user1.about.call(user2 ,"play" , "guitar");


//apply is similar to call
//only differnce is we have to pass the rest arguments in array
// synatx 
// user1.about.apply(user2 ,["play" , "guitar"]);



//bind returns a function
//later on we can call the function
// syntax
var func =user1.about.bind(user2, "play", "guitar");
func();


//imp
//arrow function ka this ek level upar hota hai 