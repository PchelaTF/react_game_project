import { playDamageDealSound, playSound } from "../sounds/sound";
import Character, { ICharacterStats } from "./Character";

export class Warrior extends Character {
    constructor(characterStats: ICharacterStats) {
        super(characterStats)
    }

    firstSkill(dmgToCharacter: Character) {
        this.decSkillsCooldown()
        this.setSkillCooldown(1, 2)
        const atk = this.getAttack() + 3
        if(atk > dmgToCharacter.getArmor()) {
            dmgToCharacter.setHp(dmgToCharacter.getHp() - (Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength) + 3))
            playDamageDealSound()
        } else playSound()
    }

    secondSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(2, 3)
        const atk = this.getAttack() + 5
        if(atk > dmgToCharacter.getArmor()) {
            dmgToCharacter.setHp(dmgToCharacter.getHp() - 3*(Math.floor(Math.random() * (this.damage - 1 + 1) + 1) + this.calcMod(this.strength)))
            playDamageDealSound()
        }
    }

    thirdSkill(dmgToCharacter: Character): void {
        this.decSkillsCooldown()
        this.setSkillCooldown(3, 4)
        dmgToCharacter.setHp(dmgToCharacter.getHp() + 3)
        playDamageDealSound()
    }

}