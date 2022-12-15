import React from 'react';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import ToolTip from './ToolTip';
import { IStat, statsDescription } from "./Images"
import { characterRace, characterStatsArr, returnRaceMod } from '../../mechanics/CreatingMechanic';

interface ICharacterRaceProps {
    index: number,
    stat: IStat,
    raceMod: number
}

const CreateCharacterStats = ({ raceMod, stat }: ICharacterRaceProps) => {
    const dispatch = useAppDispatch()
    const {setToolTipContent} = sceneSlice.actions
    const [toolTip, setToolTip] = React.useState(false)
    const [raceStats, setRaceStats] = React.useState<any>(returnRaceMod(characterRace[0]))
    const [viewCharacterStats, setViewCharacterStats] = React.useState(characterStatsArr[0])

    function getRaceMods(value: number) {
        if(value == 0) return 0
        return value
    }

    function callToolTip(tipType: string) {
        setToolTip(true)
        dispatch(setToolTipContent(tipType))
    }
    
    return (
        <li className={`stats__elem`} onMouseEnter={() => callToolTip(stat.desc)} onMouseLeave={() => setToolTip(false)}>
            {toolTip ? <ToolTip position='right' text={stat.desc}/> : null}
            {stat.name} - {stat.basic + raceMod}
        </li>
    );
};

export default CreateCharacterStats;