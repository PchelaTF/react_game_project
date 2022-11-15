import './App.css';
import Character from "./mechanics/Character"
import FightMechanic from "./mechanics/FightMechanic"
import React from 'react';
import { Npc } from './mechanics/Npc';
import FightScene from './components/FIghtScene/FightScene';

const mainCharacter = new Character(25, 5, { min: 10, max: 25 })
const enemyCharacter = new Npc(15, 3, { min: 20, max: 30 })
const characters: Character[] = [mainCharacter, enemyCharacter]
const fightScene = new FightMechanic(characters)

function App() {

  const [hp, setHp] = React.useState(enemyCharacter.getHp())

  const decHp = () => {
    mainCharacter.dealDamage(enemyCharacter)
    setHp(enemyCharacter.getHp())
  }

  return (
    <div className="App">
      {/* {hp}
        <button onClick={() => decHp() }>attack</button> */}
      <FightScene />
    </div>
  );
}

export default App;
