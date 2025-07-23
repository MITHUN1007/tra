import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Create simplified versions of our pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProjectsPage from './pages/ProjectsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  )
}

export default App