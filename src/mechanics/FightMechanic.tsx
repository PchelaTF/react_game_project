import Character from "./Character"

export default class FightMechanic {
    private turnOrder: Character[]
    private currentTurn: number

    constructor(characters: Character[]) {
        this.turnOrder = characters
        this.currentTurn = 0
    }

    passTurn() {
       this.currentTurn++
    }
    
}