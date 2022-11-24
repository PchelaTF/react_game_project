import React from 'react';
import './Inventory.scss'
import potion from '../../assets/img/potions/potion.png'
import InventoryItem from './InventoryItem';
import { useAppSelector } from '../../store/store';
import { IInventoryItem } from '../../mechanics/inventory/Inventory';

const Inventory = () => {
    const characterInventory = useAppSelector(state => state.userReducer.inventory)

    const healingPotion: IInventoryItem = {
        id: 1,
        img: potion,
        count: 1
    }

    characterInventory.pushInInventory(healingPotion)
    characterInventory.pushInInventory(healingPotion)

    const emptyInventorySquares = Array(60 - characterInventory.getInventory().length).fill({ img: '', count: 0 })

    const currentInventory = [...characterInventory.getInventory(), ...emptyInventorySquares]

    return (
        <div className='inventory'>
            <div className="inventory__wrapper">
                <div className="inventory__container">
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