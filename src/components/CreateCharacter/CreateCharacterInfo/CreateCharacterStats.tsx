import { memo, useState } from 'react';
import { useAppDispatch } from '../../../store/store';
import ToolTip from '../../ui/ToolTip';
import { IStat } from "../../../tempDB";
import { uiSlice } from '../../../store/reducers/uiReducer';

interface ICharacterRaceProps {
    stat: IStat,
    raceMod: number
}

const CreateCharacterStats = ({ raceMod, stat }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = uiSlice.actions
    const [toolTip, setToolTip] = useState(false)

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }

    return (
        <li className={`stats__elem`} onMouseEnter={() => callToolTip(stat.desc)} onMouseLeave={() => setToolTip(false)}>
            {toolTip ? <ToolTip position='right' text={stat.desc} /> : null}
            {stat.name} - {stat.basic + raceMod}
        </li>
    );
};

export default memo(CreateCharacterStats);