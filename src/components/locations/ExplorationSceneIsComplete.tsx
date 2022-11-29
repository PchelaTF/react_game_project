import React from 'react';
import './ExplorationSceneIsComplete.scss'

interface IExplorationSceneIsCompleteProps {
    exitExploration: () => void
}

const ExplorationSceneIsComplete = ({ exitExploration }: IExplorationSceneIsCompleteProps) => {
    return (
        <div className='exploretion-is-complite' onClick={exitExploration}>
            <p>location is complite</p>
        </div>
    );
};

export default ExplorationSceneIsComplete;