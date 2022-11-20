import React, { useRef, useState } from 'react';
import "./FightScene.scss"
import Enemy from './Enemy';
import Character from '../../mechanics/characters/Character';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fightSlice } from '../../store/reducers/FightReducer';
import UserCharacters from './UserCharacters';

interface IFightSceneProps {
    allyArr: Character[]
    enemyArr: Character[]
    fightSceneImg: string
}

const FightScene = ({ allyArr, enemyArr, fightSceneImg }: IFightSceneProps) => {
    const [playerHp, setPlayerHp] = React.useState(allyArr[0].getHp())
    const [enemyHp, setEnemyHp] = React.useState(enemyArr[0].getHp())
    const fightOrder = allyArr.concat(enemyArr)
    const isEnemyTurn = useAppSelector(state => state.FightReducer.isEnemyTurn)
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)
    const enemyIndex = useAppSelector(state => state.FightReducer.enemyIndex)
    const dispatch = useAppDispatch()
    const { setTurn, setIsEnemyTurn } = fightSlice.actions

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
        allyArr[0].dealDamage(enemyArr[enemyIndex])
        setEnemyHp(enemyArr[0].getHp())
        passTurn()
    }

    const heal = () => {
        allyArr[0].selfHeal(6)
        setPlayerHp(allyArr[0].getHp())
        passTurn()
    }

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={fightSceneImg} alt="img" />
                </div>

                <div className="fight-scene__main-characters">
                    <div className="player">
                        {allyArr.map((item, i) => {
                            return <UserCharacters img={item.getImgBig()} playerHp={playerHp} maxHp={item.getMaxHp()} key={i} />
                        })}
                    </div>
                    <div className="enemys">
                        {enemyArr.map((item, i) => {
                            return <Enemy enemyImg={item.getImgBig()} enemyHp={item.getHp()} maxEnemyHp={item.getMaxHp()} enemyIndex={i} key={i} />
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