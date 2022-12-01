import React from 'react';
import { Item } from '../../mechanics/items/Item';
import { useAppSelector } from '../../store/store';

interface IInventoryItemProps {
    item: Item
    index: number
    setPlayerHp: React.Dispatch<React.SetStateAction<number>>
}

const InventoryItem = ({ item, index, setPlayerHp }: IInventoryItemProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const [itemCount, setItemCount] = React.useState(item.getCount())

    const handleClick = () => {
        if (itemCount) {
            item.itemClick(mainCharacter)
            setPlayerHp(mainCharacter.getHp())
            setItemCount(item.getCount())
        } else {
            characterInventory.deleteFromInventory(index)
        }
    }

    const bodyItem = React.useMemo(() => {
        return (
            <>
                {itemCount ? <img src={item.getImg()} alt="" /> : ''}
                {itemCount ? <span>{itemCount}</span> : ''}
            </>
        )
    }, [itemCount])

    return (
        <li className="inventory__body-item" onClick={handleClick} >
            {bodyItem}
        </li>
    );
};

export default InventoryItem;