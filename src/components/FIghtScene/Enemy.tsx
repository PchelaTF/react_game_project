import React from 'react';

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number
}
const Enemy = ({ enemyImg, enemyHp }: IEnemyProps) => {
    return (<>
        <div className="enemys__img">
            <img src={enemyImg} alt="img" />
            <span style={{width: enemyHp}}>{enemyHp}</span>
        </div>
    </>
    );
};

export default Enemy;