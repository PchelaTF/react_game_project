import { sceneSlice } from "../../store/reducers/SceneReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import './FightScenIsWin.scss'

const FightScenIsWin = () => {
    const { setScene, changeCurrentLevel } = sceneSlice.actions
    const currentLevel = useAppSelector(state => state.SceneReducer.currentLevel)
    const levels = useAppSelector(state => state.SceneReducer.levels)
    const dispatch = useAppDispatch()

    function exitFightScene() {
        const newCurrentLevel = {...levels[currentLevel]}
        newCurrentLevel.isCompleted = true
        dispatch(changeCurrentLevel(newCurrentLevel))
        dispatch(setScene("main"))
    }
    return (
        <div className='character-is-win' onClick={() => exitFightScene()}>
            <p>You are win</p>
        </div>
    );
};

export default FightScenIsWin;