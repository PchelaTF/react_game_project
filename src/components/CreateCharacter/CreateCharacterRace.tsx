import React from 'react';

interface ICharacterRaceProps {
    CharacterRace: string
    switchRace: (key: any) => void
}

const CreateCharacterRace = ({ CharacterRace, switchRace }: ICharacterRaceProps) => {
    return (
        <div className="create-character__race-variable" onClick={switchRace}>
            <img src={CharacterRace} alt="img" />
        </div>
    );
};

export default CreateCharacterRace;