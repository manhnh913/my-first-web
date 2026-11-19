import { useState } from 'react'
import { menuCategories } from '../data/restaurantData'
import SectionHeading from './SectionHeading'

function MenuSection() {
  const [activeCategoryId, setActiveCategoryId] = useState('all')
  const visibleCategories =
    activeCategoryId === 'all'
      ? menuCategories
      : menuCategories.filter((category) => category.id === activeCategoryId)

  return (
    <section
      className="section menu-section"
      id="thuc-don"
      aria-labelledby="menu-title"
    >
      <div className="container">
        <SectionHeading
          eyebrow="THỰC ĐƠN"
          title="Chọn vị bạn thương"
          description="Từ món khai vị nhẹ nhàng đến món Việt đậm đà, luôn có điều hợp khẩu vị của bạn."
          id="menu-title"
          centered
        />

        <div className="menu-filters" role="group" aria-label="Lọc thực đơn theo danh mục">
          <button
            className={`menu-filter${activeCategoryId === 'all' ? ' is-active' : ''}`}
            type="button"
            aria-pressed={activeCategoryId === 'all'}
            aria-controls="menu-items"
            onClick={() => setActiveCategoryId('all')}
          >
            Tất cả
          </button>
          {menuCategories.map((category) => (
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
          {visibleCategories.map((category) => (
            <section
              className="menu-category"
              key={category.id}
              aria-labelledby={`${category.id}-title`}
            >
              <div className="menu-category__heading">
                <span>
                  {String(menuCategories.indexOf(category) + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 id={`${category.id}-title`}>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
              <ul className="menu-list">
                {category.items.map((item) => (
                  <li className="menu-item" key={item.id}>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span>{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <p className="menu-note">
          * Thực đơn và giá trên website là thông tin mẫu, có thể thay đổi theo
          mùa.
        </p>
      </div>
    </section>
  )
}

export default MenuSection
