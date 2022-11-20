import React from 'react';
import { usePrevious } from '../../customHooks/usePrevious';
import bones from '../../assets/img/bones.png'
interface IUserCharacters {
    img: string,
    playerHp: number
    maxHp: number
}

const UserCharacters = ({ img, playerHp, maxHp }: IUserCharacters) => {
    const widthHpBar = Math.round((playerHp / maxHp) * 100)
    const prevHp = usePrevious(playerHp)
    const takenDamage = prevHp - playerHp
    const isAlive = playerHp > 0

    return (
        <div className="player__content" >
            {isAlive ? <img className="player__content-img" src={img} alt="img"/> : <img className="player__content-img isDead" src={bones} alt="img"/>}
            <div className="player__content-hp">
                {isAlive ? <span style={{ width: `${widthHpBar}%` }}></span> : <span style={{ width: `0%` }}></span>}
                {isAlive ? <p>{playerHp} / {maxHp}</p> : <p>0 / {maxHp}</p>}
            </div>
            {(takenDamage > 0) ? <span className="player__content-taken-damage">-{takenDamage}</span> : ""}
        </div>
    );
};

export default UserCharacters;