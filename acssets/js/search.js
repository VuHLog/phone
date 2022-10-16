


const $ = document.querySelector.bind(document);
// $('.header__search-input').addEventListener('click', function (e) {
//     $('.header__search-history').classList.add('show');
// });
let headerSearch = $('.header__search');
let inputSearch = $('.header__search-input');
let history = $('.header__search-history');
let iconClose = $('.header__search-history-icon-close');

var body = document.getElementsByTagName("BODY")[0];
body.addEventListener('click', function (e) { 
    history.classList.remove('show');
});

inputSearch.addEventListener('focus', function (e) {
    history.classList.add('show');
});


headerSearch.addEventListener('click', function (e) { 
    e.stopPropagation();
});
iconClose.addEventListener('click', function (e) {
    history.classList.remove('show');
});


