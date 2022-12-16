import React from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import ToolTip from './ToolTip';

interface ICharacterRaceProps {
    characterSkill: string,
    tip: string
}

const CreateCharacterSkill = ({ characterSkill, tip }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = sceneSlice.actions
    const [toolTip, setToolTip] = React.useState(false)

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }

    return (
        <li className={`skills__elem`} onMouseEnter={() => callToolTip(tip)} onMouseLeave={() => setToolTip(false)}>
            <img src={characterSkill} alt="img" />
            {toolTip ? <ToolTip position='bottom' text={tip} /> : null}
        </li>
    );
};

export default CreateCharacterSkill;