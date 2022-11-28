import React from 'react';

interface IExplorationSceneDirectionsProps {
    handleClick: () => void
}

const ExplorationSceneDirections = ({handleClick}: IExplorationSceneDirectionsProps) => {
    return (
        <ul>
            <li>
                <button className={`item__list-button btn`} onClick={handleClick}>Left</button>
            </li>
            <li>
                <button className={`item__list-button btn`} onClick={handleClick}>Forward</button>
            </li>
            <li>
                <button className={`item__list-button btn`} onClick={handleClick}>Right</button>
            </li>
        </ul>
    );
};

export default ExplorationSceneDirections;