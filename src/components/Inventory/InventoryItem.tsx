import React from 'react';
import { Item } from '../../mechanics/items/Item';
import { useAppSelector } from '../../store/store';

interface IInventoryItemProps {
    item: Item
    index: number
    setPlayerHp: React.Dispatch<React.SetStateAction<number>>
    setInventoryLength: React.Dispatch<React.SetStateAction<number>>
}

const InventoryItem = ({ item, index, setPlayerHp, setInventoryLength }: IInventoryItemProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const [itemCount, setItemCount] = React.useState(item.getCount())

    const handleClick = () => {
        if (itemCount > 1) {
            item.useItem(mainCharacter)
            setItemCount(item.getCount())
            setPlayerHp(mainCharacter.getHp())
            setInventoryLength(characterInventory.getInventory().length)
        } else {
            item.useItem(mainCharacter)
            setItemCount(item.getCount())
            setPlayerHp(mainCharacter.getHp())
            characterInventory.deleteFromInventory(index)
            setInventoryLength(characterInventory.getInventory().length)
        }
    }

    const bodyItem = React.useMemo(() => {
        return (
            <li className="inventory__body-item" onClick={handleClick}>
                {itemCount ? <img src={item.getImg()} alt="" /> : ''}
                {itemCount ? <span>{itemCount}</span> : ''}
            </li>
        )
    }, [itemCount])

    return (
        <>
            {bodyItem}
        </>
    );
};

export default InventoryItem;