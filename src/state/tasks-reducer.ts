import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type ActionType1 = {
    type: '',
}
export type ActionType2 = {
    type: '',
}



type ActionsType = ActionType1 | ActionType2

export const tasksListsReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case '': {
            let stateCopy = {...state}
            return stateCopy
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const actionReducer1AC = (): ActionType1 => {
    return { type: ''}
}
export const actionReducer2AC = (): ActionType2 => {
    return { type: ''}
}

