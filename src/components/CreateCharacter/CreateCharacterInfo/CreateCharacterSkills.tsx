import { memo, useState } from 'react';
import { useAppSelector } from '../../../store/store';
import { skillsImgArr } from '../../../tempDB';
import ToolTip from '../../ui/ToolTip';
import CreateCharacterSkillsIItem from './CreateCharacterSkillsItem';

const CreateCharacterSkills = () => {
    const activeClass = useAppSelector(state => state.createCharacterSlice.activeClass)
    const toolTipContent = useAppSelector(state => state.uiReducer.toolTipContent)
    const [isToolTipView, setIsToolTipView] = useState(false)

    return (
        <div className="create-character__info-skills skills" style={{ position: 'relative' }}>
            <p className="skills__title">Skills</p>
            <ul className="skills__lists">
                {skillsImgArr[activeClass].map((item, i) => {
                    return <CreateCharacterSkillsIItem characterSkill={item.img} toolTip={item.dis} key={i} setIsToolTipView={setIsToolTipView} />
                })}
            </ul>
            {isToolTipView ? <ToolTip position='bottom' text={toolTipContent} /> : null}
        </div>
    );
};

export default memo(CreateCharacterSkills);