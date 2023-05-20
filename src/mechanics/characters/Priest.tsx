import Character, { ICharacterStats } from './Character';

export class Mage extends Character {
  constructor(characterStats: ICharacterStats) {
    super(characterStats);
  }

  healTouch(dmgToCharacter: Character) {
    dmgToCharacter.setHp(dmgToCharacter.getHp() + 12);
  }
}
