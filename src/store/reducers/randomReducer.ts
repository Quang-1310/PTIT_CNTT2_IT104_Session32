const initialState = 0;

type ActionType = {
    type: string;
    payload: number;
}

export const randomReducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case "random": 
            return action.payload
        default:
            return state
    }
}