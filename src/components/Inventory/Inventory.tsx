import React from 'react';
import './Inventory.scss'
import InventoryItem from './InventoryItem';
import { useAppSelector } from '../../store/store';
import { Item } from '../../mechanics/items/Item';

interface IInventoryProps {
    closeInventory: () => void
    setPlayerHp: React.Dispatch<React.SetStateAction<number>>
}

const Inventory = ({ closeInventory, setPlayerHp }: IInventoryProps) => {
    const characterInventory = useAppSelector(state => state.userReducer.inventory)

    const emptyItem = new Item(0, 0, "")

    const emptyInventorySquares = Array(20 - characterInventory.getInventory().length).fill(emptyItem)
    const currentInventory: Item[] = [...characterInventory.getInventory(), ...emptyInventorySquares]

    return (
        <div className='inventory'>
            <div className="inventory__wrapper" onClick={closeInventory}>
                <div className="inventory__container" onClick={(e) => e.stopPropagation()}>
                    <h1 className="inventory__header">INVENTORY</h1>
                    <div className="inventory__body">
                        <ul className="inventory__body-items">
                            {currentInventory.map((item, i) => {
                                return <InventoryItem item={item} key={i} index={i} setPlayerHp={setPlayerHp} />
                            })}
                        </ul>
                    </div>
                    <div className="inventory__footer">
                        ADD SOMETHING YOU NEED TO ADD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;