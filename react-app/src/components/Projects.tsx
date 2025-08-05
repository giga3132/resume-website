import React from 'react'
import { useState } from 'react';

const Projects = () => {
  const [index, setIndex] = useState(0);

  const projects = [
    "project 1",
    "project 2",
    "project 3"
  ];


  interface ListItemProps {
    projectName: string;
    itemIndex: number;
    isActive: boolean;
    setIndex: (index: number) => void;
  }

  function ListItem ({ projectName, itemIndex, isActive, setIndex }: ListItemProps) {
    function handleClick() {
      setIndex(isActive ? 0 : itemIndex);
    }
    return (
      <>
        <div>{projectName}</div>
        <button onClick={handleClick}>{isActive ? '-' : '+'}</button>
      </>
    )
  }

  return (
    <section id="projects" className="projects">
      <hr className="section-delimiter" />
      <h1 className="section-header">Projects</h1>
      <hr className="section-delimiter" />
      <div className="project-grid" >
        <div>
          {projects.map((projectName, i) => (
            <ListItem 
            projectName = {projectName}
            itemIndex = {i + 1}
            isActive = {index === i + 1}
            setIndex={setIndex}
            />
          ))}
        </div>
        <div>2</div>
      </div>
    </section>
  )
}

export default Projects
