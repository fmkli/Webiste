const $ = mdui.$;
let Maintext = {};
let Maintime = {};
var inst2 = new mdui.Dialog('#Saysay');

function getParam(reqParam) {
    reqParam = reqParam.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const paraReg = new RegExp('[\\?&]' + reqParam + '=([^&#]*)');
    const results = paraReg.exec(window.location);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// 改变顶部导航栏的颜色
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

function changeNavColor() {
    // console.log(getScrollPosition());
    if (getScrollPosition().y >= window.innerHeight * 0.3) {
        $("body").addClass("mdui-theme-primary-teal")
    } else {
        $("body").removeClass("mdui-theme-primary-teal")
    }
}
window.onscroll = changeNavColor;

// 获取近期文章
document.onreadystatechange = function () {
    if (document.readyState == "complete") {


        /* Posts */
        $.ajax({
            method: 'GET',
            url: 'https://kkapi.imfmkli.top/api/ispeak?author=62fb537eea70bbc9782bcf6d&page=1&pageSize=5',
            // url: 'https://blog.yfun.top/search.json',
            success: function (data2) {
                var data = JSON.parse(data2).data;
                // var data = JSON.parse(data);
                var container = document.getElementById("posts-label");
                for (var i = 0; i <= 4; i++) {
                    var element = document.createElement('a');
                    //element.href = "1" ;
                    // element.href = "https://blog.yfun.top" + data[i].url;
                    element.classList = "mdui-list-item mdui-ripple";
                    element.textContent = data.items[i].content.slice(0, 18) + "......";
                    //saymaintext[i] = data.items[i].content;
                    Maintext[`${i}`] = data.items[i].content;
                    Maintime[`${i}`] = data.items[i].createdAt;
                    element.id = "smallspeak" + i;
                    element.href = "javascript:saysay2" + i + "()";
                    container.appendChild(element);
                }
                $("#post-spinner").remove();
            }
        });
        /* CYF 的 API 删了，到时候补上 */
        /* getWeather(); */
    }
};


/*史上最硬核的说说！！！ */
var Saysay = new mdui.Dialog('#SaySay');

function saysay20() {
    document.getElementById("saymaintime").innerText = Maintime[0]
    document.getElementById("saymaintext").innerText = Maintext[0]
    Saysay.open();
}

function saysay21() {
    document.getElementById("saymaintime").innerText = Maintime[1]
    document.getElementById("saymaintext").innerText = Maintext[1]
    Saysay.open();
}

function saysay22() {
    document.getElementById("saymaintime").innerText = Maintime[2]
    document.getElementById("saymaintext").innerText = Maintext[2]
    Saysay.open();
}

function saysay23() {
    document.getElementById("saymaintime").innerText = Maintime[3]
    document.getElementById("saymaintext").innerText = Maintext[3]
    Saysay.open();
}

function saysay24() {
    document.getElementById("saymaintime").innerText = Maintime[4]
    document.getElementById("saymaintext").innerText = Maintext[4]
    Saysay.open();
}

switch (getParam('ref')) {
    case 'donate':
        donate();
        break;
    default:
        break;
}
function getWeather() {
    if (getParam("city") !== "") {
        $.ajax({
            method: 'GET',
            url: 'https://api.cyfan.top/weather?location=' + getParam("city"),
            success: function (d) {
                var d = JSON.parse(d);
                var weatherDay = d.weather[0].info.day;
                var weatherNight = d.weather[0].info.night;
                document.getElementById("day-weather").innerHTML = `<h3 class="mdui-text-center">${weatherDay[1]}, ${weatherDay[2]}°C, ${weatherDay[4]}（${weatherDay[3]}）</h3>
                `
                document.getElementById("night-weather").innerHTML = `<h3 class="mdui-text-center">${weatherNight[1]}, ${weatherNight[2]}°C, ${weatherNight[4]}（${weatherNight[3]}）</h3>
                `
                console.log(weatherDay, weatherNight);
                $("#weather-spinner").remove();
            }
        });
    } else {
        $.ajax({
            method: 'GET',
            url: 'https://api.myip.la/cn?json',
            success: function (data) {
                var data = JSON.parse(data);
                $.ajax({
                    method: 'GET',
                    url: 'https://api.cyfan.top/weather?location=' + data.location.city,
                    success: function (d) {
                        var d = JSON.parse(d);
                        var weatherDay = d.weather[0].info.day;
                        var weatherNight = d.weather[0].info.night;
                        document.getElementById("day-weather").innerHTML = `<h3 class="mdui-text-center">${weatherDay[1]}, ${weatherDay[2]}°C, ${weatherDay[4]}（${weatherDay[3]}）</h3>
                        `
                        document.getElementById("night-weather").innerHTML = `<h3 class="mdui-text-center">${weatherNight[1]}, ${weatherNight[2]}°C, ${weatherNight[4]}（${weatherNight[3]}）</h3>
                        `
                        console.log(weatherDay, weatherNight);
                        $("#weather-spinner").remove();
                    }
                });

            }
        });
    }

}

if (document.referrer) {
    console.log(document.referrer);


    console.log(
        '%c请注意！我们不会收集并发送上述的来源网址信息！',
        'color: red'
    );
}


// 获取原始的页面标题
var normal_title = document.title;
// 监听页面的可见性
document.addEventListener('visibilitychange', function () {
    if (document.visibilityState == 'hidden') {
        // 如果页面不可见
        // 设定新标题
        document.title = 'Oops! 页面崩溃了！';
    } else {
        // 欢迎信息
        document.title = "好耶！页面修好了！";
        // 1 秒后恢复原始信息
        setTimeout(function () {
            document.title = normal_title
        }, 1000)
    }
});

//网站计时
var now = new Date();
		
function createtime() {
    var grt = new Date("08/26/2020 12:00:00"); //此处修改你的建站时间或者网站上线时间 
    now.setTime(now.getTime() + 250);
    days = (now - grt) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if (String(hnum).length == 1) {
        hnum = "0" + hnum;
    }
    minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if (String(mnum).length == 1) {
        mnum = "0" + mnum;
    }
    seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if (String(snum).length == 1) {
        snum = "0" + snum;
    }
    document.getElementById("timeDate").innerHTML = " 本站已经挣扎度过了 " + dnum + " 天 ";
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    // 倒计时截止时间
    var EndTime = new Date('2025/08/26 12:00:00');
    // 现在的事件
    var NowTime = new Date();
    // 时间差（时间单位：ms）
    var time = EndTime.getTime() - NowTime.getTime();
    var day = 0;
    var hour = 0;
    var minutes2 = 0;
    var seconds2 = 0;
    if(time >= 0) {
        // 向下取整
        day = Math.floor(time / 1000 / 60 / 60 / 24);
        hour = Math.floor(time / 1000 / 60 / 60 % 24);
        minutes2 = Math.floor(time / 1000 / 60 % 60);
        seconds2 = Math.floor(time / 1000 % 60);
    }
    // 如果是一位数，前面拼接"0"
    function toDouble(num2) {
        return num2 < 10 ? '0' + num2 : num2;
    }
    
    document.getElementById("lasttime").innerHTML = "Five Years! >>>" + day + "Days "
}
    
setInterval("createtime()", 250);
createtime();