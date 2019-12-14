import React,{Component} from "react"
import {BrowserRouter,Route,withRouter} from "react-router-dom"
import { Icon } from 'antd'
import "../../assets/css/header/header.css"
import Search from "../../pages/search"
import Title from "antd/lib/skeleton/Title"

class Header extends Component{
    handleClick(){
        console.log(this.props)
        this.props.history.push("/search")
    }
    handleChang(){
        this.props.history.push("/login")
    }
    back=()=>{
        console.log(this.props.history)
        this.props.history.go(-1);
    }
    render(){
        console.log(this.props.location.pathname)
        const path = this.props.location.pathname;
        return(
            <div >
                <div id="header-top">
                    <div className="top-left" onClick={path=="/home" ? this.handleClick.bind(this) : this.back}>
                        <Icon type={path == "/home" ? "search" : "left"} style={{fontSize:".5rem",color:"#fff",lineHeight:"1.2rem"}} />
                    </div>
                     <div className="top-content">
                    {path == "/home" ? "中关村" : path == "/search" ? "搜索" : path == "/order" ? "订单列表" : path == "/profile" ? "我的" : path == "/login" ? "密码登录" : "重置密码"}
                    </div>
                    <div className="top-right" onClick={this.handleChang.bind(this)}>
                        <li>
                            <a  style={path == "/home" ? {display:"block"} : {display:"none"}}>登录|</a>
                        </li>
                        <li>
                            <a style={path == "/home" ? {display:"block"} : {display:"none"}}>注册</a>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header) ;