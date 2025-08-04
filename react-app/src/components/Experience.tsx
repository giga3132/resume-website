import React from 'react'

const Experience = () => {
  return (
    <section>
      <hr className="section-delimiter" />
      <h1 className="section-header">Experience</h1>
      <hr className="section-delimiter" />
      <div className="timeline">
        <div className="evidence-container">
          <div className="evidence-container-left">
            <h3>March - June 2022</h3>
          </div>
          <div className="evidence-container-right">
            <p className="evidence-title">Teaching chess at local school</p>
          </div>
        </div>
        <div className="evidence-container">
          <div className="evidence-container-left">
            <h3>May 2022</h3>
          </div>
          <div className="evidence-container-right">
            <p className="evidence-title">Competed in Argentine Mathematics Olympiad.</p>
          </div>
        </div>
        <div className="evidence-container">
          <div className="evidence-container-left">
            <h3>March - October 2024</h3>
          </div>
          <div className="evidence-container-right">
            <p className="evidence-title">Logistics Handler at Prodrive Technologies</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
