
new Swiper('.swiper', {

    loop: true,
  

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        0:{
            slidesPerView:1
        },
        1024:{
            slidesPerView:2
        },
    }

  });

