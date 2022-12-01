import React from 'react';
import { usePrevious } from '../../customHooks/usePrevious';
import { useAppSelector } from '../../store/store';
import UserCharactersAlive from './UserCharactersAlive';
import UserCharactersDead from './UserCharactersDead';

interface IUserCharactersProps {
    img: string,
    playerHp: number
    maxHp: number
}

const UserCharacters = ({ img, playerHp, maxHp }: IUserCharactersProps) => {
    const widthHpBar = Math.round((playerHp / maxHp) * 100)
    const prevHp = usePrevious(playerHp)
    const takenDamage = prevHp - playerHp
    const isAlive = playerHp > 0

    return (
        <div className="player__content" >
            {isAlive ? <UserCharactersAlive
                img={img}
                playerHp={playerHp}
                maxHp={maxHp}
                widthHpBar={widthHpBar} />
                :
                <UserCharactersDead
                    img={img}
                    maxHp={maxHp}
                />
            }
            {(takenDamage > 0) ? <span className="player__content-taken-damage">-{takenDamage}</span> : ""}
        </div>
    );
};

export default UserCharacters;