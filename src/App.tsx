import { HeroExample } from './components/hero'
import { Navbar } from './components/navbar'
import { Verticals } from './components/verticals'
import { MarqueeSection } from './components/marquee-section'
import { DetailsSection } from './components/details-section'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroExample />
      <Verticals />
      <MarqueeSection />
      <DetailsSection />
    </div>
  )
}

export default App
