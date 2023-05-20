import * as React from 'react';
import bones from '../../assets/img/bones.png';

interface IEnemyDeadProps {
  maxEnemyHp: number;
}

const EnemysDead: React.FC<IEnemyDeadProps> = ({ maxEnemyHp }) => {
  return (
    <>
      <img className="enemys__content-img enemy isDead" src={bones} alt="img" />
      <div className="player__content-hp">
        <span style={{ width: `0%` }}></span>
        <p>0 / {maxEnemyHp}</p>
      </div>
    </>
  );
};

export default React.memo(EnemysDead);
