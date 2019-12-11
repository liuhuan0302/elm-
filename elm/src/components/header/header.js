import React,{Component} from "react"
import {BrowserRouter,Route,withRouter} from "react-router-dom"
import { Icon } from 'antd'
import "../../assets/css/header/header.css"
import Search from "../../pages/search"

class Header extends Component{
    handleClick(){
        console.log(this.props)
    }
    render(){
        return(
            <div >
                <div id="header-top">
                    <div className="top-left" onClick={this.handleClick.bind(this)}>
                        <Icon type="search" style={{fontSize:".5rem",color:"#fff"}} />
                    </div>
                    <div className="top-content">海淀区中关村-桥西</div>
                    <div className="top-right">
                        <li>
                            <a>登录|</a>
                        </li>
                        <li>
                            <a>注册</a>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;