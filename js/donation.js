$(function () {
    $("#tobox2").click(function () {
        $(".step-box2").css("z-index",102)
        $(".back-progress1").css("width","500px")
        $(".list-step-title .step-item .item-numb").eq(1).addClass("numb-active")
        $(".step-box1").addClass("hidden")

    })
    $("#tobox3").click(function () {
        $(".step-box3").css("z-index",103)
        $(".back-progress2").css("width","500px")
        $(".list-step-title .step-item .item-numb").eq(2).addClass("numb-active")
        $(".step-box2").addClass("hidden")

    })
    $(".momey-box .momey-item").eq(0).addClass("radio-active");
    $(".anonymous-box .box-item").eq(1).addClass("item-active");
    $(".bill-box .box-item").eq(1).addClass("item-active");
    $(".momey-box .momey-item").click(function () {
        $(this).addClass("radio-active").siblings().removeClass("radio-active");
    })
    $(".anonymous-box .box-item").click(function () {
        $(this).addClass("item-active").siblings().removeClass("item-active");
    })
    $(".bill-box .box-item").click(function () {
        $(this).addClass("item-active").siblings().removeClass("item-active");
    })
})