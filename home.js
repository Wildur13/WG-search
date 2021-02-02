$(document).ready(function(){
    $('.blue').hover(function(){
        $('.inser-options').addClass("show");
    }, function(){
        $('.inser-options').removeClass("show");
    });
    $(".inser-options").hover(function(){
        $(".inser-options").addClass("show");
    }, function(){
        $(".inser-options").removeClass("show");
    });
    $('.ang').hover(function(){
        $('.angebot-options').addClass("show1");
    },
    function(){
        $('.angebot-options').removeClass("show1");
    });
    $('.angebot-options').hover(function(){
        $('.angebot-options').addClass("show1");
    }, function(){
        $('.angebot-options').removeClass("show1");
    });
    $('.suche').hover(function(){
        $('.gesuche-options').addClass("show2");
        }, function(){
            $('.gesuche-options').removeClass("show2");
    });
    $('.gesuche-options').hover(function(){
        $('.gesuche-options').addClass("show2");
        }, function(){
            $('.gesuche-options').removeClass("show2");
    });
    $('.mein').hover(function(){
        $('.mein-options').addClass("show3");
    }, function(){
        $('.mein-options').removeClass("show3");
    })
    $('.mein-options').hover(function(){
        $('.mein-options').addClass("show3");
    }, function(){
        $('.mein-options').removeClass("show3");
    });
    $('.hilfe').hover(function(){
        $('.hilfe-options').addClass("show4");
    }, function(){
        $('.hilfe-options').removeClass("show4");
    });
    $('.hilfe-options').hover(function(){
        $('.hilfe-options').addClass("show4");
    }, function(){
        $('.hilfe-options').removeClass("show4");
    });
    $('.info').hover(function(){
        $('.info-options').addClass("show5");
    }, function(){
        $('.info-options').removeClass("show5");
    });
    $('.info-options').hover(function(){
        $('.info-options').addClass("show5");
    }, function(){
        $('.info-options').removeClass("show5");
    });

});