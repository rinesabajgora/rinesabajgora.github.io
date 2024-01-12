const navList = document.querySelector(".menu-icon");
const pages = document.querySelector(".menu-list");

navList.addEventListener('click', function(){
    pages.classList.toggle("show_menu");
})

function sendCode(){
 alert('We have sent you an email with the code!');
    
}

function loggedIn(){
    alert('You now are logged in');
}
function welcome(){
    alert('Welcome to our family!')
}