'use strict'

function moveToPortfolio() {
    $('.linkToPortfolio').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#portfolioPageWrap").offset().top)
    }, 1500);
  });
}

function moveToContact() {
    $('.linkToContact').click(function(event) {
        event.preventDefault();
    $('html, body').animate({
        scrollTop: parseInt($("#contactWrap").offset().top)
    }, 1500);
  });
}

$(function() {
    moveToPortfolio();
    moveToContact();
}) 