import React from 'react'
import { useState } from 'react';

const Projects = () => {
  const [index, setIndex] = useState(0);

  interface ListItemProps {
    projectName: string;
    itemIndex: number;
  }

  function ListItem ({ projectName, itemIndex }: ListItemProps) {
    return (
      <>
        <div>{projectName}</div>
        <button>{index == itemIndex ? '-' : '+'}</button>
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
          <ListItem projectName="item 1" itemIndex ={1}></ListItem>
          <ListItem projectName="item 2" itemIndex ={2}></ListItem>
          <ListItem projectName="item 3" itemIndex ={3}></ListItem>
        </div>
        <div>2</div>
      </div>
    </section>
  )
}

export default Projects
