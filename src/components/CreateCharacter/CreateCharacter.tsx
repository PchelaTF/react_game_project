import React from 'react';
import './CreateCharacter.scss'
import { raceArr, classArr, descrArr, skillImgs, statsDescription } from './Images';
import CreateCharacterRace from './CreateCharacterRace';
import CreateCharacterClass from './CreateCharacterClass';
import { characterClasses, characterRace, countStatMod, createNewCharacter, returnRaceMod } from '../../mechanics/CreatingMechanic';
import { useAppDispatch } from '../../store/store';
import { userSlice } from '../../store/reducers/userReducer';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { characterStatsArr } from '../../mechanics/CreatingMechanic';
import { skillsImgArr } from './Images';
import Inventory from '../../mechanics/inventory/Inventory';
import { buttonClick } from '../../mechanics/sounds/sound';
import { Armor, initArmor } from '../../mechanics/items/Armor';
import { initWeapon, Weapon } from '../../mechanics/items/Weapon';

import mediumArmor from '../../assets/img/armor/3.png'
import dagger from '../../assets/img/weapon/dagger.png'
import sword from '../../assets/img/weapon/sword.png'
import staff from '../../assets/img/weapon/staff.png'
import CreateCharacterSkill from './CreateCharacterSkill';
import CreateCharacterStat from './CreateCharacterStat';
import BaseButton from '../ui/BaseButton';

