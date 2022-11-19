import React, { useRef, useState } from 'react';
import "./FightScene.scss"
import { imgArr } from './testImgArr'
import Enemy from './Enemy';
import Character from '../../mechanics/characters/Character';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fightSlice } from '../../store/reducers/FightReducer';
import UserCharacters from './UserCharacters';

interface IFightSceneProps {
    allyArr: Character[]
    enemyArr: Character[]
}

const FightScene = ({ allyArr, enemyArr }: IFightSceneProps) => {
    let playerImg = ''
    const enemyImgArr = []
    let sceneImg = ''

    const [playerHp, setPlayerHp] = React.useState(allyArr[0].getHp())
    const [enemyHp, setEnemyHp] = React.useState(enemyArr[0].getHp())
    const fightOrder = allyArr.concat(enemyArr)
    const isEnemyTurn = useAppSelector(state => state.FightReducer.isEnemyTurn)
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)
    const dispatch = useAppDispatch()
    const { setTurn, setIsEnemyTurn } = fightSlice.actions

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
        let newTurn = currentTurn
        if(currentTurn == fightOrder.length)
            dispatch(setTurn(1))
        else dispatch(setTurn(newTurn + 1))
        
        if(currentTurn > allyArr.length)
            dispatch(setIsEnemyTurn(false))
        else dispatch(setIsEnemyTurn(true))
    }

    React.useEffect(() => {
        if(isEnemyTurn) {
            setTimeout(() => {
                enemyArr[0].doNpcLogic(allyArr[0])
                setPlayerHp(allyArr[0].getHp())
                passTurn()
            }, 1000)
        }
    }, [isEnemyTurn])

    const handleAttack = () => {
        allyArr[0].dealDamage(enemyArr[0])
        setEnemyHp(enemyArr[0].getHp())
        passTurn()
    }

    const heal = () => {
        allyArr[0].selfHeal(6)
        setPlayerHp(allyArr[0].getHp())
        passTurn()
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
                        {allyArr.map((item, i) => {
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
                        <button onClick={handleAttack} disabled={isEnemyTurn}>ATK</button>
                    </div>
                </div>
                <div className="fight-scene__panel-right"></div>
            </div>
        </div>
    );
};

export default FightScene;