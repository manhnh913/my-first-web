import AboutSection from './AboutSection'
import FeaturedDishesSection from './FeaturedDishesSection'
import GallerySection from './GallerySection'
import HeroSection from './HeroSection'
import MenuSection from './MenuSection'
import ReservationSection from './ReservationSection'
import TestimonialsSection from './TestimonialsSection'

function MainContent() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <FeaturedDishesSection />
      <MenuSection />
      <GallerySection />
      <TestimonialsSection />
      <ReservationSection />
    </main>
  )
}

export default MainContent
