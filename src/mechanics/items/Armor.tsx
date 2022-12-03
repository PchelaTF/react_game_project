import { Item } from "./Item";
import Character from '../characters/Character'

export type TArmor = 'light' | 'medium' | 'heavy ' | null

export class Armor extends Item{
    type: TArmor
    armorValue: number

    constructor(initType: TArmor, initArmorValue: number, initCost: number, initCount: number, initImg: string) {
        super(initCost, initCount, initImg)
        this.type = initType
        this.armorValue = initArmorValue
    }

    itemClick(character: Character) {
        if (this.getCount() <= 0) return
        character.addEquippedArmor(this)
        this.setCount(this.getCount() - 1)
    }

    definitionArmorValue() {
        switch (this.type) {
            case 'light':
                return 1
            case 'medium':
                return 2
            case 'heavy ':
                return 3
            default:
                return 0
        }
    }
}