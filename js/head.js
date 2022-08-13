console.log('begin')
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('./sw.js')
            .then((res) => console.log('Service Worker注册成功啦！'))
            .catch((err) => console.log('Service Worker注册失败了（', err));
    });
}
