import { memo, useState } from 'react';
import { uiSlice } from '../../store/reducers/uiReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from '../ui/ToolTip';

interface ICharacterRaceProps {
    CharacterClass: string,
    switchClass: () => void,
    activeClassName: string,
    classTip: string
}

const CreateCharacterClass = ({ CharacterClass, switchClass, activeClassName, classTip }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = uiSlice.actions
    const [toolTip, setToolTip] = useState(false)

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }

    return (
        <div className={`create-character__class-variable ${activeClassName}`} onClick={switchClass} onMouseEnter={() => callToolTip(classTip)} onMouseLeave={() => setToolTip(false)}>
            <img src={CharacterClass} alt="img" />
            {toolTip ? <ToolTip position='bottom' text={classTip} /> : null}
        </div>
    );
};

export default memo(CreateCharacterClass);