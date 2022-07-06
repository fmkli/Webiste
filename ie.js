var ms_ie = false;
var ua = window.navigator.userAgent;
var old_ie = ua.indexOf('MSIE ');
var new_ie = ua.indexOf('Trident/');
    
if ((old_ie > -1) || (new_ie > -1)) {
    ms_ie = true;
     alert("IE浏览器已经不再支持")
     location.replace("/IE.html");
}