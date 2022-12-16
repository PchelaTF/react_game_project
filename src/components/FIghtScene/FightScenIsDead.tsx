import React from 'react';
import { locations } from '../../mechanics/Locations';
import { locationMusic, mainMusic, playBossMusic, playDeathSound } from '../../mechanics/sounds/sound';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './FightScenIsDead.scss'

const FightScenIsDead = () => {
    const dispatch = useAppDispatch()
    const { setScene, resetLocations, resetPassedLocationLevels } = sceneSlice.actions

    React.useEffect(() => {
        playDeathSound()
        playBossMusic(true)
    },[])

    function exitFightScene() {
        dispatch(resetLocations(locations))
        dispatch(resetPassedLocationLevels(0))
        dispatch(setScene("create"))
        mainMusic()
        playBossMusic(true)
    }

    return (
        <div className='character-is-dead' onClick={() => exitFightScene()}>
            <p>You are dead</p>
        </div>
    );
};

export default FightScenIsDead;