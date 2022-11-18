import React from 'react';

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number
}
const Enemy = ({enemyImg, enemyHp}: IEnemyProps) => {
    return (<>
        <div className="enemys__img">
            <img src={enemyImg} alt="img" />
        </div>
        <span style ={{color: "white"}}>{enemyHp}</span>
    </>
    );
};

export default Enemy;