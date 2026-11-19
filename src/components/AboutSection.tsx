import { restaurantImages, restaurantStats } from '../data/restaurantData'
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
          <img
            src={restaurantImages.about}
            alt="Món ăn Việt được bày biện tinh tế trên bàn gỗ"
            loading="lazy"
            decoding="async"
          />
          <span className="about-section__image-note">Bếp nhà, vị thân quen</span>
        </div>

        <div>
          <SectionHeading
            eyebrow="CÂU CHUYỆN AN NHIÊN"
            title="Bữa ăn ngon bắt đầu từ sự chân thành."
            description="An Nhiên là nơi những hương vị Việt thân thuộc được kể lại bằng sự tinh tế và lòng hiếu khách."
            id="about-title"
          />
          <p className="about-section__text">
            Chúng tôi trân trọng nguyên liệu theo mùa, cách nấu vừa vặn và những
            cuộc trò chuyện bên bàn ăn. Mỗi ngày, căn bếp nhỏ chuẩn bị món ăn
            với mong muốn mang đến cảm giác thân quen như một bữa cơm nhà.
          </p>

          <div className="stats-grid">
            {restaurantStats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
