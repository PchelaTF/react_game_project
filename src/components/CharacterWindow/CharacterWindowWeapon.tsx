import { useAppSelector } from '../../store/store';

import WeaponSlots from '../../assets/img/item_slots/Weapon.png'
import shieldSlots from '../../assets/img/item_slots/Shield.png'

const CharacterWindowWeapon = () => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

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
    );
};

export default CharacterWindowWeapon;