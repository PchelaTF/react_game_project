import React from "react";
import { sceneSlice } from "../../../store/reducers/SceneReducer";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import './FightScenIsWin.scss'

const FightScenIsWin = () => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const { setScene } = sceneSlice.actions
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        mainCharacter.resetSkillsCooldowm()
    })

    function continueExplore() {
        dispatch(setScene("explore"))
    }

    return (
        <div className='character-is-win' onClick={() => continueExplore()}>
            <p>You win</p>
        </div>
    );
};

export default FightScenIsWin;