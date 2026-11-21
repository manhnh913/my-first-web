import { useCallback, useEffect, useRef, useState } from 'react'
import {
  publicMenu,
  publicMenuCategories,
  type PublicMenuCategoryId,
  type PublicMenuItem,
} from '../data/publicMenu'
import { restaurantProfile } from '../data/restaurantData'
import DishDetailModal from './DishDetailModal'
import SectionHeading from './SectionHeading'

function MenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<
    'all' | PublicMenuCategoryId
  >('all')
  const [selectedDish, setSelectedDish] = useState<PublicMenuItem | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const visibleItems =
    activeCategoryId === 'all'
      ? publicMenu
      : publicMenu.filter((item) => item.categoryId === activeCategoryId)
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
    <section
      className="section menu-section"
      id="thuc-don"
      aria-labelledby="menu-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="ẨM THỰC · 50 BISTRO"
          title={`Ẩm thực tại ${restaurantProfile.name}`}
          description="Một số tên món và đồ uống được Bảo Sơn giới thiệu. Giá và mô tả chi tiết chưa được xác nhận."
          id="menu-title"
          centered
        />

        <div
          className="menu-filters"
          role="group"
          aria-label="Lọc thực đơn theo danh mục"
        >
          <button
            className={`menu-filter${activeCategoryId === 'all' ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeCategoryId === 'all'}
            aria-controls="menu-items"
            onClick={() => setActiveCategoryId('all')}
          >
            Tất cả
          </button>
          {publicMenuCategories.map((category) => (
            <button
              className={`menu-filter${activeCategoryId === category.id ? ' is-active' : ''}`}
              type="button"
              key={category.id}
              aria-pressed={activeCategoryId === category.id}
              aria-controls="menu-items"
              onClick={() => setActiveCategoryId(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="menu-grid" id="menu-items" aria-live="polite">
          {visibleItems.map((item, index) => (
            <article className="menu-card" key={item.id}>
              <div className="menu-card__ornament" aria-hidden="true">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span className="menu-card__ornament-line" />
              </div>
              <p className="menu-card__category">{item.category}</p>
              <h3>{item.name}</h3>
              <button
                className="text-link menu-card__details"
                type="button"
                aria-label={`Xem thông tin ${item.name}`}
                aria-haspopup="dialog"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setSelectedDish(item)
                }}
              >
                Thông tin món <span aria-hidden="true">↗</span>
              </button>
            </article>
          ))}
        </div>

        <p className="menu-note">
          Tên món được ghi nhận từ nguồn công khai. Vui lòng gọi hotline để xác
          nhận tình trạng phục vụ.
        </p>
      </div>
      <DishDetailModal dish={selectedDish} onClose={closeModal} />
    </section>
  )
}

export default MenuSection
