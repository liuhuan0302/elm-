import React, { Component } from 'react'
import {Icon} from "antd"
export default class Head extends Component {
    render() {
        return (
            <div className="top">
                <section className="food_logo">
                    <img src=""/>
                </section>
                <section className="food_txt">
                    <h4>效果演示</h4>
                    <p>商家配送／分钟送达／配送费¥5</p>
                    <span>公告：欢迎光临，用餐高峰请提前下单，谢谢</span>
                </section>
                <Icon type="right" style={{position:"absolute",top:"40%",right:"5%",color:"#fff",height:".14rem"}}/>
            </div>
        )
    }
}
