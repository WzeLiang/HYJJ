$(function () {
    // $(".content .content-tab .tab-item").eq(0).addClass("tab-active")
    // $(".content .content-box .box-list").eq(0).show().siblings().hide()
    // $(".content .content-tab .tab-item").click(function () {
    //     $(this).addClass("tab-active").siblings().removeClass("tab-active")
    //     var aaa=$(this).index()
    //     console.log((aaa))
    //     $(".content .content-box .box-list").eq(aaa).show().siblings().hide()
    // })
    //header tab记录
    $(".header-tablist .tab-item").removeClass("visit")
    var aa = window.sessionStorage? sessionStorage.getItem("index"): Cookie.read("index");
    $(".header-tablist .tab-item").eq(aa).addClass("visit")

    $(".header-tablist .tab-item").click(function(){
        var bb=$(this).index();
        $(this).addClass("visit").siblings().removeClass("visit")
        sessionStorage.setItem("index", bb);
    });
    //二级菜单 tab记录
    $(".content-tab .tab-item").removeClass("tab-active");
    var secendindex=window.sessionStorage? sessionStorage.getItem("secendindex"): Cookie.read("secendindex");
    if(!secendindex){
        secendindex=0
    }
    $(".content-tab .tab-item").eq(secendindex).addClass("tab-active")
    $(".content .content-box .box-list").eq(secendindex).show().siblings().hide()
    $(".content-tab .tab-item").click(function () {
        var ccc=$(this).index();
        $(this).addClass("tab-active").siblings().removeClass("tab-active")
        $(".content .content-box .box-list").eq(ccc).show().siblings().hide()
        sessionStorage.setItem("secendindex", ccc);

    })
})