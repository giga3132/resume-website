import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <hr className="section-delimiter" />
      <h1 className="section-header">Projects</h1>
      <hr className="section-delimiter" />
      <div className="project-grid" >
        <div className="project-container">
          <div className="project-image-container">
            <img className="project-image" src="assets/placeholder.jpg" />
          </div>
          <div className="project-description-container">
            <p>
              A short description of the project
            </p>
            <button>View on GitHub</button>
          </div>
        </div>
        <div className="project-container">
          <div className="project-image-container">
            <img className="project-image" src="assets/placeholder.jpg" />
          </div>
          <div className="project-description-container">
            <p>
              A short description of the project
            </p>
            <button>View on GitHub</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
