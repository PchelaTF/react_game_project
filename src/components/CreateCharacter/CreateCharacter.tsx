import React from 'react';
import './CreateCharacter.scss'
import { raceArr, classArr, descrArr } from './Images';
import CreateCharacterRace from './CreateCharacterRace';
import CreateCharacterClass from './CreateCharacterClass';
import { characterClasses, createNewCharacter } from '../../mechanics/CreatingMechanic';
import { useAppDispatch } from '../../store/store';
import { userSlice } from '../../store/reducers/userReducer';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { characterStatsArr } from '../../mechanics/CreatingMechanic';
import { skillsImgArr } from './Images';
import Inventory from '../../mechanics/inventory/Inventory';
import { buttonClick } from '../../mechanics/sounds/sound';

const CreateCharacter = () => {
    const dispath = useAppDispatch()
    const { setPlayerCharacter, setPlayerInventory } = userSlice.actions
    const { setScene } = sceneSlice.actions
    const [fullImg, setFullImg] = React.useState(classArr[0][0].fullImg)
    const [description, setDescription] = React.useState(descrArr[0])
    const [reduxClass, setReduxClass] = React.useState(characterClasses[0])
    const [name, setName] = React.useState('')
    const [activeRace, setActiveRace] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [viewCharacterStats, setViewCharacterStats] = React.useState(characterStatsArr[0])

    function switchRace(key: any) {
        setActiveRace(key)
        setFullImg(classArr[key][activeIndex].fullImg)
    }

    function switchClass(key: any) {
        setActiveIndex(key)
        setFullImg(classArr[activeRace][key].fullImg)
        setDescription(descrArr[key])
        setReduxClass(characterClasses[key])
        setViewCharacterStats(characterStatsArr[key])
    }

    const onHandleNameChange = (e: any) => {
        setName(e.target.value)
    }

    const setReduxNewCharacter = (name: string, reduxClass: string) => {
        const newCharacter = createNewCharacter(name, reduxClass, activeRace, fullImg, classArr[activeRace][activeIndex].iconImg, skillsImgArr[activeIndex])
        const playerCharacter = setPlayerCharacter(newCharacter)
        dispath(playerCharacter)
        const playerInventory = new Inventory([])
        dispath(setPlayerInventory(playerInventory))
        dispath(setScene("main"))
        buttonClick()
    }

    const getCharacterRace = React.useMemo(() => {
        return <div className="create-character__select-item">
                <p className='create-character__select-title'>race</p>
                <div className="create-character__race">
                    {raceArr.map((item, i) => {
                        return <CreateCharacterRace key={i} CharacterRace={item} switchRace={() => switchRace(i)} activeClassName={(activeRace == i ? "_active" : "")} />
                    })}
                </div>
            </div>
    },[activeRace])

    const getCharacterClass = React.useMemo(() => {
        return <div className="create-character__select-item">
                <p className='create-character__select-title'>class</p>
                <div className="create-character__class">
                    {classArr[activeRace].map((item, i) => {
                        return <CreateCharacterClass key={i} CharacterClass={item.iconImg} switchClass={() => switchClass(i)} activeClassName={activeIndex == i ? "_active" : ""} />
                    })}
                </div>
            </div>
    },[activeIndex, activeRace])

    const getStats = React.useMemo(() => {
        return <div className="create-character__info-stats stats">
                <p className="stats__title">Stats</p>
                <ul className="stats__lists">
                    <li className="stats__elem">HP - {viewCharacterStats.initHp}</li>
                    {/* <li className="stats__elem">attak - ({viewCharacterStats.initAttack.min} - {viewCharacterStats.initAttack.max})</li>
                    <li className="stats__elem">armor - {viewCharacterStats.initArmor}</li> */}
                    <li className="stats__elem">INT - 15</li>
                    <li className="stats__elem">MEN - 15</li>
                    <li className="stats__elem">WIT - 15</li>
                </ul>
            </div>
    }, [])

    const getSkills = React.useMemo(() => {
        return <div className="create-character__info-skills skills">
                <p className="skills__title">Skills</p>
                <ul className="skills__lists">
                    {skillsImgArr[activeIndex].map((item, i) => {
                        return <li className="skills__elem" key={i}><img src={item} alt="img" /></li>
                    })}
                </ul>
            </div>
    },[skillsImgArr, activeIndex])

    return (
        <div className='create-character'>
            <div className="create-character__wrapper">
                <h1 className="create-character__title">
                    create character
                </h1>
                <div className="create-character__content">
                    <div className="create-character__select">
                        {getCharacterRace}
                        {getCharacterClass}
                    </div>
                    <div className="create-character__bigimg">
                        <img src={fullImg} alt="img" />
                    </div>
                    <div className="create-character__info">
                        <p className="create-character__info-title">Information</p>
                        <div className="create-character__info-descr">
                            <p>Description</p>
                            {description}
                        </div>
                        <div className="create-character__info-content">
                            {getStats}
                            {getSkills}
                        </div>
                    </div>
                </div>
                <div className="create-character__name">
                    <input
                        type="text"
                        name='name'
                        autoComplete='off'
                        placeholder='CHARACTER NAME'
                        onChange={(e) => onHandleNameChange(e)} />
                </div>
                <div className="create-character__button">
                    <button className='btn' onClick={() => setReduxNewCharacter(name, reduxClass)}>Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateCharacter;