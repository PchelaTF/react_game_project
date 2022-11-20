import { sceneSlice } from "../../store/reducers/SceneReducer";
import { useAppDispatch } from "../../store/store";
import './FightScenIsWin.scss'

const FightScenIsWin = () => {
    const { setScene } = sceneSlice.actions
    const dispatch = useAppDispatch()

    function exitFightScene() {
        dispatch(setScene("create"))
    }
    return (
        <div className='character-is-win' onClick={() => exitFightScene()}>
            <p>You are win</p>
        </div>
    );
};

export default FightScenIsWin;