import { playDamageDealSound, playSound } from '../sounds/sound';
import Character, { ICharacterStats } from './Character';

export class Rogue extends Character {
  constructor(characterStats: ICharacterStats) {
    super(characterStats);
  }

  firstSkill(dmgToCharacter: Character) {
    this.decSkillsCooldown();
    this.setSkillCooldown(1, 2);
    const atk = this.getAttack() + 3;
    if (atk > dmgToCharacter.getArmor()) {
      dmgToCharacter.setHp(dmgToCharacter.getHp() - (this.getDamage() + this.calcMod(this.getDex())));
      playDamageDealSound();
    } else playSound();
  }

  secondSkill(dmgToCharacter: Character): void {
    this.decSkillsCooldown();
    this.setSkillCooldown(2, 3);
    playDamageDealSound();
    dmgToCharacter.setHp(dmgToCharacter.getHp() - 2 * (this.getDamage() + this.calcMod(this.getDex())));
  }

  thirdSkill(dmgToCharacter: Character): void {
    this.decSkillsCooldown();
    this.setSkillCooldown(3, 4);
    dmgToCharacter.setHp(dmgToCharacter.getHp() - 3 * (this.getDamage() + this.calcMod(this.getDex())));
    playDamageDealSound();
  }
}
