$(document).ready(function(){
    $(".i").mouseover(function () {
        $(".i img").attr("src", "images/img_icon2_hover.png");
    });
    $(".i").mouseout(function () {
        $(".i img").attr("src", "images/img_icon2.png");
    });
    
    $(".back").mouseover(function () {
        $(".back img").attr("src", "images/img_back_hover.png");
    });
    $(".back").mouseout(function () {
        $(".back img").attr("src", "images/img_back.png");
    });

        // 按鈕
    $(".hover1").mouseover(function () {
        $(".hover1 img").attr("src", "images/img_about_hover.png");
    });
    $(".hover1").mouseout(function () {
        $(".hover1 img").attr("src", "images/img_about.png");
    });

    $(".hover2").mouseover(function () {
        $(".hover2 img").attr("src", "images/img_bartender_hover.png");
    });
    $(".hover2").mouseout(function () {
        $(".hover2 img").attr("src", "images/img_bartender.png");
    });

    $(".hover3").mouseover(function () {
        $(".hover3 img").attr("src", "images/img_menu_hover.png");
    });
    $(".hover3").mouseout(function () {
        $(".hover3 img").attr("src", "images/img_menu.png");
    });

    $(".hover4").mouseover(function () {
        $(".hover4 img").attr("src", "images/img_contact_hover.png");
    });
    $(".hover4").mouseout(function () {
        $(".hover4 img").attr("src", "images/img_contact.png");
    });

    let page = true;
    $(".page2").hide();
    
    $(".i").click(function () {
        if (page == true) {
            $(".i a").attr("href", "javascript:;");
            $(".page1").hide();
            $("h1").hide();
            $(".page2").show();
            
            page = false;
            
        } else {
            $(".i a").attr("href", "menu.html");
            page = true;
            
        }
    });

    $(".back").click(function () {
        if (page == true) {
            
            $(".back a").attr("href", "index.html");

        } else {
            
            $(".back a").attr("href", "bartender.html");
            
        }
    });

});