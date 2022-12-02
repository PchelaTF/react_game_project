import React from 'react';
import Character from '../../mechanics/characters/Character';
import './CharacterWindow.scss'
import characterImg from "../../assets/img/characters_img/demons/Character2_face1.png"
// import characterImg from "../../assets/img/characters_img/hulflings/Character8_face1.png"

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



interface ICharacterWindowProps {
    mainCharacter: Character
}

const CharacterWindow = ({ mainCharacter }: ICharacterWindowProps) => {
    return (
        <div className='character-window'>
            <div className="character-window__wrapper">
                <h1 className="character-window__title">Character</h1>
                {/* <h2 className="delete-after-finish">delete-after-finish</h2> */}
                <div className="character-window__body">
                    <div className="body__column">
                        <h3 className="body__column-name">Character name</h3>
                        <div className="body__column-equipment equipment">
                            <ul className="equipment__slots">
                                <li className="equipment__slot">
                                    <img src={headSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={chestSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={beltSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={legsSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={feetSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={feetSlots} alt="" />
                                </li>
                            </ul>
                            <div className="equipment__character-img">
                                {/* <img src={mainCharacter.getImgBig()} alt="" /> */}
                                <img src={characterImg} alt="" />
                            </div>
                            <ul className="equipment__slots">
                                <li className="equipment__slot">
                                    <img src={earLeftSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={earRightSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={neckSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={ringSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={feetSlots} alt="" />
                                </li>
                                <li className="equipment__slot">
                                    <img src={feetSlots} alt="" />
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterWindow;
