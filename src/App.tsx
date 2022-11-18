import './App.css';
import Character from "./mechanics/characters/Character"
import FightMechanic from "./mechanics/FightMechanic"

import FightScene from './components/FIghtScene/FightScene';

const mainCharacter = new Character(250, 5, {min: 8, max: 10}, false, 2, "name")
const enemyCharacter = new Character(150, 3, {min: 2, max: 13}, true, 2, "")
const enemyCharacter2 = new Character(150, 3, {min: 2, max: 13}, true, 2, "")

function App() {
  const characters: Character[] = [mainCharacter, enemyCharacter, enemyCharacter2]
  const fightScene: FightMechanic = new FightMechanic(characters) 
  
  return (
    <div className="App">
      <FightScene fightScene={fightScene} enemyArr={[enemyCharacter, enemyCharacter2]}/>
      {/* <CreateCharacter/> */}
    </div>
  );
}

export default App;
