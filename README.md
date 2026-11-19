# An Nhiên Restaurant

Website giới thiệu nhà hàng, được xây dựng bằng React, Vite, TypeScript và CSS thuần.

## Chạy website

Mở PowerShell trong thư mục project và chạy:

```powershell
npm.cmd run dev
```

Mở địa chỉ được hiển thị trong terminal để xem website.

## Kiểm tra bản build

```powershell
npm.cmd run build
```

## Đặt bàn

Biểu mẫu đặt bàn hiện chỉ là demo frontend; thông tin không được gửi hoặc lưu.
Website cần backend để xử lý yêu cầu đặt bàn thực tế.

## Cấu trúc chính

- `src/components/`: các phần giao diện như header, thực đơn, gallery và footer.
- `src/data/restaurantData.ts`: món ăn, nhóm thực đơn, ảnh và đánh giá mẫu.
- `src/App.css`: bố cục, màu sắc và responsive cho website.
- `src/index.css`: kiểu chữ và thiết lập chung toàn trang.

Thông tin liên hệ, giá món và đánh giá là dữ liệu minh họa. Ảnh được tải từ Unsplash nên cần kết nối Internet để hiển thị.
