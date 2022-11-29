import Character from "../characters/Character";
import { Item } from "./Item";

export class Potion extends Item {
    constructor(initCost: number, initCount: number, initImg: string) {
        super(initCost, initCount, initImg)
    }

    itemClick(character: Character): void {
        character.setHp(character.getHp() + 5)
        this.setCount(this.getCount() - 1)
    }
}