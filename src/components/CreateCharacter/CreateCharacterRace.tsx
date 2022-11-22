import React, { FunctionComponent } from 'react';

interface ICharacterRaceProps {
    CharacterRace: string
    switchRace: (key: any) => void
    activeClassName: string
}

const CreateCharacterRace = ({ CharacterRace, switchRace, activeClassName }: ICharacterRaceProps) => {
    const className = `create-character__race-variable ${activeClassName}`

    return (
        <div className={className} onClick={switchRace}>
            <img src={CharacterRace} alt="img" title='Some descr of img' />
        </div>
    );
};

export default CreateCharacterRace;