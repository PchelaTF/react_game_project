import React, { useRef, useState } from 'react';
import "./FightScene.scss"
import { imgArr } from './testImgArr'
import Enemy from './Enemy';
import FightMechanic from '../../mechanics/FightMechanic';
import Character from '../../mechanics/characters/Character';
import { useAppSelector } from '../../store/store';
import { usePrevious } from '../../customHooks/usePrevious';
import { HpBar } from './hpBar';
import UserCharacters from './UserCharacters';

interface IFightSceneProps {
    fightScene: FightMechanic,
    enemyArr: Character[],
    mainCharacter: Character[]
}

const FightScene = ({ fightScene, mainCharacter, enemyArr }: IFightSceneProps) => {
    let playerImg = ''
    const enemyImgArr = []
    let sceneImg = ''

    const [playerHp, setPlayerHp] = React.useState(fightScene.getOrder()[0].getHp())
    const [enemyHp, setEnemyHp] = React.useState(fightScene.getOrder()[1].getHp())
    const isPlayerTurn = useAppSelector(state => state.FightReducer.isPlayerTurn)

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

    const passTurn = () => {
        fightScene.nextTurn()
    }

    React.useEffect(() => {
        if (isPlayerTurn)
            enemyArr[0].doNpcLogic(fightScene.getOrder()[0])
    }, [isPlayerTurn])

    const handleAttack = () => {
        fightScene.getOrder()[0].dealDamage(fightScene.getOrder()[1])
        passTurn()
        setEnemyHp(fightScene.getOrder()[1].getHp())
        setPlayerHp(fightScene.getOrder()[0].getHp())
    }

    // ? какая-то фигня, пусть побудет
    // const initWidth = playerHp ? '100%' : ''
    // const [widthHp, setWidthHp] = useState(initWidth)

    // const prevHp = usePrevious(playerHp)
    // console.log('prevHp:', prevHp);
    // if (prevHp) {
    //     const damage = prevHp - playerHp
    //     console.log('damage:', damage);

    //     const curHp = playerHp

    //     console.log('curHp:', curHp);

    //     const calc = Math.round((playerHp / prevHp) * 100)

    //     // console.log('calc value:', calc);

    // }

    // console.log(HpBar(playerHp));    
    // ? какая-то фигня, пусть побудет

    console.log(mainCharacter);

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={sceneImg} alt="img" />
                </div>

                <div className="fight-scene__main-characters">
                    <div className="player">
                        {/* 
                        <div className="player__img">
                            <img src={playerImg} alt="img" />
                            <span style={{ width: playerHp }}>{playerHp}</span>
                        </div>
                        <div className="player__img">
                            <img src={mainCharacter[0].getImgBig()} alt="img" />
                            <span style={{ width: playerHp }}>{playerHp}</span>
                        </div> */}
                        {mainCharacter.map((item, i) => {
                            return <UserCharacters img={item.getImgBig()} playerHp={playerHp} key={i} />
                        })}
                    </div>
                    <div className="enemys">
                        {enemyArr.map((item, i) => {
                            return <Enemy enemyImg={imgArr[1]} enemyHp={item.getHp()} key={i} />
                        })}
                    </div>
                </div>
            </div>
            <div className="fight-scene__panel">
                <div className="fight-scene__panel-left">
                    <div className="skills__panel">
                        {/* <img src='' alt="img" /> */}
                        <button onClick={handleAttack}>ATK</button>
                    </div>
                </div>
                <div className="fight-scene__panel-right"></div>
            </div>
        </div>
    );
};

export default FightScene;