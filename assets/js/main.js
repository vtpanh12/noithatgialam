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
    // autoplay: {       
    //          delay: 3000,  
    //          disableOnInteraction: false, 
    //      },

    
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
    // breakpoints: {
    //     0: {
    //         slidesPerView: 2.2,
    //         // Khoảng cách giữa các vòng tròn trên Mobile (15px)
    //         spaceBetween: 15, 
    //     },
    //     768: {
    //         slidesPerView: 3.5,
    //         // Khoảng cách trên Tablet (30px)
    //         spaceBetween: 30, 
    //     },
    //     1024: {
    //         slidesPerView: 5,
    //         // TĂNG KHOẢNG CÁCH TRÊN PC: Bạn thay đổi con số này (ví dụ: 50, 60, 80)
    //         // Số càng lớn, các vòng tròn càng cách xa nhau
    //         spaceBetween: 60, 
    //     },
    // }
});
const comboSwiper = new Swiper('.comboSwiper', {
    // Không tự động loop như bạn yêu cầu
    loop: false, 
    
    // Con trỏ bàn tay kéo thả
    grabCursor: true, 

    // LOGIC MOBILE (Mặc định): 2 cột, 2 hàng = 4 thẻ
    slidesPerView: 2, 
    grid: {
        rows: 2, 
        fill: 'row' // Đổ data theo hàng ngang trước
    },
    spaceBetween: 15, // Khoảng cách trên mobile

    // LOGIC RESPONSIVE BẺ CONG GIAO DIỆN
    breakpoints: {
        // Màn hình Tablet (iPad)
        768: {
            slidesPerView: 3, 
            grid: {
                rows: 1, // Trở về 1 hàng ngang
            },
            spaceBetween: 20,
        },
        // Màn hình Laptop/PC (Đúng yêu cầu: 4 thẻ trên 1 hàng)
        1024: {
            slidesPerView: 4, 
            grid: {
                rows: 1, // Khóa cứng 1 hàng ngang
            },
            spaceBetween: 30, // Giãn cách rộng ra cho thoáng
        }
    }
});


