let loginBtn = document.getElementById("loginBtn");
let message = document.getElementById("message");

loginBtn.addEventListener("click", function() {

    loginBtn.disabled = true;

    message.textContent = "Logging in...";

    let login = new Promise(function(resolve) {

        setTimeout(function() {
            resolve();
        }, 2000);

    });

    login.then(function() {

        message.textContent = "Welcome back!";

        loginBtn.disabled = false;

    });

});