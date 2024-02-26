function changeImage(){
    element=document.getElementById('tp')
    if(element.src.match("left")){
        element.src="图片.jpg"
    }
    else{
        element.src="left.png"
    }
}
function yanz(){
    var obj=document.getElementById('password');
    var psw=obj.value;
    var len=psw.length;
    var charnum=0;
    if(len>=8){
        for(var i=0;i<psw.length;i++){
            var ascsum=psw.substr(i,1).charCodeAt();
            if((ascsum>=65&&ascsum<=90)||(ascsum>=97&&ascsum<=122)){
                charnum+=1
            }
        }
        if(charnum==0){
            alert("密码中必须含有字母")
        }
    }
    else{
        alert("密码长度不能小于8")
    }
}
navigator.geolocation.getCurrentPosition(function(e){
        console.log(e)
})
