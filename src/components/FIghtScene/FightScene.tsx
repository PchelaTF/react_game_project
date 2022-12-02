import React from 'react';
import "./FightScene.scss"
import Enemys from './Enemys';
import Character from '../../mechanics/characters/Character';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fightSlice } from '../../store/reducers/FightReducer';
import UserCharacters from './UserCharacters';
import FightScenIsDead from './FightScenIsDead';
import FightScenIsWin from './FightScenIsWin';
import inventory from "../../assets/img/chest.png"
import Inventory from '../Inventory/Inventory';
import { playSound } from '../../mechanics/sounds/sound';

interface IFightSceneProps {
    allyArr: Character[]
    enemyArr: Character[]
}

const FightScene = ({ allyArr, enemyArr }: IFightSceneProps) => {
    //useState const
    const [playerHp, setPlayerHp] = React.useState(allyArr[0].getHp())
    const [isWon, setIsWon] = React.useState(false)
    const [initial, setInitial] = React.useState(true)
    const [enemiesHp, setEnemiesHp] = React.useState<number[]>([])
    const [isInventoryOpen, setIsInventoryOpen] = React.useState(false)
    //Redux const
    const dispatch = useAppDispatch()
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)
    const enemyIndex = useAppSelector(state => state.FightReducer.enemyIndex)
    const isСhoiceActive = useAppSelector(state => state.FightReducer.ischoiceActive)
    const deadEnemies = useAppSelector(state => state.FightReducer.deadEnemies)
    const skillIndex = useAppSelector(state => state.FightReducer.skillIndex)
    const background = useAppSelector(state => state.FightReducer.background)
    const { setTurn, setChoiceActive, setEnemyIndex, setSkillIndex, pushToDeadEnemies } = fightSlice.actions
    //other const
    const fightOrder = allyArr.concat(enemyArr)

    React.useEffect(() => {
        if (fightOrder[currentTurn].getIsNpc()) {
            npcTurn()
        }
    }, [currentTurn])

    React.useEffect(() => {
        const newHp: number[] = []

        for (let i = 0; i < enemyArr.length; i++) {
            newHp.push(enemyArr[i].getHp())
        }

        setEnemiesHp(newHp)
    }, [currentTurn])

    // вызывается при смене индекса по нажатию на противника
    React.useEffect(() => {
        if (!isСhoiceActive && !initial) {
            switch (skillIndex) {
                case 1:
                    doFirstSkill()
                    break;
                case 2:
                    doSecondSkill()
                    break;
                case 3:
                    doThirdSkill()
                    break;
                case 0:
                default:
                    doDamage()
                    break;
            }
            playSound()
        }
        setInitial(false)
    }, [enemyIndex])

    React.useEffect(() => {
        setIsWon(deadEnemies.length == enemyArr.length)
    }, [currentTurn])

    function npcTurn() {
        if(enemyArr[currentTurn - 1].getHp() <= 0 && !deadEnemies[currentTurn - 1]) {
            dispatch(pushToDeadEnemies(true))
        }
        if (enemyArr[currentTurn - 1].getHp() >= 0)
            setTimeout(() => {
                fightOrder[currentTurn].doNpcLogic(allyArr[0])
                playSound()
                setPlayerHp(allyArr[0].getHp())
                passTurn()
            }, 1000)
        else
            passTurn()
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

    const doDamage = () => {
        allyArr[0].dealDamage(enemyArr[enemyIndex])
        passTurn()
    }

    const doFirstSkill = () => {
        allyArr[0].firstSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const doSecondSkill = () => {
        allyArr[0].secondSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const doThirdSkill = () => {
        allyArr[0].thirdSkill(allyArr[0])
        passTurn()
    }

    const openInventory = () => {
        setIsInventoryOpen(true)
    }

    const closeInventory = () => {
        setIsInventoryOpen(false)
    }

    const getCharacter = React.useMemo(() => {
        return <div className="player">
            {allyArr.map((item, i) => {
                return <UserCharacters img={item.getImgBig()} playerHp={playerHp} maxHp={item.getMaxHp()} key={i} />
            })}
        </div>
    }, [playerHp])

    const getEnemies = React.useMemo(() => {
        return <div className="enemys">
                {enemyArr.map((item, i) => {
                    return <Enemys enemyImg={item.getImgBig()} enemyHp={enemiesHp[i]} maxEnemyHp={item.getMaxHp()} enemyIndex={i} key={i} />
                })}
            </div>
    },[enemiesHp])

    const getSkills = React.useMemo(() => {
        return <ul className="fight-scene__skills-panel" style={fightOrder[currentTurn].getIsNpc() ? { filter: "grayscale(1)" } : {}}>
            <li className="skills__item" onClick={() => handleSkillClick(0)}>
                <img src={allyArr[0].getSkillImgs()[0]} alt="img" />
            </li>
            <li className="skills__item" onClick={() => handleSkillClick(1)}>
                <img src={allyArr[0].getSkillImgs()[1]} alt="img" />
            </li>
            <li className="skills__item" onClick={() => handleSkillClick(2)}>
                <img src={allyArr[0].getSkillImgs()[2]} alt="img" />
            </li>
            <li className="skills__item" onClick={() => handleSkillClick(0)}>
                <img src={allyArr[0].getSkillImgs()[3]} alt="img" />
            </li>
        </ul>
    },[currentTurn])

    const getInventory = React.useMemo(() => {
        return isInventoryOpen ? <Inventory closeInventory={() => closeInventory()} setPlayerHp={setPlayerHp} /> : ''
    }, [isInventoryOpen])

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={background} alt="img" />
                </div>
                <div className="fight-scene__main-characters">
                    {getCharacter}
                    {getEnemies}
                </div>
                {getSkills}
                <div className="fight-scene__header-panel">
                    <div className="header-panel__inventory" onClick={openInventory}>
                        <img src={inventory} alt="" />
                    </div>
                </div>
            </div>
            {getInventory}
            {playerHp <= 0 ? <FightScenIsDead /> : ''}
            {isWon && <FightScenIsWin />}
        </div>
    );
};

export default FightScene;
