const key1 ="objkey1";
const key2 ='objkey2';

const value1 ="myvalue1"
const value2 ="myvalue2"

const obj={
    [key1] : value1,
    [key2] : value2
}
console.log(obj);

// spread operator 
const arr1 =[1,2,3];
const arr2 =[4,5,6];
const arr3 =[...arr1 , ...arr2 , 1 ,2 , 3];
console.log(arr3);

const arr4 =[...'abc'];
//  arr4 =['abc']output == abc in string 
// to spread a , b , c we use spread operator 

console.log(arr4);

//incase of objects;
const obj1 ={
    key1 :'value1',
    key2 :'value2'
}    
const obj2 ={
    key3 :'value3',
    key4 :'value4'
}    
const newobj = {...obj1 , ...obj2};
console.log(newobj);

//destructuring of object 
const band ={
   bandname : "HR",
   bandtype : "Rock",
   bandmembers :["hr","frr"]
}
let{bandname , bandtype , bandmembers}=band;
console.log("after destructuring");
console.log(bandname ,bandtype,bandmembers);

// obj to variale
let{bandname: var1, bandtype: var2, bandmembers: var3} = band;
console.log(var1,var2,var3);


//objects inside array
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