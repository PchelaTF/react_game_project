import Character from "../characters/Character";
import Inventory from "../inventory/Inventory";
import { Item } from "./Item";

export class Potion extends Item {
    constructor(initCost: number, initCount: number, initImg: string) {
        super(initCost, initCount, initImg)
    }

    itemClick(character: Character): void {
        // * бесконечніе зелья восстанавливающие свіше макс ХП
        // character.setHp(character.getHp() + 5)
        // this.setCount(this.getCount() - 1)

        if (character.getHp() + 5 > character.getMaxHp()) {
            character.setHp(character.getMaxHp())
        } else {
            character.setHp(character.getHp() + 5)
        }
        this.setCount(this.getCount() - 1)
    }

}