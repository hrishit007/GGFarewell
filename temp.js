const pass=['a','b','c','d','e','f','g','h','i','j','k','l','m','n']
var okbutton=document.getElementById('enter');


okbutton.addEventListener('click',passw);
function passw(){
    var flag=false;
    console.log("Hello");
    var str=document.getElementById('password').value;
    const data={str};
    for(var i=0;i<14;i++) {
        if(str== pass[i]){
            flag=true;
            break;
        }
    }
    if(flag){
        window.location.href="./main.html";

    }
}

