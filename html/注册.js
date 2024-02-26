function yanz(){
    var obj=document.getElementById('password');
    var psw=obj.value;
    var len=psw.length;
    var charnum=0;
    var obj2=document.getElementById('newpassword');
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
    var len2=obj2.value.length;
    if(len2==len){
      for(var j=0;j<psw.length;j++){
        var asc=psw.substr(j,1).charCodeAt();
        var abc=obj2.value.substr(j,i).charCodeAt();
        if(asc!=abc){
            alert('两次输入密码不一致')
            break;
        }
      }
    }
    else{
        alert("两次输入密码长度必须一致")
    }
}
