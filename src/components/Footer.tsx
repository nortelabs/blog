import React from 'react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Norte Labs</h3>
          </div>
          <div className="footer-links">
            <a href="https://linkedin.com/company/norte-labs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:mmoise@nortelabs.org">Email Us</a>
            <a href="resources.html">Resources</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Norte Labs</p>
        </div>
      </div>
    </footer>
  )
}