import { restaurantImages } from '../data/restaurantData'

function HeroSection() {
  return (
    <section
      className="hero-section"
      id="trang-chu"
      aria-labelledby="hero-title"
    >
      <div className="container hero-section__inner">
        <div className="hero-section__copy">
          <p className="eyebrow">ẨM THỰC VIỆT ĐƯƠNG ĐẠI</p>
          <h1 id="hero-title">
            <span className="hero-section__title-main">Hương vị tinh tế</span>
            <span className="hero-section__title-accent">
              - Khoảnh khắc <span>đáng nhớ</span>
            </span>
          </h1>
          <p className="hero-section__description">
            Từ nguyên liệu tươi lành đến cách bày biện chỉn chu, mỗi món ăn tại
            An Nhiên là lời mời bạn chậm lại và tận hưởng.
          </p>
          <div className="hero-section__actions">
            <a className="button button--primary" href="#thuc-don">
              Xem thực đơn <span aria-hidden="true">↗</span>
            </a>
            <a className="button button--outline" href="#dat-ban">
              Đặt bàn
            </a>
          </div>
          <div className="hero-section__note">
            <span className="hero-section__note-mark" aria-hidden="true">
              ✳
            </span>
            Tươi ngon mỗi ngày · Ấm áp trong từng khoảnh khắc
          </div>
        </div>

        <div className="hero-section__visual">
          <img
            className="hero-section__image"
            src={restaurantImages.hero}
            alt="Không gian ấm cúng tại An Nhiên Restaurant"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className="hero-section__image-caption">
            <span>AN NHIÊN</span>
            <span>Một chốn quen để trở về</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
