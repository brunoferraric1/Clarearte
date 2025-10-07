import { HeroExample } from './components/hero'
import { Navbar } from './components/navbar'
import { Verticals } from './components/verticals'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroExample />
      <Verticals />
    </div>
  )
}

export default App
