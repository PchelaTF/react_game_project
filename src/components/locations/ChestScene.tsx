import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './ChestScene.scss'
import { IInventoryItem } from '../../mechanics/inventory/Inventory';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import chest from '../../assets/img/chest.png'
import potion from '../../assets/img/potions/potion.png'
import { Potion } from '../../mechanics/items/Potion';

const ChestScene = () => {
    const dispath = useAppDispatch()
    const background = useAppSelector(state => state.FightReducer.background)
    const {setScene} = sceneSlice.actions
    const [isLootGetted, setIsLootGetted] = React.useState(false)
    const characterInventory = useAppSelector(state => state.userReducer.inventory)

    const healingPotion = new Potion(50, 1, potion)

    const getLoot = () => {
        setIsLootGetted(true)
        characterInventory.pushInInventory(healingPotion)
    }

    const nextLocation = () => {
        dispath(setScene("explore"))
    }

    return (
        <div className='chest-scene'>
            <div className="chest-scene__bimg">
                <img src={background} alt="img" />
            </div>
            <div className="chest-scene__wrapper">
                <div className="chest-scene__content">
                    {!isLootGetted && <div className="chest-scene__cimg">
                        <img src={chest} alt="img" onClick={getLoot} />
                    </div>}
                    {isLootGetted && <div className="chest-scene__loot" onClick={nextLocation}>
                        <p>Yors loot is:</p>
                        <div className="chest-scene__loot-content">
                            <img src={potion} alt="img" />
                        </div>
                        <p>Click to go</p>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default ChestScene;