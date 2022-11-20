import React from 'react';

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number
    maxEnemyHp: number
}
const Enemy = ({ enemyImg, enemyHp, maxEnemyHp }: IEnemyProps) => {
    const widthHpBar = Math.round((enemyHp / maxEnemyHp) * 100)

    return (
        <div className="enemys__img">
            <img src={enemyImg} alt="img" />
            <div className="player__img-hp">
                <span style={{ width: widthHpBar }}></span>
                <p>{enemyHp} / {maxEnemyHp}</p>
            </div>
        </div>
    );
};

export default Enemy;