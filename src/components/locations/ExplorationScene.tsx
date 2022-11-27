import React from 'react'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./ExplorationScene.scss"

export default function ExplorationScene() {
    const background = useAppSelector(state => state.FightReducer.background)
    const dispatch = useAppDispatch()
    const { clearDeadEnemies } = fightSlice.actions
    const { setScene } = sceneSlice.actions

    const getRandomScene = () => {
        // TODO добавить свитч кейс после разработки других сцен
        dispatch(setScene("fight"))
    }

    const handleClick = () => {
        dispatch(clearDeadEnemies())
        getRandomScene()
    }

    return (
        <div className="exploration-scene fight-scene__main-backimg">
            <img src={background} alt="img" />
            <ul>
                <li>
                    <button className={`item__list-button btn`} onClick = {handleClick}>Left</button>
                </li>
                <li>
                    <button className={`item__list-button btn`} onClick = {handleClick}>Forward</button>
                </li>
                <li>
                    <button className={`item__list-button btn`} onClick = {handleClick}>Right</button>
                </li>
            </ul>
        </div>
    )
}
