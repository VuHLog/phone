// let currentIndex = 1;
// showSlides(currentIndex);

// function plusSlides(n) {
//     showSlides(currentIndex += n);
// }
// function currentSlide(n) {
//     showSlides(currentIndex = n);
// }
// function showSlides(n) {
//     let slides = document.querySelectorAll('.mySlides');
//     let captionContent = document.querySelector('.container_top-banner .caption-content');
//     let slidesDemo = document.querySelectorAll('.container_top-banner .demo');
//     if (n > slides.length) {
//         currentIndex = 1;
//     }
//     if (n < 1) currentIndex = slides.length;
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     for (let i = 0; i < slidesDemo.length; i++) {
//         slidesDemo[i].className = slidesDemo[i].className.replace('active', ' ');
//     }
//     slides[currentIndex-1].style.display = 'block';
//     slidesDemo[currentIndex - 1].classList.add('active');
//     captionContent.innerHTML = slidesDemo[currentIndex - 1].alt;
// }
$(document).ready(function () {
  $(".image-slider").slick({
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