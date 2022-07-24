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
                	element.innerHTML="My QQ : 2058264685 &nbsp;QQ" + res + "<br>&nbsp;";
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

$.ajax({
    method: 'GET',
    dataType:"html",
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.imfmkli.top%2Fatom.xml',
    success: function(data){
        var data = JSON.parse(data).items;
        var list2333 = document.getElementById("posts-list");
        for (var i = 0; i <= 4; i++){
            var links = data[i].link;
            wangzhi = new Array;
            wangzhi[i] = data[i].link;
            console.log = wangzhi[i];
            var testContent2333 = data[i].title;
            var div2333 = document.createElement('div')
            div2333.classList = "posts2333";
            div2333.id = "postid" + i;
            div2333.click = "javascript: openpost" + i + "();"
            //div2333.innerHTML = '<a href="' + links + '">' + testContent2333 + "</a>";
            list2333.appendChild(div2333);
        }
        $("#posts-stop").remove();
    }
});
function openpost0(){
    document.getElementById('postshow').src = ""
    document.getElementById('postshow').style = ""
}
// 统计统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JgapU3Sla12DMquS",ck:"JgapU3Sla12DMquS"});
console.log('统计开启~')

function openlist(){
    document.getElementById('card').style = ""
    console.log('ok')
}
function closelist(){
    document.getElementById('card').style = "display:none;"
    console.log('ok2')
}

function gettip(){
    var aa233 = Math.random() + ""
    var rand2333 = aa233.charAt(5)
    wenben = new Array
    wenben[0] = 'Tip：哼啊啊啊啊啊啊啊啊'
    wenben[1] = '本站虽丑，但又不是不能用'
    wenben[2] = 'Tip： 话说你要不要写作业？'
    wenben[3] = 'Tip：这是一个Tip'
    wenben[4] = 'Tip：锄禾日当午，汗滴禾下土（大声滴唱！）'
    wenben[5] = 'Tip：下次看到这条tip是啥时候？'
    wenben[6] = 'Tip：“欢迎大家来找茬（”'
    wenben[7] = 'Tip: Phigros棒棒（'
    wenben[8] = 'Tip：帮忙推荐推荐本站嘛~'
    wenben[9] = 'Music：被骗了哈哈哈（不是）'
    wenben[10] = 'Tip：Fmkli是不是要再给网站弄点啥？'
    wenben[11] = 'Tip：你知道吗。人死了，就不会饿'
    wenben[12] = 'Tip：能力越大，能力就越大'
    wenben[13] = 'Tip：我曾在极度愤怒的情况下极度愤怒!'
    wenben[14] = 'Tip：把肥牛切成厚厚的薄片'
    wenben[15] = 'Tip：要知道台上一分钟，台下60秒'
    wenben[16] = 'Tip：你知道吗 十四岁花季少女两年前竟是十二岁!'
    wenben[17] = 'Tip：Fmkli的博客，就是Fmkli的博客'
    wenben[18] = 'Tip：我睡着之前还是醒的'
    wenben[19] = 'Tip：你看那边！你看！'
    wenben[20] = 'Tip：？'
    jieguo2333 = wenben[rand2333]
    document.getElementById("tipss").innerText = jieguo2333
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/sw.js')
            .then((res) => console.log('Service Worker注册成功啦！'))
            .catch((err) => console.log('Service Worker注册失败了（', err));
    });
}

