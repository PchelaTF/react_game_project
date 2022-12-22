import { buttonClick } from '../../mechanics/sounds/sound'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice, TScene } from '../../store/reducers/SceneReducer'
import { useAppDispatch } from '../../store/store'
import "./MainScene.scss"
import BaseButton from '../ui/BaseButton'

const MainScene = () => {
    const dispatch = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const { clearDeadEnemies } = fightSlice.actions

    const mainClass = "Main-scene"

    const handleClick = (value: TScene) => {
        if (value == "Locations")
            dispatch(clearDeadEnemies())
        dispatch(setScene(value))
        buttonClick()
    }

    return (
        <div className={mainClass}>
            <div className={`${mainClass}__modal`}>
                <ul className={`${mainClass}__list`}>
                    <li className={`${mainClass}__list-item item__list`}>
                        <BaseButton name="To battle" onClick={() => handleClick("Locations")} />
                    </li>
                    <li className={`${mainClass}__list-item item__list`}>
                        {/* <button className={`item__list-button btn`} onClick={handleClick}>To hab</button> */}
                    </li>
                    <li className={`${mainClass}__list-item item__list`}>
                        <BaseButton name="Shop" onClick={() => handleClick("shop")} />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainScene;