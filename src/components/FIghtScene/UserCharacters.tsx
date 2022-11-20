import React from 'react';

interface IUserCharacters {
    img: string,
    playerHp: number
    maxHp: number
}

const UserCharacters = ({ img, playerHp, maxHp }: IUserCharacters) => {
    const widthHpBar = Math.round((playerHp / maxHp) * 100)
    const takeDamage = maxHp - playerHp

    return (
        <div className="player__img">
            <img src={img} alt="img" />
            <div className="player__img-hp">
                <span style={{ width: `${widthHpBar}%` }}></span>
                <p>{playerHp} / {maxHp}</p>
            </div>
            <div className="damage">{takeDamage}</div>
        </div>
    );
};

export default UserCharacters;