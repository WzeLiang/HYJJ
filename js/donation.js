$(function () {
    $("#tobox2").click(function () {
        $(".step-box2").css("z-index",102)
        $(".back-progress1").css("width","500px")
        $(".list-step-title .step-item .item-numb").eq(1).addClass("numb-active")

    })
    $("#tobox3").click(function () {
        $(".step-box3").css("z-index",103)
        $(".back-progress2").css("width","500px")
        $(".list-step-title .step-item .item-numb").eq(2).addClass("numb-active")

    })
})