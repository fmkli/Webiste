var reful=document.referrer;
    function test(){
        if (!reful){
            document.getElementById("welcome").innerHTML = "欢迎小可爱光临本站！";
		    console.log("欢迎小可爱光临本站！");
	    } else {
            document.getElementById("welcome").innerHTML = "欢迎来自 "+reful+" 的小可爱光临本站！";
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
	let str = '屑鸽子Fmkliの主页'
        let str_ = ''
        let i = 0
        let content = document.getElementById('contentsss')
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
    start()
