import { memo } from 'react';
import './CharacterWindow.scss'
import { useAppSelector } from '../../store/store';
import CharacterWindowStats from './CharacterWindowStats';
import CharacterWindowArmor from './CharacterWindowArmor';
import CharacterWindowWeapon from './CharacterWindowWeapon';
import CharacterWindowJewerly from './CharacterWindowJewerly';

interface ICharacterWindowProps {
    classIfInventoryOpen: string
    closeCharacterWindow: () => void
}

const CharacterWindow = ({ classIfInventoryOpen, closeCharacterWindow }: ICharacterWindowProps) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)
    // ! do not delete const in next line
    const inventoryLength = useAppSelector(state => state.userReducer.inventoryLength)

    return (
        <div className={`character-window ${classIfInventoryOpen}`}>
            <div className="character-window__wrapper">
                <h1 className="character-window__title">Character</h1>
                <span
                    className='character-window__close'
                    onClick={closeCharacterWindow}>
                </span>
                <div className="character-window__body">
                    <div className="body__column">
                        <h3 className="body__column-name">
                            {mainCharacter.getName() ? mainCharacter.getName() : 'Character name'}
                        </h3>
                        <div className="body__column-equipment equipment">
                            <ul className="equipment__slots">
                                <CharacterWindowArmor />
                            </ul>
                            <div className="equipment__character-img">
                                <img src={mainCharacter.getImgBig()} alt="img" />
                            </div>
                            <ul className="equipment__slots">
                                <CharacterWindowJewerly />
                            </ul>
                        </div>
                        <div className="body__column-weapon">
                            <ul className="equipment__slots weapon">
                                <CharacterWindowWeapon />
                            </ul>
                        </div>
                    </div>
                    <div className="body__column stats">
                        <CharacterWindowStats />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CharacterWindow);
