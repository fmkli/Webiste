var reful=document.referrer;
    function test(){
        if (!reful){
            document.getElementById("welcome").innerHTML = "欢迎小可爱光临本站！";
		    console.log("欢迎小可爱光临本站！");
	    } else {
            document.getElementById("welcome").innerHTML = "欢迎来自"+reful+"的小可爱光临本站！";
	        console.log("欢迎来自"+reful+"的小可爱光临本站！");
	    };
    }
