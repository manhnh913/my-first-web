import { restaurantProfile } from '../data/restaurantData'
import SectionHeading from './SectionHeading'

const experienceCards = [
  {
    id: 'place',
    number: '01',
    eyebrow: 'VỊ TRÍ',
    title: '50 Nguyễn Chí Thanh',
    detail: 'Khách sạn Quốc tế Bảo Sơn · Hà Nội',
    art: 'location',
  },
  {
    id: 'space',
    number: '02',
    eyebrow: 'KHÔNG GIAN',
    title: 'Phóng khoáng, lãng mạn',
    detail: 'Phong cách được giới thiệu cho 50 Bistro.',
    art: 'space',
  },
  {
    id: 'cuisine',
    number: '03',
    eyebrow: 'ẨM THỰC',
    title: 'Kết hợp Á — Âu',
    detail: 'Phục vụ đồ ăn và đồ uống.',
    art: 'cuisine',
  },
] as const

function GallerySection() {
  return (
    <section
      className="section gallery-section"
      id="khong-gian"
      aria-labelledby="gallery-title"
    >
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow={`${restaurantProfile.name} · KHÔNG GIAN`}
            title="Một điểm hẹn tại Hà Nội"
            description={restaurantProfile.galleryDescription}
            id="gallery-title"
          />
          <span className="gallery-section__aside">50 · HÀ NỘI</span>
        </div>

        <div className="gallery-grid">
          {experienceCards.map((card) => (
            <article
              className={`space-card space-card--${card.art}`}
              key={card.id}
            >
              <div className="space-card__art" aria-hidden="true">
                <span className="space-card__art-number">{card.number}</span>
                <span className="space-card__art-shape" />
                <span className="space-card__art-line" />
              </div>
              <div className="space-card__content">
                <p className="eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="gallery-disclaimer">
          Đồ họa minh họa do website tạo; không phải ảnh thực tế tại 50 Bistro.
        </p>
      </div>
    </section>
  )
}

export default GallerySection
