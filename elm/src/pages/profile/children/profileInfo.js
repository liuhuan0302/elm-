import React, { Component, Fragment } from "react";
import "../../../assets/css/profile/profileInfo.css"
class ProfileInfo extends Component {
    render() {
        return (
            <Fragment>
                <div className="info-data">
                    <li className="InfoLi">
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                    <li className="InfoLi">
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                    <li className="InfoLi">
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                </div>
            </Fragment>
        )
    }
}
export default ProfileInfo;