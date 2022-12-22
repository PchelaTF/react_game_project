import { useEffect, useMemo } from 'react';
import './App.css';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import MainScene from './components/MainScene/MainScene';
import { useAppSelector } from './store/store';
import Locations from './components/locations/Locations';
import ExplorationScene from './components/locations/ExplorationScene/ExplorationScene';
import Shop from './components/shop/Shop';
import ChestScene from './components/locations/ChestScene/ChestScene';
import DialogScene from './components/locations/DialogScene/DialogScene';
import { mainMusic } from './mechanics/sounds/sound';

function App() {
  const scene = useAppSelector(state => state.SceneReducer.scene)

  useEffect(() => {
    mainMusic()
  }, [])

  const getScene = useMemo(() => {
    switch (scene) {
      case "create":
        return <CreateCharacter />
      case "main":
        return <MainScene />
      case "fight":
        return <FightScene />
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
