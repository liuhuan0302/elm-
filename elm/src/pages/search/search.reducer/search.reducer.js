import {setStore,removeStore} from "../../../components/config/mUtils"
import {searchRestaurant} from "../../../service/api"
const SET_STORE_VALUE = "SET_STORE_VALUE";
const INSERT_STORE_DATA = "INSERT_STORE_DATA";
const REMOVE_STORE_DATA = "REMOVE_STORE_DATA";
const CLEAR_STORE_DATA = "CLEAR_STORE_DATA";
const SET_RESTAURAN_DATA = "SET_RESTAURAN_DATA";
//设置默认数据
const defaultState = {
    value:"",
    clear:false,
    list:[],
    emptyResult: false, // 搜索结果为空时显示
    restaurantList: [], // 搜索返回的结果
    historyValue:[]
}

export default (state=defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        //获取输入框数据
        case "SET_STORE_VALUE":
            //console.log(action.value)
            //将新派发的value 赋值给newState
            newState.value = action.value;
            newState.restaurantList = [];
            if(!newState.value){
                newState.clear = true
            }else{
                newState.clear = false
                newState.emptyResult = false
            }
            console.log(newState.value)
            return newState;
        //提交数据
        case "INSERT_STORE_DATA":
            if(!newState.value){
                console.log(1111)
                return newState
            }else{
                newState.list.push(newState.value)
                setStore('historyValue',newState.value)
                // newState.value = ""
                // newState.clear = true
                return newState 
            }
        //移除单条历史记录           
        case "REMOVE_STORE_DATA":
            newState.list.splice(action.index,1)
            return newState
        //清空历史记录
        case "CLEAR_STORE_DATA":
            newState.list = []
            removeStore("historyValue")
            newState.clear = false
            return newState
        //查询商家列表
        case "SET_RESTAURAN_DATA":
            // console.log(action.list.status)
            // console.log(newState)
            newState.restaurantList = action.list
            if(action.list.status == 0  || action.list.length == 0){
                console.log('没有数据')
                newState.emptyResult = true
            }else{
                console.log("有数据")
                console.log(action.list)
                newState.emptyResult = false
                // newState.clear = false
            }
            console.log(newState)
            return newState
            
        default:
            return state
    }
}

export const getActionChange = (value)=>({
    type:SET_STORE_VALUE,
    //修改之后的值
    value
})
export const getActionClick = _=>({
    type:INSERT_STORE_DATA
})
export const getActionRemove = (index)=>({
    type:REMOVE_STORE_DATA ,
    index,
})
export const getActionClear = ()=>({
    type:CLEAR_STORE_DATA
})
//修改数据
const setRestaurantList = (list)=>({
    type:SET_RESTAURAN_DATA,
    list
})
export const getRestaurantList = (value)=>{
    return (dispatch)=>{
        searchRestaurant(value).then(res=>{
            dispatch(setRestaurantList(res))
            // console.log(res)
        })
    }
}

