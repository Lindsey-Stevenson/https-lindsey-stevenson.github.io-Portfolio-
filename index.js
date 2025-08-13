const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontSize = "45px";
greeting.style.color = "coral"; 

const username = window.prompt("What's your name?", "Jane");
greeting.innerHTML = "Welcome to my website, " + username + "!"
