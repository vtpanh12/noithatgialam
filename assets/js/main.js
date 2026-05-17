const header = document.getElementById('myHeader');

// Tạo 1 hàm chuyên biệt để kiểm tra vị trí và thu nhỏ
function checkScroll() {
    // Đã sửa: Thay số 50 bằng số 0 để nhạy ngay lập tức
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// 1. Chạy hàm này NGAY LẬP TỨC khi trang vừa tải xong (Sửa lỗi F5)
window.addEventListener('DOMContentLoaded', checkScroll);

// 2. Chạy hàm này LIÊN TỤC mỗi khi có thao tác cuộn chuột
window.addEventListener('scroll', checkScroll);