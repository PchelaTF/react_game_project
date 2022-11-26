import React from 'react'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./MainScene.scss"
import potion from '../../assets/img/potions/potion.png'
import { IInventoryItem } from '../../mechanics/inventory/Inventory'

export default function MainScene() {
    const dispatch = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const { clearDeadEnemies } = fightSlice.actions
    const characterInventory = useAppSelector(state => state.userReducer.inventory)

    const mainClass = "Main-scene"

    const handleClick = (e: any) => {
        if (e.target.value == "levels")
            dispatch(clearDeadEnemies())
        dispatch(setScene(e.target.value))
    }

    const healingPotion: IInventoryItem = {
        id: 1,
        img: potion,
        count: 1
    }

    characterInventory.pushInInventory(healingPotion)
    characterInventory.pushInInventory(healingPotion)

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__modal`}>
                <ul className={`${mainClass}__list`}>
                    <li className={`${mainClass}__list-item item__list`}>
                        <button value={"levels"} className={`item__list-button btn`} onClick={(e) => handleClick(e)}>To battle</button>
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
