import {
    Home,
    Search,
    Order,
    Profile,
    Login,
    Forget,
    Miste,
    Food
} from "../pages"

//路由表的制作(一级路由)

export const mainRouter = [{
    pathname:"/home",
    component:Home
},{
    pathname:"/search",
    component:Search
},{
    pathname:"/order",
    component:Order
},{
    pathname:"/profile",
    component:Profile
},{
    pathname:"/login",
    component:Login
},{
    pathname:"/forget",
    component:Forget
}]

export const homeRouter = [{
    pathname : "/home/food" ,
    component : Food
},{
    pathname:"/home/miste",
    component:Miste
}]