import { customerReviews } from '../data/restaurantData'
import SectionHeading from './SectionHeading'

function TestimonialsSection() {
  return (
    <section className="section reviews-section" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeading
          eyebrow="LỜI THƯƠNG GỬI"
          title="Khách ghé, lòng vui"
          description="Những chia sẻ nhỏ làm căn bếp An Nhiên có thêm động lực mỗi ngày."
          id="reviews-title"
          centered
        />

        <div className="reviews-grid">
          {customerReviews.map((review) => (
            <article className="review-card" key={review.id}>
              <p
                className="review-card__stars"
                role="img"
                aria-label={`${review.rating} trên 5 sao`}
              >
                <span aria-hidden="true">{'★'.repeat(review.rating)}</span>
              </p>
              <blockquote>“{review.quote}”</blockquote>
              <div className="review-card__author">
                <span className="review-card__avatar" aria-hidden="true">
                  {review.name.charAt(0)}
                </span>
                <div>
                  <strong>{review.name}</strong>
                  <span>{review.note}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="reviews-note">Đánh giá bên trên là nội dung minh họa.</p>
      </div>
    </section>
  )
}

export default TestimonialsSection
