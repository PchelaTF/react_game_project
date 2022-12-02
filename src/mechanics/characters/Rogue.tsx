import Character, { ICharacterStats } from "./Character";

export class Rogue extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        this.decSkillsCooldown()
        this.setSkillCooldown(1, 2)
        const atk = this.getAttack() + 3
        if(atk > dmgToCharacter.getArmor())
            dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength) + 3))
    }

    secondSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(2, 3)
        dmgToCharacter.setHp(dmgToCharacter.getHp() - Math.floor(Math.random() * (this.damage - 1 + 1) + 1))
    }

    thirdSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(3, 4)
        dmgToCharacter.setHp(dmgToCharacter.getHp() + 3)
    }

}