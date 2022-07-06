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

// 统计统计
!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JgapU3Sla12DMquS",ck:"JgapU3Sla12DMquS"});
console.log('统计开启~')
