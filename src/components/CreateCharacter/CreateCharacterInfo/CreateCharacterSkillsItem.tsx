import { memo } from 'react';
import { uiSlice } from '../../../store/reducers/uiReducer';
import { useAppDispatch } from '../../../store/store';

interface ICharacterRaceProps {
    characterSkill: string,
    toolTip: string
    setIsToolTipView: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateCharacterSkill = ({ characterSkill, toolTip, setIsToolTipView }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = uiSlice.actions

    function callToolTip(tipContent: string) {
        setIsToolTipView(true)
        dispatch(setToolTipContent(tipContent))
    }

    return (
        <li className={`skills__elem`} onMouseEnter={() => callToolTip(toolTip)} onMouseLeave={() => setIsToolTipView(false)}>
            <img src={characterSkill} alt="img" />
        </li>
    );
};

export default memo(CreateCharacterSkill);