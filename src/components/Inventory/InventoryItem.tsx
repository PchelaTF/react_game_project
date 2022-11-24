import React from 'react';
import { IInventoryItem } from '../../mechanics/inventory/Inventory';

interface IInventoryItemProps {
    item: IInventoryItem
}

const InventoryItem = ({ item }: IInventoryItemProps) => {
    return (
        <li className="inventory__body-item">
            {item.img ? <img src={item.img} alt="" /> : ''}
            {item.count ? <span>{item.count}</span> : ''}
        </li>
    );
};

export default InventoryItem;