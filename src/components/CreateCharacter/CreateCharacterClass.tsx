import React from 'react';

interface ICharacterRaceProps {
    CharacterClass: string
}

const CreateCharacterClass = ({ CharacterClass }: ICharacterRaceProps) => {
    return (
        <div className="create-character__class-variable">
            <img src={CharacterClass} alt="img" />
        </div>
    );
};

export default CreateCharacterClass;