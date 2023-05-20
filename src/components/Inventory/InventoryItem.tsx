import * as React from 'react';
import { Item } from '../../mechanics/items/Item';
import { userSlice } from '../../store/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

interface IInventoryItemProps {
  item: Item;
  index: number;
  setPlayerHp: React.Dispatch<React.SetStateAction<number>>;
}

const InventoryItem: React.FC<IInventoryItemProps> = ({ item, index, setPlayerHp }: IInventoryItemProps) => {
  const mainCharacter = useAppSelector((state) => state.userReducer.character);
  const characterInventory = useAppSelector((state) => state.userReducer.inventory);
  const { setPlayerInventory, setInventoryLength } = userSlice.actions;
  const dispatch = useAppDispatch();
  const [itemCount, setItemCount] = React.useState(item.getCount());

  const handleClick = () => {
    item.useItem(mainCharacter);
    setItemCount(item.getCount());
    setPlayerHp(mainCharacter.getHp());
    if (itemCount === 1) characterInventory.deleteFromInventory(index);

    dispatch(setInventoryLength());
    dispatch(setPlayerInventory(characterInventory));
  };

  const bodyItem = React.useMemo(() => {
    return (
      <li className="inventory__body-item" onClick={handleClick}>
        {itemCount ? <img src={item.getImg()} alt="" /> : ''}
        {itemCount ? <span>{itemCount}</span> : ''}
      </li>
    );
  }, [itemCount]);

  return <>{bodyItem}</>;
};

export default React.memo(InventoryItem);
