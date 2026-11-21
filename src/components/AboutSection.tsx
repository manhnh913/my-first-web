import { restaurantProfile } from '../data/restaurantData'
import SectionHeading from './SectionHeading'

function AboutSection() {
  return (
    <section
      className="section about-section"
      id="ve-chung-toi"
      aria-labelledby="about-title"
    >
      <div className="container about-section__inner">
        <div className="about-section__visual">
          <div className="about-art" aria-hidden="true">
            <span className="about-art__number">50</span>
            <span className="about-art__rule" />
            <span className="about-art__label">HÀ NỘI</span>
            <span className="about-art__descriptor">Restaurant &amp; Cafe</span>
          </div>
          <p className="about-section__visual-note">
            Đồ họa minh họa, không phải ảnh thực tế.
          </p>
        </div>

        <div>
          <SectionHeading
            eyebrow={`${restaurantProfile.name} · HÀ NỘI`}
            title={restaurantProfile.aboutTitle}
            description={restaurantProfile.aboutDescription}
            id="about-title"
          />
          <p className="about-section__text">{restaurantProfile.aboutCopy}</p>

          <div className="about-details">
            <div>
              <span>Địa điểm</span>
              <strong>{restaurantProfile.venue}</strong>
            </div>
            <div>
              <span>Sức chứa theo nguồn Bảo Sơn</span>
              <strong>{restaurantProfile.seatingCapacity}</strong>
            </div>
            <div>
              <span>Địa chỉ</span>
              <strong>{restaurantProfile.address}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
