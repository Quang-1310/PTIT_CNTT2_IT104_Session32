const initialState = "Rikkei Academy";

type ActionType = {
    type: string;
    payload: string;
}


export const changeStateReducer = (state = initialState, action: ActionType) => {
    switch (action.type){
        case "change":
            return action.payload || state;
        default:
            return state;
    }
}   