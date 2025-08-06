import React from 'react'
import { useState } from 'react';
import ListItem from '../components/ListItem.tsx';
import ProjectView from '../components/ProjectView.tsx';

import PlaceholderPicture from '../assets/placeholder.jpg';


const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    {name: "project 1", image: PlaceholderPicture, description: "a small description of project 1", index: 1},
    {name: "project 2", image: PlaceholderPicture, description: "a lifechanging revelation", index: 2},
    {name: "project 3", image: PlaceholderPicture, description: "I like chalk", index: 3},
  ];

  const selectedProject = projects.find(project => project.index === index);

  return (
    <section id="projects" className="projects">
      <hr className="section-delimiter" />
      <h1 className="section-header">Projects</h1>
      <hr className="section-delimiter" />
      <div className="project-grid" >
        <div>
          {projects.map((project, i) => (
            <ListItem 
            projectName = {project.name}
            itemIndex = {i + 1}
            isActive = {index === i + 1}
            setIndex={setIndex}
            />
            
          ))}
        </div>
        <div>
          {index !== 0 && selectedProject && (<ProjectView
            projectName = {selectedProject.name}
            projectImage = {selectedProject.image}
            projectDescription = {selectedProject.description}
            projectIndex = {selectedProject.index}
          />)}
        </div>
      </div>
    </section>
  )
}

export default Projects
