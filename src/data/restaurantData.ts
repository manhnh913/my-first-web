const imageUrl = (photoId: string, width: number) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`

export const restaurantImages = {
  hero: imageUrl('photo-1517248135467-4c7edcad34c4', 1400),
  about: imageUrl('photo-1414235077428-338989a2e8c0', 1000),
}

export const restaurantStats = [
  { value: '10+', label: 'năm kinh nghiệm' },
  { value: '50+', label: 'món ăn thân quen' },
  { value: '1.000+', label: 'lượt khách ghé thăm' },
]

export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
  image?: string
  imageAlt?: string
  tag?: string
  featured?: boolean
}

export type MenuCategory = {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'khai-vi',
    name: 'Khai vị',
    description: 'Khởi đầu nhẹ nhàng',
    items: [
      {
        id: 'goi-cuon-tom-thit',
        name: 'Gỏi cuốn tôm thịt',
        description: 'Rau thơm, bún tươi, sốt đậu phộng',
        price: '89.000đ',
      },
      {
        id: 'cha-gio-an-nhien',
        name: 'Chả giò An Nhiên',
        description: 'Cuốn giòn mỗi ngày, dùng cùng rau sống',
        price: '79.000đ',
      },
      {
        id: 'salad-vuon-nha',
        name: 'Salad vườn nhà',
        description: 'Rau theo mùa, hạt dinh dưỡng và sốt mè rang nhà làm.',
        price: '95.000đ',
        image: imageUrl('photo-1546069901-ba9599a7e63c', 800),
        imageAlt: 'Tô salad rau củ tươi với nhiều màu sắc',
        tag: 'Được yêu thích',
        featured: true,
      },
    ],
  },
  {
    id: 'mon-chinh',
    name: 'Món chính',
    description: 'Đậm đà, tròn vị',
    items: [
      {
        id: 'ca-hoi-ap-chao',
        name: 'Cá hồi áp chảo',
        description: 'Cá hồi mềm mọng, rau củ theo mùa và sốt bơ chanh dịu nhẹ.',
        price: '219.000đ',
        image: imageUrl('photo-1467003909585-2f8a72700288', 800),
        imageAlt: 'Món cá áp chảo được bày trí tinh tế',
        featured: true,
      },
      {
        id: 'bo-nuong-sot-tieu',
        name: 'Bò nướng sốt tiêu',
        description: 'Thịt bò nướng mềm, ăn cùng cà chua, rau củ và sốt tiêu xanh.',
        price: '189.000đ',
        image: imageUrl('photo-1544025162-d76694265947', 800),
        imageAlt: 'Thịt bò nướng bày trên thớt cùng cà chua và rau củ',
        featured: true,
      },
      {
        id: 'ga-nuong-thao-moc',
        name: 'Gà nướng thảo mộc',
        description: 'Gà nướng vàng thơm, ăn cùng khoai củ và sốt chấm nhà làm.',
        price: '129.000đ',
        image: imageUrl('photo-1555939594-58d7cb561ad1', 800),
        imageAlt: 'Gà nướng vàng thơm dùng cùng khoai củ và nước chấm',
        featured: true,
      },
    ],
  },
  {
    id: 'mon-viet',
    name: 'Món Việt',
    description: 'Hương vị thân quen',
    items: [
      {
        id: 'pho-bo-an-nhien',
        name: 'Phở bò An Nhiên',
        description: 'Nước dùng ninh chậm, bánh phở mềm và rau thơm tươi mỗi ngày.',
        price: '95.000đ',
        image: imageUrl('photo-1582878826629-29b7ad1cdc43', 800),
        imageAlt: 'Tô phở bò với bánh phở, thịt bò và hành xanh',
        featured: true,
      },
      {
        id: 'bun-cha-ha-noi',
        name: 'Bún chả Hà Nội',
        description: 'Thịt nướng, bún tươi, nước chấm nhà làm',
        price: '129.000đ',
      },
      {
        id: 'canh-chua-ca',
        name: 'Canh chua cá',
        description: 'Nấu cùng rau củ và vị chua dịu',
        price: '139.000đ',
      },
    ],
  },
  {
    id: 'do-uong',
    name: 'Đồ uống',
    description: 'Mát lành, dễ chịu',
    items: [
      {
        id: 'tra-sen-an-nhien',
        name: 'Trà sen An Nhiên',
        description: 'Trà ướp sen, dùng nóng hoặc lạnh',
        price: '49.000đ',
      },
      {
        id: 'nuoc-ep-theo-mua',
        name: 'Nước ép theo mùa',
        description: 'Trái cây tươi ép nguyên chất',
        price: '59.000đ',
      },
      {
        id: 'tra-tac-mat-ong',
        name: 'Trà tắc mật ong',
        description: 'Tắc tươi, mật ong dịu ngọt',
        price: '45.000đ',
      },
    ],
  },
  {
    id: 'trang-mieng',
    name: 'Tráng miệng',
    description: 'Khép lại thật dịu dàng',
    items: [
      {
        id: 'che-khuc-bach',
        name: 'Chè khúc bạch',
        description: 'Vị ngọt thanh, hạnh nhân rang và trái cây theo mùa.',
        price: '59.000đ',
        image: imageUrl('photo-1488477181946-6428a0291777', 800),
        imageAlt: 'Món tráng miệng ngọt với trái cây tươi',
        tag: 'Ngọt lành',
        featured: true,
      },
      {
        id: 'tau-hu-gung',
        name: 'Tàu hũ gừng',
        description: 'Tàu hũ mềm mịn trong nước gừng ấm thơm',
        price: '45.000đ',
      },
      {
        id: 'trai-cay-theo-mua',
        name: 'Trái cây theo mùa',
        description: 'Các loại trái cây tươi được chọn trong ngày',
        price: '69.000đ',
      },
    ],
  },
]

export type FeaturedDish = Omit<MenuItem, 'image' | 'imageAlt'> &
  Required<Pick<MenuItem, 'image' | 'imageAlt'>> & {
    categoryId: string
    categoryName: string
  }

export const featuredDishes: FeaturedDish[] = menuCategories.flatMap(
  (category) =>
    category.items.flatMap((item) => {
      if (!item.featured) return []

      if (!item.image || !item.imageAlt) {
        throw new Error(`Featured menu item "${item.id}" needs an image and alt text.`)
      }

      return [
        {
          ...item,
          image: item.image,
          imageAlt: item.imageAlt,
          categoryId: category.id,
          categoryName: category.name,
        },
      ]
    }),
)

type GalleryImage = {
  id: string
  src: string
  alt: string
  caption: string
}

export const restaurantGallery: GalleryImage[] = [
  {
    id: 'ban-an-am-cung',
    src: imageUrl('photo-1414235077428-338989a2e8c0', 1000),
    alt: 'Bàn ăn được sắp đặt trong không gian nhà hàng ấm cúng',
    caption: 'Bàn ăn ấm cúng',
  },
  {
    id: 'goc-nha-hang',
    src: imageUrl('photo-1517248135467-4c7edcad34c4', 800),
    alt: 'Góc bàn ăn bên cửa sổ trong nhà hàng',
    caption: 'Góc nhỏ thân quen',
  },
  {
    id: 'anh-den-am',
    src: imageUrl('photo-1559339352-11d035aa65de', 800),
    alt: 'Ánh đèn vàng dịu trong không gian nhà hàng',
    caption: 'Ánh đèn dịu dàng',
  },
  {
    id: 'khong-gian-xanh',
    src: imageUrl('photo-1555396273-367ea4eb4db5', 800),
    alt: 'Không gian nhà hàng có bàn ghế gỗ và cây xanh',
    caption: 'Chút xanh trong nhà',
  },
  {
    id: 'ban-tiec',
    src: imageUrl('photo-1514933651103-005eec06c04b', 800),
    alt: 'Bàn tiệc được chuẩn bị cho buổi gặp mặt',
    caption: 'Sẵn sàng đón bạn',
  },
  {
    id: 'mon-an-tai-ban',
    src: imageUrl('photo-1504674900247-0877df9cc836', 800),
    alt: 'Món ăn nóng được mang ra bàn',
    caption: 'Món ngon vừa lên',
  },
]

type CustomerReview = {
  id: string
  name: string
  note: string
  quote: string
  rating: number
}

export const customerReviews: CustomerReview[] = [
  {
    id: 'minh-anh',
    name: 'Minh Anh',
    note: 'Khách ghé cuối tuần',
    quote:
      'Không gian dễ chịu, món ăn vừa miệng và nhân viên rất thân thiện. Một nơi phù hợp để cả nhà cùng dùng bữa.',
    rating: 5,
  },
  {
    id: 'quoc-bao',
    name: 'Quốc Bảo',
    note: 'Khách ghé cùng bạn bè',
    quote:
      'Mình thích cách quán giữ hương vị Việt mà trình bày vẫn thật tinh tế. Chắc chắn sẽ quay lại.',
    rating: 5,
  },
  {
    id: 'thao-nguyen',
    name: 'Thảo Nguyên',
    note: 'Khách ghé buổi trưa',
    quote:
      'Bữa trưa ngon lành giữa trung tâm thành phố. Phần ăn chỉn chu, trà sen cũng rất thơm.',
    rating: 5,
  },
]
