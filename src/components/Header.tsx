import { useCallback, useEffect, useRef, useState } from 'react'
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
          aria-label="An Nhiên Restaurant, trang chủ"
          onClick={closeMenu}
        >
          <span className="site-brand__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" focusable="false">
              <path d="M29.5 9.5c-10.3.2-17.8 4.7-18.2 12.1-.2 4.4 2.8 7.4 7 7.2 7.5-.3 11.1-9.4 11.2-19.3Z" />
              <path d="M12.5 31c3.4-5.8 7.8-10.2 13.2-13.6" />
            </svg>
          </span>
          <span className="site-brand__name">
            An Nhiên <span>Restaurant</span>
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
