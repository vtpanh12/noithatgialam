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
const swiper = new Swiper('.productSwiper', {
    
    slidesPerView: 2, 
    spaceBetween: 20, 
    // loop: true,       
    // autoplay: {       
    //          delay: 3000,  
    //          disableOnInteraction: false, 
    //      },

    
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

