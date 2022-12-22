import { useAppSelector } from '../../store/store';

const CharacterWindowStats = () => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    return (
        <ul className="stats__lists">
            <li className="stats__elem">HP - {mainCharacter.getMaxHp()}</li>
            <li className="stats__elem">attak - {mainCharacter.getDamage()}</li>
            <li className="stats__elem">armor - {mainCharacter.getArmor()}</li>
            <li className="stats__elem">CON - {mainCharacter.getCon()}</li>
            <li className="stats__elem">DEX - {mainCharacter.getDex()}</li>
            <li className="stats__elem">STR - {mainCharacter.getStr()}</li>
            <li className="stats__elem">CHR - {mainCharacter.getChr()}</li>
            <li className="stats__elem">WIS - {mainCharacter.getWis()}</li>
            <li className="stats__elem">INT - {mainCharacter.getInt()}</li>
        </ul>
    );
};

export default CharacterWindowStats;