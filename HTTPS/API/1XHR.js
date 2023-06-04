const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest;
console.log(xhr);


xhr.open("GET", url);
console.log(xhr);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        const response = xhr.response;
        const obj = JSON.parse(response);
        console.log(obj);
    }
}

xhr.send();