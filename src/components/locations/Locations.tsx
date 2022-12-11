import React from 'react'
import { buttonClick } from '../../mechanics/sounds/sound'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./Locations.scss"

export default function Locations() {
    const dispatch = useAppDispatch()
    const { setScene, setCurrentLocation } = sceneSlice.actions
    const { clearDeadEnemies, setBackground, setDifficalty } = fightSlice.actions
    const levels = useAppSelector(state => state.SceneReducer.locations)
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    const mainClass = "Locations"

    React.useEffect(() => {
        mainCharacter.setHp(mainCharacter.getMaxHp())
    })

    const handleClick = (index: number) => {
        dispatch(clearDeadEnemies())
        dispatch(setCurrentLocation(index))
        dispatch(setBackground(levels[index].background))
        dispatch(setScene("explore"))
        dispatch(setDifficalty(levels[index].difficulty))
    }

    const backClick = () => {
        dispatch(setScene("main"))
        buttonClick()
    }

    return (
        <div className={mainClass}>
            <h1 className={`${mainClass}__title`}>Game locations</h1>
            <div className={`${mainClass}__modal`}>
                {levels.map((item, key) => {
                    return <div className={`${mainClass}__modal-item`} onClick={() => handleClick(key)} key={key}>
                        <img src={item.background} style={!item.isCompleted ? { filter: "grayscale(1)" } : {}}></img>
                        <span>{item.name}</span>
                    </div>
                })}
            </div>
            <button className={`item__list-button btn`} onClick={backClick}>Back</button>
        </div>
    )
}
