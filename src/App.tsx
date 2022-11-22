import React from 'react';
import './App.css';
import Character, { ICharacterStats } from "./mechanics/characters/Character"
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import face1 from "./assets/img/characters_icons/face1.png"
import fullFace1 from './assets/img/characters_img/full_face1.png'
import MainScene from './components/MainScene/MainScene';
import { useAppSelector } from './store/store';
import fightSceneImg from "./assets/img/War2.png"

const npcStats: ICharacterStats = {
  initHp: 2,
  initArmor: 8,
  initAttack: { min: 20, max: 20 },
  initIsNpc: true,
  initActionPoints: 2,
  initName: "name",
  initImgSmall: face1,
  initImgBig: fullFace1
}

const enemyCharacter = new Character(npcStats)
const enemyCharacter2 = new Character(npcStats)

function App() {
  const scene = useAppSelector(state => state.SceneReducer.scene)
  const mainCharacter = useAppSelector(state => state.userReducer.character)

  const getScene = () => {
    switch (scene) {
      case "create":
        return <CreateCharacter />
      case "main":
        return <MainScene />
      case "fight":
        return <FightScene fightSceneImg={fightSceneImg} allyArr={[mainCharacter]} enemyArr={[enemyCharacter, enemyCharacter2]} />
      default:
        return <MainScene />
    }
  }

  return (
    <div className="App">
      {getScene()}
    </div>
  )
}

export default App;
