const header = document.getElementById('myHeader');

function checkScroll() {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}
window.addEventListener('DOMContentLoaded', checkScroll);
window.addEventListener('scroll', checkScroll);
const swiperCard = new Swiper('.productSwiper', {
    
    slidesPerView: 2, 
    spaceBetween: 20, 
    loop: true,       
    autoplay: {       
             delay: 3000,  
             disableOnInteraction: false, 
         },

    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {    
             640: {
                 slidesPerView: 2, 
             },
             992: {
                 slidesPerView: 4, 
             },
         },
});
const swiperList = new Swiper('.productListSwiper',{
    slidesPerView: 2, 
    spaceBetween: 30, 
    loop: true,       
    autoplay: {       
             delay: 3000,  
             disableOnInteraction: false, 
         },

    
    navigation: {
        nextEl: '.swiper-buttonList-next',
        prevEl: '.swiper-buttonList-prev',
    },
    breakpoints: {    
             640: {
                 slidesPerView: 2, 
             },
             992: {
                 slidesPerView: 5, 
             },
         },
});
const comboSwiper = new Swiper('.comboSwiper', {
    loop: false, 
    
    grabCursor: true, 

    slidesPerView: 2, 
    grid: {
        rows: 2, 
        fill: 'row' 
    },
    spaceBetween: 15, 

    breakpoints: {
        768: {
            slidesPerView: 3, 
            grid: {
                rows: 1,
            },
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4, 
            grid: {
                rows: 1, 
            },
            spaceBetween: 30,
        }
    }
});
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


