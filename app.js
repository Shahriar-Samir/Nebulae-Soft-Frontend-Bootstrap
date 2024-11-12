
new Swiper('.swiper', {

    loop: true,
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        585:{
            slidesPerView:2,
            spaceBetween: 10,
        },
        768:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        1200:{
            slidesPerView:2,
            spaceBetween: 20,
        },
    }

  });

