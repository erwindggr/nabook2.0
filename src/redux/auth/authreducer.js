import account_types from "./types";

const initialState = {
    id: 0,
    fullname: "",
    email: "",
    password: ""
};

function accountReducer(state = initialState, action) {
    
    if(action.type === account_types.ACC_LOGIN) {
        return {
            ...state,
            id: action.payload.id,
            fullname: action.payload.fullname,
            email: action.payload.email,
            password: action.payload.password
        };
    }else if(action.type === account_types.ACC_LOGOUT) {
        return state;
    }

    return state;
}

export default accountReducer;