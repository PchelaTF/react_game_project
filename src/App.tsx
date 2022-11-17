import './App.css';
import Character from "./mechanics/Character"
import FightMechanic from "./mechanics/FightMechanic"

import { Npc } from './mechanics/Npc';
import FightScene from './components/FIghtScene/FightScene';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';

import React from 'react'
import { useAppSelector } from './store/store';

const mainCharacter = new Character(250, 5, {min: 8, max: 10})
const enemyCharacter = new Character(150, 3, {min: 2, max: 13}, true)
const characters: Character[] = [mainCharacter, enemyCharacter]
const fightScene = new FightMechanic(characters)

function App() {

  const [hp, setHp] = React.useState(mainCharacter.getHp())
  const [enemyHp, setEnemyHp] = React.useState(enemyCharacter.getHp())
  const {isEnemyTurn} = useAppSelector(state => state.figthReducer)

  const decHp = () => {
    mainCharacter.dealDamage(enemyCharacter)
    setEnemyHp(enemyCharacter.getHp())
    handlePassTurn()
  }

  const handlePassTurn = () => {
    fightScene.nextTurn()
    setHp(mainCharacter.getHp())
  }

  return (
    <div className="App">

      {/* <FightScene hp={hp} decHp={decHp}/> */}
      <CreateCharacter/>

      <div>
          {mainCharacter.getHp()}
           <button onClick={() => decHp() }>attack</button>
      </div>
      <div>
          {enemyHp}
      </div>
        <button onClick={handlePassTurn}>pass turn</button>

    </div>
  );
}

export default App;
