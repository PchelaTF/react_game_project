import React from 'react';

interface ICharacterRaceProps {
    CharacterClass: string,
    switchClass: () => void,
    activeClassName: string
}

const CreateCharacterClass = ({ CharacterClass, switchClass, activeClassName }: ICharacterRaceProps) => {
    return (
        <div className={`create-character__class-variable ${activeClassName}`} onClick={switchClass}>
            <img src={CharacterClass} alt="img" />
        </div>
    );
};

export default CreateCharacterClass;