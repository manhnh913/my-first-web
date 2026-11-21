import AboutSection from './AboutSection'
import GallerySection from './GallerySection'
import HeroSection from './HeroSection'
import MenuSection from './MenuSection'
import ReservationSection from './ReservationSection'

function MainContent() {
  return (
    <main id="main-content" tabIndex={-1}>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <ReservationSection />
    </main>
  )
}

export default MainContent
