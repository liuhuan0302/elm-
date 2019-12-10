import React, { Component, Fragment } from "react";
import { Icon } from 'antd';
import "../../../assets/css//profile/profileOrder.css"
class ProfileOrder extends Component {
    render() {
        return (
            <Fragment>
                <div className="profile-1reTe">
                    <aside className="">
                        <Icon type="menu" className="Icon"/>
                        <span className="OrderRight">
                            <h4>我的余额</h4>
                            <a className="Jump">
                                <Icon type="right" />
                            </a>
                        </span>
                    </aside>
                    <aside className="">
                        <Icon type="menu" className="Icon"/>
                        <span  className="OrderRight">
                            <h4>我的余额</h4>
                            <a className="Jump">
                                <Icon type="right" />
                            </a>
                        </span>
                    </aside>
                    <aside className="">
                        <Icon type="menu"  className="Icon"/>
                        <span  className="OrderRight">
                            <h4>我的余额</h4>
                            <a className="Jump">
                                <Icon type="right" />
                            </a>
                        </span>
                    </aside>
                </div>
            </Fragment>
        )
    }
}
export default ProfileOrder;