console.log("bhai aaj padhte hai");

function addAndMul(number1, number2, callback) {
    if (typeof number1 === 'number' && typeof number2 === 'number') {
        callback(number1, number2);
    } else {
        console.log("bhai ni hora");
    }
}

function add(number1, number2) {
    console.log(number1 + number2);
}

addAndMul(2, 3, add);



///or it can be written as
addAndMul(4, 3, (number1, number2) => {
    console.log(number1 * number2);
})