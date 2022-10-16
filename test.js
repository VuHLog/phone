$(document).ready(function(){
    openSearchFilter();
    checkBlurSearch();
    test();
    historyCheck();
});


var historySearch = $('.header__search-history');
var historySearchData = $('.header__search-history ul li a');
var close = true;
var inputSearch = $('input.header__search-input');

function toggleSearch() {
    $(historySearch).toggleClass('dis-block');
}

function openSearchFilter() {
    $(inputSearch).click(() => {
        this.toggleSearch();
    })
}

function test() {

}

function historyCheck() {
    let me = this;
    $('.header__search-history ul li a').click(function () { 
        me.checkBlurThat = !me.checkBlurThat;
        console.log(me.checkBlurThat);
    })
}



function checkBlurSearch() {
    $(inputSearch).blur(() => {
        if (close === false) {
            this.toggleSearch();
        } else {
            
        }
    });
}