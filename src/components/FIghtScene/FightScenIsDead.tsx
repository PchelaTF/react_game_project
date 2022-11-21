import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch } from '../../store/store';
import './FightScenIsDead.scss'

const FightScenIsDead = () => {
    const { setScene } = sceneSlice.actions
    const dispatch = useAppDispatch()

    function exitFightScene() {
        dispatch(setScene("main"))
    }

    return (
        <div className='character-is-dead' onClick={() => exitFightScene()}>
            <p>You are dead</p>
        </div>
    );
};

export default FightScenIsDead;