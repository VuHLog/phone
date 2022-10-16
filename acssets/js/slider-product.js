$(document).ready(function () {
  $(".product-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    dots: true,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
