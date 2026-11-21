import type {
  ResearchSourceType,
  VerificationStatus,
} from './researchSources'

export type MenuResearchSource = {
  sourceId: string
  url: string
  sourceType: ResearchSourceType
  verification: VerificationStatus
  sourceDate?: string | null
  publishedAt?: string
}

export type MenuAuditClassification =
  | 'verified_official'
  | 'secondary_confirmed'
  | 'secondary_single_source'
  | 'historical'
  | 'uncertain'

export type RawMenuResearchEntry = {
  id: string
  name: string
  category: string
  recordType: 'menu-item' | 'price-reference' | 'promotion'
  price: string | null
  priceStatus: 'current' | 'historical' | 'unknown'
  source: MenuResearchSource
  corroboratingSources?: MenuResearchSource[]
  discoveredAt: string
  notes: string
}

export type MenuResearchEntry = Omit<RawMenuResearchEntry, 'price'> & {
  price: null
  historicalPrice?: string
  reportedPrice?: string
  verification: MenuAuditClassification
  websiteEligible: boolean
}

const discoveredAt = '2026-11-21'

const officialDrinkArticle: MenuResearchSource = {
  sourceId: 'baoson-50-bistro-drink-menu',
  url: 'https://baosonhotels.com/tin-tuc/khach-san-quoc-te-bao-son-ra-mat-menu-do-uong-moi-tuoi-mat-thoi-thuong-va-day-cam-hung',
  sourceType: 'official',
  verification: 'verified',
}

const recentDrinkMention: MenuResearchSource = {
  sourceId: 'hoang-linh-facebook-promo',
  url: 'https://www.facebook.com/reel/1173229882044336/',
  sourceType: 'customer',
  verification: 'likely',
  sourceDate: '2026-11-17',
  publishedAt: '2026-11-17',
}

const tripiSource: MenuResearchSource = {
  sourceId: 'tripi-2025-50-bistro',
  url: 'https://tripi.vn/blog/vi/doi-song/kham-pha-14-quan-bo-ne-bit-tet-ngon-tru-danh-tai-ha-noi-tripi',
  sourceType: 'secondary',
  verification: 'likely',
  sourceDate: '2025-06-02',
  publishedAt: '2025-06-02',
}

