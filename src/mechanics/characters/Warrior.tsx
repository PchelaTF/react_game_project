import Character, { IAttack } from "./Character";

export class Warrior extends Character {
    constructor(initHp: number, initArmor: number, initAttack: IAttack, name: string, initIsNpc: boolean = false, initActionPoints: number,) {
        super(initHp, initArmor, initAttack, initIsNpc, initActionPoints, name)
    }

    dualAttack(dmgToCharacter: Character) {
        const dmg = 2 * this.getAttack() - dmgToCharacter.getArmor()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

}