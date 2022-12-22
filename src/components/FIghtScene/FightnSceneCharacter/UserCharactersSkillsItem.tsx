import { memo } from 'react';
import { ISkill } from '../../../mechanics/characters/Character'
import { uiSlice } from '../../../store/reducers/uiReducer';
import { useAppDispatch } from '../../../store/store';


interface ISkillsItemProps {
    skill: ISkill
    setIsToolTipView: React.Dispatch<React.SetStateAction<boolean>>
    handleSkillClick: () => void
    cooldown: number
}

const UserCharactersSkillsItem = ({ skill, setIsToolTipView, handleSkillClick, cooldown }: ISkillsItemProps) => {
    const dispatch = useAppDispatch()
    const { setToolTipContent } = uiSlice.actions

    function callToolTip(tipContent: string) {
        setIsToolTipView(true)
        dispatch(setToolTipContent(tipContent))
    }

    return (
        <li className="skills__item" onMouseEnter={() => callToolTip(skill.dis)} onMouseLeave={() => setIsToolTipView(false)} onClick={handleSkillClick}>
            <img
                src={skill.img}
                alt="img"
                style={cooldown !== 0 ? { filter: "grayscale(1)" } : {}} />
            <span className='skills__item-cooldown'>{cooldown !== 0 ? cooldown : null}</span>
        </li>
    );
};

export default memo(UserCharactersSkillsItem);