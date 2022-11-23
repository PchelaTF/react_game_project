import Character, { ICharacterStats } from "./Character";

export class Rogue extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        const dmg = this.getAttack() - dmgToCharacter.getArmor() / 2
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

}