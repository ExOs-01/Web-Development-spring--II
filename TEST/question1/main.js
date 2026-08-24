let loading = document.getElementById("loading");
let comments = document.getElementById("comments");

fetch("https://jsonplaceholder.typicode.com/comments")
.then(function(response) {
    return response.json();
})
.then(function(data) {

    loading.textContent = "";

    for(let i = 0; i < data.length; i++) {

        let li = document.createElement("li");

        li.textContent = data[i].name + " - " + data[i].email + " - " + data[i].body;

        comments.appendChild(li);
    }

})
.catch(function(error) {

    loading.textContent = "Failed to load data";

});