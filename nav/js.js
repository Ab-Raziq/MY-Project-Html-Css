// Function change Color //

function changeColor(event){
    event.preventDefault();
    
    const selected_color = document.getElementById('nav_color').value;
    if(selected_color){
        setCookie("nav_color", selected_color, 5);

        const nav = document.getElementById('navabar_menu');
        nav.style.backgroundColor = selected_color;

    }
    
}

window.onload = function() {
    applyColor();
}

function applyColor(){

const nav_color = getCookie("nav_color");

const nav = document.getElementById('navabar_menu');

if(nav_color!="" && nav_color!=undefined){
    nav.style.backgroundColor = nav_color;
}else{
    nav.style.backgroundColor = 'black';
}
}

// Function change Color End//

//Set Coockie//

function setCookie(name, value, days) {
    // Get Current Date
    const d = new Date();  
    
    // Add number of days to current date
    d.setTime(d.getTime() + (days*24*60*60*1000));

    const expires = "expires="+ d.toUTCString();

    document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

//Set Cookie end//



//Get Coockie//

 // Function to get a cookie by name
function getCookie(name) {
    const cname = name + "=";

    const decodedCookie = decodeURIComponent(document.cookie);


    const ca = decodedCookie.split(';');

    for(let i=0; i<ca.length; i++) {

    let c = ca[i].trim(); 
    if (c.indexOf(cname) == 0) {
        return c.substring(cname.length, c.length);
    }
    }

    return "";
}

//Get Coockie End//


// Function change Font //
function changeFont(event){
    event.preventDefault();
    const selected_font=document.getElementById('nav_font').value;

   
    if(selected_font){
        setCookie("nav_font" ,selected_font, 5);
        const nav = document.getElementById('navabar_menu');
        nav.style.fontSize=selected_font;
    }
}
window.onload = function() {
        applyFont();
}


function applyFont(){
    
    const nav_font = getCookie("nav_font");

    const nav = document.getElementById('navabar_menu');

    if(nav_font!="" && nav_font!=undefined){
        
        nav.style.fontSize = nav_font;
    }else{
        nav.style.fontSize = '10px';
    }
}

// Function change Font End//   


// Function change Theme //
function changeTheme(event){
    event.preventDefault();
    const selected_theme=document.getElementById('nav_theme').value;
    if(selected_theme){
        const navbody=document.getElementById('nav_body')
        navbody.style.backgroundColor=selected_theme;
    }
}
window.onload = function() {
        applyTheme();
}

function applyTheme(){
    const nav_theme=getCookie('nav_theme')
    const selected_theme=document.getElementById('nav_theme')
    if(selected_theme){
        selected_theme.style.backgroundColor=nav_theme;  
    }
}

// Function change Theme End//