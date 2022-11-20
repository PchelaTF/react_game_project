import React from 'react';
import './App.css';
import Character, { ICharacterStats } from "./mechanics/characters/Character"
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import { Warrior } from './mechanics/characters/Warrior';
import FightMechanic from './mechanics/FightMechanic';
// const mainCharacter = new Character(250, 5, { min: 8, max: 10 }, false, 2, "name")
import face1 from "./assets/img/characters_icons/face1.png"
import fullFace1 from './assets/img/characters_img/full_face1.png'
import fightSceneImg from "./assets/img/War2.png"

const characterStats: ICharacterStats = {
  initHp: 250,
  initArmor: 5,
  initAttack: { min: 20, max: 30 },
  initIsNpc: false,
  initActionPoints: 2,
  initName: "name",
  initImgSmall: face1,
  initImgBig: fullFace1
}

const mainCharacter = new Character(characterStats)
// const enemyCharacter = new Character(150, 3, { min: 2, max: 13 }, true, 2, "")
// const enemyCharacter2 = new Character(150, 3, { min: 2, max: 13 }, true, 2, "")
const enemyCharacter = new Character(characterStats)
// const enemyCharacter2 = new Character(characterStats)


function App() {
  const characters: Character[] = [mainCharacter, enemyCharacter]
  const fightScene = new FightMechanic(characters)

  return (
    <div className="App">
      {/* <FightScene hp={hp} decHp={decHp}/> */}
      {/* <CreateCharacter /> */}
      <FightScene allyArr={[mainCharacter]} enemyArr={[enemyCharacter]} fightSceneImg={fightSceneImg}/>
    </div>
  )
}

export default App;
