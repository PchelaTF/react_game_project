import { memo } from 'react';
import { buttonClick } from '../../mechanics/sounds/sound';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { raceArr } from '../../tempDB';
import CreateCharacterRaceItem from './CreateCharacterRaceItem';
import { createCharacterSlice } from '../../store/reducers/createCharacterReducer';


const CreateCharacterRace = () => {
    const dispatch = useAppDispatch()
    const activeRace = useAppSelector(state => state.createCharacterSlice.activeRace)
    const { setActiveRace, setFullImg } = createCharacterSlice.actions

    function switchRace(key: any) {
        buttonClick()
        dispatch(setActiveRace(key))
        dispatch(setFullImg())
    }

    return (
        <div className="create-character__select-item">
            <p className='create-character__select-title'>race</p>
            <div className="create-character__race">
                {raceArr.map((item, i) => {
                    return <CreateCharacterRaceItem
                        tip={item.tip || "elf"}
                        key={i}
                        CharacterRace={item.iconImg}
                        switchRace={() => switchRace(i)}
                        activeClassName={(activeRace === i ? "_active" : "")}
                    />
                })}
            </div>
        </div>
    );
};

export default memo(CreateCharacterRace);