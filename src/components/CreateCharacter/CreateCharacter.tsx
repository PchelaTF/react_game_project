import { useEffect, useState } from 'react';
import { classArr, skillsImgArr } from '../../tempDB';
import CreateCharacterRace from './CreateCharacterRace';
import CreateCharacterClass from './CreateCharacterClass';
import { createNewCharacter, ICreationParams } from '../../mechanics/CreatingMechanic';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { userSlice } from '../../store/reducers/userReducer';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import Inventory from '../../mechanics/inventory/Inventory';
import BaseButton from '../ui/BaseButton';
import { buttonClick } from '../../mechanics/sounds/sound';
import CreateCharacterInfo from './CreateCharacterInfo/CreateCharacterInfo';
import './CreateCharacter.scss'

import { Armor, initArmor } from '../../mechanics/items/Armor';
import { initWeapon, Weapon } from '../../mechanics/items/Weapon';
import mediumArmor from '../../assets/img/armor/3.png'
import dagger from '../../assets/img/weapon/dagger.png'
import sword from '../../assets/img/weapon/sword.png'
import staff from '../../assets/img/weapon/staff.png'

const CreateCharacter = () => {
    // redux const
    const dispath = useAppDispatch()
    const { setPlayerCharacter, setPlayerInventory } = userSlice.actions
    const { setScene } = sceneSlice.actions
    const activeRace = useAppSelector(state => state.createCharacterSlice.activeRace)
    const activeClass = useAppSelector(state => state.createCharacterSlice.activeClass)
    const reduxClass = useAppSelector(state => state.createCharacterSlice.reduxClass)
    const fullImg = useAppSelector(state => state.createCharacterSlice.fullImg)
    // useState const
    const [name, setName] = useState('')
    const [formError, setFormError] = useState('')
    const [isNameValid, setIsNameValid] = useState(false)

    function validateName(name: string): string {
        let error = ''

        if (!name) {
            error = 'Name is required!'
        } else if (name.length < 3) {
            error = 'Name must be more then 3 characters!'
        } else if (/\s/g.test(name)) {
            error = 'Should be no spaces in the name!'
        } else {
            error = ''
            setIsNameValid(true)
        }

        return error
    }

    function handleSubmit() {
        setFormError(validateName(name))
    }

    useEffect(() => {
        if (!formError && isNameValid) {
            setReduxNewCharacter()
        }
    }, [isNameValid, formError])

    const setReduxNewCharacter = () => {
        const creationParams: ICreationParams = {
            name,
            characterClass: reduxClass,
            activeRace,
            img: fullImg,
            icon: classArr[activeRace][activeClass].iconImg,
            skills: skillsImgArr[activeClass]
        }

        dispath(setPlayerCharacter(createNewCharacter(creationParams)))

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

    return (
        <div className='create-character'>
            <div className="create-character__wrapper">
                <h1 className="create-character__title">
                    character creation
                </h1>
                <div className="create-character__content">
                    <div className="create-character__select">
                        <CreateCharacterRace />
                        <CreateCharacterClass />
                    </div>
                    <div className="create-character__bigimg">
                        <img src={fullImg} alt="img" />
                    </div>
                    <CreateCharacterInfo />
                </div>
                <form className="create-character__form">
                    {formError ? (<div className='create-character__form-error'>{formError}</div>) : null}
                    <input
                        type="text"
                        name='name'
                        autoComplete='off'
                        placeholder='CHARACTER NAME'
                        required
                        onChange={(e) => setName(e.target.value)} />
                    <BaseButton type='submit' name="Create" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
};

export default CreateCharacter;