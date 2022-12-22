import { memo, useState } from 'react';
import Character from '../../../mechanics/characters/Character';
import { useAppSelector } from '../../../store/store';
import ToolTip from '../../ui/ToolTip';
import UserCharactersSkillsItem from './UserCharactersSkillsItem';
import './UserCharactersSkills.scss'

interface ICharacterSkillsProp {
    fightOrder: Character[]
    handleSkillClick: (index: number) => void
}

const UserCharactersSkills = ({ fightOrder, handleSkillClick }: ICharacterSkillsProp) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const toolTipContent = useAppSelector(state => state.uiReducer.toolTipContent)
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)

    const [isToolTipView, setIsToolTipView] = useState(false)

    const skills = mainCharacter.getSkills()
    const cooldown = mainCharacter.getskillsCooldown()

    return (
        <ul className="fight-scene__skills-panel" style={fightOrder[currentTurn].getIsNpc() ? { filter: "grayscale(1)" } : {}}>
            {skills.map((skill, i) => {
                return (
                    <UserCharactersSkillsItem key={i} skill={skill} setIsToolTipView={setIsToolTipView} handleSkillClick={() => handleSkillClick(i)} cooldown={cooldown[i]} />
                )
            })}
            {isToolTipView ? <ToolTip position='top' text={toolTipContent} /> : null}
        </ul >
    );
};

export default memo(UserCharactersSkills);