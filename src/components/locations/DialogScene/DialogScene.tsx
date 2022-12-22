import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { sceneSlice } from '../../../store/reducers/SceneReducer';
import { playgreetingSound } from '../../../mechanics/sounds/sound';
import './DialogScene.scss'
import dialogNpc from '../../../assets/img/characters_img/npc/dialog_main_npc.png'

const DialogScene = () => {
    const dispath = useAppDispatch()
    const { setScene } = sceneSlice.actions
    const background = useAppSelector(state => state.FightReducer.background)

    useEffect(() => {
        playgreetingSound()
    })

    const nextLocation = () => {
        dispath(setScene("explore"))
    }

    return (
        <div className='dialog-scene'>
            <div className="dialog-scene__bimg">
                <img src={background} alt="img" />
            </div>
            <div className="dialog-scene__wrapper" onClick={nextLocation}>
                <div className="dialog-scene__content">
                    <div className="dialog-scene__content-npc">
                        <img src={dialogNpc} alt="img" />
                    </div>
                    <div className="dialog-scene__content-dialog dialog__body">
                        <h2 className="dialog__body-npc-name">NPC Name</h2>
                        <p className="dialog__body-text">Hello stranger, Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DialogScene;