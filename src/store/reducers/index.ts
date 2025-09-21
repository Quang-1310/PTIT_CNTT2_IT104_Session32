import { combineReducers } from "redux";
import { profileUser } from "./ProfileUser";
import { listUserReducer } from "./ListUserReducer";
import { counterReducer } from "./CounterReducer";
import { randomReducer } from "./randomReducer";
import { changeStateReducer } from "./ChangeStateReducer";
import { changeBackColorReducer } from "./ChangeBackColorReducer";
import { accountReducer } from "./account";


const rootReducer = combineReducers({
    profile: profileUser,
    listUser: listUserReducer,
    counter: counterReducer,
    random: randomReducer,
    changeState: changeStateReducer,
    changeBackColor: changeBackColorReducer,
    account: accountReducer
})

export default rootReducer