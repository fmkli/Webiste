var reful=document.referrer;
    function test(){
        if (!reful){
		    console.log("欢迎小可爱光临本站！");
        } else {
	        console.log("欢迎来自 "+reful+" 的小可爱光临本站！");
	    };
    }
    function start(){
        let str = '欢迎来到'
        let str_ = ''
        let i = 0
        let content = document.getElementById('contentss')
        let timer = setInterval(()=>{
            if(str_.length<str.length){
                str_ += str[i++]
                content.innerHTML = '<p>'+str_+'</p>'                        //打印时加光标
            }else{ 
                clearInterval(timer)
                content.innerHTML = '<p>'+str_+'</p>'
            }
        },100)
    }
    function start2(){
        let str2 = '屑鸽子Fmkliの主页'
        let str_2 = ''
        let i = 0
        let content = document.getElementById('contentsss')
        let timer = setInterval(()=>{
            if(str_2.length<str2.length){
                str_2 += str2[i++]
                content.innerHTML = '<p>'+str_2+'</p>'                        //打印时加光标
            }else{ 
                clearInterval(timer)
                content.innerHTML = '<p>'+str_2+'</p>'
            }
        },100)
    }
    start()
    start2()


$.ajax({
    method: 'GET',
    dataType:"html",
    url: 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.imfmkli.top%2Fatom.xml',
    success: function(data){
        var data = JSON.parse(data).items;
        var list2333 = document.getElementById("posts-list");
        for (var i = 0; i <= 2; i++){

            var links = data[i].link;
            var testContent2333 = data[i].title;
            var div2333 = document.createElement('div')
            div2333.classList = "posts2333";
            div2333.innerHTML = "<a href=" + links + ">" + testContent2333 + "</a>"
            list2333.appendChild(div2333);
        }
        $("#posts-stop").remove();
    }
});

// 统计统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JgapU3Sla12DMquS",ck:"JgapU3Sla12DMquS"});
console.log('统计开启~')

function gettip(){
    var aa233 = Math.random() + ""
    var rand2333 = aa233.charAt(5)
    wenben = new Array
    wenben[0] = 'Tip：$%^&@$%^VTC%#R^&*^'
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
    document.getElementById("tipss").innerText = ''
    // 获取容器
    const container = document.getElementById('tipss')
    // 把需要展示的全部文字进行切割
    const data2 = jieguo2333.split('')
    // 需要追加到容器中的文字下标
    let index = 0
    function writing() {
      if (index < data2.length) {
        // 追加文字
        container.innerHTML += data2[index ++]
        let timer = setTimeout(writing, 70)
        console.log(timer) // 这里会依次打印 1 2 3 4 5 6 7 8 9 10
      }
    }
    writing()
    if (rand2333 == 9){
    	document.getElementById("musicau").src = "https://pro-video.xiaoheiban.cn/xls/67a483e3-0998-4ff0-b98a-d17159552604.mp4"
	document.getElementById("musicau").play()
    	alert("你 被 骗 了");
    }
}
