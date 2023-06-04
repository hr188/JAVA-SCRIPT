const url = "https://jsonplaceholder.typicode.com/posts";
const xhr = new XMLHttpRequest;

xhr.open("GET", url);

xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status <= 300) {
        const data = JSON.parse(xhr.response);
        console.log(data);
    } else {
        console.log("an error occured ")
    }
}
xhr.onerror = () => {
    console.log('please open your internet');
}

xhr.send();