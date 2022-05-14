
// 获取近期文章
document.onreadystatechange = function () {
    if (document.readyState == "complete") {


        /* Posts */
        $.ajax({
            method: 'GET',
            url: 'https://api.rss2json.com/v1/api.json?rss_url=https://blog.imfmkli.top/atom.xml',
            // url: 'https://blog.fmkli.ga/search.json',
            success: function (data) {
                var data = JSON.parse(data).items;
                // var data = JSON.parse(data);
                var container = document.getElementById("posts-label");
                for (var i = 0; i <= 4; i++) {
                    var element = document.createElement('a');
                    element.href = data[i].link;
                    // element.href = "https://blog.imfmkli.top" + data[i].url;
                    element.classList = "gd-box gd-suit gd-rc gd-shadow-20 gd-shadow-h-5";
                    element.textContent = data[i].title;
                    element.target = "blank"
                    container.appendChild(element);
                }
                $("#post-spinner").remove();
            }
        });
        /* CYF 的 API 删了，到时候补上 */
        /* getWeather(); */
    }
}

