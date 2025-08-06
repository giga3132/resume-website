  interface ListItemProps {
    projectName: string;
    itemIndex: number;
    isActive: boolean;
    setIndex: (index: number) => void;
  }

  const ListItem = ({ projectName, itemIndex, isActive, setIndex }: ListItemProps) => {
    function handleClick() {
      setIndex(isActive ? 0 : itemIndex);
    }
    return (
      <div className="project-item-container">
        <p className="project-name">{projectName}</p>
        <button className="project-toggle-button"onClick={handleClick}>{isActive ? '-' : '+'}</button>
      </div>
    )
  }

  export default ListItem