import * as React from 'react';
import './Inventory.scss';
import InventoryItem from './InventoryItem';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { initItem, Item } from '../../mechanics/items/Item';
import { v4 as uuidv4 } from 'uuid';
import { userSlice } from '../../store/reducers/userReducer';

interface IInventoryProps {
  closeInventory: () => void;
  setPlayerHp: React.Dispatch<React.SetStateAction<number>>;
  classIfCharWindowOpen: string;
}

const Inventory: React.FC<IInventoryProps> = ({ closeInventory, setPlayerHp, classIfCharWindowOpen }) => {
  const dispatch = useAppDispatch();
  const characterInventory = useAppSelector((state) => state.userReducer.inventory);
  const mainCharacter = useAppSelector((state) => state.userReducer.character);
  const inventoryLength = useAppSelector((state) => state.userReducer.inventoryLength);
  const { setInventoryLength } = userSlice.actions;

  const emptyItem = new Item(initItem);

  const emptyInventorySquares = Array(25 - inventoryLength).fill(emptyItem);
  const currentInventory: Item[] = [...characterInventory.getItems(), ...emptyInventorySquares];

  React.useEffect(() => {
    dispatch(setInventoryLength());
  }, []);

  const inventoryBody = React.useMemo(() => {
    return (
      <ul className="inventory__body-items">
        {currentInventory.map((item, i) => {
          return <InventoryItem item={item} key={uuidv4()} index={i} setPlayerHp={setPlayerHp} />;
        })}
      </ul>
    );
  }, [inventoryLength]);

  return (
    <div className={`inventory ${classIfCharWindowOpen}`}>
      <div className={`inventory__wrapper ${classIfCharWindowOpen}`}>
        <div className="inventory__container">
          <h1 className="inventory__header">Inventory</h1>
          <span className="inventory__close" onClick={closeInventory}></span>
          <div className="inventory__body">{inventoryBody}</div>
          <div className="inventory__footer">
            <span>Gold: </span>
            <span>{mainCharacter.getGold()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Inventory);
