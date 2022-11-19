import Character, { IAttack, ICharacterStats } from "./Character";

export class Rogue extends Character {
    // constructor(initHp: number, initArmor: number, initAttack: IAttack, name: string, initIsNpc: boolean = false, initActionPoints: number,) {
    //     super(initHp, initArmor, initAttack, initIsNpc, initActionPoints, name)
    // }
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    sneakAttack(dmgToCharacter: Character) {
        const dmg = this.getAttack() - dmgToCharacter.getArmor() / 2
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

}