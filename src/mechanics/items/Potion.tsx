import Character from "../characters/Character";
import { Item } from "./Item";

export class Potion extends Item {
    constructor(initCost: number, initCount: number, initImg: string) {
        super(initCost, initCount, initImg)
    }

    itemClick(character: Character): void {
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