import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import axios from "axios"
import {Icon} from "antd"
class Head extends Component {
    render() {
        return (
            <div className="top">
                <section className="food_logo">
                    <img src=""/>
                </section>
                <section className="food_txt">
                    <h4>{this.props.headData.name}</h4>
                    <p>商家配送／分钟送达／</p>
                    <span>公告：{this.props.headData.promotion_info}</span>
                </section>
                <Icon type="right" style={{position:"absolute",top:"40%",right:"5%",color:"#fff",height:".14rem"}}/>
            </div>
        )
    }
    
}

export default withRouter(Head) 