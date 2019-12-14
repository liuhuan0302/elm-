import React, { Component } from "react";
import { Icon ,Avatar,} from 'antd';
import {withRouter} from "react-router-dom"
import "../../../assets/css//profile/profileLogin.css"
import { element } from "prop-types";
class ProfileLogin extends Component {
    constructor(props){
        super(props)
        this.state ={
        
        } 
    }
    JumpLogin=()=>{
        console.log(this.props)
        this.props.history.push("/login")
    }
    render() {
       
        return (
            <div className="ProfileLogin">
                <span className="privateImage">
                    <Avatar size={64} icon="user" />
                </span>
                <div className="userInfo">
        <span className="login" onClick={this.JumpLogin}>{
           JSON.parse(localStorage.getItem("username")) !== null ? JSON.parse(localStorage.getItem("username")) : JSON.parse(sessionStorage.getItem("username")) !==null ? JSON.parse(sessionStorage.getItem("username")) : "登录/注册"    
        }</span>
                    <span className="userIcon">
                        <div className="icon-mobile">
                        <p className="p1">暂无绑定手机号</p>
                        </div>
                    </span>
                </div>
                <a className="Jump"><Icon type="right" /></a>
            </div>
        )
    }
    shouldComponentUpdate(props,state){
        if(state.username == "登录/注册"){
            return false
        }else{
            return true
        }
       
    }
    componentDidMount(){
        const userName = JSON.parse(localStorage.getItem("username")) !== null ? JSON.parse(localStorage.getItem("username")) : JSON.parse(sessionStorage.getItem("username")) !==null ? JSON.parse(sessionStorage.getItem("username")) : "登录/注册"
        console.log(JSON.parse(localStorage.getItem("username")))
      
        this.setState(_=>{
            this.state.username = userName
            this.forceUpdate() 
        },_=>{
            console.log(this.state.username)
            this.forceUpdate()
        })
    }
    
}

export default withRouter(ProfileLogin);