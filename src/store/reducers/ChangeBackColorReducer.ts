const initialState = "white";

type ActionType = {
    type: string;
}

export const changeBackColorReducer = (state = initialState, action: ActionType) => {
    switch (action.type){
        case "change":
            return state === "white" ? "black" : "white";
        default:
            return state;
    }
}