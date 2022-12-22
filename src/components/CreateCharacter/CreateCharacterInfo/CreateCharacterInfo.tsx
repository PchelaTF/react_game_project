import { useState, useEffect } from 'react';
import { characterRace, characterStatsArr, countStatMod, returnRaceMod } from '../../../mechanics/CreatingMechanic';
import { useAppSelector } from '../../../store/store';
import { descrArr, statsDescription } from '../../../tempDB';
import CreateCharacterSkills from './CreateCharacterSkills';
import CreateCharacterStats from './CreateCharacterStats';
import './CreateCharacterInfo.scss'

const CreateCharacterInfo = () => {
    const activeClass = useAppSelector(state => state.createCharacterSlice.activeClass)
    const activeRace = useAppSelector(state => state.createCharacterSlice.activeRace)

    const [isSpoilerDescrOpen, setIsSpoilerDescrOpen] = useState(false)
    const [isSpoilerStatsOpen, setIsSpoilerStatsOpen] = useState(true)
    const [statsMod, setStatsMod] = useState<number[]>([1])

    const description = descrArr[activeClass]

    const viewCharacterStats = characterStatsArr[activeClass]

    const raceStats = returnRaceMod(characterRace[activeRace])

    const adaptiveHeight = window.matchMedia('(max-height: 919.9px)').matches
    let spoileDescrClass = ''
    let spoilerStatsClass = ''

    if (adaptiveHeight) {
        spoileDescrClass = isSpoilerDescrOpen ? '_desc-spoiler-open' : ''
        spoilerStatsClass = isSpoilerStatsOpen ? '_stats-spoiler-open' : '_stats-spoiler-close'
    }

    const handleSpoilerClick = () => {
        if (adaptiveHeight) {
            setIsSpoilerDescrOpen(!isSpoilerDescrOpen)
            setIsSpoilerStatsOpen(!isSpoilerStatsOpen)
        }
    }

    useEffect(() => {
        const newStatsMod: number[] = []
        newStatsMod.push(viewCharacterStats.initHp + countStatMod(10 + raceStats.initConstitution))
        newStatsMod.push(viewCharacterStats.initAttack)
        Object.values(raceStats).map((item) => {
            newStatsMod.push(item)
        })
        setStatsMod(newStatsMod)
    }, [activeClass, activeRace])

    return (
        <div className="create-character__info">
            <p className="create-character__info-title">Information</p>
            <div className="create-character__info-wrapper">
                <div className={`create-character__info-descr descr ${spoileDescrClass}`}>
                    <p
                        className='descr__title'
                        onClick={handleSpoilerClick}>
                        Description <i className='arrow down'></i>
                    </p>
                    <p className='descr__text'>{description}</p>
                </div>
                <div className={`create-character__info-stats stats ${spoilerStatsClass}`}>
                    <p
                        className="stats__title"
                        onClick={handleSpoilerClick}>
                        Stats <i className='arrow up'></i>
                    </p>
                    <ul className="stats__lists">
                        {
                            statsDescription.map((item, key) => {
                                return <CreateCharacterStats raceMod={statsMod[key]} stat={item} key={key} />
                            })
                        }
                    </ul>
                </div>
            </div>
            <CreateCharacterSkills />
        </div>
    );
};

export default CreateCharacterInfo;