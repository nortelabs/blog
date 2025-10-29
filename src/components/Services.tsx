import React from 'react'

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Document Automation',
      description: 'Automated document processing, data extraction, and content generation that saves organizations hours daily, reduces manual work, and ensures comprehensive record-keeping.',
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Analyze organizational data to identify patterns, trends, and opportunities for improvement in program delivery, donor engagement, and operational efficiency.',
    },
    {
      title: 'AI Research Assistant',
      description: 'Accelerate research and decision-making with AI that answers questions, summarizes documents, and provides insights from industry reports, grant opportunities, and best practices.',
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models that predict donor behavior, program success rates, and resource needs to enable proactive planning and optimize organizational impact.',
    },
  ]

  const handleLearnMore = () => {
    // Scroll to the services section
    const servicesElement = document.getElementById('services')
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="main-content">
      <div className="container">
        <div className="content-section">
          <h2 className="section-title">Services</h2>
          <p className="section-description">
            We develop specialized AI solutions that streamline operations, enhance decision-making, and maximize impact for nonprofits, businesses, and organizations across various sectors.
          </p>
          <div className="services-grid" id="services">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button onClick={handleLearnMore} className="service-link" style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}>Learn more →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}