import React from 'react';
import './App.css';
import FightScene from './components/FIghtScene/FightScene';
import { Warrior } from './mechanics/characters/Warrior';
import FightMechanic from './mechanics/FightMechanic';
import { useAppSelector } from './store/store';

const mainCharacter = new Warrior(20, 12, {min: 20, max: 20}, "M", false, 2)
const enemyCharacter = new Warrior(20, 12, {min: 20, max: 20}, "M", true, 2)
const fightScene = new FightMechanic([mainCharacter, enemyCharacter])

function App() {

  return (
    <div className="App">
      <FightScene allyArr={[mainCharacter]} enemyArr={[enemyCharacter]}/>
    </div>
  );
}

export default App;
