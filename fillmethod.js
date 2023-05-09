//fill method
const arr =new Array(10).fill(-1);
console.log(arr);

const myarr=[1,2,3,4,5];
myarr.fill(0,2,4);
console.log(myarr);

//splice method 
const MyArr = ['item1', 'item2' , 'item3 '];
// syntax name.splice(index , delete kitne item karne hai , insert jo karna hai)
// we can also print the deleted item it returns array of deleted item 
MyArr.splice(1, 1, 'item4');
console.log(MyArr);



//iterables
//jispe hum for off loop laga ske
const name ='himanshu';
for (let char of name ){
    console.log(char);
}
const ar =[1,2,3,4,6];
for (let item of ar){
    console.log(item);
}

//objects are not iterable


//array like objects 
//jinke pas apni length property hoti hai and unhe by index acess kar skte hai
//example strings


//set
//set is iterable but not array like object
//no index based acessing 
//order is not guaranteed
const numbers = new Set([1,2,3,4,5,6]);
numbers.add(10);
console.log(numbers);

//map 
//map is iterable but not array like object
const person= new Map();
person.set('name','himanshu');
person.set('age',20);
person.set('city','delhi');
console.log(person);

console.log(person.get('name'));
console.log(person.keys());
console.log(person.values());

for(let [key ,value] of person){//array destructure kiya 
    console.log(key,value);
}

const person1 = {
    id: 1,
    name: 'himanshu'
}
const extrainfo = new Map();
extrainfo.set(person1,{age: 19 , gender : 'male'});
console.log(extrainfo.get(person1).age);


//cloning of objects
const obj = {
    name : 'himanshu'
}
const obj11=Object.assign({},obj);
        //or
const obj33 = {...obj};





//optional chaining 
//    ?. used to avoid error in data delay 
// for example we use user.adress.uniqueid  it can happen that  the unique id is not there hence it will throw a error which is a bad practice
// better to throw undefined in this case 



