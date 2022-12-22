import { memo } from 'react';
import { useAppSelector } from '../../../store/store';
import './FightSceneHeaderPanel.scss'
import inventory from "../../../assets/img/chest.png"

interface IHeaderPanelProp {
    handleOpenCloseCharacterWindow: () => void
    handleOpenCloseInventory: () => void
}

const FightSceneHeaderPanel = ({ handleOpenCloseCharacterWindow, handleOpenCloseInventory }: IHeaderPanelProp) => {
    const mainCharacter = useAppSelector(state => state.userReducer.character)

    return (
        <div className="fight-scene__header-panel">
            <div className="header-panel__character" onClick={handleOpenCloseCharacterWindow}>
                <img src={mainCharacter.getImgSmall()} alt="" />
            </div>
            <div className="header-panel__inventory" onClick={handleOpenCloseInventory}>
                <img src={inventory} alt="" />
            </div>
        </div>
    );
};

export default memo(FightSceneHeaderPanel);