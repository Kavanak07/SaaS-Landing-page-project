document
.getElementById("signupForm")
.addEventListener("submit", function(e){

e.preventDefault();

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let message =
document.getElementById("message");

// Validation

if(name === "" || email === ""){

message.innerText =
"⚠ Please fill all fields";

message.style.color = "yellow";

return;

}

// Save data locally

localStorage.setItem("userName", name);
localStorage.setItem("userEmail", email);

// Redirect

window.location.href =
"thankyou.html";

});