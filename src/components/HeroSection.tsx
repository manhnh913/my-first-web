import { restaurantProfile } from '../data/restaurantData'

function HeroSection() {
  return (
    <section
      className="hero-section"
      id="trang-chu"
      aria-labelledby="hero-title"
    >
      <div className="container hero-section__inner">
        <div className="hero-section__copy">
          <p className="eyebrow">
            Hà Nội · 50 Nguyễn Chí Thanh
          </p>
          <h1 id="hero-title">
            <span className="hero-section__title-main">
              {restaurantProfile.name}
            </span>
            <span className="hero-section__title-accent">
              {restaurantProfile.descriptor}
            </span>
          </h1>
          <p className="hero-section__description">{restaurantProfile.heroDescription}</p>
          <div className="hero-section__actions">
            <a className="button button--primary" href="#dat-ban">
              Đặt bàn
            </a>
            <a className="button button--outline" href="#thuc-don">
              Xem thực đơn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <p className="hero-section__note">
            {restaurantProfile.venue} · {restaurantProfile.seatingCapacity}
          </p>
        </div>

        <div className="hero-section__visual">
          <div className="hero-art" aria-hidden="true">
            <span className="hero-art__index">HÀ NỘI · 50</span>
            <div className="hero-art__sun" />
            <div className="hero-art__arch">
              <span>50</span>
              <span>BISTRO</span>
            </div>
            <span className="hero-art__side-label">RESTAURANT &amp; CAFE</span>
            <span className="hero-art__base-line" />
          </div>
          <p className="hero-section__visual-note">
            Đồ họa minh họa, không phải ảnh thực tế tại nhà hàng.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
