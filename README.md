# 50 Bistro — Restaurant & Cafe

Website giới thiệu 50 Bistro tại Hà Nội, xây dựng bằng React, Vite, TypeScript và CSS thuần.

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

## Thông tin website

- Website chỉ hiển thị ba tên món/đồ uống có nguồn chính thức; giá và mô tả chi tiết chưa được xác nhận.
- Không sử dụng ảnh nhà hàng hoặc món ăn. Các hình ảnh đồ họa trên trang là minh họa, không phải ảnh thực tế.
- Giờ phục vụ, giá, menu đầy đủ và một số tài khoản liên hệ chưa được xác nhận để hiển thị công khai.
- Biểu mẫu đặt bàn chỉ kiểm tra dữ liệu cục bộ; không gửi yêu cầu đến nhà hàng.

## Cấu trúc chính

- `src/components/`: header, giới thiệu, menu, không gian, liên hệ và form demo.
- `src/data/restaurantData.ts`: thông tin nhà hàng được dùng công khai.
- `src/data/publicMenu.ts`: danh sách món/đồ uống được phép render.
- `src/data/menuResearch.ts`: dữ liệu menu và giá chỉ dùng cho nghiên cứu.
- `src/data/researchSources.ts`: nguồn, trạng thái xác minh, giờ phục vụ và contact nghiên cứu.
- `src/data/imageResearch.ts`: tham chiếu ảnh; chưa xác nhận quyền sử dụng.
- `src/App.css`: bố cục, màu sắc và responsive.
- `src/index.css`: kiểu chữ và thiết lập chung toàn trang.

Hotline đặt bàn và thông tin cơ bản được đối chiếu với Bảo Sơn. Giờ phục vụ, menu đầy đủ, giá, email riêng, social, logo và quyền sử dụng ảnh cần được nhà hàng xác nhận thêm.
