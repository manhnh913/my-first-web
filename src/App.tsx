import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import './App.css'

function App() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Bỏ qua điều hướng
      </a>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
