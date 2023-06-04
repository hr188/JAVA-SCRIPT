const url = "https://jsonplaceholder.typicode.com/posts";
async function getPosts() {
    const response = await fetch(url); //await keywords wait for promise resolve 
    const data = await response.json();
    return data;
}
const retutnposts = getPosts(); // return mai promise dega output ke liye resolve kar le promise ko
console.log(retutnposts); //outputs promise

//resolving data 
retutnposts.then((data) => {
    console.log(data);
})

// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     });