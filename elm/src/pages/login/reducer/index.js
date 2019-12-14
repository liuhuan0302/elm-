import {getUserLogin} from "../../../service/api"
import {setStore} from "../../../components/config/mUtils"
const SET_USER_INFO = "SET_USER_INFO"

//获取后端返回的数据(获取的是字符串,转成对象)
const userInfo = JSON.parse(localStorage.getItem("userInfo"))

//设置默认的数据
const defaultState = {
    avater: userInfo&&userInfo.avater || "",
    nickname:userInfo&&userInfo.nickname || "",
    uid: userInfo&&userInfo.uid || "",
    authToke: userInfo&&userInfo.authToke ||"",
    userState:userInfo&&userInfo.useState || 0 
}

export default(state = defaultState,action)=>{
    switch(action.type){
        case SET_USER_INFO:
            return action.data
        default:
            return state
    }
}

//修改数据
const setUserInfo = (data)=>({
    type:SET_USER_INFO,
    data,
})

export const getUserInfo = (userInfo)=>{
    return(dispatch)=>{
        //调用后端的接口
        getUserLogin(userInfo).then(res=>{
            //当数据调取成功之后,对数据进行修改,并将从后端返回的数据传到setUserInfo
            dispatch(setUserInfo(res.data))
            //当数据获取成功之后,进行本地缓存
            console.log(res.data.nickname)
            console.log(userInfo.remember)
            if(userInfo.remember){
                //如果登录时,用户选择了记住密码,则进行永久存储
                localStorage.setItem("username",JSON.stringify(res.data.nickname))


                // (function fn(cfn){
                //     localStorage.setItem("username",JSON.stringify(res.data.nickname))
                //     cfn()
                // })(cfn)
                // function cfn(){
                //     console.log(this)
                //     window.location.href("http://localhost:3000/profile")
                // }

               
            }else{
                sessionStorage.setItem("username",JSON.stringify(res.data.nickname))
            }
        })
    }
}