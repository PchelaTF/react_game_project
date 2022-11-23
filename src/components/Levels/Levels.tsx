import React from 'react'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./Levels.scss"

export default function Levels() {
    const dispatch = useAppDispatch()
    const { setScene, setCurrentLevel } = sceneSlice.actions
    const { clearDeadEnemies } = fightSlice.actions
    const levels = useAppSelector(state => state.SceneReducer.levels)

    const mainClass = "Levels"

    const handleClick = (index: number) => {
        dispatch(clearDeadEnemies())
        dispatch(setCurrentLevel(index))
        dispatch(setScene("fight"))
    }

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__modal`}>
                {levels.map((item, key) => {
                    return <div className={`${mainClass}__modal-item`} onClick={() => handleClick(key)} key={key}>
                        <img src={item.background} style={!item.isCompleted ? {filter: "grayscale(1)"} : {}}></img>
                    </div>
                })}
            </div>
        </div>
    )
}
