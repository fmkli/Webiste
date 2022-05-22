var num = /^[0-9]+.?[0-9]*/
function makeapassword(){
    var pasArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','_','-','$','%','&','@','+','!'];
    document.getElementById("password").innerText = "No Password"
    document.getElementById("error").innerText = "No Error"
    console.log('begin')
    shuliang = document.getElementById("shuliang").value
    if (num.test(shuliang)){
        if (shuliang < 8){
            document.getElementById("error").innerHTML = "<h2>Error</h2>字数量小于八了！"
        }else{
            if (shuliang > 100){
                document.getElementById("error").innerHTML = "<h2>Error</h2>这么长你确定吗？"
            }else{
                var password = '';
                var pasArrLen = pasArr.length;
                for (var i=0; i<shuliang; i++){
                var x = Math.floor(Math.random()*pasArrLen);
                password += pasArr[x];
                }
                document.getElementById("password").innerHTML = "<h2>最终的密码</h2>" + password
            }
        }
    }else{
        document.getElementById("error").innerHTML = "<h2>Error</h2>字数量输入数字！"
    }
}