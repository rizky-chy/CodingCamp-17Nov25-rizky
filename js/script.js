// welcomeMessage();


function welcomeMessage(){
    let userName = prompt("please enter your name:");
    if (userName === '' || userName === null){
        userName = "Guest";
    }

    document.getElementById("welcome-speech").innerText = "welcome, " + userName + "!";
    console.log("welcome, " + userName + "!");
}

function validateForm(){

}
