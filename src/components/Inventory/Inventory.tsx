import React from 'react';
import './Inventory.scss'
import InventoryItem from './InventoryItem';
import { useAppSelector } from '../../store/store';
import { Item } from '../../mechanics/items/Item';

interface IInventoryProps {
    closeInventory: () => void
    setPlayerHp: React.Dispatch<React.SetStateAction<number>>
    classIfCharWindowOpen: string
}

const Inventory = ({ closeInventory, setPlayerHp, classIfCharWindowOpen }: IInventoryProps) => {
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    const emptyItem = new Item(0, 0, "")

    const emptyInventorySquares = Array(25 - characterInventory.getInventory().length).fill(emptyItem)
    const currentInventory: Item[] = [...characterInventory.getInventory(), ...emptyInventorySquares]

    return (
        <div className={`inventory ${classIfCharWindowOpen}`}>
            <div className={`inventory__wrapper ${classIfCharWindowOpen}`} >
                <div className="inventory__container">
                    <h1 className="inventory__header">Inventory</h1>
                    <span className='inventory__close' onClick={closeInventory}></span>
                    <div className="inventory__body">
                        <ul className="inventory__body-items">
                            {currentInventory.map((item, i) => {
                                return <InventoryItem item={item} key={i} index={i} setPlayerHp={setPlayerHp} />
                            })}
                        </ul>
                    </div>
                    <div className="inventory__footer">
                        <span>Gold: </span>
                        <span>{mainCharacter.getGold()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;