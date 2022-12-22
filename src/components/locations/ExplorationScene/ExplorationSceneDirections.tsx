import './ExplorationSceneDirections.scss'

interface IExplorationSceneDirectionsProps {
    handleClick: () => void
}

const ExplorationSceneDirections = ({ handleClick }: IExplorationSceneDirectionsProps) => {
    return (
        <ul>
            <li>
                <div className="arrow-hover move-left" onClick={handleClick}>
                    <div></div>
                </div>
            </li>
            <li>
                <div className="arrow-hover move-forward" onClick={handleClick}>
                    <div></div>
                </div>
            </li>
            <li>
                <div className="arrow-hover move-right" onClick={handleClick}>
                    <div></div>
                </div>
            </li>
        </ul>
    );
};

export default ExplorationSceneDirections;