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
import ChestScene from './components/locations/ChestScene';
import DialogScene from './components/locations/DialogScene';

function App() {
  const scene = useAppSelector(state => state.SceneReducer.scene)
  const mainCharacter = useAppSelector(state => state.userReducer.character)

  React.useEffect(() => {
    mainCharacter.resetSkillsCooldowm()
  }, [scene])

  const getScene = React.useMemo(() => {
    switch (scene) {
      case "create":
        return <CreateCharacter />
      case "main":
        return <MainScene />
      case "fight":
        return <FightScene allyArr={[mainCharacter]} />
      case "Locations":
        return <Locations />
      case "shop":
        return <Shop />
      case "explore":
        return <ExplorationScene />
      case "chest":
        return <ChestScene />
      case "dialog":
        return <DialogScene />
      default:
        return <MainScene />
    }
  }, [scene])

  return (
    <div className="App">
      {getScene}
    </div>
  )
}

export default App;
