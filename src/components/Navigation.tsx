import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">Norte Labs</Link>
          <div className="nav-menu">
            <div className="nav-dropdown">
              <a 
                href="#services" 
                className="nav-link"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Services ▾
              </a>
              {isDropdownOpen && (
                <div className="dropdown-content">
                  <a href="#services">Document Automation</a>
                  <a href="#services">Data Analytics & Insights</a>
                  <a href="#services">Research Assistant</a>
                  <a href="#services">Predictive Analytics & Insights</a>
                </div>
              )}
            </div>
            <a href="healthcare.html" className="nav-link">Healthcare Industry</a>
            <Link to="/resources" className="nav-link">Resources</Link>
            <a href="https://calendar.app.google/5nHu9ma7e495gmhz7" target="_blank" className="nav-link nav-cta">
              Book a Quick Consultation
            </a>
          </div>
          <button className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}