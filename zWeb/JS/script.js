var signup = document.getElementById('signup');

var signin = document.getElementById('signin');

function displaySignUp(){
    signin.style.display = "none";
    signup.style.display = "block";
}

function hideSignUp(){
    signin.style.display = "block";
    signup.style.display = "none";
}