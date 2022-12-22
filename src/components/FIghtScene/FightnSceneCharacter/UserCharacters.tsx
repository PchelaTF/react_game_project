import { memo } from 'react';
import { usePrevious } from '../../../customHooks/usePrevious';
import { useAppSelector } from '../../../store/store';
import UserCharactersAlive from './UserCharactersAlive';
import UserCharactersDead from './UserCharactersDead';
import './UserCharacters.scss'

interface IUserCharactersProps {
    playerHp: number
}

const UserCharacters = ({ playerHp }: IUserCharactersProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    const img = mainCharacter.getImgBig()
    const maxHp = mainCharacter.getMaxHp()

    const widthHpBar = Math.round((playerHp / maxHp) * 100)
    const prevHp = usePrevious(playerHp)
    const takenDamage = prevHp - playerHp
    const isAlive = playerHp > 0


    return (
        <div className="player">
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
                {(takenDamage > 0) ? <span className="player__content-taken-damage">-{takenDamage}</span> : null}
            </div>
        </div>
    );
};

export default UserCharacters;
