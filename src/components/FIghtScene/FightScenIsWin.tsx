import { sceneSlice } from "../../store/reducers/SceneReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import './FightScenIsWin.scss'

const FightScenIsWin = () => {
    const { setScene } = sceneSlice.actions
    const dispatch = useAppDispatch()

    function continueExplore() {
        dispatch(setScene("explore"))
    }

    return (
        <div className='character-is-win' onClick={() => continueExplore()}>
            <p>You are win</p>
        </div>
    );
};

export default FightScenIsWin;