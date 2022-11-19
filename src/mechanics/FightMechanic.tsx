import { fightSlice } from "../store/reducers/FightReducer"
import { useAppDispatch } from "../store/store"
import Character from "./characters/Character"

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

    getTurn() {
        return this.currentTurn
    }

    setIsNpcTurn() {
        const character = this.turnOrder[this.currentTurn]
        this.isNpcTurn = character.getIsNpc()
    }

    getIsNpcTurn() {
        return this.isNpcTurn
    }

    getOrder() {
        return this.turnOrder
    }

    nextTurn() {
        if(this.currentTurn < this.turnOrder.length - 1)
            this.setTurn(this.currentTurn + 1)
        else
            this.setTurn(0)
        
        this.setIsNpcTurn()
        this.setReduxTurn()
        if(this.getIsNpcTurn()) {
            this.turnOrder[this.currentTurn].doNpcLogic(this.turnOrder[0])
        }
    }

    setReduxTurn() {
        return function (dispatch: any, turn: number) {
            dispatch(turn)
        }
    }
}