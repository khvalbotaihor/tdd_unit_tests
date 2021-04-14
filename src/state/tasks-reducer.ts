import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTask = {
    type: 'REMOVE-TASK',
    todoListId: string,
    taskId: string
}
export type ActionType2 = {
    type: '',
}



type ActionsType = RemoveTask | ActionType2

export const tasksListsReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = {...state}
            let todoList = stateCopy[action.todoListId]
            stateCopy[action.todoListId] = todoList.filter(t => t.id !== action.taskId)
            return stateCopy
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (todoListId: string, taskId: string): RemoveTask => {
    return { type: 'REMOVE-TASK', todoListId, taskId}
}
export const actionReducer2AC = (): ActionType2 => {
    return { type: ''}
}

