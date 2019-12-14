import {combineReducers} from "redux"
import HomeList from "../pages/home/homeReducers/listReducers"
import Login from "../pages/login/reducer"
import Serach from "../pages/search/search.reducer/search.reducer"
const redcuers = combineReducers({
    HomeList,
    Login,
    Serach
})

export default redcuers;