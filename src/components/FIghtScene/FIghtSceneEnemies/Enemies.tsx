import { memo } from 'react';
import { usePrevious } from '../../../customHooks/usePrevious';
import { fightSlice } from '../../../store/reducers/FightReducer';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import EnemysAlive from './EnemiesAlive';
import EnemysDead from './EnemiesDead';
import './Enemies.scss'

interface IEnemyProps {
    enemyImg: string,
    enemyHp: number,
    maxEnemyHp: number,
    enemyIndex: number
}
const Enemies = ({ enemyImg, enemyHp, maxEnemyHp, enemyIndex }: IEnemyProps) => {
    const widthHpBar = Math.round((enemyHp / maxEnemyHp) * 100)
    const prevHp = usePrevious(enemyHp)
    const takenDamage = prevHp - enemyHp
    const isAlive = enemyHp > 0
    const dispatch = useAppDispatch()
    const { setChoiceActive, setEnemyIndex } = fightSlice.actions
    const ischoiceActive = useAppSelector(state => state.FightReducer.ischoiceActive)

    const handleClick = () => {
        if (ischoiceActive && isAlive) {
            dispatch(setChoiceActive(false))
            dispatch(setEnemyIndex(enemyIndex))
        }
    }

    return (
        <div className="enemies__content" onClick={handleClick}>
            {isAlive ?
                <EnemysAlive
                    enemyImg={enemyImg}
                    enemyHp={enemyHp}
                    maxEnemyHp={maxEnemyHp}
                    widthHpBar={widthHpBar}
                />
                :
                <EnemysDead
                    maxEnemyHp={maxEnemyHp}
                />
            }
            {(takenDamage > 0) ? <span className="player__content-taken-damage">-{takenDamage}</span> : ""}
        </div>
    );
};

export default memo(Enemies);