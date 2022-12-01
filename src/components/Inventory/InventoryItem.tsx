import React from 'react';
import { Item } from '../../mechanics/items/Item';
import { useAppSelector } from '../../store/store';

interface IInventoryItemProps {
    item: Item
}

const InventoryItem = ({ item }: IInventoryItemProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    const handleClick = () => {
        item.itemClick(mainCharacter)
    }

    return (
        <li className="inventory__body-item" onClick={handleClick}>
            {item.getCount() ? <img src={item.getImg()} alt="" /> : ''}
            {item.getCount() ? <span>{item.getCount()}</span> : ''}
        </li>
    );
};

export default InventoryItem;