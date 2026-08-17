// script.js - Assignment 3

// ─── Task 1: Dynamic Color Changer ───────────────────────────────────────────

const DEFAULT_COLOR = "#3a3a5c";

const colorPicker = document.getElementById("colorPicker");

// addEventListener detects every change in color input
colorPicker.addEventListener("input", function () {
    const selected = colorPicker.value;
    document.getElementById("colorBox").style.backgroundColor = selected;
    document.getElementById("colorLabel").textContent = "Current color: " + selected;
});

function resetColor() {
    document.getElementById("colorBox").style.backgroundColor = DEFAULT_COLOR;
    colorPicker.value = "#6c63ff";
    document.getElementById("colorLabel").textContent = "Current color: " + DEFAULT_COLOR;
}


// ─── Task 2: Understanding Callbacks ─────────────────────────────────────────

// getUser waits 2 seconds then passes user object to callback
function getUser(id, callback) {
    setTimeout(function () {
        callback({ id: id, name: "Ram" });
    }, 2000);
}

function runTask2() {
    document.getElementById("task2Result").textContent = "Fetching user...";

    // Call getUser and print the user name inside the callback
    getUser(1, function (user) {
        console.log(user.name, "user name");
        document.getElementById("task2Result").textContent = "User Name: " + user.name;
    });
}


// ─── Task 3: Callback Hell ────────────────────────────────────────────────────

function getUser3(id, callback) {
    setTimeout(function () {
        callback({ id: id, name: "Ram" });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(function () {
        callback(["post1", "post2"]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(function () {
        callback(["nice", "good"]);
    }, 1000);
}

function runTask3() {
    document.getElementById("task3Result").textContent = "Loading...";

    // Callback Hell - nested callbacks (pyramid of doom)
    getUser3(1, function (user) {
        getPosts(user.id, function (posts) {
            getComments(posts[0], function (comments) {
                var output = "";
                output += "User fetched\n";
                output += "Posts fetched\n";
                output += "Comments fetched\n";
                output += "User: { id: " + user.id + ", name: \"" + user.name + "\" }\n";
                output += "Posts: [\"" + posts.join("\", \"") + "\"]\n";
                output += "Comments: [\"" + comments.join("\", \"") + "\"]";

                console.log("User:", user);
                console.log("Posts:", posts);
                console.log("Comments:", comments);

                document.getElementById("task3Result").textContent = output;
            });
        });
    });
}


// ─── Task 4: Promises (.then / .catch) ───────────────────────────────────────

function getUserPromise(id) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ id: id, name: "Ram" });
        }, 1000);
    });
}

function getPostsPromise(userId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(["post1", "post2"]);
        }, 1000);
    });
}

function getCommentsPromise(postId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(["nice", "good"]);
        }, 1000);
    });
}

function runTask4() {
    document.getElementById("task4Result").textContent = "Loading...";

    var userData, postsData;

    getUserPromise(1)
        .then(function (user) {
            userData = user;
            return getPostsPromise(user.id);
        })
        .then(function (posts) {
            postsData = posts;
            return getCommentsPromise(posts[0]);
        })
        .then(function (comments) {
            var output = "";
            output += "User fetched\n";
            output += "Posts fetched\n";
            output += "Comments fetched\n";
            output += "User: { id: " + userData.id + ", name: \"" + userData.name + "\" }\n";
            output += "Posts: [\"" + postsData.join("\", \"") + "\"]\n";
            output += "Comments: [\"" + comments.join("\", \"") + "\"]";

            console.log("User:", userData);
            console.log("Posts:", postsData);
            console.log("Comments:", comments);

            document.getElementById("task4Result").textContent = output;
        })
        .catch(function (error) {
            console.log("Error:", error);
            document.getElementById("task4Result").textContent = "Error: " + error;
        });
}


// ─── Task 5: Async / Await ────────────────────────────────────────────────────

async function showData() {
    try {
        const user = await getUserPromise(1);
        console.log("User:", user);

        const posts = await getPostsPromise(user.id);
        console.log("Posts:", posts);

        const comments = await getCommentsPromise(posts[0]);
        console.log("Comments:", comments);

        var output = "";
        output += "User fetched\n";
        output += "Posts fetched\n";
        output += "Comments fetched\n";
        output += "User: { id: " + user.id + ", name: \"" + user.name + "\" }\n";
        output += "Posts: [\"" + posts.join("\", \"") + "\"]\n";
        output += "Comments: [\"" + comments.join("\", \"") + "\"]";

        document.getElementById("task5Result").textContent = output;

    } catch (error) {
        console.log("Error:", error);
        document.getElementById("task5Result").textContent = "Error: " + error;
    }
}

function runTask5() {
    document.getElementById("task5Result").textContent = "Loading...";
    showData();
}