const rawMenuResearch: RawMenuResearchEntry[] = [
  {
    id: 'tra-sua-o-long-que-hoa',
    name: 'Trà Sữa Ô Long Quế Hoa',
    category: 'Đồ uống',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: officialDrinkArticle,
    corroboratingSources: [recentDrinkMention],
    discoveredAt,
    notes:
      'Named in an official beverage-menu article and a recent public post. No price was listed; current availability should still be confirmed.',
  },
  {
    id: 'tra-dao-oi-hong',
    name: 'Trà Đào Ổi Hồng',
    category: 'Đồ uống',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: officialDrinkArticle,
    corroboratingSources: [recentDrinkMention],
    discoveredAt,
    notes:
      'Named in an official beverage-menu article and a recent public post. No price was listed; current availability should still be confirmed.',
  },
  {
    id: 'tra-nhai-vai-hoa-hong',
    name: 'Trà Nhài Vải Hoa Hồng',
    category: 'Đồ uống',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: officialDrinkArticle,
    discoveredAt,
    notes:
      'Named in the official beverage-menu article. Publication date, price, and current availability were not established.',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Đồ uống',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: officialDrinkArticle,
    discoveredAt,
    notes:
      'Named in the official beverage-menu article. Publication date, price, and current availability were not established.',
  },
  {
    id: 'lau-ga-hai-nam',
    name: 'Lẩu gà Hải Nam',
    category: 'Món lẩu',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: {
      sourceId: 'baoson-50-bistro-lau-ga-post',
      url: 'https://www.facebook.com/reel/4418842728433749/',
      sourceType: 'official',
      verification: 'verified',
    },
    discoveredAt,
    notes:
      'Bao Son Hotels promotes this dish for 50 Bistro. The post describes a coconut-based broth with chicken, red dates, goji berries, and vegetables; no price is given. Search indexing suggested the post was about three months old, but the exact date was unavailable.',
  },
  {
    id: 'pho-bo-bat-da',
    name: 'Phở bò bát đá',
    category: 'Món Việt',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: {
      sourceId: 'facebook-50-bistro-pho-post',
      url: 'https://www.facebook.com/50BistroRestaurant/posts/b%E1%BA%A1n-%C4%91%C3%A3-k%E1%BB%8Bp-gh%C3%A9-50-bistro-restaurant-cafe-%C4%91%E1%BB%83-th%C6%B0%E1%BB%9Fng-th%E1%BB%A9c-m%C3%B3n-ph%E1%BB%9F-b%C3%A1t-%C4%91%C3%A1-ngon-huy%E1%BB%81n/376153937630557/',
      sourceType: 'official',
      verification: 'likely',
    },
    corroboratingSources: [
      {
        sourceId: 'instagram-50-bistro-pho-post',
        url: 'https://www.instagram.com/p/DTxCD3oEz-J/',
        sourceType: 'official',
        verification: 'likely',
      },
    ],
    discoveredAt,
    notes:
      'The Facebook and Instagram posts both name the dish. Exact post dates, price, and current availability were not confirmed.',
  },
  {
    id: 'banh-mi-lagu',
    name: 'Bánh mì lagu',
    category: 'Bữa sáng',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: {
      sourceId: 'facebook-50-bistro-breakfast-post',
      url: 'https://www.facebook.com/50BistroRestaurant/posts/-%C4%91%E1%BA%BFn-50bistro-v%C3%A0-b%E1%BA%AFt-%C4%91%E1%BA%A7u-ng%C3%A0y-m%E1%BB%9Bi-b%E1%BA%B1ng-m%E1%BB%99t-b%E1%BB%AFa-s%C3%A1ng-ngon-mi%E1%BB%87ng-ph%E1%BB%9F-b%C3%A1t-%C4%91%C3%A1-v%E1%BB%9Bi-n%C6%B0/1565434692269401/',
      sourceType: 'official',
      verification: 'likely',
    },
    discoveredAt,
    notes:
      'Named in a public 50 Bistro Facebook post. Date, price, and current availability were not confirmed.',
  },
  {
    id: 'bun-rieu-bap-bo',
    name: 'Bún riêu bắp bò',
    category: 'Bữa sáng',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'unknown',
    source: {
      sourceId: 'facebook-50-bistro-breakfast-post',
      url: 'https://www.facebook.com/50BistroRestaurant/posts/-%C4%91%E1%BA%BFn-50bistro-v%C3%A0-b%E1%BA%AFt-%C4%91%E1%BA%A7u-ng%C3%A0y-m%E1%BB%9Bi-b%E1%BA%B1ng-m%E1%BB%99t-b%E1%BB%AFa-s%C3%A1ng-ngon-mi%E1%BB%87ng-ph%E1%BB%9F-b%C3%A1t-%C4%91%C3%A1-v%E1%BB%9Bi-n%C6%B0/1565434692269401/',
      sourceType: 'official',
      verification: 'likely',
    },
    corroboratingSources: [
      {
        sourceId: 'facebook-50-bistro-bun-rieu-2021',
        url: 'https://www.facebook.com/50BistroRestaurant/posts/ngon-h%E1%BA%BFt-%C3%BD-m%C3%B3n-b%C3%BAn-ri%C3%AAu-kh%E1%BB%9Fi-%C4%91%E1%BA%A7u-ng%C3%A0y-m%E1%BB%9Bi-t%E1%BA%A1i-50-bistro-restaurant-cafe-b%E1%BB%AFa-s%C3%A1ng/266027178643234/',
        sourceType: 'official',
        verification: 'likely',
        sourceDate: '2021-05-19',
        publishedAt: '2021-05-19',
      },
    ],
    discoveredAt,
    notes:
      'A newer post title names bún riêu bắp bò; the 2021 post independently mentions bún riêu but does not specify the beef topping. Neither establishes current availability.',
  },
  {
    id: 'banh-mi-chao-bit-tet',
    name: 'Bánh mì chảo bít tết',
    category: 'Bữa sáng',
    recordType: 'menu-item',
    price: '60,000 VND',
    priceStatus: 'historical',
    source: tripiSource,
    discoveredAt,
    notes:
      'Tripi article published 2025-06-02 gives this specific item as 60,000 VND. It is not a current official price.',
  },
  {
    id: 'banh-mi-bo-sot-vang',
    name: 'Bánh mì bò sốt vang',
    category: 'Bữa sáng',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: tripiSource,
    discoveredAt,
    notes:
      'Named in the 2025 Tripi listing. The article gives a general 25,000–60,000 VND range for bread items but does not map a specific price to this dish.',
  },
  {
    id: 'banh-mi-pate',
    name: 'Bánh mì pate',
    category: 'Bữa sáng',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: tripiSource,
    discoveredAt,
    notes:
      'Named in the 2025 Tripi listing. The article gives a general 25,000–60,000 VND range for bread items but does not map a specific price to this dish.',
  },
  {
    id: 'che-unspecified',
    name: 'Chè (không rõ loại)',
    category: 'Tráng miệng',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: tripiSource,
    discoveredAt,
    notes:
      'The 2025 article mentions chè generally without naming a variety or price.',
  },
  {
    id: 'mien-xao-cua',
    name: 'Miến xào cua',
    category: 'Món chính',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: {
      sourceId: 'facebook-50-bistro-old-menu-snippet',
      url: 'https://www.facebook.com/50BistroRestaurant/',
      sourceType: 'unknown',
      verification: 'unverified',
    },
    discoveredAt,
    notes:
      'Named in an indexed Facebook snippet from about five years ago. The direct post URL was not recovered; current availability is unknown.',
  },
  {
    id: 'club-sandwich',
    name: 'Club Sandwich',
    category: 'Món chính',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: {
      sourceId: 'facebook-50-bistro-old-menu-snippet',
      url: 'https://www.facebook.com/50BistroRestaurant/',
      sourceType: 'unknown',
      verification: 'unverified',
    },
    discoveredAt,
    notes:
      'Named in an indexed Facebook snippet from about five years ago. The direct post URL was not recovered; current availability is unknown.',
  },
  {
    id: 'my-y-sot-bo-bam',
    name: 'Mỳ Ý sốt bò băm',
    category: 'Món Âu',
    recordType: 'menu-item',
    price: null,
    priceStatus: 'historical',
    source: {
      sourceId: 'facebook-50-bistro-old-menu-snippet',
      url: 'https://www.facebook.com/50BistroRestaurant/',
      sourceType: 'unknown',
      verification: 'unverified',
    },
    discoveredAt,
    notes:
      'Named in an indexed Facebook snippet from about five years ago. The direct post URL was not recovered; current availability is unknown.',
  },
  {
    id: 'historical-banh-mi-price-range',
    name: 'Historical price range for bread items',
    category: 'Bánh mì',
    recordType: 'price-reference',
    price: '25,000–60,000 VND',
    priceStatus: 'historical',
    source: tripiSource,
    discoveredAt,
    notes:
      'A general range from the 2025 article; it is not an item-by-item price list.',
  },
  {
    id: 'recent-breakfast-set-price',
    name: 'Breakfast set starting price',
    category: 'Bữa sáng',
    recordType: 'price-reference',
    price: '60,000++ VND per person',
    priceStatus: 'unknown',
    source: {
      sourceId: 'hoang-linh-facebook-promo',
      url: 'https://www.facebook.com/reel/1173229882044336/',
      sourceType: 'customer',
      verification: 'likely',
      sourceDate: '2026-11-17',
      publishedAt: '2026-11-17',
    },
    discoveredAt,
    notes:
      'Mentioned in a public video by a personal profile. The offer terms, inclusions, and current validity were not confirmed.',
  },
  {
    id: 'recent-set-menu-price',
    name: 'Set menu starting price',
    category: 'Set menu',
    recordType: 'price-reference',
    price: '189,000++ VND',
    priceStatus: 'unknown',
    source: {
      sourceId: 'hoang-linh-facebook-promo',
      url: 'https://www.facebook.com/reel/1173229882044336/',
      sourceType: 'customer',
      verification: 'likely',
      sourceDate: '2026-11-17',
      publishedAt: '2026-11-17',
    },
    discoveredAt,
    notes:
      'The post says a set menu starts at this amount but does not define the menu, serving size, or validity.',
  },
  {
    id: 'google-reported-spend-range',
    name: 'Google-reported spend range',
    category: 'Average spend',
    recordType: 'price-reference',
    price: '100,000–200,000 VND per person',
    priceStatus: 'unknown',
    source: {
      sourceId: 'google-business-50-bistro',
      url: 'https://www.google.com/maps/place/50+Bistro+-+Restaurant+%26+Cafe/data=!4m2!3m1!1s0x0:0xd06cb4113668096f',
      sourceType: 'secondary',
      verification: 'likely',
    },
    discoveredAt,
    notes:
      'Google aggregate spend estimate based on 27 reports when checked; not an official menu price and not a per-dish price.',
  },
  {
    id: 'foody-listed-price-range',
    name: 'Foody venue price range',
    category: 'Average spend',
    recordType: 'price-reference',
    price: '50,000–500,000 VND',
    priceStatus: 'unknown',
    source: {
      sourceId: 'foody-50-bistro-listing',
      url: 'https://www.foody.vn/ha-noi/50-bistro-restaurant-cafe',
      sourceType: 'secondary',
      verification: 'likely',
    },
    discoveredAt,
    notes:
      'Broad directory range with no item-level mapping or clear update date; it conflicts in scope with the Tripi bread range and should not be represented as a current menu price.',
  },
  {
    id: 'hotel-guest-10-percent-discount',
    name: 'Hotel guest dining discount',
    category: 'Promotion',
    recordType: 'promotion',
    price: '10% discount',
    priceStatus: 'unknown',
    source: {
      sourceId: 'baoson-50-bistro-offer',
      url: 'https://baosonhotels.com/uu-dai/nhan-ngay-uu-dai-10-khi-dung-bua-tai-nha-hang-50-bistro-restaurant-cafe',
      sourceType: 'official',
      verification: 'verified',
    },
    corroboratingSources: [
      {
        sourceId: 'hoang-linh-facebook-promo',
        url: 'https://www.facebook.com/reel/1173229882044336/',
        sourceType: 'customer',
        verification: 'likely',
        sourceDate: '2026-11-17',
        publishedAt: '2026-11-17',
      },
    ],
    discoveredAt,
    notes:
      'A hotel-guest offer is described by the official site and repeated in a recent public video. Eligibility details and current validity were not confirmed.',
  },
  {
    id: 'historical-bbq-rib-promotion',
    name: 'Sườn heo Mỹ BBQ gift value in an old promotion',
    category: 'Promotion',
    recordType: 'promotion',
    price: '145,000 VND gift with a bill from 500,000 VND, excluding drinks',
    priceStatus: 'historical',
    source: {
      sourceId: 'facebook-50-bistro-old-menu-snippet',
      url: 'https://www.facebook.com/50BistroRestaurant/',
      sourceType: 'unknown',
      verification: 'unverified',
    },
    discoveredAt,
    notes:
      'Search-indexed as a promotion from about four years ago. It is a historical gift valuation, not a current dish price or active offer; the direct post permalink was not recovered.',
  },
]

