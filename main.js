var menuStatus = false;
$("#menu").click(function(){
    if(menuStatus == false){
        $("#overlay").css("display","block");
        $("#overlay").addClass("gd-ani-fadein");
        $("#drawer").css("display","block");
        $("#drawer").addClass("gd-ani-drawer-slidein");
        setTimeout(function(){$("#overlay").removeClass("gd-ani-fadein");$("#drawer").removeClass("gd-ani-drawer-slidein");}, 200);
        menuStatus = true;
    }
});
$("#overlay").click(function () {
    $("#overlay").addClass("gd-ani-fadeout");
    $("#drawer").addClass("gd-ani-drawer-slideout");
    setTimeout(function(){$("#overlay").css("display","none");$("#overlay").removeClass("gd-ani-fadeout");$("#drawer").css("display","none");$("#drawer").removeClass("gd-ani-drawer-slideout");}, 200);
    menuStatus = false;
});
//这里你自己修改~
var reful=document.referrer;
    function conlog(){
        if (!reful){
            console.log("欢迎小可爱光临本站！");
        } else {
            console.log("欢迎来自"+reful+"的小可爱光临本站！");
        };
    }
    var now = new Date();
		
    function createtime() {
        var grt = new Date("08/26/2020 12:00:00"); //此处修改你的建站时间或者网站上线时间 
        now.setTime(now.getTime() + 250);
        days = (now - grt) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if (String(hnum).length == 1) {
            hnum = "0" + hnum;
        }
        minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if (String(mnum).length == 1) {
            mnum = "0" + mnum;
        }
        seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if (String(snum).length == 1) {
            snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = " 本站已安全运行 " + dnum + " 天 ";
        document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    }
    setInterval("createtime()", 250);

function FuckQQ(){
    var element=document.getElementById("idFuckQQ");
    element.innerHTML="My QQ : 2058264685";
};

function GoodEmail(){
    var element=document.getElementById("idGoodEmail");
    element.innerHTML="My Email : fmkli2@qq.com";
};
