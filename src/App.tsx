import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { CollectionsPage } from './pages/collections'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colecciones" element={<CollectionsPage />} />
      </Routes>
    </Router>
  )
}

export default App
