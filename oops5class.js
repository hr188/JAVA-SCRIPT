class createuser{
    constructor(username, lastname , email , age , adress){
    this.username = username;
    this.lastname = lastname;
    this.email = email;
    this.age = age;
    this.adress = adress;
    }
    about(){
        return `My name is ${this.username} and I'm ${this.age} years old. I'm from ${this.adress}. I'm a student at Udemy.`;
    }
    is18(){
        if(this.age < 18){
            return "You're not eligible to vote.";
            }
            else{
                return "You're eligible to vote.";
                }
    }
}
const user1 = new createuser("hr", "ray" , "hr@gmail.com", "19","adress");
console.log(user1.is18());
console.log(Object.getPrototypeOf(user1));


//extends inheritance 