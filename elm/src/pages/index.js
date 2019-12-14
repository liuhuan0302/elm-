import Loadable from "react-loadable";
import Loading from "../components/common/loading";


const Home = Loadable({
    loader:()=>import("./home"),
    loading: Loading
})
//搜索页
const Search = Loadable({
    loader:()=>import("./search"),
    loading: Loading
})
//订单页
const Order = Loadable({
    loader:()=>import("./order"),
    loading: Loading
})
//我的
const Profile = Loadable({
    loader:()=>import("./profile/profile"),
    loading: Loading
})
//登录页
const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
//忘记密码
const Forget = Loadable({
    loader:()=>import("./forget/forget"),
    loading:Loading
})
// 列表页
const Miste = Loadable({
    loader:()=>import("./miste"),
    loading:Loading
})
// food页面
const Food = Loadable({
    loader:()=>import("./food/index.js"),
    loading:Loading
})

export {
    Home,
    Search,
    Order,
    Profile,
    Login,
    Forget,
    Miste,
    Food
}