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
import {AddTaskAC, ChangeTaskStatusAC, RemoveTaskAC, tasksListsReducer} from "./tasks-reducer";

let startState: TasksStateType;
beforeEach(() => {
    startState = {
        'todolistId1': [
            {id: '1', title: "HTML&CSS", isDone: true},
            {id: '2', title: "JS", isDone: true}
        ],
        'todolistId2': [
            {id: '1', title: "Milk", isDone: true},
            {id: '2', title: "React Book", isDone: true}
        ]
    }
})

test('correct task should be removed', () => {
    const action = RemoveTaskAC('todolistId2', '1');
    const endState = tasksListsReducer(startState, action);

    expect(endState['todolistId2'].length).toBe(1);
    expect(endState['todolistId1'].length).toBe(2);
    expect(endState['todolistId2'][1]).toBeUndefined()
    expect(endState['todolistId1'][0].id).toBe('1')
});

test('correct task should be added', () => {
    const title = 'New Title';
    const action = AddTaskAC('todolistId2', title);
    const endState = tasksListsReducer(startState, action);

    expect(endState['todolistId2'].length).toBe(3);
    expect(endState['todolistId1'].length).toBe(2);
    expect(endState['todolistId2'][2].title).toBe(title)
});

test('change task status', () => {
    const action = ChangeTaskStatusAC('todolistId2', '2', false);
    const endState = tasksListsReducer(startState, action);

    expect(endState['todolistId2'][1].isDone).toBe(false)
    expect(endState['todolistId1'][1].isDone).toBe(true)
});










