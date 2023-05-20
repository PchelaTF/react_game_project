import * as React from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from './ToolTip';

interface ICharacterRaceProps {
  CharacterClass: string;
  switchClass: () => void;
  activeClassName: string;
  classTip: string;
}

const CreateCharacterClass = ({ CharacterClass, switchClass, activeClassName, classTip }: ICharacterRaceProps) => {
  const dispatch = useAppDispatch();
  const { setToolTipContent } = sceneSlice.actions;
  const [toolTip, setToolTip] = React.useState(false);

  function callToolTip(tipType: string) {
    setToolTip(true);
    dispatch(setToolTipContent(tipType));
  }

  return (
    <div
      className={`create-character__class-variable ${activeClassName}`}
      onClick={switchClass}
      onMouseEnter={() => callToolTip(classTip)}
      onMouseLeave={() => setToolTip(false)}
    >
      <img src={CharacterClass} alt="img" />
      {toolTip ? <ToolTip position="bottom" text={classTip} /> : null}
    </div>
  );
};

export default CreateCharacterClass;
