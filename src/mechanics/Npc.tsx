import Character, { IAttack } from "./Character";

export class Npc extends Character {
    private isNpc: boolean

    constructor(initHp: number, initArmor: number, initAttack: IAttack) {
        super(initHp, initArmor, initAttack)
        this.isNpc = true
    }

    getIsNpc() {
        return this.isNpc
    }
}