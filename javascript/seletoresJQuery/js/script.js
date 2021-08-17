$(document).ready(function () {
    // EX 1
    $("h2").css({
        backgroundColor: "green"
    })

    // EX 2
    $(".buttons").parent().css({
        backgroundColor: "red"
    })

    // EX 3
    $(".module").has("*").css({
        backgroundColor: "blue"
    })

    // EX 4
    $(".module").find("li").eq(2).css({
        backgroundColor: "green"
    })

    // EX 5
    $("#myList li").first().css({
        backgroundColor: "yellow"
    })

    // EX 6
    $("#slideshow li").last().css({
        backgroundColor: "black"
    })

    // EX 7
    if ($("#search").eq(0).is(":visible")) {
        alert("O elemento form é filho de search");
    } else {
        alert("O elemento form não é filho de search")
    }

    // EX 8
    $("ul").not("#slideshow").css({
        backgroundColor: "blue"
    })

    // EX 9
    $("li").has("p").css({
        backgroundColor: "pink"
    })

    // EX 10
    $("#myListItem").html("Este é um novo item de lista");

    // EX 11
    $(".selected").next().css({
        backgroundColor: "gray"
    })

    // EX 12
    $(".input_text").prev().css({
        backgroundColor: "gray"
    })

    // EX 13
    $("#listItem_2").siblings().css({
        backgroundColor: "green"
    })

    // EX 14
    $("[src]").css({
        backgroundColor: "yellow"
    })

    // EX 15
    $("#header, #nav").find(".selected")

    // EX 16
    $("[type='text']");

    // EX 17
    $("[value]");

    // EX 18
    $("[type]").not("[type='submit']").css({
        backgroundColor: "red"
    })

    // EX 19
    $("[href^='blog']").css({
        backgroundColor: "green"
    })

    // EX 20
    $("[value$='a']").css({
        backgroundColor: "red"
    })

    // EX 20
    $("[href*='html']").css({
        backgroundColor: "gray"
    })

    // EX 21
    $("[href*='html']").css({
        backgroundColor: "gray"
    })
})