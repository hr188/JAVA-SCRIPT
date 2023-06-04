const url = "https://jsonplaceholder.typicode.com/postss";
// const whatisthis = fetch(url);
// console.log(whatisthis);


//fetch 404 ke error mai reject nhi hoga fetch tbhi reject hoga jb hamare pas koyi network error aaari ho
fetch(url)
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("bhai kuch galti hai");
        }
    })
    .then((data) => {
        return data[1].id;
    })
    .then(id => {
        console.log(id);
    })
    .catch((error) => {
        console.log("inside catch");
        console.log(error);
    })




//posting data to server in json format

fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));