const menuAudit: Record<
  string,
  { verification: MenuAuditClassification; websiteEligible: boolean }
> = {
  'tra-sua-o-long-que-hoa': {
    verification: 'verified_official',
    websiteEligible: true,
  },
  'tra-dao-oi-hong': {
    verification: 'verified_official',
    websiteEligible: true,
  },
  'tra-nhai-vai-hoa-hong': {
    verification: 'verified_official',
    websiteEligible: false,
  },
  'matcha-latte': {
    verification: 'verified_official',
    websiteEligible: false,
  },
  'lau-ga-hai-nam': {
    verification: 'verified_official',
    websiteEligible: true,
  },
  'pho-bo-bat-da': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'banh-mi-lagu': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'bun-rieu-bap-bo': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'banh-mi-chao-bit-tet': {
    verification: 'historical',
    websiteEligible: false,
  },
  'banh-mi-bo-sot-vang': {
    verification: 'historical',
    websiteEligible: false,
  },
  'banh-mi-pate': {
    verification: 'historical',
    websiteEligible: false,
  },
  'che-unspecified': {
    verification: 'historical',
    websiteEligible: false,
  },
  'mien-xao-cua': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'club-sandwich': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'my-y-sot-bo-bam': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'historical-banh-mi-price-range': {
    verification: 'historical',
    websiteEligible: false,
  },
  'recent-breakfast-set-price': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'recent-set-menu-price': {
    verification: 'uncertain',
    websiteEligible: false,
  },
  'google-reported-spend-range': {
    verification: 'secondary_single_source',
    websiteEligible: false,
  },
  'foody-listed-price-range': {
    verification: 'secondary_single_source',
    websiteEligible: false,
  },
  'hotel-guest-10-percent-discount': {
    verification: 'verified_official',
    websiteEligible: false,
  },
  'historical-bbq-rib-promotion': {
    verification: 'historical',
    websiteEligible: false,
  },
}

const additionalHistoricalPrices: Record<string, string> = {
  'banh-mi-bo-sot-vang':
    '25,000–60,000 VND for the general bread category; not item-specific',
  'banh-mi-pate':
    '25,000–60,000 VND for the general bread category; not item-specific',
}

export const menuResearch: MenuResearchEntry[] = rawMenuResearch.map(
  (entry) => {
    const audit = menuAudit[entry.id]
    const historicalPrice =
      additionalHistoricalPrices[entry.id] ??
      (entry.priceStatus === 'historical' ? entry.price ?? undefined : undefined)
    const reportedPrice =
      entry.priceStatus === 'unknown' ? entry.price ?? undefined : undefined

    return {
      ...entry,
      price: null,
      ...(historicalPrice ? { historicalPrice } : {}),
      ...(reportedPrice ? { reportedPrice } : {}),
      ...audit,
    }
  },
)

export const researchMenu = menuResearch.filter(
  (entry) => entry.recordType === 'menu-item' && !entry.websiteEligible,
)

export const priceAndPromotionResearch = menuResearch.filter(
  (entry) => entry.recordType !== 'menu-item',
)
