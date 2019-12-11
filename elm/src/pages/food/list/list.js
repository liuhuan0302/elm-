import React, { Component } from 'react'
import {Icon} from "antd"
export default class List extends Component {
    render() {
        return (
            <div className="food_list_box">
                <div className="food_left">
                    <ul>
                        <li className="cli">
                            <span>热销榜</span>
                        </li>
                    </ul>
                </div>
                <div className="food_right">
                    <ul>
                        <li className="title">
                            <section className="nam">
                                <strong>热搜榜</strong>
                                <span>是的分身乏术放</span>
                            </section>
                            <Icon type="small-dash" />
                        </li>
                        <li className="cli">
                            <div>
                                <section className="food_img">
                                    <img src=""/>
                                </section>
                                <section className="food_menu">
                                    <h3>我问问</h3>
                                    <p className="num">发111</p>
                                    <p className="food_rating">
                                        <span>月售404份</span>
                                        <span>好评率85%</span>
                                    </p>
                                    <p className="food_ico">
                                        <span style={{color: "rgb(241, 136, 79)", borderColor:"rgb(240, 115, 115)" }}>
                                            的
                                        </span>
                                    </p>
                                    <div className="food_foot">
                                        <section>
                                            <span className="item">￥</span>
                                            <span className="num">20</span>
                                            <span className="txt">起</span>
                                        </section>
                                        <section className="food_btn">
                                            <span>
                                                选规格
                                            </span>
                                        </section>
                                    </div>
                                </section>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
