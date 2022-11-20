import React, { useState } from 'react';
import './CreateCharacter.scss'

import { raceArr, raceFullArr, classArr, testClassArr, descrArr } from './testCRArr';
import CreateCharacterRace from './CreateCharacterRace';
import CreateCharacterClass from './CreateCharacterClass';
import { characterClasses, createNewCharacter } from '../../mechanics/CreatingMechanic';
import { useAppDispatch } from '../../store/store';
import { userSlice } from '../../store/reducers/userReducer';
import { sceneSlice } from '../../store/reducers/SceneReducer';

const CreateCharacter = () => {
    const dispath = useAppDispatch()
    const { setPlayerCharacter } = userSlice.actions
    const { setScene } = sceneSlice.actions
    const [fullImg, setFullImg] = useState(raceFullArr[0])
    const [description, setDescription] = useState(descrArr[0])

    const [reduxClass, setReduxClass] = useState(characterClasses[0])

    const [name, setName] = useState('')

    function switchRace(key: any) {
        setFullImg(raceFullArr[key])
        setDescription(descrArr[key])
        setReduxClass(characterClasses[key])
    }

    const onHandleNameChange = (e: any) => {
        setName(e.target.value)
    }
    
    const setReduxNewCharacter = (name: string, reduxClass: string) => {
        const newCharacter = createNewCharacter(name, reduxClass)
        const playerCharacter = setPlayerCharacter(newCharacter)
        dispath(playerCharacter)
        dispath(setScene("main"))
        // dispath(setPlayerCharacter(createNewCharacter(name, reduxClass)))
    }

    return (
        <div className='create-character'>
            <div className="create-character__wrapper">
                <div className="create-character__content">

                    <div className="create-character__select">

                        <div className="create-character__select-name">
                            <label htmlFor="name">Enter character name</label>
                            <input
                                className='create-character__name-input'
                                type="text"
                                name='name'
                                autoComplete='off'
                                onChange={(e) => onHandleNameChange(e)} />
                        </div>

                        <div className="create-character__select-container">

                            <div className="create-character__race">
                                {raceArr.map((item, i) => {
                                    return <CreateCharacterRace key={i} CharacterRace={item} switchRace={() => switchRace(i)} />
                                })}

                                <div className="create-character__race-bigimg">
                                    <img src={fullImg} alt="img" />
                                </div>
                            </div>

                            <div className="create-character__class">
                                {classArr.map((item, i) => {
                                    return <CreateCharacterClass key={i} CharacterClass={item} />
                                })}
                            </div>

                        </div>

                    </div>

                    <div className="create-character__info">
                        <p className="create-character__info-title">Information</p>

                        <div className="create-character__info-descr">
                            <p>Description</p>
                            {description}
                        </div>

                        <div className="create-character__info-content">

                            <div className="create-character__info-stats stats">
                                <p className="stats__title">Stats</p>
                                <ul className="stats__lists">
                                    <li className="stats__elem">STR - 15</li>
                                    <li className="stats__elem">DEX - 15</li>
                                    <li className="stats__elem">CON - 15</li>
                                    <li className="stats__elem">INT - 15</li>
                                    <li className="stats__elem">MEN - 15</li>
                                    <li className="stats__elem">WIT - 15</li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>

                <button className='create-character__btn' onClick={() => setReduxNewCharacter(name, reduxClass)}>Create character</button>

            </div>
        </div>
    );
};

export default CreateCharacter;