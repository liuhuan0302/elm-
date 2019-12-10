import axios from "./axios"

//首页Banner
export const getHomeBanner = () => {
    return axios.get("/v2/index_entry?geohash=39.985075,116.31612&group_type=1&flags[]=F")
}

//首页List
export const getHomeList = ()=>{
    return axios.get("/shopping/restaurants?latitude=39.985075&longitude=116.31612&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=&order_by=&delivery_mode[]=")
}

