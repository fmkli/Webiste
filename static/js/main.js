/**
 *
 * Present by Zapic @ 2020
 * https://github.com/KawaiiZapic/Present/
 *
 * Please DO NOT remove this copyright message, as the basic respect for original author.
 *
 */

NodeList.prototype.forEach = NodeList.prototype.forEach || function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback.call(this[i], this[i], i)
    }
};

function Init(feedPath, bgArr, senArr) {

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
    function articleOutput(data){
        $(".article-content").html(`<p class="article-item"><p class="article-title">${title}</p><span class="article-time">${time}</span></p><br><p>${content2}</p>`);
    }
    console.log('loaddone');
    t = ``;
    $.ajax({
        type: "GET",
        url: feedPath,
        dataType: "json",
        success: function (json) {
        console.log('done');
        title = json.data.items[0].title;
        content2 = json.data.items[0].content;
        time = new Date(json.data.items[0].updatedAt).Format("yyyy-MM-dd");
        //t += `<li><a href="${link}" target="_blank">${title} <span class="meta">/ ${time}</span></a></li>`;
        //$('.archive-list').html(t);
        }
    })
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
