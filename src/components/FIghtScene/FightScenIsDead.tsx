import { locations } from '../../mechanics/Locations';
import { sceneSlice } from '../../store/reducers/SceneReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';
import './FightScenIsDead.scss'

const FightScenIsDead = () => {
    const dispatch = useAppDispatch()
    const { setScene, resetLocations } = sceneSlice.actions

    function exitFightScene() {
        dispatch(resetLocations(locations))
        dispatch(setScene("create"))
    }

    return (
        <div className='character-is-dead' onClick={() => exitFightScene()}>
            <p>You are dead</p>
        </div>
    );
};

export default FightScenIsDead;