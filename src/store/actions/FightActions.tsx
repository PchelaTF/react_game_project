import { SET_ENEMY_TURN_FALSE, SET_ENEMY_TURN} from "../reducers/fightReducer";

export class FightActions {
    
    static setEnemyTurnAction(value: boolean): object {
        return { type: SET_ENEMY_TURN, value}
    }
    
    static hideEnemyTurnAction(): object {
        return { type: SET_ENEMY_TURN_FALSE }
    }
}