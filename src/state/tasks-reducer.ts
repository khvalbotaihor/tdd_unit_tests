import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

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
export type ChangeTaskStatus = {
    type: 'CHANGE-TASK-STATUS',
    todoListId: string,
    taskId: string
    isDone: boolean
}
export type ChangeTaskTitle = {
    type: 'CHANGE-TASK-TITLE',
    todoListId: string,
    taskId: string
    title: string
}



type ActionsType = RemoveTask | AddTask | ChangeTaskStatus |
    ChangeTaskTitle | AddTodolistActionType | RemoveTodolistActionType
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
        case "CHANGE-TASK-STATUS": {
            let stateCopy = {...state}
            let todoList = stateCopy[action.todoListId]
            let task = todoList.find(t => t.id === action.taskId)
            if (task) {
                task.isDone = action.isDone
            }
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            let stateCopy = {...state}
            let todoList = stateCopy[action.todoListId]
            let task = todoList.find(t => t.id === action.taskId)
            if (task) {
                task.title = action.title
            }
            return stateCopy
        }
        case "ADD-TODOLIST": {
            let stateCopy = {...state}
            stateCopy[action.id] = []
            return stateCopy
        }
        case "REMOVE-TODOLIST": {
            let stateCopy = {...state}
            delete stateCopy[action.id]
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
export const ChangeTaskStatusAC = (todoListId:string, taskId: string, isDone:boolean): ChangeTaskStatus => {
    return { type: "CHANGE-TASK-STATUS", todoListId, taskId, isDone}
}
export const ChangeTaskTitleAC = (todoListId:string, taskId: string, title: string): ChangeTaskTitle => {
    return { type: "CHANGE-TASK-TITLE", todoListId, taskId, title}
}

