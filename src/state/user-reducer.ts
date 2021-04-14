type StateType = {
    age: number
    childrenCount: number
    name: string
}
type IncrementAge = {
    type: 'INCREMENT-AGE'
}
type IncrementChildrenCount = {
    type: 'INCREMENT-CHILDREN-COUNT'
}
type ChangeName = {
    type: 'CHANGE-NAME',
    newName: string
}

type ActionType = IncrementAge | IncrementChildrenCount | ChangeName;

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let newState = {...state};//делаем копию
            newState.age = state.age + 1;// у копии имеем право менять св-во
            return newState;//возвращаем копию
        case 'INCREMENT-CHILDREN-COUNT':
            return {
                ...state,
                childrenCount: state.childrenCount + 1
            };
        case 'CHANGE-NAME':
            return {
                ...state,
                name: action.newName
            };
        default:
            throw new Error("I don't understand this type")
    }
}
