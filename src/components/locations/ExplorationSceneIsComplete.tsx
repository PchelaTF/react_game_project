import * as React from 'react';
import './ExplorationSceneIsComplete.scss';

interface IExplorationSceneIsCompleteProps {
  exitExploration: () => void;
}

const ExplorationSceneIsComplete: React.FC<IExplorationSceneIsCompleteProps> = ({ exitExploration }) => {
  return (
    <div className="exploretion-is-complite" onClick={exitExploration}>
      <p>location is complite</p>
    </div>
  );
};

export default React.memo(ExplorationSceneIsComplete);
