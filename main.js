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