import React, { Component, Fragment } from 'react'
import { Icon } from 'antd'
import List from "./List"
import "../../../assets/css/home/show.css"
class Show extends Component {
    render() {
        return (
            <Fragment>
                <div className="showBox">
                    <div className="top">
                        <Icon type="home" style={{ fontSize: "16px", marginLeft: "14px", marginRight: "10px", color: "#999" }} />
                        <span className="shopHome">附近商家</span>
                    </div>
                    <div className="shopList">
                        <ul>
                         <List/>
                           
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
   
}
export default Show