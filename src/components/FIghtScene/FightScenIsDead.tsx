import { levels } from '../../mechanics/Levels';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './FightScenIsDead.scss'

const FightScenIsDead = () => {
    const dispatch = useAppDispatch()
    const { setScene, resetLevels } = sceneSlice.actions

    function exitFightScene() {
        dispatch(resetLevels(levels))
        dispatch(setScene("create"))
    }

    return (
        <div className='character-is-dead' onClick={() => exitFightScene()}>
            <p>You are dead</p>
        </div>
    );
};

export default FightScenIsDead;