import { combineReducers } from "redux";
import { searchTermReducer } from "./searchTermSlice";
import { allProductsReducer } from "./allProductSlice";
import accountReducer from "./auth/authreducer";

const rootReducer = combineReducers({
    auth: accountReducer,
    searchTerm: searchTermReducer,
    allProducts: allProductsReducer
});

export default rootReducer;