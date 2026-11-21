const address = '50 Nguyễn Chí Thanh, Hà Nội'

export const restaurantProfile = {
  name: '50 Bistro',
  descriptor: 'Restaurant & Cafe',
  fullName: '50 Bistro — Restaurant & Cafe',
  address,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  hotline: '0919 613 858',
  hotlineTel: '0919613858',
  venue: 'Khách sạn Quốc tế Bảo Sơn',
  seatingCapacity: 'Tối đa 80 khách',
  heroDescription:
    'Không gian phóng khoáng, lãng mạn giữa Hà Nội, với ẩm thực kết hợp Á — Âu tại khu vực Bảo Sơn.',
  aboutTitle: 'Một điểm hẹn giữa lòng Hà Nội',
  aboutDescription:
    '50 Bistro — Restaurant & Cafe nằm tại 50 Nguyễn Chí Thanh, trong khu vực Khách sạn Quốc tế Bảo Sơn.',
  aboutCopy:
    'Không gian được giới thiệu với phong cách phóng khoáng, lãng mạn và đậm chất Âu. Ẩm thực kết hợp Á — Âu cùng đồ uống tạo nên lựa chọn cho những buổi dùng bữa, gặp gỡ hay khoảng thời gian thư giãn tại Hà Nội.',
  galleryDescription:
    'Một điểm hẹn restaurant & cafe tại 50 Nguyễn Chí Thanh, thuộc khu vực Bảo Sơn.',
} as const
