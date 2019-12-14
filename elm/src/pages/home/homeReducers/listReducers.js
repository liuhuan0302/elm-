import {getHomeList} from "../../../service/api"

const GET_HOME_LIST = "GET_HOME_LIST"

const defaultState = {
    ListData:{}
}

export default (state=defaultState,action)=>{
    switch(action.type){
        case GET_HOME_LIST:
            return {
                ListData:action.data
            }
        default:
            return state
    }
    
}

//修改数据的方法
const setListData = (data)=>{
    return{
        type:GET_HOME_LIST,
        data,
    }
}

//请求数据
export const getListData = ()=>{
    return (dispatch)=>{
        console.log(1111)
        getHomeList().then(res=>{ 
           dispatch(setListData(res))
        })
    }
}
