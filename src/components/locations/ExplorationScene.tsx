import React from 'react'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./ExplorationScene.scss"
import ExplorationSceneDirections from './ExplorationSceneDirections'
import ExplorationSceneIsComplete from './ExplorationSceneIsComplete'

export default function ExplorationScene() {
    const background = useAppSelector(state => state.FightReducer.background)
    const dispatch = useAppDispatch()
    const { clearDeadEnemies } = fightSlice.actions
    const { setScene, changeCurrentLocation, setPasssedLocationLevels, resetPassedLocationLevels } = sceneSlice.actions
    const currentLocation = useAppSelector(state => state.SceneReducer.currentLocation)
    const locations = useAppSelector(state => state.SceneReducer.locations)
    const passedLocationLevels = useAppSelector(state => state.SceneReducer.passsedLocationLevels)
    const maxLocationLevels = locations[currentLocation].maxLocationLevels

    const getRandomScene = () => {
        const rndScene = Math.floor(Math.random() * (2 - 0 + 1) + 0)

        switch (rndScene) {
            case 0:
                return dispatch(setScene("fight"))
            case 1:
                return dispatch(setScene("chest"))
            case 2:
                return dispatch(setScene("dialog"))
            default:
                return dispatch(setScene("fight"))
        }
    }

    const handleClick = () => {
        dispatch(clearDeadEnemies())
        getRandomScene()
        dispatch(setPasssedLocationLevels(1))
    }

    function exitExploration() {
        const newCurrentLocation = { ...locations[currentLocation] }
        newCurrentLocation.isCompleted = true
        dispatch(changeCurrentLocation(newCurrentLocation))
        dispatch(resetPassedLocationLevels(0))
        dispatch(setScene("main"))
    }

    return (
        <div className="exploration-scene">
            <div className="exploration-scene__backimg">
                <img src={background} alt="img" />
            </div>
            <div className="exploration-scene__wrapper">
                {passedLocationLevels === maxLocationLevels ?
                    <ExplorationSceneIsComplete exitExploration={exitExploration} />
                    :
                    <ExplorationSceneDirections handleClick={handleClick} />
                }
            </div>
        </div>
    )
}
