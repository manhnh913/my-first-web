import { useEffect, useRef } from 'react'
import type { FeaturedDish } from '../data/restaurantData'

type DishDetailModalProps = {
  dish: FeaturedDish | null
  onClose: () => void
}

function DishDetailModal({ dish, onClose }: DishDetailModalProps) {
  const dialogRef = useRef<HTMLElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!dish) return

    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )

      if (!focusableElements?.length) {
        event.preventDefault()
        dialogRef.current?.focus()
        return
      }

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [dish, onClose])

  if (!dish) return null

  return (
    <div
      className="dish-dialog-layer"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        className="dish-dialog-backdrop"
        type="button"
        tabIndex={-1}
        aria-label="Đóng chi tiết món ăn"
        onClick={onClose}
      />
      <section
        className="dish-dialog"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dish-dialog-title"
        aria-describedby="dish-dialog-description"
        tabIndex={-1}
      >
        <img
          className="dish-dialog__image"
          src={dish.image}
          alt={dish.imageAlt}
          decoding="async"
        />
        <div className="dish-dialog__content">
          <button
            className="dish-dialog__close"
            type="button"
            ref={closeButtonRef}
            aria-label="Đóng cửa sổ chi tiết"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
          <p className="eyebrow">{dish.categoryName}</p>
          <h2 id="dish-dialog-title">{dish.name}</h2>
          <p id="dish-dialog-description">{dish.description}</p>
          <p className="dish-dialog__price">Giá tham khảo: {dish.price}</p>
        </div>
      </section>
    </div>
  )
}

export default DishDetailModal
