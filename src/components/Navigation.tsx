import { useEffect, useState } from 'react'

type NavigationProps = {
  isOpen: boolean
  onNavigate: () => void
}

const navigationItems = [
  { label: 'Trang chủ', href: '#trang-chu' },
  { label: 'Về chúng tôi', href: '#ve-chung-toi' },
  { label: 'Thực đơn', href: '#thuc-don' },
  { label: 'Không gian', href: '#khong-gian' },
  { label: 'Liên hệ', href: '#lien-he' },
]

function Navigation({ isOpen, onNavigate }: NavigationProps) {
  const [activeHref, setActiveHref] = useState('#trang-chu')

  useEffect(() => {
    const sectionIds = navigationItems.flatMap((item) =>
      item.href === '#lien-he' ? ['#dat-ban', item.href] : [item.href],
    )
    const sections = sectionIds
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const currentSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              first.boundingClientRect.top - second.boundingClientRect.top,
          )[0]

        if (currentSection) {
          const sectionId = currentSection.target.id
          setActiveHref(sectionId === 'dat-ban' ? '#lien-he' : `#${sectionId}`)
        }
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className={`site-navigation${isOpen ? ' is-open' : ''}`}
      id="site-navigation"
      aria-label="Điều hướng chính"
    >
      {navigationItems.map((item) => (
        <a
          className="site-navigation__link"
          href={item.href}
          key={item.href}
          aria-current={activeHref === item.href ? 'location' : undefined}
          onClick={onNavigate}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default Navigation
