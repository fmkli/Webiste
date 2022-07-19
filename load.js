//From https://www.jb51.net/article/89675.htm And https://www.cnblogs.com/zmdComeOn/p/9617385.html
//获取浏览器页面可见高度和宽度
var _PageHeight = document.documentElement.clientHeight,
_PageWidth = document.documentElement.clientWidth;
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,
_LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;
//在页面未加载完毕之前显示的loading Html自定义内容
var _guding = '<style id="style2333">body{position:fixed;top:0;height: 100%;overflow: hidden;}</style>'
var _LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:#f3f8ff;opacity:0.8;filter:alpha(opacity=80);z-index:10000;border-radius: 15px;"><div id="tishitext" style="position: absolute; cursor1: wait; left: ' + _LoadingLeft + 'px; top:' + _LoadingTop + 'px; width: auto; height: 57px; line-height: 57px; padding-left: 30px; padding-right:30px; background: #fff url() no-repeat scroll 5px 10px;border-radius: 15px; border: 6px solid #95B8E7; color: #000000;">页面加载中，请等待...</div></div> ';
document.write(_LoadingHtml);
document.write(_guding);
//window.onload = function () {
//    var loadingMask = document.getElementById('loadingDiv');
//    loadingMask.parentNode.removeChild(loadingMask);
//};
//监听加载状态改变
document.onreadystatechange = completeLoading;
//加载状态为complete时移除loading效果
function completeLoading() {
    if (document.readyState == "complete") {
        var loadingMask = document.getElementById('loadingDiv');
        var tishitext2 = document.getElementById('tishitext');
        var style23332 = document.getElementById('style2333');
        tishitext2.innerText = '加载完成拉~，嘿嘿嘿'
        setTimeout(() => loadingMask.parentNode.removeChild(loadingMask), 1000);
        setTimeout(() => loadingMask.parentNode.removeChild(style23332), 1000);
        
    }
}
