import React from 'react';
import { buttonClick } from '../../mechanics/sounds/sound';
import { fightSlice } from '../../store/reducers/FightReducer';
import { sceneSlice, TScene } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import './MainScene.scss';
import BaseButton from '../ui/BaseButton';

const MainScene: React.FC = () => {
  const dispatch = useAppDispatch();
  const { setScene } = sceneSlice.actions;
  const { clearDeadEnemies } = fightSlice.actions;

  const mainClass = 'Main-scene';

  const handleClick = (value: TScene) => {
    if (value == 'Locations') dispatch(clearDeadEnemies());
    dispatch(setScene(value));
    buttonClick();
  };

  return (
    <div className={mainClass}>
      <div className={`${mainClass}__modal`}>
        <ul className={`${mainClass}__list`}>
          <li className={`${mainClass}__list-item item__list`}>
            <BaseButton name="To battle" onClick={() => handleClick('Locations')} />
            {/* <button value={"Locations"} className={`item__list-button btn`} onClick={(e) => handleClick(e)}>To battle</button> */}
          </li>
          <li className={`${mainClass}__list-item item__list`}>
            {/* <button className={`item__list-button btn`} onClick={handleClick}>To hab</button> */}
          </li>
          <li className={`${mainClass}__list-item item__list`}>
            <BaseButton name="Shop" onClick={() => handleClick('shop')} />
            {/* <button value={"shop"} className={`item__list-button btn`} onClick={handleClick}>Shop</button> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default React.memo(MainScene);
