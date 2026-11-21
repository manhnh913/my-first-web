import {
  officialRestaurantPhotoReferences,
  type ResearchSourceType,
  type VerificationStatus,
} from './researchSources'

export type ResearchImageType =
  | 'dish'
  | 'interior'
  | 'exterior'
  | 'menu'
  | 'logo'
  | 'drink'
  | 'unknown'

export type ResearchImage = {
  id: string
  url: string
  pageUrl: string
  sourceId: string
  sourceType: ResearchSourceType
  imageOrigin: 'official' | 'customer' | 'third-party' | 'unknown'
  verification: VerificationStatus
  type: ResearchImageType
  subject: string
  discoveredAt: string
  sourceDate?: string | null
  websiteEligible: boolean
  reusePermission: 'unconfirmed'
  notes: string
}

const discoveredAt = '2026-11-21'

export const imageResearch: ResearchImage[] = [
  ...officialRestaurantPhotoReferences.map((photo, index) => ({
    id: `baoson-official-photo-${index + 1}`,
    url: photo.url,
    pageUrl: 'https://baosonhotels.com/am-thuc/50-bistro',
    sourceId: 'baoson-50-bistro',
    sourceType: 'official' as const,
    imageOrigin: 'official' as const,
    verification: 'verified' as const,
    type: 'unknown' as const,
    subject: 'Official 50 Bistro restaurant photo; individual scene not classified',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed' as const,
    notes:
      'Retained from the existing research data. The image was not downloaded; reuse permission is unconfirmed.',
  })),
  {
    id: 'baoson-drink-menu-image',
    url: 'https://baosonhotels.com/Upload/tin-tuc/do_uong_1920px.png',
    pageUrl:
      'https://baosonhotels.com/tin-tuc/khach-san-quoc-te-bao-son-ra-mat-menu-do-uong-moi-tuoi-mat-thoi-thuong-va-day-cam-hung',
    sourceId: 'baoson-50-bistro-drink-menu',
    sourceType: 'official',
    imageOrigin: 'official',
    verification: 'verified',
    type: 'drink',
    subject: 'Beverage-menu campaign image associated with 50 Bistro',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'The page connects the image to a new 50 Bistro drinks menu; individual pictured drinks were not identified.',
  },
  {
    id: 'baoson-drink-menu-og-image',
    url: 'https://baosonhotels.com/Upload/tin-tuc/2000px_copy_2.png',
    pageUrl:
      'https://baosonhotels.com/tin-tuc/khach-san-quoc-te-bao-son-ra-mat-menu-do-uong-moi-tuoi-mat-thoi-thuong-va-day-cam-hung',
    sourceId: 'baoson-50-bistro-drink-menu',
    sourceType: 'official',
    imageOrigin: 'official',
    verification: 'likely',
    type: 'drink',
    subject: 'Beverage-menu article social preview image',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'Open Graph image reference from the official article; individual pictured drinks were not identified.',
  },
  {
    id: 'facebook-lau-ga-hai-nam-image',
    url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1439346928211512',
    pageUrl: 'https://www.facebook.com/reel/4418842728433749/',
    sourceId: 'baoson-50-bistro-lau-ga-post',
    sourceType: 'official',
    imageOrigin: 'official',
    verification: 'verified',
    type: 'dish',
    subject: 'Lẩu gà Hải Nam, as identified in the Bao Son Hotels post',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'Google Images exposed this Facebook media URL for the hotel post. Direct image loading was blocked, so the visual itself was not independently inspected.',
  },
  {
    id: 'facebook-pho-bat-da-image',
    url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1308342374645302',
    pageUrl:
      'https://www.facebook.com/50BistroRestaurant/posts/b%E1%BA%A1n-%C4%91%C3%A3-k%E1%BB%8Bp-gh%C3%A9-50-bistro-restaurant-cafe-%C4%91%E1%BB%83-th%C6%B0%E1%BB%9Fng-th%E1%BB%A9c-m%C3%B3n-ph%E1%BB%9F-b%C3%A1t-%C4%91%C3%A1-ngon-huy%E1%BB%81n/376153937630557/',
    sourceId: 'facebook-50-bistro-pho-post',
    sourceType: 'official',
    imageOrigin: 'unknown',
    verification: 'likely',
    type: 'dish',
    subject: 'Pho bat da, as identified in the Facebook post caption',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'Image URL was exposed by Google Images. The image was not downloaded or visually inspected.',
  },
  {
    id: 'facebook-breakfast-dishes-image',
    url: 'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1078589458045225',
    pageUrl:
      'https://www.facebook.com/50BistroRestaurant/posts/-%C4%91%E1%BA%BFn-50bistro-v%C3%A0-b%E1%BA%AFt-%C4%91%E1%BA%A7u-ng%C3%A0y-m%E1%BB%9Bi-b%E1%BA%B1ng-m%E1%BB%99t-b%E1%BB%AFa-s%C3%A1ng-ngon-mi%E1%BB%87ng-ph%E1%BB%9F-b%C3%A1t-%C4%91%C3%A1-v%E1%BB%9Bi-n%C6%B0/1565434692269401/',
    sourceId: 'facebook-50-bistro-breakfast-post',
    sourceType: 'official',
    imageOrigin: 'unknown',
    verification: 'likely',
    type: 'dish',
    subject: 'Breakfast post covering pho bat da, banh mi lagu, and bun rieu bap bo',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'The source title names these dishes; the image itself was not downloaded or visually inspected.',
  },
  {
    id: 'instagram-pho-bat-da-image',
    url: 'https://lookaside.instagram.com/seo/google_widget/crawler/?media_id=3969035395279313318',
    pageUrl: 'https://www.instagram.com/p/DTxCD3oEz-J/',
    sourceId: 'instagram-50-bistro-pho-post',
    sourceType: 'official',
    imageOrigin: 'unknown',
    verification: 'likely',
    type: 'dish',
    subject: 'Pho bo bat da, as identified in the Instagram post caption',
    discoveredAt,
    sourceDate: null,
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'Image URL was exposed by Google Images. The image was not downloaded or visually inspected.',
  },
  {
    id: 'tripi-50-bistro-photo-1',
    url: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/485788BcN/anh-mo-ta.png',
    pageUrl:
      'https://tripi.vn/blog/vi/doi-song/kham-pha-14-quan-bo-ne-bit-tet-ngon-tru-danh-tai-ha-noi-tripi',
    sourceId: 'tripi-2025-50-bistro',
    sourceType: 'secondary',
    imageOrigin: 'third-party',
    verification: 'likely',
    type: 'unknown',
    subject: 'Image captioned 50 Bistro - Restaurant & Cafe in the Tripi listing',
    discoveredAt,
    sourceDate: '2025-06-02',
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'The article context matches the restaurant address, but the image subject and rights were not independently verified.',
  },
  {
    id: 'tripi-50-bistro-photo-2',
    url: 'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/485788YmP/anh-mo-ta.png',
    pageUrl:
      'https://tripi.vn/blog/vi/doi-song/kham-pha-14-quan-bo-ne-bit-tet-ngon-tru-danh-tai-ha-noi-tripi',
    sourceId: 'tripi-2025-50-bistro',
    sourceType: 'secondary',
    imageOrigin: 'third-party',
    verification: 'likely',
    type: 'unknown',
    subject: 'Image captioned 50 Bistro - Restaurant & Cafe in the Tripi listing',
    discoveredAt,
    sourceDate: '2025-06-02',
    websiteEligible: false,
    reusePermission: 'unconfirmed',
    notes:
      'The article context matches the restaurant address, but the image subject and rights were not independently verified.',
  },
]
