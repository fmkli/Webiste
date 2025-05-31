const $ = mdui.$;

// 改变顶部导航栏的颜色
const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

function changeNavColor() {
    console.log(getScrollPosition());
    if (getScrollPosition().y >= window.innerHeight * 0.3) {
        $("body").addClass("mdui-theme-primary-teal")
    } else {
        $("body").removeClass("mdui-theme-primary-teal")
    }
}
window.onscroll = changeNavColor;