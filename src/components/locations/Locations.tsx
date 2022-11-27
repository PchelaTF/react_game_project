import React from 'react'
import { buttonClick } from '../../mechanics/sounds/sound'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./Locations.scss"

export default function Locations() {
    const dispatch = useAppDispatch()
    const { setScene, setCurrentLevel } = sceneSlice.actions
    const { clearDeadEnemies, setBackground } = fightSlice.actions
    const levels = useAppSelector(state => state.SceneReducer.locations)

    const mainClass = "Locations"

    const handleClick = (index: number) => {
        dispatch(clearDeadEnemies())
        dispatch(setCurrentLevel(index))
        dispatch(setBackground(levels[index].background))
        dispatch(setScene("explore"))
    }

    const backClick = () => {
        dispatch(setScene("main"))
        buttonClick()
    }

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__modal`}>
                <p className=''>Game level</p>
                {levels.map((item, key) => {
                    return <div className={`${mainClass}__modal-item`} onClick={() => handleClick(key)} key={key}>
                        <img src={item.background} style={!item.isCompleted ? {filter: "grayscale(1)"} : {}}></img>
                        <span>{item.name}</span>
                    </div>
                })}
            </div>
            <button className={`item__list-button btn`} onClick={backClick}>Back</button>
        </div>
    )
}
