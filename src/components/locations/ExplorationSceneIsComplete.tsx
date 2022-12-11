import React from 'react';
import { useAppSelector } from '../../store/store';
import './ExplorationSceneIsComplete.scss'

interface IExplorationSceneIsCompleteProps {
    exitExploration: () => void
}

const ExplorationSceneIsComplete = ({ exitExploration }: IExplorationSceneIsCompleteProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    React.useEffect(() => {
        mainCharacter.setHp(mainCharacter.getMaxHp())
    })

    return (
        <div className='exploretion-is-complite' onClick={exitExploration}>
            <p>location is complite</p>
        </div>
    );
};

export default ExplorationSceneIsComplete;