import { useEffect } from 'react'
import { buttonClick, locationMusic, mainMusic } from '../../mechanics/sounds/sound'
import { fightSlice } from '../../store/reducers/FightReducer'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import BaseButton from '../ui/BaseButton'
import "./Locations.scss"
import LocationsItem from './LocationsItem'

const Locations = () => {
    const dispatch = useAppDispatch()
    const { setScene, setCurrentLocation } = sceneSlice.actions
    const { clearDeadEnemies, setBackground, setDifficalty } = fightSlice.actions
    const levels = useAppSelector(state => state.SceneReducer.locations)
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    const mainClass = "Locations"

    useEffect(() => {
        mainCharacter.setHp(mainCharacter.getMaxHp())
    })

    const handleClick = (index: number) => {
        mainMusic(true)
        locationMusic()
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
                {levels.map((item, i) => {
                    return (
                        <LocationsItem key={i} mainClass={mainClass} handleClick={() => handleClick(i)} location={item} />
                    )
                })}
            </div>
            <BaseButton name="Back" onClick={backClick} />
        </div>
    )
}

export default Locations;