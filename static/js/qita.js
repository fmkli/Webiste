num4 = 0
num3 = 0
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
    document.getElementById("timeDate").innerHTML = " 本站已经挣扎度过了 " + dnum + " 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    // 倒计时截止时间
	var EndTime = new Date('2023/08/26 12:00:00');
	// 现在的事件
	var NowTime = new Date();
	// 时间差（时间单位：ms）
	var time = EndTime.getTime() - NowTime.getTime();
	var day = 0;
    var hour = 0;
    var minutes2 = 0;
    var seconds2 = 0;
    if(time >= 0) {
        // 向下取整
        day = Math.floor(time / 1000 / 60 / 60 / 24);
        hour = Math.floor(time / 1000 / 60 / 60 % 24);
        minutes2 = Math.floor(time / 1000 / 60 % 60);
        seconds2 = Math.floor(time / 1000 % 60);
    }
    // 如果是一位数，前面拼接"0"
    function toDouble(num2) {
        return num2 < 10 ? '0' + num2 : num2;
    }
    
    document.getElementById("lasttime").innerHTML = "距离网站三周年庆还有" + day + "天 " + hour + "小时 " + minutes2 + "分钟 " + seconds2 + "秒" 

    
}
setInterval("createtime()", 250);
createtime();

// 统计统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JgapU3Sla12DMquS",ck:"JgapU3Sla12DMquS"});
console.log('统计开启~')
qian = [
    "超棒の上上签",
    "棒の上签",
    "还行の中签",
    "不太行の下签",
    "不行の下下签",
    "114514"
]
// ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
function chouqian(){
    if (num4 < 3){
        num3 =  Math.floor(Math.random()*7);
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">' + qian[num3] + '（这签不太行？点我再来！）</a>'
        num4 = num4 + 1
    } else if (num4 = 3){
        num3 =  Math.floor(Math.random()*7);
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">' + qian[num3] + '（这签这么不太行？重来这么多次？）</a>'
        num4 = num4 + 1
    } else if (num4 = 4){
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">（还点我？[○･｀Д´･ ○]）</a>'
        num4 = num4 + 1
    } else if (num4 = 5){
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">（别点啦！！签子不好求！）</a>'
        num4 = num4 + 1
    } else if (num4 = 6){
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">（我要使用超级无敌绝招了！）</a>'
        num4 = num4 + 1
    } else if (num4 = 7){
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">（' + num4 - 2 + '）</a>'
        num4 = num4 + 1
    } else if (num4 = 7){
        document.getElementById('chouqian').innerHTML = '<a href="javascript:chouqian();" id="chouqian">（不倒计时了，直接开冲吧！）</a>'
        num4 = num4 + 1
    }
    else if (num4 = 7){
        window.location.href="https://www.bilibili.com/video/BV1GJ411x7h7"
        num4 = 0
    }
    
}