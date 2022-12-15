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

import firstBoss from "../../assets/img/characters_img/demons/Character5_face1.png"

import atk from '../../assets/img/skills/atk.png'
import atk2 from '../../assets/img/skills/Icon10.png'
import atk3 from '../../assets/img/skills/Icon11.png'
import atk4 from '../../assets/img/skills/Icon12.png'

import warriorSkill from "../../assets/img/skills/active1.png"
import warriorSkillTwo from "../../assets/img/skills/active2.png"
import warriorSkillThree from "../../assets/img/skills/active3.png"
import warriorSkillFour from "../../assets/img/skills/active4.png"

import mageSkill from "../../assets/img/skills/1.png"
import mageSkillTwo from "../../assets/img/skills/2.png"
import mageSkillThree from "../../assets/img/skills/3.png"
import mageSkillFour from "../../assets/img/skills/4.png"

import background from "../../assets/img/main_bg.png"
import desert from "../../assets/img/desert.png"
import dungeon from "../../assets/img/dungeon.jpg"

export const bossArr = [firstBoss]
export const raceFullArr = [fullFace4, fullFace2, fullFace3, fullFace1]
export const skillImgs: string[][] = [
    [atk, atk2, atk3, atk4],
    [mageSkill, mageSkillTwo, mageSkillThree, mageSkillFour],
    [warriorSkill, warriorSkillTwo, warriorSkillThree, warriorSkillFour]
]
export const skillsImgArr: ISkill[][] = [
    [{img: atk, dis: "deal damage"}, {img: atk2, dis: "deal more damage"}, {img: atk3, dis: "that's a lot of damage"}, {img: atk4, dis: ""}], 
    [{img: mageSkill, dis: "deal damage ignore armor"}, {img: mageSkillTwo, dis: "deal more damage ignor armor"}, {img: mageSkillThree, dis: "that's a lot of damage ignore armor"}, {img: mageSkillFour, dis: ""}],
    [{img: warriorSkill, dis: "deal damage"}, {img: warriorSkillTwo, dis: "deal more damage"}, {img: warriorSkillThree, dis: "that's a lot of damage"}, {img: warriorSkillFour, dis: ""}] 
]
export const backgrounds = [background, desert, dungeon]
interface IImages {
    fullImg: string,
    iconImg: string,
    tip?: string,
    class?: string
}

interface ISkill {
    img: string,
    dis: string
}

export interface IStat {
    desc: string,
    name: string,
    basic: number
}

export const halflingsImgs: IImages[] = [ 
    { fullImg: fullHalffling3, iconImg: iconHalfling3, tip: "hulfling", class: "rogue" }, 
    { fullImg: fullHalffling2, iconImg: iconHalfling2, class: "mage"  },
    { fullImg: fullHalffling1, iconImg: iconHalfling1, class: "warrior" },
]
export const demonsImgs: IImages[] = [ 
    { fullImg: fullDemons3, iconImg: iconDemon3, tip: "demon", class: "rogue" }, 
    { fullImg: fullDemons2, iconImg: iconDemon2, class: "mage" },
    { fullImg: fullDemons1, iconImg: iconDemon1, class: "warrior" },
]
export const elfsImgs: IImages[] = [ 
    { fullImg: fullFace3, iconImg: face3, tip: "elf", class: "rogue" }, 
    { fullImg: fullFace2, iconImg: face2, class: "mage" },
    { fullImg: fullFace1, iconImg: face1, class: "warrior" },
]

export const raceArr = [elfsImgs[0], halflingsImgs[0], demonsImgs[0]]
export const classArr = [elfsImgs, halflingsImgs, demonsImgs]

export const descrArr = [
    'Nimble combatant focused on stealth and social skills, also capable of high-damage special attacks balanced by sub-par resistance to injury.',
    'Featuring powerful magical abilities, but physically weak.',
    'Focused on combat abilities, but almost entirely lacking in magical abilities',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nam dicta! Tenetur rem aliquid, doloribus magnam temporibus corrupti provident doloremque!'
]

export const statsDescription: IStat[] = [
    {name: "HP", basic: 0, desc: "Your character basic hit points"},
    {name: "Attack", basic: 0, desc: "How good your character hit enemy"},
    {name: "CON", basic: 10, desc: "How many hit points your character get"},
    {name: "DEX", basic: 10, desc: "Your character additional armor"},
    {name: "STR", basic: 10, desc: "Your character physical damage"},
    {name: "CHR", basic: 10, desc: "How good your character speaks"},
    {name: "WIS", basic: 10, desc: "Your character magic ressist"},
    {name: "INT", basic: 10, desc: "Your character magic damage"}
]

