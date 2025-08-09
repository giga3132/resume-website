import React from 'react'
import { useState } from 'react';
import ListItem from '../components/ListItem.tsx';
import ProjectView from '../components/ProjectView.tsx';

import PlaceholderPicture from '../assets/placeholder.jpg';
import ResumeWebsitePreview from "../assets/resume-website-preview.png"


const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {
      name: "Resume Website",
      image: ResumeWebsitePreview,
      description: "This website to showcase my resume. Made using React and TypeScript.",
      link: "https://github.com/giga3132/resume-website",
      index: 1
    }
  ];

  const selectedProject = projects.find(project => project.index === index);

  return (
    <section id="projects" className="projects">
      <hr className="section-delimiter" />
      <h1 className="section-header">Projects</h1>
      <hr className="section-delimiter" />
      <div className="project-grid" >
        <div className="project-list-container">
          {projects.map((project, i) => (
            <ListItem 
            projectName = {project.name}
            itemIndex = {i + 1}
            isActive = {index === i + 1}
            setIndex={setIndex}
            />
            
          ))}
        </div>
        <div className="project-view-container">
          {index !== 0 && selectedProject && (<ProjectView
            projectName = {selectedProject.name}
            projectImage = {selectedProject.image}
            projectDescription = {selectedProject.description}
            projectLink = {selectedProject.link}
            projectIndex = {selectedProject.index}
          />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
