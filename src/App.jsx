import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Projects from './Pages/Projects'
import Education from './Pages/Education'
import Certificates from './Pages/Certificates'
import Details from './Pages/Details'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App