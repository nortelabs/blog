import React, { useState } from 'react'

export const Navigation: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <a href="index.html" className="logo">Norte Labs</a>
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
                  <a href="#clinical-docs">Document Automation</a>
                  <a href="#patient-engagement">Data Analytics & Insights</a>
                  <a href="#ai-research">Research Assistant</a>
                  <a href="#predictive-analytics">Predictive Analytics & Insights</a>
                </div>
              )}
            </div>
            <a href="healthcare.html" className="nav-link">Healthcare Industry</a>
            <a href="resources.html" className="nav-link">Resources</a>
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