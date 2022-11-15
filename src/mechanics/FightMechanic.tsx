import Character from "./Character"

export default class FightMechanic {
    private turnOrder: Character[]
    private currentTurn: number
    private isNpcTurn: boolean

    constructor(characters: Character[]) {
        this.turnOrder = characters
        this.currentTurn = 0
        this.isNpcTurn = false

        this.setIsNpcTurn()
    }

    setTurn(newTurn: number) {
        this.currentTurn = newTurn
    }

    setIsNpcTurn() {
        const character = this.turnOrder[this.currentTurn]
        this.isNpcTurn = character.getIsNpc()

    }

    getIsNpcTurn() {
        return this.isNpcTurn
    }

    nextTurn() {
        if(this.currentTurn < this.turnOrder.length - 1)
            this.currentTurn++
        else
            this.setTurn(0)
        
        this.setIsNpcTurn()
        if(this.getIsNpcTurn()) {
            this.turnOrder[this.currentTurn].doNpcLogic(this.turnOrder[0])
            this.nextTurn()
        }
    }

}