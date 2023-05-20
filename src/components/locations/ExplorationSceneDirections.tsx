import * as React from 'react';
import './ExplorationSceneDirections.scss';

interface IExplorationSceneDirectionsProps {
  handleClick: () => void;
}

const ExplorationSceneDirections: React.FC<IExplorationSceneDirectionsProps> = ({ handleClick }) => {
  return (
    <ul>
      <li>
        {/* <button className={`item__list-button btn`} onClick={handleClick}>Left</button> */}
        <div className="arrow-hover move-left" onClick={handleClick}>
          <div></div>
        </div>
      </li>
      <li>
        {/* <button className={`item__list-button btn`} onClick={handleClick}>Forward</button> */}
        <div className="arrow-hover move-forward" onClick={handleClick}>
          <div></div>
        </div>
      </li>
      <li>
        {/* <button className={`item__list-button btn`} onClick={handleClick}>Right</button> */}
        <div className="arrow-hover move-right" onClick={handleClick}>
          <div></div>
        </div>
      </li>
    </ul>
    // <div className="test">

    // </div>
  );
};

export default React.memo(ExplorationSceneDirections);