const CreateCharacter = () => {
    // redux const
    const dispath = useAppDispatch()
    const { setPlayerCharacter, setPlayerInventory } = userSlice.actions
    const { setScene } = sceneSlice.actions
    // useState const
    const [fullImg, setFullImg] = React.useState(classArr[0][0].fullImg)
    const [description, setDescription] = React.useState(descrArr[0])
    const [reduxClass, setReduxClass] = React.useState(characterClasses[0])
    const [name, setName] = React.useState('')
    const [activeRace, setActiveRace] = React.useState(0)
    const [activeIndex, setActiveIndex] = React.useState(0)
    const [viewCharacterStats, setViewCharacterStats] = React.useState(characterStatsArr[0])
    const [raceStats, setRaceStats] = React.useState(returnRaceMod(characterRace[activeRace]))
    const [statsMod, setStatsMod] = React.useState<number[]>([1])

    const [isSpoilerOpen, setIsSpoilerOpen] = React.useState(false)
    const [isSpoilerStatsOpen, setIsSpoilerStatsOpen] = React.useState(true)

    const adaptiveHeight = window.matchMedia('(max-height: 919.9px)').matches
    const spoileDescrOpen = isSpoilerOpen ? '_desc-spoiler-open' : ''
    const spoilerStatsClass = isSpoilerStatsOpen ? '_stats-spoiler-open' : '_stats-spoiler-close'

    React.useEffect(() => {
        setRaceStats(returnRaceMod(characterRace[activeRace]))
    }, [activeRace])

    React.useEffect(() => {
        const newStatsMod: number[] = []
        newStatsMod.push(viewCharacterStats.initHp + countStatMod(10 + raceStats.initConstitution))
        newStatsMod.push(viewCharacterStats.initAttack)
        Object.values(raceStats).map((item, key) => {
            newStatsMod.push(item)
        })
        setStatsMod(newStatsMod)
    }, [raceStats, viewCharacterStats])

    function switchRace(key: any) {
        buttonClick()
        setActiveRace(key)
        setFullImg(classArr[key][activeIndex].fullImg)
    }

    function switchClass(key: any) {
        buttonClick()
        setActiveIndex(key)
        setFullImg(classArr[activeRace][key].fullImg)
        setDescription(descrArr[key])
        setReduxClass(characterClasses[key])
        setViewCharacterStats(characterStatsArr[key])
    }

    const setReduxNewCharacter = (name: string, reduxClass: string) => {
        if (!name) return

        const newCharacter = createNewCharacter(name, reduxClass, activeRace, fullImg, classArr[activeRace][activeIndex].iconImg, skillImgs[activeIndex])
        const playerCharacter = setPlayerCharacter(newCharacter)
        dispath(playerCharacter)
        const playerInventory = new Inventory([])
        // * временно. Выдача брони в рюкзак
        const startArmor = new Armor({ ...initArmor, initImg: mediumArmor, initArmorType: 'medium' })
        playerInventory.pushInInventory(startArmor)

        // * временно. Выдача оружия в рюкзак
        const startDagegr = new Weapon({ ...initWeapon, initImg: dagger, initWeaponType: 'dagger' })
        const startSword = new Weapon({ ...initWeapon, initImg: sword, initWeaponType: 'sword' })
        const startStaff = new Weapon({ ...initWeapon, initImg: staff, initWeaponType: 'staff' })
        playerInventory.pushInInventory(startDagegr)
        playerInventory.pushInInventory(startSword)
        playerInventory.pushInInventory(startStaff)

        dispath(setPlayerInventory(playerInventory))
        dispath(setScene("main"))
        buttonClick()
    }

    const getCharacterRace = React.useMemo(() => {
        return (
            <div className="create-character__select-item">
                <p className='create-character__select-title'>race</p>
                <div className="create-character__race">
                    {raceArr.map((item, i) => {
                        return <CreateCharacterRace
                            tip={item.tip || "elf"}
                            key={i}
                            CharacterRace={item.iconImg}
                            switchRace={() => switchRace(i)}
                            activeClassName={(activeRace == i ? "_active" : "")}
                        />
                    })}
                </div>
            </div>
        )
    }, [activeRace, switchRace])

    const getCharacterClass = React.useMemo(() => {
        return (
            <div className="create-character__select-item">
                <p className='create-character__select-title'>class</p>
                <div className="create-character__class">
                    {classArr[activeRace].map((item, i) => {
                        return <CreateCharacterClass
                            classTip={item.class || "warrior"}
                            key={i}
                            CharacterClass={item.iconImg}
                            switchClass={() => switchClass(i)}
                            activeClassName={activeIndex == i ? "_active" : ""}
                        />
                    })}
                </div>
            </div>
        )
    }, [activeIndex, activeRace, switchClass])

    const getStats = React.useMemo(() => {
        return (
            <ul className="stats__lists">
                {
                    statsDescription.map((item, key) => {
                        return <CreateCharacterStat raceMod={statsMod[key]} stat={item} key={key} />
                    })
                }
            </ul>
        )
    }, [viewCharacterStats, activeIndex, raceStats, statsMod, activeRace])

    const getSkills = React.useMemo(() => {
        return (
            <ul className="skills__lists">
                {skillsImgArr[activeIndex].map((item, i) => {
                    return <CreateCharacterSkill characterSkill={item.img} tip={item.dis} key={i} />
                })}
            </ul>
        )
    }, [skillsImgArr, activeIndex])

    const hendleSpoilerClick = () => {
        if (adaptiveHeight) {
            setIsSpoilerOpen(!isSpoilerOpen)
            setIsSpoilerStatsOpen(!isSpoilerStatsOpen)
        }
    }

    return (
        <div className='create-character'>
            <div className="create-character__wrapper">
                <h1 className="create-character__title">
                    character creation
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
                        <div className="create-character__info-wrapper">
                            <div className={`create-character__info-descr descr ${spoileDescrOpen}`}>
                                <p className='descr__title' onClick={hendleSpoilerClick}> Description <i className='arrow down'></i></p>
                                <p className='descr__text'>{description}</p>
                            </div>
                            <div className={`create-character__info-stats stats ${spoilerStatsClass}`}>
                                <p className="stats__title" onClick={hendleSpoilerClick}>Stats <i className='arrow up'></i></p>
                                {getStats}
                            </div>
                        </div>
                        <div className="create-character__info-skills skills">
                            <p className="skills__title">Skills</p>
                            {getSkills}
                        </div>
                    </div>
                </div>
                <form className="create-character__form">
                    <input
                        type="text"
                        name='name'
                        autoComplete='off'
                        placeholder='CHARACTER NAME'
                        required
                        onChange={(e) => setName(e.target.value)} />
                    <BaseButton name="Create" onClick={() => setReduxNewCharacter(name, reduxClass)} />
                </form>
            </div>
        </div>
    );
};

export default CreateCharacter;