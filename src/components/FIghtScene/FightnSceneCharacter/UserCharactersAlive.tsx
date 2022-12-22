import { memo } from 'react';

interface IUserCharactersAliveProps {
    img: string,
    playerHp: number
    maxHp: number
    widthHpBar: number
}

const UserCharactersAlive = ({ img, playerHp, maxHp, widthHpBar }: IUserCharactersAliveProps) => {
    return (
        <>
            <img className="player__content-img" src={img} alt="img" />
            <div className="player__content-hp">
                <span style={{ width: `${widthHpBar}%` }}></span>
                <p>{playerHp} / {maxHp}</p>
            </div>
        </>
    );
};

export default memo(UserCharactersAlive);