import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Footer } from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <Process />
      <Footer />
    </div>
  )
}

export default App