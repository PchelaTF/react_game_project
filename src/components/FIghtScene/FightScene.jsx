import React from 'react';
import playerImg from "../../assets/img/character.png"
import enemyImg from "../../assets/img/enemy.png"
import sceneImg from "../../assets/img/War2.png"
import "./FightScene.scss"

import atk from '../../assets/img/skills/atk.png'

const dataImg = [playerImg, enemyImg, sceneImg]

const FightScene = () => {
    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={sceneImg} alt="img" />
                </div>

                <div className="fight-scene__main-characters">
                    <div className="player">
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                        </div>
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                        </div>
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                        </div>
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                        </div>
                    </div>
                    <div className="enemys">
                        <div className="enemys__img">
                            <img src={enemyImg} alt="img" />
                        </div>
                        <div className="enemys__img">
                            <img src={enemyImg} alt="img" />
                        </div>
                        <div className="enemys__img">
                            <img src={enemyImg} alt="img" />
                        </div>
                        <div className="enemys__img">
                            <img src={enemyImg} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fight-scene__panel">
                <div className="fight-scene__panel-left">
                    <div className="skills__panel">
                        <img src={atk} alt="img" />
                    </div>
                </div>
                <div className="fight-scene__panel-right"></div>
            </div>
        </div>
    );
};

export default FightScene;