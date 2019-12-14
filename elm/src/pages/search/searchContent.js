import React,{Component} from "react"
import store from "../../store/store"
import SearchConnentView from "./searchContentView";
import "../../assets/css/search/search.css"
import { getActionChange,getActionClick, getActionRemove,getActionClear,getRestaurantList } from "./search.reducer/search.reducer";
import {searchRestaurant} from "../../service/api"
class SearchContent extends Component{
    constructor(props){
        super(props)
        //将store里面的数据存储在state里面
        this.state = store.getState().Serach;
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.clearHistory = this.clearHistory.bind(this)
        //监听数据的变化
        store.subscribe(this.handleStoreChange)

    }
    handleStoreChange(){
        this.setState(store.getState())
    }
    //onChange事件,可以让input 能够实时的触发
    handleChange(e){
        // this.setState({
        //     value:e.target
        // },_=>{
        //     console.log(value)
        // })
        
        const action = getActionChange(e.target.value)
        //将修改之后的action派发到store里面
        store.dispatch(action)
        console.log(e.target.value)
        if(!e.target.value  ){
            console.log(100)
        }
    }
    //将value值掺入list里面
    handleClick(){
        const action = getActionClick();
        store.dispatch(action)
        console.log(this.state.Serach.value)
        
        const actions = getRestaurantList(this.state.Serach.value)
        store.dispatch(actions)
        // const restaurantList = searchRestaurant(this.state.Serach.value)
        // console.log(restaurantList)
    }
    //移除样式
    handleRemove(i){
        //通过删除list里面的数据.删除Dom元素
        const action = getActionRemove(i);
        store.dispatch(action)
    }
    //清除搜索历史
    clearHistory(){
        const action = getActionClear()
        store.dispatch(action)
        
    }
    render(){
        console.log( store.getState().Serach.list)
        return(
            <SearchConnentView
            value={store.getState().Serach.value}
            list={store.getState().Serach.list}
            restaurantList={store.getState().Serach.restaurantList}
            emptyResult={ store.getState().Serach.emptyResult}
            clear={store.getState().Serach.clear}
            handleChange={this.handleChange}
            handleClick={this.handleClick}
            handleRemove={this.handleRemove}
            clearHistory={this.clearHistory}
            />  
        )
    }
}

export default SearchContent;