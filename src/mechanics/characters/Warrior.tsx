import Character, { ICharacterStats } from "./Character";

export class Warrior extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        const dmg = 2 * this.getAttack() - dmgToCharacter.getArmor()
        if(2 * this.getAttack() > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
    }

}