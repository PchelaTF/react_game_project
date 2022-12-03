import Character from "../characters/Character"
import { TArmor } from "./Armor"

export type TItem = 'potion' | 'armor' | null 

export interface IItem {
    initType: TItem
    initCount: number
    initCost: number
    initImg: string
    initArmorType: TArmor
    initArmorValue?: number
}

export const initItem = {
    initType: null,
    initCount: 0,
    initCost: 0,
    initImg: '',
    initArmorType: null,
}

export class Item {
    protected type: TItem
    protected count: number
    protected cost: number
    protected img: string

    constructor(item: IItem) {
        this.type = item.initType
        this.count = item.initCount
        this.cost = item.initCost
        this.img = item.initImg
    }

    useItem(character: Character) { }

    getImg() {
        return this.img
    }

    getCost() {
        return this.cost
    }

    getCount() {
        return this.count
    }

    setCount(newCount: number) {
        this.count = newCount
    }

}