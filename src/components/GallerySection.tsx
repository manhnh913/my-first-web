import { restaurantGallery } from '../data/restaurantData'
import SectionHeading from './SectionHeading'

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
            eyebrow="GÓC AN NHIÊN"
            title="Không gian để lòng thư thái"
            description="Một chút xanh, ánh đèn ấm và chiếc bàn dành riêng cho những câu chuyện."
            id="gallery-title"
          />
          <span className="gallery-section__aside">Mời bạn ghé chơi</span>
        </div>

        <div className="gallery-grid">
          {restaurantGallery.map((image, index) => (
            <figure className="gallery-item" key={image.id}>
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
              />
              <figcaption>
                <span>0{index + 1}</span> {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
