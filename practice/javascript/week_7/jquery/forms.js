$(document).ready(function (){

    $("#submit-button").click(function (event){
        event.preventDefault();

        console.log("Clicked!");

        var username = $("#username").val();
        console.log("Username: " + username);

        var password = $("#password").val();
        console.log("Password: " + password);

        if(username == "admin"){

            if(password == "123456"){
                console.log("welcome Administrator");
                console.log("Administrator successfully logged in!")
            } else {
                console.log("Login failed! Wrong username or password")
            }

        } else {
            console.log("Welcome " + username + "!");
        }

        

    });

});