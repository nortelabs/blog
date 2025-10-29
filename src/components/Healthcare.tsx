import React from 'react'
import { Link } from 'react-router-dom'

export const Healthcare: React.FC = () => {
  const healthcareServices = [
    {
      title: 'Clinical Documentation',
      description: 'Automated medical transcription and clinical note generation that saves physicians hours daily, reduces burnout, and ensures comprehensive patient records.',
      link: '#clinical-docs',
    },
    {
      title: 'Patient Reported Outcomes Analytics',
      description: 'Analyze patient-reported outcomes to identify patterns, trends, and disparities in healthcare delivery and patient experience.',
      link: '#patient-data',
    },
    {
      title: 'AI Research Assistant',
      description: 'Accelerate research with AI that answers questions, summarizes documents, and provides insights from medical literature and clinical trials.',
      link: '#drug-discovery',
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models that predict patient outcomes, readmission risks, and disease progression to enable proactive interventions and optimize resource allocation.',
      link: '#predictive',
    },
  ]

  const projectBasedFeatures = [
    'Specific problem identification and solution design',
    'Transparent pricing with progress-based billing',
    'Direct access to AI expertise throughout development',
    'Complete documentation and handoff materials',
    '90-day optimization and refinement period',
  ]

  const advisoryFeatures = [
    'AI readiness assessment and roadmap development',
    'Multi-phase implementation planning and execution',
    'Continuous monitoring and performance improvement',
    'Staff education and capability building programs',
    'Regular strategy reviews and course corrections',
  ]

  return (
    <section className="main-content">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Transforming Healthcare with AI-Powered Solutions</h1>
          </div>
        </section>

        {/* Services Section */}
        <div className="content-section">
          <h2 className="section-title">Services</h2>
          <p className="section-description">
            We develop specialized AI solutions that improve patient outcomes, reduce clinician burnout, and optimize healthcare operations across hospitals, clinics, and medical practices.
          </p>
          <div className="services-grid" id="services" style={{ scrollMarginTop: '120px' }}>
            {healthcareServices.map((service, index) => (
              <div key={index} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="service-link">Learn more →</a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="content-section">
          <h2 className="section-title">We empower healthcare professionals with cutting-edge AI technology</h2>
          <Link to="/resources" className="btn btn-primary">Learn about healthcare AI →</Link>
        </div>

        {/* Process Section */}
        <div className="content-section">
          <h2 className="section-title">How we work</h2>
          <div className="process-grid">
            <div className="process-hierarchy">
              <div className="process-top-level">
                <div className="process-card">
                  <h3>Consultation</h3>
                  <p>We start with a free 30-minute consultation to understand your needs and goals. Then we discuss which engagement model is best for you.</p>
                </div>
              </div>
              <h3>Flexible engagement models for your needs</h3>
              <div className="process-bottom-level">
                <div className="process-card">
                  <h3>Project Based Solution</h3>
                  <p className="card-description">Targeted healthcare AI implementations with clear outcomes and structured delivery</p>
                  <ul className="feature-list">
                    {projectBasedFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="process-card">
                  <h3>Strategic AI Advisory</h3>
                  <p className="card-description">Ongoing guidance for healthcare organizations building AI capabilities</p>
                  <ul className="feature-list">
                    {advisoryFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href="https://calendar.app.google/5nHu9ma7e495gmhz7" target="_blank" className="btn btn-primary" style={{ marginRight: '1rem' }}>Book a 30 minute call →</a>
            <a href="mailto:mmoise@nortelabs.org" className="btn btn-primary">Have a question? Email us →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
