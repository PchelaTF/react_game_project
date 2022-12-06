import Character from "../characters/Character";
import { IItem, Item } from "./Item";
import  healingPotion from '../../assets/img/potions/potion.png'

export const initPotion: IItem = {
    initType: 'potion',
    initCount: 1,
    initCost: 50,
    initImg: healingPotion,
    initArmorType: null,
    initWeaponType: null
} 

export class Potion extends Item {
    constructor(potion: IItem) {
        super(potion)
    }

    useItem(character: Character): void {
        if (this.getCount() <= 0) return
        if (character.getHp() + 5 > character.getMaxHp()) {
            character.setHp(character.getMaxHp())
        } else {
            character.setHp(character.getHp() + 5)
        }
        this.setCount(this.getCount() - 1)

        // * бесконечніе зелья восстанавливающие свіше макс ХП
        // this.setCount(this.getCount() - 1)
        // character.setHp(character.getHp() + 5)
    }

}