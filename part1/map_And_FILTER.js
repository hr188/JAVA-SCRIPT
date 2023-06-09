//map function return a array
//calback function of map should always return something
const users = [
    { firstname: "harsh", age: '20' },
    { firstname: "harshh", age: '20' },
    { firstname: "harshhh", age: '20' },
    { firstname: "harshhh", age: '20' },
    { firstname: "harshhhh", age: '20' },

]

const username = users.map((user) => { return user.firstname });
console.log(username);


//filter method 
//filter function ka callback hamesha true aur false return karega 
//filter method return a new array
const numbers = [1, 2, 3, 4, 5, 6]
const isEven = (number) => {
    return number % 2 === 0;
}

const temp = numbers.filter(isEven);
console.log(temp);