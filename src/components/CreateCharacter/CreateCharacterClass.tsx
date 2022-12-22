import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { classArr } from '../../tempDB';
import { createCharacterSlice } from '../../store/reducers/createCharacterReducer';
import { buttonClick } from '../../mechanics/sounds/sound';
import CreateCharacterClassItem from './CreateCharacterClassItem';

const CreateCharacterClass = () => {
    const dispatch = useAppDispatch()
    const activeRace = useAppSelector(state => state.createCharacterSlice.activeRace)
    const activeClass = useAppSelector(state => state.createCharacterSlice.activeClass)
    const { setActiveClass, setFullImg, setReduxClass } = createCharacterSlice.actions

    function switchClass(key: any) {
        buttonClick()
        dispatch(setActiveClass(key))
        dispatch(setFullImg())
        dispatch(setReduxClass(key))
    }

    return (
        <div className="create-character__select-item">
            <p className='create-character__select-title'>class</p>
            <div className="create-character__class">
                {classArr[activeRace].map((item, i) => {
                    return <CreateCharacterClassItem
                        classTip={item.class || "warrior"}
                        key={i}
                        CharacterClass={item.iconImg}
                        switchClass={() => switchClass(i)}
                        activeClassName={activeClass === i ? "_active" : ""}
                    />
                })}
            </div>
        </div>
    );
};

export default memo(CreateCharacterClass);