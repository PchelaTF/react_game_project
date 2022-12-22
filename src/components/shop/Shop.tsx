import { useState } from 'react'
import { buttonClick, getCoinSound } from '../../mechanics/sounds/sound'
import { sceneSlice } from '../../store/reducers/SceneReducer'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { initPotion, Potion } from '../../mechanics/items/Potion'
import { Item } from '../../mechanics/items/Item'
import BaseButton from '../ui/BaseButton'
import "./Shop.scss"
import shopkeeper from "../../assets/img/characters_img/npc/Character6_face1.png"

const Shop = () => {
    const dispatch = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const characterInventory = useAppSelector(state => state.userReducer.inventory)
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const [playerGold, setPlayerGold] = useState(mainCharacter.getGold())

    const healingPotion = new Potion(initPotion)

    const shopItems: Item[] = Array(9).fill(healingPotion)

    const backClick = () => {
        dispatch(setScene("main"))
        buttonClick()
    }

    const itemClick = (index: number) => {
        if (mainCharacter.getGold() >= shopItems[index].getCost()) {
            characterInventory.pushInInventory(shopItems[index])
            mainCharacter.setGold(mainCharacter.getGold() - shopItems[index].getCost())
            setPlayerGold(mainCharacter.getGold())
            getCoinSound()
        }
    }

    return (
        <div className='shop'>
            <h1 className='shop__title'>Shop</h1>
            <div className="shop__modal">
                <img className="shop__img" src={shopkeeper} />
                <div>
                    <div className='shop__modal-items'>
                        {shopItems.map((item, i) => {
                            return (
                                <div className="shop__modal-item" key={i} onClick={() => itemClick(i)}>
                                    {item.getImg() ? <img src={item.getImg()} alt="" /> : ''}
                                    <span>{item.getCost()}g</span>
                                </div>
                            )
                        })}
                    </div>
                    <span className="shop__modal-gold">your gold: {playerGold}</span>
                </div>
            </div>
            <BaseButton className="shop__btn" name="Back" onClick={backClick} />
        </div>
    );
}

export default Shop;