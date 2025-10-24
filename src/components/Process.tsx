import React from 'react'

export const Process: React.FC = () => {
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
    <div className="container">
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
                <p className="card-description">Targeted AI implementations with clear outcomes and structured delivery</p>
                <ul className="feature-list">
                  {projectBasedFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="process-card">
                <h3>Strategic AI Advisory</h3>
                <p className="card-description">Ongoing guidance for organizations building AI capabilities</p>
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
          <a
            href="mailto:mmoise@nortelabs.org"
            className="btn btn-primary"
          >
            Have a question? Email us →
          </a>
        </div>
      </div>
    </div>
  )
}