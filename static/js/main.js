/**
 *
 * Present by Zapic @ 2020
 * https://github.com/KawaiiZapic/Present/
 *
 * Please DO NOT remove this copyright message, as the basic respect for original author.
 *
 * （Fmkli二次修改，将解析xml改为解析json）
 */

NodeList.prototype.forEach = NodeList.prototype.forEach || function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(this[i], this[i], i)
    }
};

function Init(feedPath, bgArr, senArr, Bloglist) {

    function qSlt(selector) {
        return document.querySelector(selector);
    }

    function qSltAll(selector) {
        return document.querySelectorAll(selector);
    }
    function dateParser (str){
        var reg = new RegExp("([0-9]{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ([0-9]{4})");
        reg = reg.exec(str);
        if(!reg){return false;}
        var monthMap = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var day = reg[1];
        var month = monthMap.lastIndexOf(reg[2])+1;
        var year = reg[3];
        return year+"-"+month+"-"+day;
    }
    function setArtTip(content) {
        qSlt(".article-content").classList.add("empty");
        qSlt(".article-content").innerHTML = content;
    }

    function randomSet(set) {
        for (var i = 0; i < set.length; i++) {
            var r = Math.floor(Math.random() * (set.length - i));
            var p = set[r];
            set[r] = set[i];
            set[i] = p;
        }
    }
    function speakOutput(){
        document.getElementById('shuoshuo2').innerHTML = '<p><h3>No.1</h3><h3>Title: ' + title + '</h3><h5>发布于: ' + time2 + '<br>标签：' + biaoqian + '</h5><p>Content: ' + marked.parse(content2) + '</p></p><hr><p><h3>No.2</h3><h3>Title: ' + title2 + '</h3><h5>发布于: ' + time3 + '<br>标签：' + biaoqian2 + '</h5><p>Content: ' + marked.parse(content3) + '</p></p><hr><p><h3>No.3</h3><h3>Title: ' + title3 + '</h3><h5>发布于: ' + time4 + '<br>标签：' + biaoqian3 + '</h5><p>Content: ' + marked.parse(content4) + '</p></p><hr><p><h3>No.4</h3><h3>Title: ' + title4 + '</h3><h5>发布于: ' + time5 + '<br>标签：' + biaoqian4 + '</h5><p>Content: ' + marked.parse(content5) + '</p></p>';
    }
    function articleOutput(){
        document.getElementById('bloglist').innerHTML = '<p><h3>No.1</h3><h3>Title: ' + blogtitle1 + '</h3><h5>发布于: ' + date1 + '<br>最后修改于：' + modified1 + '</h5><a class="link-item-button" href="' + bloglink1 + '"><div>阅读文章</div></a></p><hr><p><h3>No.2</h3><h3>Title: ' + blogtitle2 + '</h3><h5>发布于: ' + date2 + '<br>最后修改于：' + modified2 + '</h5><a class="link-item-button" href="' + bloglink2 + '"><div>阅读文章</div></a></p><hr><p><h3>No.3</h3><h3>Title: ' + blogtitle3 + '</h3><h5>发布于: ' + date3 + '<br>最后修改于：' + modified3 + '</h5><a class="link-item-button" href="' + bloglink3 + '"><div>阅读文章</div></a></p><hr><p><h3>No.4</h3><h3>Title: ' + blogtitle4 + '</h3><h5>发布于: ' + date4 + '<br>最后修改于：' + modified4 + '</h5><a class="link-item-button" href="' + bloglink4 + '"><div>阅读文章</div></a></p><hr><p><h3>No.5</h3><h3>Title: ' + blogtitle5 + '</h3><h5>发布于: ' + date5 + '<br>最后修改于：' + modified5 + '</h5><a class="link-item-button" href="' + bloglink5 + '"><div>阅读文章</div></a></p><hr>';
    }

    function detectOS() {
        var sUserAgent = navigator.userAgent;
        var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
        var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
        if (isMac) detectOS2 = "Mac";
        var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
        if (isUnix) detectOS2 =  "Unix";
        var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
        if (isLinux) detectOS2 = "Linux";
        if (isWin) {
            var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
            if (isWin2K) detectOS2 = "Win2000";
            var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
            if (isWinXP) detectOS2 = "WinXP";
            var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
            if (isWin2003) detectOS2 = "Win2003";
            var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
            if (isWinVista) detectOS2 = "WinVista";
            var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
            if (isWin7) detectOS2 = "Win7";
            var isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
            if (isWin10) detectOS2 = "Win10 or Win11";
        }
        detectOS2 = "other";
    }
	detectOS();
    if (detectOS2 !== "Win10 or Win11"){
        document.getElementById('footer-container').innerText = '您所使用的系统为 ' + detectOS2 + ' ，如果使用低于Win8的系统则可能受到证书兼容性影响无法正常使用'
    }

    //说说
    $.ajax({
        type: "GET",
        url: feedPath,
        dataType: "json",
        success: function (json) {
            title = json.data.items[0].title;
            content2 = json.data.items[0].content;
            time2 = json.data.items[0].updatedAt;
            biaoqian = json.data.items[0].tag.name;

            title2 = json.data.items[1].title;
            content3 = json.data.items[1].content;
            time3 = json.data.items[1].updatedAt;
            biaoqian2 = json.data.items[1].tag.name;

            title3 = json.data.items[2].title;
            content4 = json.data.items[2].content;
            time4 = json.data.items[2].updatedAt;
            biaoqian3 = json.data.items[2].tag.name;

            title4 = json.data.items[3].title;
            content5 = json.data.items[3].content;
            time5 = json.data.items[3].updatedAt;
            biaoqian4 = json.data.items[3].tag.name;

            if (title == ""){
                title = "无题"
            }
            if (title2 == ""){
                title2 = "无题"
            }
            if (title3 == ""){
                title3 = "无题"
            }
            if (title4 == ""){
                title4 = "无题"
            }
            if (content2 == "该内容需登录后查看"){
                content2 = "请前往[说说页面](https://www.imfmkli.top/talk2.html)登录查看"
                title = "登录可查看"
            }
            if (content3 == "该内容需登录后查看"){
                content3 = "请前往[说说页面](https://www.imfmkli.top/talk2.html)登录查看"
                title2 = "登录可查看"
            }
            if (content4 == "该内容需登录后查看"){
                content4 = "请前往[说说页面](https://www.imfmkli.top/talk2.html)登录查看"
                title3 = "登录可查看"
            }
            if (content5 == "该内容需登录后查看"){
                content5 = "请前往[说说页面](https://www.imfmkli.top/talk2.html)登录查看"
                title4 = "登录可查看"
            }
            //t += `<li><a href="${link}" target="_blank">${title} <span class="meta">/ ${time}</span></a></li>`;
            //$('.archive-list').html(t);
            speakOutput();
        },
    });

    // Blog
    $.ajax({
        type: "GET",
        url: Bloglist,
        dataType: "json",

        success: function (json2) {

            bloglink1 = json2[0].link
            date1 = json2[0].date
            modified1 = json2[0].modified
            blogtitle1 = json2[0].title.rendered

            bloglink2 = json2[1].link
            date2 = json2[1].date
            modified2 = json2[1].modified
            blogtitle2 = json2[1].title.rendered

            bloglink3 = json2[2].link
            date3 = json2[2].date
            modified3 = json2[2].modified
            blogtitle3 = json2[2].title.rendered

            bloglink4 = json2[3].link
            date4 = json2[3].date
            modified4 = json2[3].modified
            blogtitle4 = json2[3].title.rendered

            bloglink5 = json2[4].link
            date5 = json2[4].date
            modified5 = json2[4].modified
            blogtitle5 = json2[4].title.rendered

            //t += `<li><a href="${link}" target="_blank">${title} <span class="meta">/ ${time}</span></a></li>`;
            //$('.archive-list').html(t);
            articleOutput();
        },
    });

    var sBg = bgArr[Math.floor(Math.random() * bgArr.length)];
    qSlt(".background-layer").style.backgroundImage = "url(" + sBg.thumb + ")";
    var bgLoader = new Image();
    bgLoader.src = sBg.url;
    var bgTimeout = -1;

    function bgHandler() {
        bgTimeout === -1 ? 0 : clearTimeout(bgTimeout);
        qSlt(".background-layer").style.backgroundImage = "url(" + sBg.url + ")";
        qSlt(".background-layer").classList.remove("loading");
    }

    bgLoader.complete ? bgHandler() : (function () {
        bgLoader.addEventListener("load", bgHandler);
        bgTimeout = setTimeout(function () {
            qSlt(".background-layer").classList.add("loading");
        }, 1000);
    })();
    var doki = new Typinyin();
    set = senArr
    randomSet(senArr);
    doki.setOptions({
        sentences: senArr,
        startDelay: 1000,
        typeSpeed: 100,
        pause: 3000,
        backSpeed: 60,
        cursorChar: "|",
        loop: true,
    });
    window.addEventListener("DOMContentLoaded", function () {
        qSlt(".circle-line").addEventListener("animationiteration", function () {
            doki.attach(".dokidoki-text");
            qSlt(".self-avatar").classList.add("finished");
            qSlt(".content-layer").classList.add("finished");
            setTimeout(function () {
                document.body.classList.remove("locked");
                qSlt(".content-layer").classList.remove("finished");
                qSlt(".self-avatar").classList.add("no-delay");
                doki.init();
            }, 1500);
            qSltAll(".switcher-btn").forEach(function (v) {
                var id = v.id.substr(-1);
                v.addEventListener("click", function () {
                    qSlt(".content-container").setAttribute("data-selection",id);
                });
            });
        }, {once: true});
        qSlt(".content-container").setAttribute("data-selection",1);
    });
    var selfWrapper = qSlt(".self-wrapper");
    var contentCon = qSlt(".content-container");
    var selInd = qSlt(".btn-select-indicator");
    function handleTouchMove(eMove) {
        var rMove = eMove - ((parseInt(contentCon.getAttribute("data-selection")) - 1) / 3 * selfWrapper.offsetWidth);
        if(rMove > 0) {
            rMove = Math.atan(rMove / 200) * 50;
        } else if(rMove < selfWrapper.offsetWidth * -0.6666) {
            rMove = selfWrapper.offsetWidth * -0.6666 + Math.atan((rMove - selfWrapper.offsetWidth * -0.6666) / 200) * 50;
        }
        selfWrapper.style.transform = "translateX(" + (rMove).toString() + "px)";
        selInd.style.transform = "translateX(" + (-rMove/3).toString() + "px)"
    }
    var tid = -1;
    var tMovement = {
        x: [0,0,0,0,0],
        time: [0,0,0,0,0],
        acc: 0
    };
    var eMove = 0;
    qSlt(".self-wrapper").addEventListener("touchstart",function (e){
        tid = e.changedTouches[0].identifier;
        eMove = e.changedTouches[0].pageX;
        selfWrapper.style.transition = "none";
        selInd.style.transition = "none";
    });
    qSlt(".self-wrapper").addEventListener("touchmove",function (e){
        if(e.changedTouches[0].identifier !== tid) {
            return;
        }
        var evt = e.changedTouches[0];
        tMovement.x.unshift(evt.pageX);
        tMovement.time.unshift(e.timeStamp);
        tMovement.x.pop();
        tMovement.time.pop();
        var x = (tMovement.x[0] + tMovement.x[1] + tMovement.x[2] + tMovement.x[3] + tMovement.x[4]) / 5 - evt.pageX;
        var time = e.timeStamp - (tMovement.time[0] + tMovement.time[1] + tMovement.time[2] + tMovement.time[3] + tMovement.time[4]) / 5 ;
        tMovement.acc = x / time;
        handleTouchMove(evt.pageX - eMove);
    });
    qSlt(".self-wrapper").addEventListener("touchcancel",function (){
        tid = -1;
        selfWrapper.style.transition = "";
        selfWrapper.style.transform = "";
        selInd.style.transform = "";
        selInd.style.transition = "";
    });
    qSlt(".self-wrapper").addEventListener("touchend",function (e){
        tid = -1;
        var evt = e.changedTouches[0];
        if(Math.abs(tMovement.acc) > 0.05 || Math.abs(eMove - evt.pageX)  > selfWrapper.offsetWidth * 0.1) {
            var sel = parseInt(contentCon.getAttribute("data-selection"))
            if(tMovement.acc > 0 && sel < 3) {
                contentCon.setAttribute("data-selection", sel + 1);
            } else if(tMovement.acc < 0 &&sel > 1) {
                contentCon.setAttribute("data-selection", sel - 1);
            }
        }
        selfWrapper.style.transition = "";
        selfWrapper.style.transform = "";
        selInd.style.transform = "";
        selInd.style.transition = "";
    });
}
console.log("\n %c Present %c By Zapic \n\n", "color: #fff; background: #fb7299; padding:5px 0;", "background: #efefef; padding:5px 0;");
console.log("%c请注意，本站使用了51.LA统计！", "font-size:20px;color:#f44336;");