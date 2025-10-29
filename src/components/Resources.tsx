import React from 'react'

export const Resources: React.FC = () => {
  return (
    <section className="main-content">
      <div className="container">
        {/* Hero Section */}
        <section className="resources-hero">
          <div className="container">
            <h1>AI Resources & Learning</h1>
            <p>Comprehensive guides, tools, and insights to help organizations implement AI solutions and drive innovation.</p>
          </div>
        </section>

        {/* Blog Section */}
        <section className="main-content" id="blog">
          <div className="container">
            <h2 className="section-title">Latest AI Articles & Insights</h2>
            <p className="section-description">Stay up to date with the latest trends, techniques, and thought leadership in AI and digital innovation.</p>
            
            <div className="blog-grid">
              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Technical Guide</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 12 min read</span>
                    <span>📅 Oct 10, 2025</span>
                  </div>
                  <h3>Implementing Computer Vision AI in Production</h3>
                  <p className="blog-excerpt">A comprehensive guide to deploying computer vision AI for real-world applications, covering model deployment, performance optimization, and system integration.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Industry Insights</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 8 min read</span>
                    <span>📅 Oct 8, 2025</span>
                  </div>
                  <h3>Automating Business Processes with AI</h3>
                  <p className="blog-excerpt">How AI-powered automation is saving teams 2-3 hours daily and improving productivity across various business functions.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Best Practices</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 15 min read</span>
                    <span>📅 Oct 5, 2025</span>
                  </div>
                  <h3>Data Privacy and Security for AI Systems</h3>
                  <p className="blog-excerpt">Essential guidelines for building secure AI solutions, from data encryption to access controls and audit trails.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Tutorial</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 20 min read</span>
                    <span>📅 Oct 1, 2025</span>
                  </div>
                  <h3>Building Predictive Models for Business Analytics</h3>
                  <p className="blog-excerpt">Step-by-step tutorial on creating machine learning models for business predictions with practical examples and real-world applications.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Case Study</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 10 min read</span>
                    <span>📅 Sep 28, 2025</span>
                  </div>
                  <h3>Improving Customer Retention by 42%</h3>
                  <p className="blog-excerpt">How we helped a major enterprise implement AI-powered customer analytics to dramatically reduce churn and improve customer satisfaction.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>

              <div className="blog-card">
                <div className="blog-image">
                  <span className="blog-category">Technical Guide</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>⏱️ 18 min read</span>
                    <span>📅 Sep 25, 2025</span>
                  </div>
                  <h3>Enterprise System Integration Strategies for AI</h3>
                  <p className="blog-excerpt">Everything you need to know about integrating AI systems with existing enterprise platforms and databases using modern APIs and standards.</p>
                  <a href="#" className="read-more">Read more →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="tools-section" id="tools">
          <div className="container">
            <h2 className="section-title">AI Tools</h2>
            <p className="section-description">Free tools built specifically for organizations implementing AI solutions.</p>
            
            <div className="tools-grid">
              <div className="tool-card">
                <div className="tool-icon">🔧</div>
                <h3>ROI Calculator for AI Implementation</h3>
                <p>Calculate the potential return on investment for implementing AI in your organization. Input your metrics to see projected savings and efficiency gains.</p>
                <a href="#" className="btn btn-primary">Try Tool →</a>
              </div>

              <div className="tool-card">
                <div className="tool-icon">📊</div>
                <h3>Data Privacy Compliance Checker</h3>
                <p>Assess your AI system's data privacy compliance readiness with our comprehensive checklist and automated validation tools.</p>
                <a href="#" className="btn btn-primary">Try Tool →</a>
              </div>

              <div className="tool-card">
                <div className="tool-icon">🎨</div>
                <h3>Dataset Annotator</h3>
                <p>Label and annotate images and data for training AI models with built-in quality control and secure storage.</p>
                <a href="#" className="btn btn-primary">Try Tool →</a>
              </div>

              <div className="tool-card">
                <div className="tool-icon">⚡</div>
                <h3>AI Integration Planner</h3>
                <p>Plan your AI implementation timeline and identify integration requirements for your specific systems and workflows.</p>
                <a href="#" className="btn btn-primary">Try Tool →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Comparisons Section */}
        <section className="comparisons-section" id="comparisons">
          <div className="container">
            <h2 className="section-title">AI Solution Comparisons</h2>
            <p className="section-description">Compare AI platforms, tools, and solutions to make informed decisions for your organization.</p>
            
            <div className="comparison-table">
              <div className="table-header">
                <span>Solution Category</span>
                <span>Accuracy</span>
                <span>Implementation</span>
                <span>Best For</span>
              </div>
              <div className="table-row">
                <span><strong>Computer Vision AI</strong></span>
                <span>⭐⭐⭐⭐⭐</span>
                <span>Complex</span>
                <span>Image analysis tasks</span>
              </div>
              <div className="table-row">
                <span><strong>Document Automation</strong></span>
                <span>⭐⭐⭐⭐⭐</span>
                <span>Moderate</span>
                <span>Process optimization</span>
              </div>
              <div className="table-row">
                <span><strong>Predictive Analytics</strong></span>
                <span>⭐⭐⭐⭐</span>
                <span>Moderate</span>
                <span>Business forecasting</span>
              </div>
              <div className="table-row">
                <span><strong>Chatbots & Virtual Assistants</strong></span>
                <span>⭐⭐⭐⭐</span>
                <span>Simple</span>
                <span>Customer engagement</span>
              </div>
              <div className="table-row">
                <span><strong>Research & Development AI</strong></span>
                <span>⭐⭐⭐⭐</span>
                <span>Very Complex</span>
                <span>R&D departments</span>
              </div>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="https://calendar.app.google/5nHu9ma7e495gmhz7" target="_blank" className="btn btn-primary" style={{ marginRight: '1rem' }}>Book a 30 minute call →</a>
          <a href="mailto:mmoise@nortelabs.org" className="btn btn-primary">Have a question? Email us →</a>
        </div>
      </div>
    </section>
  )
}
