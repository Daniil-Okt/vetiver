import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';


function swiperInit() {
    const aboutSlider = new Swiper('.about__slider', {
        speed: 1400,
        spaceBetween: 0,
        slidesPerView: 1,
        modules: [Autoplay, Pagination],
        loop: true,
        initialSlide: 0,
        autoplay: {
          delay: 4500,
          stopOnLastSlide: false,
          disableOnIteration: false,
        },
      
        pagination: {
          el: ".about__pagination",
          clickable: true,
        },
    });
      
      
    const categorySlider = new Swiper('.category__slider', {
        speed: 1400,
        spaceBetween: 40,
        slidesPerView: 1.21,
        modules: [Navigation, Pagination],
        initialSlide: 0,
      
        navigation: {
          prevEl: ".category__button-prev",
          nextEl: ".category__button-next"
        },
        pagination: {
          el: ".category__pagination",
          clickable: true,
          type: "progressbar"
        },
        breakpoints: {
          461: {
              slidesPerView: 1.5,
              spaceBetween: 40,
              },
          561: {
              slidesPerView: 2,
              spaceBetween: 40,
              },
          721: {
              slidesPerView: 2.5,
              spaceBetween: 40,
              },
          1001: {
            slidesPerView: 3,
            spaceBetween: 40,
            },
          1291: {
              slidesPerView: 3,
              spaceBetween: 100,
          }
        },
    });
      
    const hitsSlider = new Swiper('.hits__slider', {
        speed: 1400,
        spaceBetween: 15,
        slidesPerView: 1,
        modules: [Autoplay, Navigation, Pagination],
        loop: true,
        initialSlide: 1,
      //   autoplay: {
      //     delay: 2500,
      //     stopOnLastSlide: false,
      //     disableOnIteration: false,
      //   },
        navigation: {
          prevEl: ".hits__button-prev",
          nextEl: ".hits__button-next"
        },
        pagination: {
          el: ".hits__pagination",
          clickable: true,
          type: "progressbar"
        },
        breakpoints: {
          361: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
          671: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          901: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          1151: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          1261: {
              slidesPerView: 4,
              spaceBetween: 80,
          }
        },
    });
    
    const catTopSwiper = new Swiper('.cat-top__swiper', {
        speed: 1400,
        spaceBetween: 40,
        slidesPerView: 'auto',
        modules: [Autoplay],
        loop: true,
        autoplay: {
            delay: 4500,
            stopOnLastSlide: false,
            disableOnIteration: false,
        },
        breakpoints: {
        721: {
                slidesPerView: 'auto',
                spaceBetween: 60,
            },
        },
    });
    
    // Инициализация второго слайдера - Thumbs
    const productSliderThumbs = new Swiper('.product__slider-thumbs', {
        speed: 1200,
        spaceBetween: 16,
        slidesPerView: 4,
        initialSlide: 0,
        direction: 'vertical',
    });
    
    // Инициализация основного слайдера - Product Slider
    const productSlider = new Swiper('.product__slider', {
        speed: 1200,
        spaceBetween: 0,
        modules: [Thumbs, Navigation],
        slidesPerView: 1,
        initialSlide: 0,
        // loop: true,
        thumbs: {
        swiper: productSliderThumbs // Связываем thumbs со вторым слайдером
        },
        navigation: {
            prevEl: ".product__button-thumbs-prev",
            nextEl: ".product__button-thumbs-next"
        },
        breakpoints: {
            721: {
                speed: 0,
                slidesPerView: 1,
                spaceBetween: 0,
            },
        }
    });
    



    // const swiper = new Swiper('.swiper', {
      //   speed: 800,
      //   spaceBetween: 16,
      //   slidesPerView: 1.4,
      //   modules: [Autoplay, Navigation, Pagination],
      //   loop: true,
      //   initialSlide: 1,
      //   autoplay: {
      //     delay: 2500,
      //     stopOnLastSlide: false,
      //     disableOnIteration: false,
      //   },
      //   navigation: {
      //     prevEl: ".reviews__button-slider-prev",
      //     nextEl: ".reviews__button-slider-next"
      //   },
      //   pagination: {
      //     el: ".card-slider__pagination",
      //     dynamicBullets: true,
      //     clickable: true,
      //   },
      //   breakpoints: {
      //     1400: {
      //       slidesPerView: 4,
      //       spaceBetween: 24,
      //   	},
      //     1650: {
      //         slidesPerView: 4,
      //         spaceBetween: 48,
      //     }
      //   },
      // });
    
    
}

export default swiperInit;