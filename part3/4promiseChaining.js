function mypromise() {
    return new Promise((resolve, reject) => {
        resolve("hr");
        reject("not");
    })
}

//function chaining;

mypromise().then((val) => {
    console.log(val);
    val += " himanshu"
    return val; //agar yha return na likhe to undefined return ho jaiga
}).then((val) => {
    console.log(val);
    val += " him"
    return val;
}).then((val) => {
    console.log(val);
})