import * as React from 'react';
import { buttonClick } from '../../mechanics/sounds/sound';

interface IButtonProps {
  onClick: (e?: any) => void;
  name: string;
  className?: string;
}

const BaseButton: React.FC<IButtonProps> = ({ onClick, name, className }) => {
  const createCharBtnClass = name === 'Create' ? 'create-character__button' : null;

  const handleClick = () => {
    onClick();
    buttonClick();
  };

  return (
    <button className={`${className} item__list-button btn ${createCharBtnClass}`} onClick={handleClick}>
      {name}
    </button>
  );
};

export default React.memo(BaseButton);
