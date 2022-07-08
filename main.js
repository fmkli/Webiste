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

    var qq = 1;

    var emailid = 1;

    function FuckQQ(){
        if (qq = 1){
            var qq = 2;
	    $.ajax({
    		url: 'https://myhkw.cn/open/qq/online?key=680927b6590a41a8b5aef1ac1ca5fd9c&qq=2058264685',
    		type: 'post',
    		datatype: 'json',
    		success: function (result) {
        	    res = result.online;
            	    if (res == "电脑在线"){
                	var element=document.getElementById("idFuckQQ");
                	element.innerHTML="My QQ : 2058264685 &nbsp;QQ" + res + "<br>&nbsp;来找我吧~";
            	    }else{
                	var element=document.getElementById("idFuckQQ");
                	element.innerHTML="My QQ : 2058264685 &nbsp;QQ" + res + "<br>&nbsp;慢慢等我吧";
            	    }
    		},
	    });
        }else if (qq =2){
	    var qq = 1;
            var element=document.getElementById("idFuckQQ");
            element.innerHTML="QQ";
        }
    };
    
    function GoodEmail(){
        if (emailid = 1){
            var emailid = 2;
            var element=document.getElementById("idGoodEmail");
            element.innerHTML="My Email : fmkli2@qq.com";
        }else if (emailid = 2){
            var emailid = 1;
            var element=document.getElementById("idGoodEmail");
            element.innerHTML="<del>伊妹儿</del>Email";
        }
    };
    var music = 2 
    onload = function(){
        document.getElementById("thanks").innerHTML = ""
        window.myf.location.href = '//music.163.com/outchain/player?type=2&id=4010201&auto=1&height=66';
    }
    function musicc418(){
        if (music == 1){
            music = 2
            document.getElementById("thanks").innerHTML = ""
            window.myf.location.href = '//music.163.com/outchain/player?type=2&id=4010201&auto=0&height=66';
        } else if (music == 2){
            music = 3
            document.getElementById("thanks").innerHTML = ""
            window.myf.location.href = '//music.163.com/outchain/player?type=2&id=4010239&auto=0&height=66';
        } else if (music == 3){
            music = 1
            document.getElementById("thanks").innerHTML = "本音乐来自 https://www.bilibili.com/video/BV1QL4y1N7fg"
            window.myf.location.href = '//music.163.com/outchain/player?type=2&id=1957256466&auto=0&height=66';
        }
    }
    function music666(){
        window.myf.location.href = '';
        document.getElementById("musicau").src = "https://pro-video.xiaoheiban.cn/xls/67a483e3-0998-4ff0-b98a-d17159552604.mp4"
        document.getElementById("musicau").play()
        document.getElementById("thanks").innerHTML = "刷新关闭~"
    }