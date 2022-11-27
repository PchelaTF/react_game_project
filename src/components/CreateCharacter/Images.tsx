import assasin from "../../assets/img/class_icons/assasin.png"
import mage from "../../assets/img/class_icons/mage.png"
import warrior from "../../assets/img/class_icons/warrior.png"
import eny from "../../assets/img/class_icons/Icon9.png"

import face1 from "../../assets/img/characters_icons/elfs/face1.png"
import face2 from "../../assets/img/characters_icons/elfs/face2.png"
import face3 from "../../assets/img/characters_icons/elfs/face3.png"
import face4 from "../../assets/img/characters_icons/elfs/face4.png"

import fullFace1 from '../../assets/img/characters_img/elfs/full_face1.png'
import fullFace2 from '../../assets/img/characters_img/elfs/full_face2.png'
import fullFace3 from '../../assets/img/characters_img/elfs/full_face3.png'
import fullFace4 from '../../assets/img/characters_img/elfs/full_face4.png'

import fullHalffling2 from "../../assets/img/characters_img/hulflings/Character1_face1.png"
import fullHalffling1 from "../../assets/img/characters_img/hulflings/Character2_face1.png"
import fullHalffling3 from "../../assets/img/characters_img/hulflings/Character8_face1.png"

import iconHalfling2 from "../../assets/img/characters_icons/halfflings/Character1_face1.png"
import iconHalfling1 from "../../assets/img/characters_icons/halfflings/Character2_face1.png"
import iconHalfling3 from "../../assets/img/characters_icons/halfflings/Character8_face1.png"

import fullDemons1 from "../../assets/img/characters_img/demons/Character2_face1.png"
import fullDemons2 from "../../assets/img/characters_img/demons/Character3_face1.png"
import fullDemons3 from "../../assets/img/characters_img/demons/Character4_face1.png"

import iconDemon1 from "../../assets/img/characters_icons/demons/Character2_face1.png"
import iconDemon2 from "../../assets/img/characters_icons/demons/Character3_face1.png"
import iconDemon3 from "../../assets/img/characters_icons/demons/Character4_face1.png"

import atk from '../../assets/img/skills/atk.png'
import atk2 from '../../assets/img/skills/Icon10.png'
import atk3 from '../../assets/img/skills/Icon11.png'
import atk4 from '../../assets/img/skills/Icon12.png'

import background from "../../assets/img/main_bg.png"
import desert from "../../assets/img/desert.png"
import dungeon from "../../assets/img/dungeon.jpg"

export const raceFullArr = [fullFace4, fullFace2, fullFace3, fullFace1]
export const skillsImgArr = [atk, atk2, atk3, atk4] 
export const backgrounds = [background, desert, dungeon]
interface IImages {
    fullImg: string,
    iconImg: string
}

export const halflingsImgs: IImages[] = [ 
    { fullImg: fullHalffling3, iconImg: iconHalfling3 }, 
    { fullImg: fullHalffling2, iconImg: iconHalfling2 },
    { fullImg: fullHalffling1, iconImg: iconHalfling1 },
]
export const demonsImgs: IImages[] = [ 
    { fullImg: fullDemons3, iconImg: iconDemon3 }, 
    { fullImg: fullDemons2, iconImg: iconDemon2 },
    { fullImg: fullDemons1, iconImg: iconDemon1 },
]
export const elfsImgs: IImages[] = [ 
    { fullImg: fullFace3, iconImg: face3 }, 
    { fullImg: fullFace2, iconImg: face2 },
    { fullImg: fullFace1, iconImg: face1 },
]

export const raceArr = [elfsImgs[0].iconImg, halflingsImgs[0].iconImg, demonsImgs[0].iconImg]
export const classArr = [elfsImgs, halflingsImgs, demonsImgs]

export const descrArr = [
    'Nimble combatant focused on stealth and social skills, also capable of high-damage special attacks balanced by sub-par resistance to injury.',
    'Featuring powerful magical abilities, but physically weak.',
    'Focused on combat abilities, but almost entirely lacking in magical abilities',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nam dicta! Tenetur rem aliquid, doloribus magnam temporibus corrupti provident doloremque!'
]