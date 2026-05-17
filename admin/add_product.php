<?php
// 1. Kết nối database
require_once '../includes/db_connect.php';

$message = ""; // Biến để chứa thông báo thành công/lỗi

// 2. Kiểm tra nếu người dùng nhấn nút "Thêm sản phẩm"
if (isset($_POST['add_product'])) {
    $name = $_POST['name'];
    $cat_id = $_POST['cat_id'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    
    // Xử lý Upload Ảnh
    $image = $_FILES['image']['name']; // Tên file gốc
    $image_tmp = $_FILES['image']['tmp_name']; // Đường dẫn tạm
    $target = "../assets/images/" . basename($image); // Nơi sẽ lưu file

    // Kiểm tra và di chuyển file
    if (move_uploaded_file($image_tmp, $target)) {
        // Nếu upload file thành công, mới bắt đầu lưu vào Database
        $sql = "INSERT INTO products (name, cat_id, price, description, image) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        if ($stmt->execute([$name, $cat_id, $price, $description, $image])) {
            $message = "<div class='alert alert-success'>Thêm sản phẩm thành công!</div>";
        } else {
            $message = "<div class='alert alert-danger'>Lỗi database!</div>";
        }
    } else {
        $message = "<div class='alert alert-danger'>Không thể upload ảnh!</div>";
    }
}
?>

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Thêm sản phẩm mới</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card shadow">
                    <div class="card-header bg-primary text-white">
                        <h4 class="mb-0">Thêm Sản Phẩm Mới</h4>
                    </div>
                    <div class="card-body">
                        <?php echo $message; ?>
                        
                        <form action="" method="POST" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label class="form-label">Tên sản phẩm</label>
                                <input type="text" name="name" class="form-control" required>
                            </div>

                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Danh mục</label>
                                    <select name="cat_id" class="form-select">
                                        <option value="1">Tủ Bếp</option>
                                        <option value="2">Giường Ngủ</option>
                                        </select>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <label class="form-label">Giá (VNĐ)</label>
                                    <input type="text" name="price" class="form-control" placeholder="Ví dụ: 5.000.000">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Ảnh sản phẩm</label>
                                <input type="file" name="image" class="form-control" accept="image/*" required>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Mô tả sản phẩm</label>
                                <textarea name="description" class="form-control" rows="4"></textarea>
                            </div>

                            <div class="d-grid">
                                <button type="submit" name="add_product" class="btn btn-primary">Lưu sản phẩm</button>
                                <a href="manage_products.php" class="btn btn-link text-center mt-2">Quay lại danh sách</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>