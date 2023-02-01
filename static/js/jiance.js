
test0 = 1
test1233 = window.location.search;
xinxi1 = test1233.split("test=")
xinxi2 = xinxi1[1].substr(0,4) 

if (xinxi2 = "open"){
    console.log("%c网页内部开启了调试模式", "font-size:20px;color:#f44336;")
    window.addEventListener('error',  args => {
        if (test0 == 1){
            document.body.innerHTML = ""
            document.write('<div style="text-align: center;color: red;"><h1>JS出现错误</h1><p>请联系Fmkli反馈<br>QQ：2058264685，Email：fmkli2@qq.com<br><br>如果出现 undefined 则可能为资源加载错误而不是JS错误，请打开控制台进行进一步查询</p><hr></div>')
        }
        console.log('6')
        xinxi3 = JSON.stringify(args)
        console.log('error--------------------------event:', args)
        document.write('<div style="text-align: center;color: red;">文件：' + args.filename+ '<br>错误代码所在行：' + args.lineno + '<br>报错信息：' + args.message + '<br><hr></div>')
        test0 = test0 + 1
    
        return true
    }, true)
}


const serviceWorker = navigator.serviceWorker;

serviceWorker.getRegistrations ? serviceWorker.getRegistrations().then(function(sws) {
  sws.forEach(function(sw) {
    sw.unregister();
    console.log('sw unregister 1');
  });
}) : serviceWorker.getRegistration && serviceWorker.getRegistration().then(function(sw) {
  sw && sw.unregister();
  console.log('sw unregister 2');
});
