import * as React from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './FightScenIsWin.scss';

const FightScenIsWin: React.FC = () => {
  const mainCharacter = useAppSelector((state) => state.userReducer.character);
  const { setScene } = sceneSlice.actions;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    mainCharacter.resetSkillsCooldowm();
  });

  function continueExplore() {
    dispatch(setScene('explore'));
  }

  return (
    <div className="character-is-win" onClick={() => continueExplore()}>
      <p>You are win</p>
    </div>
  );
};

export default React.memo(FightScenIsWin);
