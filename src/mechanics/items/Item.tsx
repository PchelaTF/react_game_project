import Character from "../characters/Character"

export class Item {
    protected cost: number
    protected count: number
    protected img: string

    constructor(initCost: number, initCount: number, initImg: string) {
        this.cost = initCost
        this.count = initCount
        this.img = initImg
    }

    itemClick(character: Character) {}

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