import { memo } from 'react';
import bones from '../../../assets/img/bones.png'

interface IEnemyDeadProps {
    maxEnemyHp: number
}

const EnemysDead = ({ maxEnemyHp }: IEnemyDeadProps) => {
    return (
        <>
            <img className='enemies__content-img enemies isDead' src={bones} alt="img" />
            <div className="enemies__content-hp">
                <span style={{ width: `0%` }}></span>
                <p>0 / {maxEnemyHp}</p>
            </div>
        </>
    );
};

export default memo(EnemysDead);