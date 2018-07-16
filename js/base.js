$(function () {
    $(".content .content-tab .tab-item").eq(0).addClass("tab-active")
    $(".content .content-box .box-list").eq(0).show().siblings().hide()
    $(".content .content-tab .tab-item").click(function () {
        $(this).addClass("tab-active").siblings().removeClass("tab-active")
        var aaa=$(this).index()
        console.log((aaa))
        $(".content .content-box .box-list").eq(aaa).show().siblings().hide()
    })
    $(".box-list .list-ul .ul-li").click(function () {
        $(this).parents(".list-ul").css("left","-1200px")
        $(this).parents(".box-list").find(".list-content").css("left",0)
    })

    $(".header-tablist .tab-item").removeClass("visit")
    var aa = window.sessionStorage? sessionStorage.getItem("index"): Cookie.read("index");
    $(".header-tablist .tab-item").eq(aa).addClass("visit")

    $(".header-tablist .tab-item").click(function(){
        var bb=$(this).index();
        $(this).addClass("visit").siblings().removeClass("visit")
        sessionStorage.setItem("index", bb);


    })

})