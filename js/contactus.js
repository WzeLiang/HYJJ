$(function () {

    $(".date-box .date-item").eq(0).addClass("radio-active");
    $(".sex-box .box-item").eq(0).addClass("item-active");
    $(".date-box .date-item").click(function () {
        $(this).addClass("radio-active").siblings().removeClass("radio-active");
    })
    $(".sex-box .box-item").click(function () {
        $(this).addClass("item-active").siblings().removeClass("item-active");
    })

})