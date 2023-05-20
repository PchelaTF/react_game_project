import { IItem, Item } from './Item';
import Character from '../characters/Character';
import { getArmorSound } from '../sounds/sound';

export type TArmor = 'light' | 'medium' | 'heavy ' | null;

export const initArmor: IItem = {
  initType: 'armor',
  initCount: 1,
  initCost: 0,
  initImg: '',
  initArmorType: null,
  initWeaponType: null,
};

export class Armor extends Item {
  armorType: TArmor;

  constructor(armor: IItem) {
    super(armor);
    this.armorType = armor.initArmorType;
  }

  getArmorType() {
    return this.armorType;
  }

  useItem(character: Character) {
    if (this.getCount() <= 0) return;
    character.wearingArmor(this);
    this.setCount(this.getCount() - 1);
    getArmorSound();
  }

  definitionArmorValue() {
    switch (this.armorType) {
      case 'light':
        return 1;
      case 'medium':
        return 2;
      case 'heavy ':
        return 3;
      default:
        return 0;
    }
  }
}
