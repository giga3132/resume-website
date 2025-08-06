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
      <div>
        <div className="project-name-container">{projectName}</div>
        <button onClick={handleClick}>{isActive ? '-' : '+'}</button>
      </div>
    )
  }

  export default ListItem