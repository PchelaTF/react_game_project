import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './ChestScene.scss';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import chest from '../../assets/img/chest.png';
import potion from '../../assets/img/potions/potion.png';
import { initPotion, Potion } from '../../mechanics/items/Potion';
import { chestSound } from '../../mechanics/sounds/sound';

const ChestScene: React.FC = () => {
  const dispath = useAppDispatch();
  const background = useAppSelector((state) => state.FightReducer.background);
  const { setScene } = sceneSlice.actions;
  const [isLootGetted, setIsLootGetted] = React.useState(false);
  const characterInventory = useAppSelector((state) => state.userReducer.inventory);
  const mainCharacter = useAppSelector((state) => state.userReducer.character);

  const healingPotion = new Potion(initPotion);
  const rndLoot = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  const rndGold = Math.floor(Math.random() * (100 - 50 + 1) + 50);

  const getLoot = () => {
    chestSound();
    setIsLootGetted(true);

    switch (rndLoot) {
      case 0:
        mainCharacter.addGold(rndGold);
        break;
      case 1:
      default:
        characterInventory.pushInInventory(healingPotion);
        break;
    }
  };

  const nextLocation = () => {
    dispath(setScene('explore'));
  };

  return (
    <div className="chest-scene">
      <div className="chest-scene__bimg">
        <img src={background} alt="img" />
      </div>
      <div className="chest-scene__wrapper">
        <div className="chest-scene__content">
          {!isLootGetted && (
            <div className="chest-scene__cimg">
              <img src={chest} alt="img" onClick={getLoot} />
            </div>
          )}
          {isLootGetted && (
            <div className="chest-scene__loot" onClick={nextLocation}>
              <p>Yors loot is:</p>
              {rndLoot > 0 ? (
                <div className="chest-scene__loot-content">
                  <img src={potion} alt="img" />
                </div>
              ) : (
                <span>{rndGold}g</span>
              )}
              <p>Click to go</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ChestScene);
