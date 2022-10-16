$(document).ready(function () {
    $('.container__view-more > button').click(function () {
        console.log('long')
        $(".container__view-more .container__product").animate({
            height: 'toggle'
        }, 'slow');
        $(".container__view-more > button").hide();
    });
});