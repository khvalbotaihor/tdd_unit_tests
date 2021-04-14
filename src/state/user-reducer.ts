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
            let newState = {...state};
            newState.age = state.age + 1;
            return newState;
        case 'INCREMENT-CHILDREN-COUNT': {
            let newState = {...state};
            return {
                ...newState,
                childrenCount: state.childrenCount + 1
            };
        }
        case 'CHANGE-NAME': {
            let newState = {...state};
            return {
                ...newState,
                name: action.newName
            };
        }
        default:
            throw new Error("I don't understand this type")
    }
}
