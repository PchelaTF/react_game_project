import Character from '../characters/Character';
import { getWeaponSound } from '../sounds/sound';
import { IItem, Item } from './Item';

export type TWeapon = 'dagger' | 'sword' | 'staff' | null;

export const initWeapon: IItem = {
  initType: 'weapon',
  initCount: 1,
  initCost: 0,
  initImg: '',
  initArmorType: null,
  initWeaponType: null,
};

export class Weapon extends Item {
  weaponType: TWeapon;

  constructor(weapon: IItem) {
    super(weapon);
    this.weaponType = weapon.initWeaponType;
  }

  useItem(character: Character) {
    if (this.getCount() <= 0) return;
    character.wearingWeapon(this);
    this.setCount(this.getCount() - 1);
    getWeaponSound();
  }

  definitionWeaponDamage() {
    switch (this.weaponType) {
      case 'dagger':
        return 3;
      case 'sword':
        return 4;
      case 'staff':
        return 4;
      default:
        return 0;
    }
  }
}
