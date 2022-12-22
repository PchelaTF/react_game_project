import { useState, memo } from 'react';
import { uiSlice } from '../../store/reducers/uiReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from '../ui/ToolTip';

interface ICharacterRaceProps {
    CharacterRace: string
    switchRace: (key: any) => void
    activeClassName: string,
    tip: string
}

const CreateCharacterRaceItem = ({ CharacterRace, switchRace, activeClassName, tip }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = uiSlice.actions
    const [toolTip, setToolTip] = useState(false)

    const className = `create-character__race-variable ${activeClassName}`

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }

    return (
        <div className={className} onClick={switchRace} onMouseEnter={() => callToolTip(tip)} onMouseLeave={() => setToolTip(false)}>
            <img src={CharacterRace} alt="img" />
            {toolTip ? <ToolTip position='bottom' text={tip} /> : null}
        </div>
    );
};

export default memo(CreateCharacterRaceItem);