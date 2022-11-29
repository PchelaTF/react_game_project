import React from 'react'
import { buttonClick } from '../../mechanics/sounds/sound'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import "./Shop.scss"
import shopkeeper from "../../assets/img/characters_img/npc/Character6_face1.png"
import { IInventoryItem } from '../../mechanics/inventory/Inventory'
import potion from '../../assets/img/potions/potion.png'
import { Potion } from '../../mechanics/items/Potion'
import { Item } from '../../mechanics/items/Item'

export default function Shop() {
    const dispatch = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const [playerGold, setPlayerGold] = React.useState(mainCharacter.getGold())

    const healingPotion = new Potion(50, 1, potion)

    const shopItems: Item[] = Array(9).fill(healingPotion)
    
    const backClick = () => {
        dispatch(setScene("main"))
        buttonClick()
    }

    const itemClick = (index: number) => {
        if(mainCharacter.getGold() >= shopItems[index].getCost()) {
            characterInventory.pushInInventory(shopItems[index])
            mainCharacter.setGold(mainCharacter.getGold() - shopItems[index].getCost())
            setPlayerGold(mainCharacter.getGold())
        }
    }

    return (
        <div className='shop'>
            <div className="shop__modal">
                <p className=''>Shop</p>
                <img className="shop__img" src={shopkeeper}/>
                <div>
                    <div className='shop__modal-items'>
                        {shopItems.map((item,i) => {
                            return <div className="shop__modal-item" key={i} onClick={() => itemClick(i)}>
                                {item.getImg() ? <img src={item.getImg()} alt="" /> : ''}
                                <span>{item.getCost()}g</span>
                            </div>
                        })}
                    </div>
                    <span className="shop__modal-gold">your gold: {playerGold}</span>
                </div>
            </div>
            <button className={`shop__btn btn`} onClick={backClick}>Back</button>
        </div>
    );
}
