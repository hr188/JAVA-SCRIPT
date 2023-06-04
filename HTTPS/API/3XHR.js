function setRequest(method, url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status <= 300) {
                resolve(xhr.response);
            } else {
                console.log("an error occured  because of reffering to wrong url maybe")
            }
        }
        xhr.onerror = () => {
            console.log("bhai net chalu kar le");
        }


        xhr.send();
    })
}

const url = "https://jsonplaceholder.typicode.com/posts"
setRequest("GET", url).then((response) => {
        const data = JSON.parse(response);
        return data;
    })
    .then((data) => {
        return data[2].id;
    })
    .then((id) => {
        const url2 = `${url}/${id}`;
        return setRequest("GET", url2);
    })
    .then((response) => {
        const data2 = JSON.parse(response);
        console.log(data2);
    })
    .catch((e) => {
        console.log("e");
    })