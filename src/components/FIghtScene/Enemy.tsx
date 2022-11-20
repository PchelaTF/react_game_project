import React from 'react';
import { fightSlice } from '../../store/reducers/FightReducer';
import { useAppDispatch } from '../../store/store';

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number,
    maxEnemyHp: number,
    enemyIndex: number
}
const Enemy = ({ enemyImg, enemyHp, maxEnemyHp, enemyIndex }: IEnemyProps) => {
    const widthHpBar = Math.round((enemyHp / maxEnemyHp) * 100)
    const dispatch = useAppDispatch()
    const { setEnemyIndex } = fightSlice.actions

    const handleClick = () => {
        dispatch(setEnemyIndex(enemyIndex))
    }

    return (
        <div className="enemys__img" onClick={handleClick}>
            <img src={enemyImg} alt="img" />
            <div className="player__img-hp">
                <span style={{ width: widthHpBar }}></span>
                <p>{enemyHp} / {maxEnemyHp}</p>
            </div>
        </div>
    );
};

export default Enemy;