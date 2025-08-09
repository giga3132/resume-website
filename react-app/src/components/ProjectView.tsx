interface ProjectView{
  projectName: string;
  projectImage: string;
  projectDescription: string;
  projectLink: string;
  projectIndex: number;
}

const ProjectView = ({projectName, projectImage, projectDescription, projectLink}: ProjectView) => {
  return (
    <>
      <div className="project-view-name">{projectName}</div>
      <div className="project-container">
        <img className="project-image" src={projectImage}/>
      </div>
      <div className="project-description">{projectDescription}</div>
      <a href={projectLink} target="_blank">
        <button type="button" className="git-hub-project-button">View on GitHub</button>
      </a>
    </>
  )
}

export default ProjectView