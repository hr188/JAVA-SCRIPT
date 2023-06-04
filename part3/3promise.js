const bucket = ['rice', 'salt', 'veggies', 'masala'];
//promise
const mypromise = new Promise((resolve, reject) => {
    if (bucket.includes("rice") && bucket.includes("salt") && bucket.includes("veggies") && bucket.includes("masala")) {
        resolve("fried rice");
    } else {
        reject("cannot");
    }
});

//consuming promise

mypromise.then((rice) => {
    console.log(rice);
}, (promisefailed) => {
    console.log(promisefailed);
});



//function and promises

function mypromisee() {

    return new Promise((resolve, reject) => {
        const val = true;
        setTimeout(() => {
            if (val) {
                resolve("value is true");
            } else {
                reject("val is wrong bhaijaan");
            }
        }, 3000)
    })
}

mypromisee().then((accepted) => {
    console.log(accepted);
}).catch(() => {
    confirm.log("nhi chala");
});