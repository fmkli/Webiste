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
            var a2333 = document.createElement('a');
            var div2333 = document.createElement('div');
            a2333.href = data[i].link;
            a2333.testContent = data[i].title;
            div2333.classList = "posts2333";
            div2333.appendChild(a2333);
            list2333.append(div2333);
        }
        $("#posts-stop").remove();
    }
});

// 统计统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JgapU3Sla12DMquS",ck:"JgapU3Sla12DMquS"});
console.log('统计开启~')
