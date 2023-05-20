import * as React from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from './ToolTip';
import { IStat } from './Images';

interface ICharacterRaceProps {
  stat: IStat;
  raceMod: number;
}

const CreateCharacterStats = ({ raceMod, stat }: ICharacterRaceProps) => {
  const dispatch = useAppDispatch();
  const { setToolTipContent } = sceneSlice.actions;
  const [toolTip, setToolTip] = React.useState(false);

  function callToolTip(tipType: string) {
    setToolTip(true);
    dispatch(setToolTipContent(tipType));
  }

  return (
    <li className={`stats__elem`} onMouseEnter={() => callToolTip(stat.desc)} onMouseLeave={() => setToolTip(false)}>
      {toolTip ? <ToolTip position="right" text={stat.desc} /> : null}
      {stat.name} - {stat.basic + raceMod}
    </li>
  );
};

export default CreateCharacterStats;
