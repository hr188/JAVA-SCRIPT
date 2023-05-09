//reduce 

const num=[1,2,3];
const sum =num.reduce((accumulator,currval)=>{
    return accumulator+currval;
});
// ) se phle initial value set kar skte hai reduce ki like 100);
console.log(sum);
