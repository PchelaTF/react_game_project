import { useState, useEffect, useMemo } from 'react';
import Enemies from './FIghtSceneEnemies/Enemies';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fightSlice } from '../../store/reducers/FightReducer';
import UserCharacters from './FightnSceneCharacter/UserCharacters';
import FightScenIsDead from './FightSceneExodus/FightScenIsDead';
import FightScenIsWin from './FightSceneExodus/FightScenIsWin';
import Inventory from '../Inventory/Inventory';
import CharacterWindow from '../CharacterWindow/CharacterWindow';
import { createEnemyArr } from '../../mechanics/CreatingMechanic';
import UserCharactersSkills from './FightnSceneCharacter/UserCharactersSkills';
import "./FightScene.scss"
import FightSceneHeaderPanel from './FightSceneHeaderPanel/FightSceneHeaderPanel';

const FightScene = () => {
    //Redux const
    const dispatch = useAppDispatch()
    const currentTurn = useAppSelector(state => state.FightReducer.currentTurn)
    const enemyIndex = useAppSelector(state => state.FightReducer.enemyIndex)
    const isСhoiceActive = useAppSelector(state => state.FightReducer.ischoiceActive)
    const deadEnemies = useAppSelector(state => state.FightReducer.deadEnemies)
    const skillIndex = useAppSelector(state => state.FightReducer.skillIndex)
    const background = useAppSelector(state => state.FightReducer.background)
    const difficulty = useAppSelector(state => state.FightReducer.difficalty)
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    const { setTurn, setChoiceActive, setEnemyIndex, setSkillIndex, pushToDeadEnemies } = fightSlice.actions
    //useState const
    const [isWon, setIsWon] = useState(false)
    const [initial, setInitial] = useState(true)
    const [enemiesHp, setEnemiesHp] = useState<number[]>([])
    const [isInventoryOpen, setIsInventoryOpen] = useState(false)
    const [enemyArr, setEnemyArr] = useState(createEnemyArr(difficulty))
    const [playerHp, setPlayerHp] = useState(mainCharacter.getHp())
    const [isCharacterWindowOpen, setIsCharacterWindowOpen] = useState(false)
    //other const
    const fightOrder = [mainCharacter].concat(enemyArr)

    useEffect(() => {
        if (fightOrder[currentTurn].getIsNpc()) {
            npcTurn()
        }
    }, [currentTurn])

    useEffect(() => {
        const newHp: number[] = []

        for (let i = 0; i < enemyArr.length; i++) {
            newHp.push(enemyArr[i].getHp())
        }

        setEnemiesHp(newHp)
    }, [currentTurn])

    // вызывается при смене индекса по нажатию на противника
    useEffect(() => {
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
            setPlayerHp(mainCharacter.getHp())
        }
        setInitial(false)
    }, [enemyIndex])

    useEffect(() => {
        setIsWon(deadEnemies.length == enemyArr.length)
    }, [currentTurn])

    function npcTurn() {
        if (enemyArr[currentTurn - 1].getHp() <= 0 && !enemyArr[currentTurn - 1].getIsDead()) {
            enemyArr[currentTurn - 1].setIsDead(true)
            dispatch(pushToDeadEnemies(true))
        }
        if (enemyArr[currentTurn - 1].getHp() >= 0)
            setTimeout(() => {
                fightOrder[currentTurn].doNpcLogic(mainCharacter)
                setPlayerHp(mainCharacter.getHp())
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
        if (mainCharacter.getskillsCooldown()[index] > 0)
            return
        dispatch(setChoiceActive(true))
        dispatch(setSkillIndex(index))
        dispatch(setEnemyIndex(-1))
    }

    const doDamage = () => {
        mainCharacter.dealDamage(enemyArr[enemyIndex])
        passTurn()
    }

    const doFirstSkill = () => {
        mainCharacter.firstSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const doSecondSkill = () => {
        mainCharacter.secondSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const doThirdSkill = () => {
        mainCharacter.thirdSkill(enemyArr[enemyIndex])
        passTurn()
    }

    const handleOpenCloseInventory = () => {
        setIsInventoryOpen(!isInventoryOpen)
    }

    const handleOpenCloseCharacterWindow = () => {
        setIsCharacterWindowOpen(!isCharacterWindowOpen)
    }

    const getItems = useMemo(() => {
        return isInventoryOpen ? <Inventory closeInventory={handleOpenCloseInventory} setPlayerHp={setPlayerHp} classIfCharWindowOpen={isCharacterWindowOpen ? '_character-window-open' : ''} /> : ''
    }, [isInventoryOpen, isCharacterWindowOpen])

    const getCharacterWindow = useMemo(() => {
        return isCharacterWindowOpen ? <CharacterWindow closeCharacterWindow={handleOpenCloseCharacterWindow} classIfInventoryOpen={isInventoryOpen ? '_inventory-open' : ''} /> : ''
    }, [isCharacterWindowOpen, isInventoryOpen])

    return (
        <div className="fight-scene__wrapper">
            <div className="fight-scene__main">
                <div className="fight-scene__main-backimg">
                    <img src={background} alt="img" />
                </div>
                <div className="fight-scene__main-characters">
                    <UserCharacters playerHp={playerHp} />
                    <div className="enemies">
                        {enemyArr.map((item, i) => {
                            return <Enemies enemyImg={item.getImgBig()} enemyHp={enemiesHp[i]} maxEnemyHp={item.getMaxHp()} enemyIndex={i} key={i} />
                        })}
                    </div>
                </div>
                <UserCharactersSkills fightOrder={fightOrder} handleSkillClick={handleSkillClick} />
                <FightSceneHeaderPanel handleOpenCloseCharacterWindow={handleOpenCloseCharacterWindow} handleOpenCloseInventory={handleOpenCloseInventory} />
            </div>
            {getItems}
            {getCharacterWindow}
            {playerHp <= 0 ? <FightScenIsDead /> : null}
            {isWon && <FightScenIsWin />}
        </div>
    );
};

export default FightScene;
