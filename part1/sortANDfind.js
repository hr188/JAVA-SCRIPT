// java script isko as a string sort karta hai 

const numbers =[10,9,8,7,6,5,4,3,2];
numbers.sort((a,b)=>{
    return a-b;
});
console.log(numbers);

const product=[
    {productID:1 , productName:"Mobile1" , price:10000},
    {productID:2 , productName:"Mobile2" , price:100},
    {productID:3 , productName:"Mobile3" , price:100},
    {productID:4 , productName:"Mobile4" , price:1000},
    {productID:5 , productName:"Mobile5" , price:100000},
]
const lowtohigh =product.slice(0).sort((a,b)=>{
    return a.price-b.price; //low to high  for hight to low use b-a
});
console.log(product);



//find method
const myarr= ['cat','dog','cow','puppy'];
const ans = myarr.find((arr)=>{
    if(arr.length==3){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

//every method 
//iska callback function should return true or false
//every method too return true or false
const arr = [1,2,3,4,5,6,7,8,9,10];
const ans2 = arr.every((arr)=>{
    if(arr%2==0){
        return true;
        }
        else{
            return false;
        }
});
console.log(ans2); //return false

//some method 
// same as every method just check for one value for which the call back function is true and return true 
const arr2 = [1,2,3,4,5,6,7,8,9,10];
const ans3 = arr2.some((arr)=>{
    if(arr%2==0){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans3); //return true

        
