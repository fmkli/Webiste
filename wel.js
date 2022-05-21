var reful=document.referrer;
  function test(){
    if (!reful){
		  console.log("欢迎小可爱光临本站！");
	  } else {
		  console.log("欢迎来自"+reful+"的小可爱光临本站！");
	  };
  }
