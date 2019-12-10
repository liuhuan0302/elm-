import React, { Component } from "react";
import { Icon ,Avatar,} from 'antd';
import "../../../assets/css//profile/profileLogin.css"
class ProfileLogin extends Component {
    render() {
        return (
            <div className="ProfileLogin">
                <span className="privateImage">
                    <Avatar size={64} icon="user" />
                </span>
                <div className="userInfo">
                    <span class="login">登录/注册</span>
                    <span className="userIcon">
                        <div className="icon-mobile">
                            <div className="Icon">
                                <Icon type="mobile"/>
                            </div>
                        <p className="p1">暂无绑定手机号</p>
                        </div>
                    </span>
                </div>
                <a className="Jump"><Icon type="right" /></a>
            </div>
        )
    }
}

export default ProfileLogin;