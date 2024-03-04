console.log("hello");



let btnRegister = document.querySelector("#btnRegister");
let txtUsername = document.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function() {
    register(txtUsername.value, txtPassword.value, txtConfirmPassword.value,txtAge.value);
}

function register (username, password, confirmPassword, age) {
    console.log (username,password,confirmPassword,age);
    //alert("Register button has been clicked")
}