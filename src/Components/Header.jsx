import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <ul style={{
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '15px 20px',
    margin: '20px',
    backgroundColor: '#1f2937',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
  }}>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Details</Link></li>
        <li><Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>Projects</Link></li>
        <li><Link to="/education" style={{ textDecoration: 'none', color: 'white' }}>Education</Link></li>
        <li><Link to="/certificates" style={{ textDecoration: 'none', color: 'white' }}>Certificates</Link></li>
    </ul>
  )
}

export default Header