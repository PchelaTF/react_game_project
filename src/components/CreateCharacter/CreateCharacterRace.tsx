import React, { FunctionComponent } from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from './ToolTip';

interface ICharacterRaceProps {
    CharacterRace: string
    switchRace: (key: any) => void
    activeClassName: string,
    tip: string
}

const CreateCharacterRace = ({ CharacterRace, switchRace, activeClassName, tip }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = sceneSlice.actions
    const [toolTip, setToolTip] = React.useState(false)

    const className = `create-character__race-variable ${activeClassName}`

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }

    return (
        <div className={className} onClick={switchRace} onMouseEnter={() => callToolTip(tip)} onMouseLeave={() => setToolTip(false)}>
            <img src={CharacterRace} alt="img" title='Some descr of img' />
            {toolTip ? <ToolTip position='bottom' text={tip} /> : null}
        </div>
    );
};

export default CreateCharacterRace;