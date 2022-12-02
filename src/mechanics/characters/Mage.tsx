import Character, { ICharacterStats } from "./Character";

export class Mage extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (this.calcMod(this.getInt()) - 1 + 1) + 1)))
    }

    secondSkill(dmgToCharacter: Character): void {
        dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (10 - 1 + 1) + 1) + this.calcMod(this.getInt())))
    }

    thirdSkill(dmgToCharacter: Character): void {
        dmgToCharacter.setHp(dmgToCharacter.getHp() + 3)
    }

}