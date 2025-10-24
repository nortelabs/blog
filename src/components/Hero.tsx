import React from 'react'

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Empowering Organizations with AI-Powered Solutions</h1>
        <div className="hero-cards">
          <div className="hero-card">
            <h2>We build AI solutions for nonprofits, businesses, and organizations of all sizes.</h2>
            <a href="services.html" className="btn btn-primary">View our services →</a>
          </div>
          <div className="hero-card">
            <h2>We empower organizations with cutting-edge AI technology to maximize their impact</h2>
            <a href="resources.html" className="btn btn-primary">Learn about AI solutions →</a>
          </div>
        </div>
      </div>
    </section>
  )
}