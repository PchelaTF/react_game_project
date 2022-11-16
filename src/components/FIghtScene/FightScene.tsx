import React from 'react';
import "./FightScene.scss"
import { imgArr } from './testImgArr'
import Enemy from './Enemy';

interface IfightSceneProps {
    hp: number,
    decHp: () => void
}

const FightScene = ({ hp, decHp }: IfightSceneProps) => {
    let playerImg = ''
    const enemyImgArr = []
    let sceneImg = ''

    for (let i = 0; i < imgArr.length; i++) {
        if (i === 0) {
            playerImg = imgArr[i]
        }
        if (i === imgArr.length - 1) {
            sceneImg = imgArr[imgArr.length - 1]
        }
        if (i !== 0 && i !== imgArr.length - 1) {
            enemyImgArr.push(imgArr[i])
        }
    }

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={sceneImg} alt="img" />
                </div>

                <div className="fight-scene__main-characters">
                    <div className="player">
                        {hp}
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                        </div>
                    </div>
                    <div className="enemys">
                        {enemyImgArr.map((img, i) => {
                            return <Enemy enemyImg={img} key={i} />
                        })}
                    </div>
                </div>
            </div>
            <div className="fight-scene__panel">
                <div className="fight-scene__panel-left">
                    <div className="skills__panel">
                        {/* <img src='' alt="img" /> */}
                        <button onClick={() => decHp()}>ATK</button>
                    </div>
                </div>
                <div className="fight-scene__panel-right"></div>
            </div>
        </div>
    );
};

export default FightScene;