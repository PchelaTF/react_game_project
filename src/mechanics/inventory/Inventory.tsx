import { Item } from "../items/Item"

export interface IInventoryItem {
    id?: number
    img: string
    count: number,
    cost: number
}

export default class Inventory {
    private items: Item[]

    constructor(initItems: Item[]) {
        this.items = initItems
    }

    pushInInventory(item: Item) {
        this.items.push(item)
    }

    setInventory(newItems: Item[]) {
        this.items = newItems
    }

    getItems() {
        return this.items
    }

    deleteFromInventory(index: number) {
        this.items.splice(index, 1)
    }
}