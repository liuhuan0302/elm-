import React, { Component, Fragment } from "react"
import { Icon } from "antd"
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom"
import {mainRouter} from "../../router/routes.js"
import Home from "../../pages/home"
import Search from "../../pages/search"
import Profile from "../../pages/profile/profile"

import "../../assets/css/footer/footer.css"
class Footer extends Component {
    constructor(props){
        super(props)
        this.state = {
            btn:[
            {
                type:"twitter",
                title:"外卖",
                path:"/home"
            },
            {
                type:"search",
                title:"搜索",
                path:"/search"
            },
            {
                type:"menu-fold",
                title:"订单",
                path:"/order"
            },
            {
                type:"user",
                title:"我的",
                path:"/profile"
            }
        ]
        }
    }
    jumpHome(path){
        this.props.history.push(path)
    }
    render() {
        return (
            <Fragment>
                <div className="foot" >
                {/* {
                        this.state.btn.map(item=>{
                            return <li  key={item.type}>
                                        <Link to={item.path}>
                                            <Icon type={item.type} style={{fontSize:".4rem",color:"gray"}}/>
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                        })
                    } */}
                    {
                        this.state.btn.map(item=>{
                            return <li onClick={this.jumpHome.bind(this,item.path)} key={item.type}>
                                        <Icon type={item.type} style={{fontSize:".4rem",color:"gray"}}/>
                                        <span>{item.title}</span>
                                       
                                    </li>
                        })
                    }
                    {/* <li onClick={this.jumpHome}>
                            <Icon type="twitter" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>外卖</span>
                    </li>
                    <li>
                            <Icon type="search" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>搜索</span>
                    </li>
                    <li>
                            <Icon type="menu-fold" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>订单</span>
                    </li>
                    <li>
                            <Icon type="user" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>我的</span>
                    </li> */}
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Footer)