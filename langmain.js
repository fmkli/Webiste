langset("langcon.js", "zh-cn");
const lang = document.getElementById("lang");
lang.addEventListener("change", function () {
    langload(lang.options[lang.selectedIndex].value);
});
window.addEventListener("load", function () {
    for (var i = 0; i < lang.options.length; i++) {
        lang.options[i].text = languageJson[lang.options[i].value]["name"];
        if (lang.options[i].value == langDefault) {
            lang.options[i].selected = true;
        }
    }
    langload();
    $("#menu").click(function () {
        $(".gd-overlay").css("display", "block");
        $(".gd-overlay").addClass("gd-ani-fadein");
        $(".gd-drawer").css("display", "block");
        $(".gd-drawer").addClass("gd-ani-drawer-slidein");
        setTimeout(function () { $(".gd-overlay").removeClass("gd-ani-fadein"); $(".gd-drawer").removeClass("gd-ani-drawer-slidein"); }, 200);
    });
    $(".gd-overlay").click(function () {
        $(".gd-overlay").addClass("gd-ani-fadeout");
        $(".gd-drawer").addClass("gd-ani-drawer-slideout");
        setTimeout(function () { $(".gd-overlay").css("display", "none"); $(".gd-overlay").removeClass("gd-ani-fadeout"); $(".gd-drawer").css("display", "none"); $(".gd-drawer").removeClass("gd-ani-drawer-slideout"); }, 200);
    });
});
