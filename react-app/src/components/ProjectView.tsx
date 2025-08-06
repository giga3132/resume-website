interface ProjectView{
  projectName: string;
  projectImage: string;
  projectDescription: string;
  projectIndex: number;
}

const ProjectView = ({projectName, projectImage, projectDescription}: ProjectView) => {
  return (
    <>
      <div>{projectName}</div>
      <div className="project-container">
        <img className="project-image" src={projectImage}/>
      </div>
      <div>{projectDescription}</div>
    </>
  )
}

export default ProjectView