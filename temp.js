const pass=['alberteinstein','dara','marilynmonroe','waldo','tintin','mrindia','taehyun','v','bugsbunny','teletubby','po','sabu','shuttlecock','hela','dumbledore','albusdumbledore']
var okbutton=document.getElementById('enter');


okbutton.addEventListener('click',passw);
function passw(){
    var flag=false;
    console.log("Hello");
    var str=document.getElementById('password').value;
    const data={str};
    for(var i=0;i<pass.length;i++) {
        if(str== pass[i]){
            flag=true;
            break;
        }
    }
    if(flag){
        window.location.href="./main.html";

    }
}

