import { sceneSlice } from "../../store/reducers/SceneReducer";
import { useAppDispatch, useAppSelector } from "../../store/store";
import './FightScenIsWin.scss'

const FightScenIsWin = () => {
    const { setScene, changeCurrentLevel } = sceneSlice.actions
    const currentLevel = useAppSelector(state => state.SceneReducer.currentLevel)
    const levels = useAppSelector(state => state.SceneReducer.locations)
    const dispatch = useAppDispatch()

    function exitFightScene() {
        const newCurrentLevel = {...levels[currentLevel]}
        newCurrentLevel.isCompleted = true
        dispatch(changeCurrentLevel(newCurrentLevel))
        dispatch(setScene("main"))
    }

    function continueExplore() {
        dispatch(setScene("explore"))
    }

    return (
        <div className='character-is-win'>
            <p>You are win</p>
            <div style={{marginTop: "60px"}}>
                <button className={`item__list-button btn`} onClick={exitFightScene}>to main</button>
                <button className={`item__list-button btn`} onClick={continueExplore}>continue</button>
            </div>
        </div>
    );
};

export default FightScenIsWin;