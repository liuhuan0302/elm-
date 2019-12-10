import React, { Component, Fragment } from "react";
import "../../../assets/css/footer/profileInfo.css"
class ProfileInfo extends Component {
    render() {
        return (
            <Fragment>
                <ul className="info-data">
                    <li>
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                    <li>
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                    <li>
                        <span><em>0.00</em>元</span>
                        <p>我的余额</p>
                    </li>
                </ul>
            </Fragment>
        )
    }
}
export default ProfileInfo;