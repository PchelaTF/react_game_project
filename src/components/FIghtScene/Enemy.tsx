import React from 'react';
import { usePrevious } from '../../customHooks/usePrevious';

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number
    maxEnemyHp: number
}
const Enemy = ({ enemyImg, enemyHp, maxEnemyHp }: IEnemyProps) => {
    const widthHpBar = Math.round((enemyHp / maxEnemyHp) * 100)
    const prevHp = usePrevious(enemyHp)
    const takenDamage = prevHp - enemyHp

    return (
        <div className="enemys__content">
            <img className='enemys__content-img enemy' src={enemyImg} alt="img" />
            <div className="player__content-hp">
                <span style={{ width: `${widthHpBar}%` }}></span>
                <p>{enemyHp} / {maxEnemyHp}</p>
            </div>
            {(takenDamage > 0) ? <span className="player__content-taken-damage">-{takenDamage}</span> : ""}
        </div>
    );
};

export default Enemy;