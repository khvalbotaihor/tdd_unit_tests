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
    expect(endState['todolistId2'][0].isDone).toBe(true)
    expect(endState['todolistId1'][1].isDone).toBe(true)
    expect(endState['todolistId1'][0].isDone).toBe(true)
});

test('change task title', () => {
    const newTitle = 'new Title'
    const action = ChangeTaskTitleAC('todolistId2', '2', newTitle);
    const endState = tasksListsReducer(startState, action);

    expect(endState['todolistId2'][1].title).toBe(newTitle)
    expect(endState['todolistId2'][0].title).toBe('Milk')
    expect(endState['todolistId1'][1].title).toBe('JS')
    expect(endState['todolistId1'][0].title).toBe('HTML&CSS')
});

test('task key is created in case new todoList is added', () => {
    const newTitle = 'new Title'
    const action = AddTodolistAC(newTitle);
    const endState = tasksListsReducer(startState, action);

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k !=='todolistId1' && k!== 'todolistId2')
    if (!newKey){
        throw new Error('New key isnt added');
    }
    expect(keys.length).toBe(3)
    expect(newKey).toBeDefined()
});










