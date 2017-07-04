'use strict'

function moveToAbout() {
    $('.linkToAbout').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($(".skillPortfolioWrap").offset().top)
    }, 1000);
  });
}

function moveToPortfolio() {
    $('.linkToPortfolio').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#portfolioPageWrap").offset().top)
    }, 1200);
  });
}

function moveToContact() {
    $('.linkToContact').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#contactWrap").offset().top)
    }, 1200);
  });
}

function scrollNavChange(){         
    var scroll_start = 0;
    var startchange = $('.skillPortfolioWrap');
    var offset = startchange.offset();

    if (startchange.length) {
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();

            if(scroll_start > offset.top) {
                $(".navbar").css({'background': 'white', 
                    'border-bottom': '1px solid #f7f4f4', 'color': 'black'});
                $('.navLink').css({'color': 'black'});
            } else {
                $('.navbar-default').css({'background': 'url(images/background2.jpg) fixed no-repeat', 
                    'background-size': 'cover', 'border-bottom': 'none'});
                $('.navLink').css({'color': 'grey'});
            }
        });
    }
}


$(function() {
    moveToAbout();
    moveToPortfolio();
    moveToContact();
    scrollNavChange();
}) 







