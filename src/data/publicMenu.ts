export type PublicMenuCategoryId = 'food' | 'drinks'

export type PublicMenuItem = {
  id: string
  name: string
  categoryId: PublicMenuCategoryId
  category: string
  sourceId: string
  verification: 'VERIFIED_OFFICIAL'
}

export const publicMenu: PublicMenuItem[] = [
  {
    id: 'lau-ga-hai-nam',
    name: 'Lẩu gà Hải Nam',
    categoryId: 'food',
    category: 'Món ăn',
    sourceId: 'baoson-50-bistro-lau-ga-post',
    verification: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'tra-sua-o-long-que-hoa',
    name: 'Trà Sữa Ô Long Quế Hoa',
    categoryId: 'drinks',
    category: 'Đồ uống',
    sourceId: 'baoson-50-bistro-drink-menu',
    verification: 'VERIFIED_OFFICIAL',
  },
  {
    id: 'tra-dao-oi-hong',
    name: 'Trà Đào Ổi Hồng',
    categoryId: 'drinks',
    category: 'Đồ uống',
    sourceId: 'baoson-50-bistro-drink-menu',
    verification: 'VERIFIED_OFFICIAL',
  },
]

export const publicMenuCategories = [
  { id: 'food', name: 'Món ăn' },
  { id: 'drinks', name: 'Đồ uống' },
] as const
