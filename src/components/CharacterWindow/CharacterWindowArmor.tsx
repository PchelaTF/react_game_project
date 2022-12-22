import { memo } from 'react';
import { useAppSelector } from '../../store/store';

import headSlots from '../../assets/img/item_slots/Head.png'
import chestSlots from '../../assets/img/item_slots/Chest.png'
import beltSlots from '../../assets/img/item_slots/Belt.png'
import legsSlots from '../../assets/img/item_slots/Legs.png'
import feetSlots from '../../assets/img/item_slots/Feet.png'

const CharacterWindowArmor = () => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

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
    );
};

export default CharacterWindowArmor;