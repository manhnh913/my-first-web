import { useCallback, useEffect, useRef, useState } from 'react'
import type { FeaturedDish } from '../data/restaurantData'
import { featuredDishes } from '../data/restaurantData'
import DishDetailModal from './DishDetailModal'
import SectionHeading from './SectionHeading'

function FeaturedDishesSection() {
  const [selectedDish, setSelectedDish] = useState<FeaturedDish | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const closeModal = useCallback(() => setSelectedDish(null), [])

  useEffect(() => {
    if (!selectedDish) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [selectedDish])

  return (
    <section className="section featured-section" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-topline">
          <SectionHeading
            eyebrow="BẾP AN NHIÊN GỢI Ý"
            title="Món ngon được yêu thích"
            description="Một vài hương vị đặc trưng để bạn bắt đầu bữa ăn thật vui."
            id="featured-title"
          />
          <a className="text-link" href="#thuc-don">
            Khám phá thực đơn <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="dish-grid">
          {featuredDishes.map((dish) => (
            <article className="dish-card" key={dish.id}>
              <div className="dish-card__image-wrap">
                <button
                  className="dish-card__image-button"
                  type="button"
                  aria-label={`Xem chi tiết ${dish.name}`}
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelectedDish(dish)
                  }}
                >
                  <img
                    src={dish.image}
                    alt={dish.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                {dish.tag && <span className="dish-card__tag">{dish.tag}</span>}
              </div>
              <div className="dish-card__content">
                <div className="dish-card__heading">
                  <h3>{dish.name}</h3>
                  <span>{dish.price}</span>
                </div>
                <p>{dish.description}</p>
                <button
                  className="text-link dish-card__details"
                  type="button"
                  aria-label={`Xem chi tiết ${dish.name}`}
                  aria-haspopup="dialog"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget
                    setSelectedDish(dish)
                  }}
                >
                  Xem chi tiết <span aria-hidden="true">↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      <DishDetailModal dish={selectedDish} onClose={closeModal} />
    </section>
  )
}

export default FeaturedDishesSection
