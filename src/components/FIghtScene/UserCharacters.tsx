import React from 'react';

interface IUserCharacters {
    img: string,
    playerHp: number
}

const UserCharacters = ({ img, playerHp }: IUserCharacters) => {
    return (
        <div className="player__img">
            <img src={img} alt="img" />
            <span style={{ width: playerHp }}>{playerHp}</span>
        </div>
    );
};

export default UserCharacters;