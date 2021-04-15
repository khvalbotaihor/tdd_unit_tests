import React from 'react';
import {
    AddTodolistAC,
    ChangeTodolistFilterAC,
    ChangeTodolistTitleAC,
    RemoveTodolistAC,
    todolistsReducer
} from './todolists-reducer';
import {v1} from 'uuid';
import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {AddTaskAC, ChangeTaskStatusAC, ChangeTaskTitleAC, RemoveTaskAC, tasksListsReducer} from "./tasks-reducer";

test('id\'s should be the same in tasks action creator and todolist action creator', () => {
    const tasksStartState: TasksStateType = {}
    const todolistStartState: Array<TodolistType> = []

    const newTitle = 'new Title'
    const action = AddTodolistAC(newTitle);

    const endTaskState = tasksListsReducer(tasksStartState, action)
    const endTodolistState = todolistsReducer(todolistStartState, action)


});
