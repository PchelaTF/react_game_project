export interface IInventoryItem {
    id?: number
    img: string
    count: number
}

export default class Inventory {
    private items: IInventoryItem[]

    constructor(initItems: IInventoryItem[]) {
        this.items = initItems
    }

    pushInInventory(item: IInventoryItem) {
        this.items.push(item)
    }

    setInventory(newItems: IInventoryItem[]) {
        this.items = newItems
    }

    getInventory() {
        return this.items
    }
}