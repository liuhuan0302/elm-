import React,{Component,Fragment} from "react";

import 'antd/dist/antd.css';
import "../../assets/css/search/serachContentView.css"
import Img from  "../../assets/image/1.jpg"
class searchConnentView extends Component{
    constructor(props){
        super(props)
        this.state={
            // arrList:[]
        }
    }
    
    render(){
        const {value,list,clear,restaurantList,emptyResult,handleChange,handleClick,handleRemove,clearHistory} = this.props;
        console.log(restaurantList.length)
        console.log(emptyResult)
        console.log(list)
        console.log(value)
        return(
            <Fragment>
            <div>
                <form className="search_form" style={{background:"#fff"}}>
                    <input type="text" className="search_input" placeholder="请输入商家或美食名称" value={value} onChange={handleChange}></input>
                    <div className="search_submit" onClick={handleClick}>提交</div>
                </form>
                <div style={clear ? {display:"block"} : {display:"none"}}>
                    <div className="title_restaurant" >搜索历史</div>
                    <ul style={{marginBottom:"0px"}}>
                       {
                         
                           list.map((item,index)=>{
                               return <li className="history_list">
                           <p style={{lineHeight:"38px",fontWeight:"bolder",margin:"0px"}}>   {item}</p>
                               <span style={{fontWeight:"bolder"}} onClick={()=>handleRemove(index)}>X</span>
                           </li>
                           })
                       }
                    </ul>
                    <div className="clear_history" onClick={clearHistory}>清除搜索历史</div>
                </div>
                <div style={restaurantList.length !== 0 ? {display:"block"} : {display:"none"}} className="content">
                    <div className="title_restaurant" >商家</div>   
                    <ul className="list_container">
                       {
                           restaurantList.map(item=>{
                               return  <li className="list_li">
                               <div className="item_left"><img style={{height:"40px",width:"40px"}} src={Img}></img ></div>
                               <div className="item_right">
                           <div className="listTitle">{item.name}</div >
                                   <div className="listTitle">月售 {item.recent_order_num} 单</div>
                           <div className="listTitle">8 元起送 / 距离{item.distance}</div>
                               </div>
                           </li>
                           })
                       }
                    </ul>
                </div>
                <div className="restaurant" style={restaurantList.length !== 0 ? {display:"none"} : emptyResult ? {display:"block"} : {display:"none"} }>很抱歉!无搜索结果</div>
            </div>
            </Fragment>
        )
    }
}

export default searchConnentView;