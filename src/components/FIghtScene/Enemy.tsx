import React from 'react';

interface IEnemyProps {
    enemyImg: string
}
const Enemy = ({enemyImg}: IEnemyProps) => {
    return (
        <div className="enemys__img">
            <img src={enemyImg} alt="img" />
        </div>
    );
};

export default Enemy;