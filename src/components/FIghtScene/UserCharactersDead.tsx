import React from 'react';
import bones from '../../assets/img/bones.png'

interface IUserCharactersDeadProps {
    img: string,
    maxHp: number
}

const UserCharactersDead = ({ img, maxHp }: IUserCharactersDeadProps) => {

    

    return (
        <>
            <img className="player__content-img isDead" src={bones} alt="img" />
            <div className="player__content-hp">
                <span style={{ width: `0%` }}></span>
                <p>0 / {maxHp}</p>
            </div>
        </>
    );
};

export default UserCharactersDead;