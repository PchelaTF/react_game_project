import React from 'react';
import Character from '../../mechanics/characters/Character';
import './CharacterWindow.scss'

import headSlots from '../../assets/img/item_slots/Head.png'
import chestSlots from '../../assets/img/item_slots/Chest.png'
import beltSlots from '../../assets/img/item_slots/Belt.png'
import legsSlots from '../../assets/img/item_slots/Legs.png'
import feetSlots from '../../assets/img/item_slots/Feet.png'

import earLeftSlots from '../../assets/img/item_slots/Ear_Left.png'
import earRightSlots from '../../assets/img/item_slots/Ear_Right.png'
import neckSlots from '../../assets/img/item_slots/Neck.png'
import ringSlots from '../../assets/img/item_slots/Ring.png'

import WeaponSlots from '../../assets/img/item_slots/Weapon.png'
import shieldSlots from '../../assets/img/item_slots/Shield.png'
import { useAppSelector } from '../../store/store';

interface ICharacterWindowProps {
    classIfInventoryOpen: string
    closeCharacterWindow: () => void
}

const CharacterWindow = ({ classIfInventoryOpen, closeCharacterWindow }: ICharacterWindowProps) => {

    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const inventoryLength = useAppSelector(state => state.userReducer.inventoryLength)

    const equipmentLeftSide = React.useMemo(() => {
        return (
            <>
                <li className="equipment__slot">
                    <img src={headSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    {
                        mainCharacter.getEquipment().armor.getArmorType() ?
                            <img src={mainCharacter.getEquipment().armor.getImg()} alt="img" className='_isEquipped' /> :
                            <img src={chestSlots} alt="img" />
                    }
                </li>
                <li className="equipment__slot">
                    <img src={beltSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={legsSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={feetSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={feetSlots} alt="img" />
                </li>
            </>
        )

    }, [inventoryLength])

    const equipmentRigthSide = React.useMemo(() => {
        return (
            <>
                <li className="equipment__slot">
                    <img src={earLeftSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={earRightSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={neckSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={ringSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={feetSlots} alt="img" />
                </li>
                <li className="equipment__slot">
                    <img src={feetSlots} alt="img" />
                </li></>
        )
    }, [])

    const equipmentWeapon = React.useMemo(() => {
        return (
            <>
                <li className="equipment__slot weapon">
                    {mainCharacter.getEquipment().weapon.getImg() ?
                        <img src={mainCharacter.getEquipment().weapon.getImg()} alt="img" className='_isEquipped' /> :
                        <img src={WeaponSlots} alt="" />
                    }
                </li>
                <li className="equipment__slot weapon">
                    <img src={shieldSlots} alt="" />
                </li>
            </>
        )
    }, [inventoryLength])

    return (
        <div className={`character-window ${classIfInventoryOpen}`}>
            <div className="character-window__wrapper">
                <h1 className="character-window__title">Character</h1>
                <span className='character-window__close' onClick={closeCharacterWindow}></span>
                <div className="character-window__body">
                    <div className="body__column">
                        <h3 className="body__column-name">
                            {mainCharacter.getName() ? mainCharacter.getName() : 'Character name'}
                        </h3>
                        <div className="body__column-equipment equipment">
                            <ul className="equipment__slots">
                                {equipmentLeftSide}
                            </ul>
                            <div className="equipment__character-img">
                                <img src={mainCharacter.getImgBig()} alt="img" />
                            </div>
                            <ul className="equipment__slots">
                                {equipmentRigthSide}
                            </ul>
                        </div>
                        <div className="body__column-weapon">
                            <ul className="equipment__slots weapon">
                                {equipmentWeapon}
                            </ul>
                        </div>
                    </div>
                    <div className="body__column stats">
                        <ul className="stats__lists">
                            <li className="stats__elem">HP - {mainCharacter.getMaxHp()}</li>
                            <li className="stats__elem">attak - {mainCharacter.getAttack()}</li>
                            <li className="stats__elem">armor - {mainCharacter.getArmor()}</li>
                            <li className="stats__elem">CON - {mainCharacter.getCon()}</li>
                            <li className="stats__elem">DEX - {mainCharacter.getDex()}</li>
                            <li className="stats__elem">STR - {mainCharacter.getStr()}</li>
                            <li className="stats__elem">CHR - {mainCharacter.getChr()}</li>
                            <li className="stats__elem">WIS - {mainCharacter.getWis()}</li>
                            <li className="stats__elem">INT - {mainCharacter.getInt()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterWindow;
