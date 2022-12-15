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

    const equipment = React.useMemo(() => {
        return <ul className="equipment__slots">
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
        </ul>
    }, [inventoryLength])

    return (
        <div className={`character-window ${classIfInventoryOpen}`}>
            <div className="character-window__wrapper">
                <h1 className="character-window__title">Character</h1>
                <span className='character-window__close' onClick={closeCharacterWindow}></span>
                {/* <h2 className="delete-after-finish">delete-after-finish</h2> */}
                <div className="character-window__body">
                    <div className="body__column">
                        <h3 className="body__column-name">
                            {mainCharacter.getName() ? mainCharacter.getName() : 'Character name'}
                        </h3>
                        <div className="body__column-equipment equipment">
                            {equipment}
                            <div className="equipment__character-img">
                                <img src={mainCharacter.getImgBig()} alt="img" />
                            </div>
                            <ul className="equipment__slots">
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
                                </li>
                            </ul>
                        </div>
                        <div className="body__column-weapon">
                            <ul className="equipment__slots weapon">
                                <li className="equipment__slot weapon">
                                    <img src={WeaponSlots} alt="" />
                                </li>
                                <li className="equipment__slot weapon">
                                    <img src={shieldSlots} alt="" />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="body__column stats">
                        <ul className="stats__lists">
                            <li className="stats__elem">HP - </li>
                            {/* <li className="stats__elem">attak - ({viewCharacterStats.initAttack.min} - {viewCharacterStats.initAttack.max})</li>
                    <li className="stats__elem">armor - {viewCharacterStats.initArmor}</li> */}
                            <li className="stats__elem">INT - 15</li>
                            <li className="stats__elem">MEN - 15</li>
                            <li className="stats__elem">WIT - 15</li>
                            <li className="stats__elem">armor - {mainCharacter.getArmor()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterWindow;
