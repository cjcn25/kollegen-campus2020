$("button").click(function() {
    let username = $("#username").val();
    let password = $("#password").val();
    if (username === "jesse.wang@arvatosystems.com" && password === "arvato") {
        console.log("Logged In");
    } else {
        console.warn("Invalid username and password");
    }
});