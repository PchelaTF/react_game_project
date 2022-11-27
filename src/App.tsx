import React from 'react';
import './App.css';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import MainScene from './components/MainScene/MainScene';
import { useAppSelector } from './store/store';
import { createEnemy } from './mechanics/CreatingMechanic';
import Locations from './components/locations/Locations';
import ExplorationScene from './components/locations/ExplorationScene';
import Shop from './components/shop/Shop';

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
        return <FightScene allyArr={[mainCharacter]} enemyArr={[createEnemy(), createEnemy()]} />
      case "Locations":
        return <Locations/>
      case "shop":
        return <Shop/>
      case "explore":
        return <ExplorationScene />
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
