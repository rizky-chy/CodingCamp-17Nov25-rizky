welcomeMessage();


function welcomeMessage(){
    let userName = prompt("please enter your name:");
    if (userName === '' || userName === null){
        userName = "Guest";
    }

    document.getElementById("welcome-speech").innerText = "welcome, " + userName + "!";
    console.log("Welcome, " + userName + "!");
}

function validateForm(){
    let nameDisplay = document.getElementById("name").value;
    let emailDisplay = document.getElementById("email").value;
    let messageDisplay = document.getElementById("message").value;

    document.getElementById("d-name").innerHTML = " Name : " + nameDisplay;
    document.getElementById("d-email").innerHTML = " Email : " + emailDisplay;
    document.getElementById("d-message").innerHTML = " Message : " + messageDisplay;
}
