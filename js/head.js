console.log('begin')
pagehieght = document.documentElement.clientHeight
pagewidth = document.documentElement.clientWidth
document.write('<div id="loadingpage" class="dailong" style="text-align: center;"><div style="top: 30%;position: relative;"><h1>页面加载中，等等哒~</h1></div></div>')
document.onreadystatechange = jiazaiwancheng;
function jiazaiwancheng(){
    if(document.readyState == 'complete'){
        console.log('加载完成')
        document.getElementById('loadingpage').parentNode.removeChild(document.getElementById('loadingpage'))
    }
}
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./sw.js')
            .then((res) => console.log('Service Worker注册成功啦！'))
            .catch((err) => console.log('Service Worker注册失败了（', err));
    });
}
