import { useAppSelector } from '../../store/store';

import earLeftSlots from '../../assets/img/item_slots/Ear_Left.png'
import earRightSlots from '../../assets/img/item_slots/Ear_Right.png'
import neckSlots from '../../assets/img/item_slots/Neck.png'
import ringSlots from '../../assets/img/item_slots/Ring.png'

const CharacterWindowJewerly = () => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

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
                <img src={ringSlots} alt="img" />
            </li>
            <li className="equipment__slot">
                <img src={ringSlots} alt="img" />
            </li>
        </>
    );
};

export default CharacterWindowJewerly;