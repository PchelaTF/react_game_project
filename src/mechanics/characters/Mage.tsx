import Character, { IAttack } from "./Character";

export class Mage extends Character {
    constructor(initHp: number, initArmor: number, initAttack: IAttack, name: string, initIsNpc: boolean = false, initActionPoints: number,) {
        super(initHp, initArmor, initAttack, initIsNpc, initActionPoints, name)
    }

    magicAttack(dmgToCharacter: Character) {
        const dmg = this.getAttack()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

}