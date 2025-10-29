import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { Resources } from './components/Resources'
import { Healthcare } from './components/Healthcare'
import { Footer } from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Process />
            </>
          } />
          <Route path="/resources" element={<Resources />} />
          <Route path="/healthcare" element={<Healthcare />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App