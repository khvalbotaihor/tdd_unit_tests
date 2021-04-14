import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTask = {
    type: 'REMOVE-TASK',
    todoListId: string,
    taskId: string
}
export type AddTask = {
    type: 'ADD-TASK',
    todoListId: string,
    title: string
}



type ActionsType = RemoveTask | AddTask

export const tasksListsReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            let stateCopy = {...state}
            let todoList = stateCopy[action.todoListId]
            stateCopy[action.todoListId] = todoList.filter(t => t.id !== action.taskId)
            return stateCopy
        }
        case 'ADD-TASK': {
            let stateCopy = {...state}
            let todoList = stateCopy[action.todoListId]
            let task = {id: v1(), title: action.title, isDone: false}
            stateCopy[action.todoListId] = [...todoList, task]
            return stateCopy
        }

        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (todoListId: string, taskId: string): RemoveTask => {
    return { type: 'REMOVE-TASK', todoListId, taskId}
}
export const AddTaskAC = (todoListId:string, title: string): AddTask => {
    return { type: 'ADD-TASK', todoListId, title}
}

