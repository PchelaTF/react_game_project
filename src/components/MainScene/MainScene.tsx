import React from 'react'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch } from '../../store/store'
import "./MainScene.scss"

export default function MainScene() {
    const dispatch = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const { clearDeadEnemies } = fightSlice.actions

    const mainClass = "Main-scene"

    const handleClick = (e: any) => {
        if(e.target.value == "fight")
            dispatch(clearDeadEnemies())
        dispatch(setScene(e.target.value))
    }

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__modal`}>
                <ul className={`${mainClass}__list`}>
                    <li className={`${mainClass}__list-item item__list`}>
                        <button value={"fight"} className={`item__list-button btn`} onClick={(e) => handleClick(e)}>To battle</button>
                    </li>
                    <li className={`${mainClass}__list-item item__list`}>
                        <button className={`item__list-button btn`} onClick={handleClick}>To hab</button>
                    </li>
                    <li className={`${mainClass}__list-item item__list`}>
                        <button className={`item__list-button btn`} onClick={handleClick}>Shop</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
