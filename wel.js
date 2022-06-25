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
