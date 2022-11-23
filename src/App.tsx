import React from 'react';
import './App.css';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import MainScene from './components/MainScene/MainScene';
import { useAppSelector } from './store/store';
import fightSceneImg from "./assets/img/War2.png"
import { createEnemy } from './mechanics/CreatingMechanic';
import Levels from './components/Levels/Levels';

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
        return <FightScene fightSceneImg={fightSceneImg} allyArr={[mainCharacter]} enemyArr={[createEnemy(), createEnemy()]} />
      case "levels":
        return <Levels/>
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
