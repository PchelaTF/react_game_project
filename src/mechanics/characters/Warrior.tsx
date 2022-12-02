import Character, { ICharacterStats } from "./Character";

export class Warrior extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        const atk = this.getAttack() + 3
        if(atk > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength) + 3))
    }

    secondSkill(dmgToCharacter: Character): void {
        const atk = this.getAttack() + 5
        if(atk > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - 3*(Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength)))
    }

    thirdSkill(dmgToCharacter: Character): void {
        dmgToCharacter.setHp(dmgToCharacter.getHp() + 3)
    }

}