import React from 'react';
import './Inventory.scss'
import InventoryItem from './InventoryItem';
import { useAppSelector } from '../../store/store';
import { Item } from '../../mechanics/items/Item';

interface IInventoryProps {
    closeInventory: () => void
}

const Inventory = ({ closeInventory }: IInventoryProps) => {
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const [render, setRender] = React.useState(false)

    const emptyItem = new Item(0, 0, "")

    const emptyInventorySquares = Array(20 - characterInventory.getInventory().length).fill(emptyItem)
    const currentInventory: Item[] = [...characterInventory.getInventory(), ...emptyInventorySquares]

    React.useEffect(() => {
        setRender(!render)
    }, [currentInventory])

    return (
        <div className='inventory'>
            <div className="inventory__wrapper" onClick={closeInventory}>
                <div className="inventory__container" onClick={(e) => e.stopPropagation()}>
                    <h1 className="inventory__header">INVENTORY</h1>
                    <div className="inventory__body">
                        <ul className="inventory__body-items">
                            {currentInventory.map((item, i) => {
                                return <InventoryItem item={item} key={i} />
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