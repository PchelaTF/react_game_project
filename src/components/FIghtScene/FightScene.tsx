import React from 'react';
import "./FightScene.scss"
import Enemys from './Enemys';
import Character from '../../mechanics/characters/Character';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fightSlice } from '../../store/reducers/FightReducer';
import UserCharacters from './UserCharacters';
import FightScenIsDead from './FightScenIsDead';
import FightScenIsWin from './FightScenIsWin';
import { skillsImgArr } from "../CreateCharacter/Images"
import inventory from "../../assets/img/chest.png"
import Inventory from '../Inventory/Inventory';

interface IFightSceneProps {
    allyArr: Character[]
    enemyArr: Character[]
}

const FightScene = ({ allyArr, enemyArr }: IFightSceneProps) => {
    const [playerHp, setPlayerHp] = React.useState(allyArr[0].getHp())
    const [isWon, setIsWon] = React.useState(false)
    const [initial, setInitial] = React.useState(true)
    const fightOrder = allyArr.concat(enemyArr)
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)
    const enemyIndex = useAppSelector(state => state.FightReducer.enemyIndex)
    const isСhoiceActive = useAppSelector(state => state.FightReducer.ischoiceActive)
    const deadEnemies = useAppSelector(state => state.FightReducer.deadEnemies)
    const skillIndex = useAppSelector(state => state.FightReducer.skillIndex)
    const background = useAppSelector(state => state.FightReducer.background)
    const dispatch = useAppDispatch()
    const { setTurn, setChoiceActive, setEnemyIndex, setSkillIndex } = fightSlice.actions
    const [isInventoryOpen, setIsInventoryOpen] = React.useState(false)

    React.useEffect(() => {
        setChoiceActive(false)
        if (fightOrder[currentTurn].getIsNpc()) {
            npcTurn()
        }
    }, [currentTurn])

    // вызывается при смене индекса по нажатию на противника
    React.useEffect(() => {
        if (!isСhoiceActive && !initial) {
            switch (skillIndex) {
                case 1:
                    doFirstSkill()
                    break;
                case 0:
                default:
                    doDamage()
                    break;
            }
        }
        setInitial(false)
    }, [enemyIndex])

    React.useEffect(() => {
        setIsWon(deadEnemies.length == enemyArr.length)
    }, [currentTurn])

    const npcTurn = () => {
        if (!deadEnemies[currentTurn])
            setTimeout(() => {
                fightOrder[currentTurn].doNpcLogic(allyArr[0])
                setPlayerHp(allyArr[0].getHp())
                passTurn()
            }, 1000)
    }

    const passTurn = () => {
        if (playerHp <= 0)
            return
        let newTurn = currentTurn
        dispatch(setChoiceActive(false))
        if (currentTurn < fightOrder.length - 1)
            dispatch(setTurn(newTurn + 1))
        else
            dispatch(setTurn(0))
    }

    const handleSkillClick = (index: number) => {
        dispatch(setChoiceActive(true))
        dispatch(setSkillIndex(index))
        dispatch(setEnemyIndex(-1))
    }

    const heal = () => {
        allyArr[0].selfHeal(6)
        setPlayerHp(allyArr[0].getHp())
        passTurn()
    }

    const doDamage = () => {
        allyArr[0].dealDamage(enemyArr[enemyIndex])
        passTurn()
    }

    const doFirstSkill = () => {
        allyArr[0].firstSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const openInventory = () => {
        setIsInventoryOpen(true)
    }

    const closeInventory = () => {
        setIsInventoryOpen(false)
    }

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={background} alt="img" />
                </div>

                <div className="fight-scene__main-characters">
                    <div className="player">
                        {allyArr.map((item, i) => {
                            return <UserCharacters img={item.getImgBig()} playerHp={playerHp} maxHp={item.getMaxHp()} key={i} />
                        })}
                    </div>
                    <div className="enemys">
                        {enemyArr.map((item, i) => {
                            return <Enemys enemyImg={item.getImgBig()} enemyHp={item.getHp()} maxEnemyHp={item.getMaxHp()} enemyIndex={i} key={i} />
                        })}
                    </div>
                </div>

                <ul className="fight-scene__skills-panel" style={fightOrder[currentTurn].getIsNpc() ? { filter: "grayscale(1)" } : {}}>
                    <li className="skills__item" onClick={() => handleSkillClick(0)}>
                        <img src={skillsImgArr[0]} alt="img" />
                    </li>
                    <li className="skills__item" onClick={() => handleSkillClick(1)}>
                        <img src={skillsImgArr[1]} alt="img" />
                    </li>
                    <li className="skills__item" onClick={() => handleSkillClick(0)}>
                        <img src={skillsImgArr[2]} alt="img" />
                    </li>
                    <li className="skills__item" onClick={() => handleSkillClick(0)}>
                        <img src={skillsImgArr[3]} alt="img" />
                    </li>
                </ul>

                <div className="fight-scene__header-panel">
                    <div className="header-panel__inventory" onClick={openInventory}>
                        <img src={inventory} alt="" />
                    </div>
                </div>
            </div>

            {isInventoryOpen ? <Inventory closeInventory={() => closeInventory()}/> : ''}
            {playerHp <= 0 ? <FightScenIsDead /> : ''}
            {isWon && <FightScenIsWin />}

        </div>
    );
};

export default FightScene;
