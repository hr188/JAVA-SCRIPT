const users= [
    {userID : 1 , name: "hjid" ,gender:"male"},
    {userID : 2 , name: "hjiffvvd", gender: "female"},
    {userID : 3 , name: "hjidffvf" , gender: "male"}
]
for(let user of users){
    console.log(user.userID);
}

//destructring 
const [{userID : user1} , , {gender :user3}] =users;
console.log(user1,user3);
