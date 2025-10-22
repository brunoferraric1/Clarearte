import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/home'
import { CollectionsPage } from './pages/collections'
import { PersonalizedPage } from './pages/personalized'
import { AboutPage } from './pages/about'
import { BlogPage } from './pages/blog'
import BlogPost from './pages/blog-post'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/colecciones" element={<CollectionsPage />} />
        <Route path="/personalizadas" element={<PersonalizedPage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App
