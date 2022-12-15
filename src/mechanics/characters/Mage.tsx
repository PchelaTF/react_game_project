import Character, { ICharacterStats } from "./Character";

export class Mage extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    dealDamage(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (this.getDamage() - 1 + 1) + 1)))
    }

    firstSkill(dmgToCharacter: Character) {
        this.decSkillsCooldown()
        this.setSkillCooldown(1, 2)
        dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (6 - 1 + 1) + 1) + this.calcMod(this.getInt())))
    }

    secondSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(2, 3)
        dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (10 - 1 + 1) + 1) + this.calcMod(this.getInt())))
    }

    thirdSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(3, 4)
        const dmg = (Math.floor(Math.random() * (this.getDamage() - 1 + 1) + 1))
        dmgToCharacter.setHp(dmgToCharacter.getHp() - dmg)
        this.setHp(this.getHp() + dmg)
    }

}