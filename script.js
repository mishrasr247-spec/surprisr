function goPassword(){
window.location.href="password.html";
}

function checkPass(){

var p=document.getElementById("pass").value;

if(p=="11 march 2026"){
window.location.href="loading.html";
}
else{
document.getElementById("wrong").innerHTML="Wrong password!";
}

}

function nextPage(){
window.location.href="final.html";
}

/* floating hearts */

setInterval(function(){

var heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(function(){
heart.remove();
},6000);

},300);