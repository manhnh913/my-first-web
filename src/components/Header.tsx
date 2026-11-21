import { useCallback, useEffect, useRef, useState } from 'react'
import { restaurantProfile } from '../data/restaurantData'
import Navigation from './Navigation'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement | null>(null)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  const closeMenuAndRestoreFocus = useCallback(() => {
    setIsMenuOpen(false)
    if (window.matchMedia('(max-width: 780px)').matches) {
      window.setTimeout(() => menuToggleRef.current?.focus(), 0)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') closeMenuAndRestoreFocus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [closeMenuAndRestoreFocus, isMenuOpen])

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a
          className="site-brand"
          href="#trang-chu"
          aria-label={`${restaurantProfile.fullName}, trang chủ`}
          onClick={closeMenu}
        >
          <span className="site-brand__name">
            {restaurantProfile.name} <span>{restaurantProfile.descriptor}</span>
          </span>
        </a>

        <button
          className={`menu-toggle${isMenuOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          ref={menuToggleRef}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <Navigation isOpen={isMenuOpen} onNavigate={closeMenuAndRestoreFocus} />

        <a className="button button--header" href="#dat-ban" onClick={closeMenu}>
          Đặt bàn <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}

export default Header
