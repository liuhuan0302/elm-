import React, { Component, Fragment } from "react";
import { Icon } from 'antd';
import {withRouter} from "react-router-dom"
import "../../../assets/css//profile/profileOrder.css"
class ProfileOrder extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:[
                {
                    tag:"我的订单",
                    path:"/order"
                },{
                    tag:"积分商城",
                    path:""
                },{
                    tag:"饿了吗商城",
                    path:""
                }]
        }
    }
    Jump(path){
        this.props.history.push(path)
    }
    render() {
        return (
            <Fragment>
                <div className="profile-1reTe">
                {
                    this.state.title.map(item=>{
                        return  <aside className="myorder" key={item}>
                                    <Icon type="menu" className="Icon"/>
                                    <span className="OrderRight">
                                        <h4>{item.tag}</h4>
                                        <a className="Jump" onClick={this.Jump.bind(this,item.path)}>
                                            <Icon type="right" />
                                        </a>
                                </span>
                    </aside>
                    })
                }
                </div>
            </Fragment>
        )
    }
}
export default withRouter(ProfileOrder);