import axios from "./axios"

//首页Banner
export const getHomeBanner = () => {
    return axios.get("/v2/index_entry?geohash=39.985075,116.31612&group_type=1&flags[]=F")
}

//首页List
export const getHomeList = ()=>{
    return axios.get("/shopping/restaurants?latitude=39.985075&longitude=116.31612&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=")
}

//登录接口
export const getUserLogin = (obj)=>{
    return axios.post("http://rap2api.taobao.org/app/mock/238550/api/login",obj)
}

export const searchRestaurant = (value)=>{
    return axios.get("http://localhost:8000/v4/restaurants?extras[]=restaurant_activity&geohash=39.985075,116.31612&keyword="+`${value}`+ "&type=search")
}

