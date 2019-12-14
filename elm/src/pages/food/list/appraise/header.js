import React, { Component } from 'react'
import { Icon } from 'antd'
import "../../../../assets/css/food/appraise/header.css"

class Header extends Component {
    render() {
        return (
            <div>
                <div className="box">
                    <section className="left">
                        <p className="one">4.7</p>
                        <p className="two">综合评价</p>
                        <p className="three">高于周边商家76.9%</p>
                    </section>
                    <section className="right">
                        <div className="quan">
                            <span>服务态度</span>
                            <div className="xin">
                                <section>
                                    <Icon type="star" theme="filled" style={{ color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                </section>
                            </div>
                            <span className="fen">4.7</span>
                        </div>
                        <div className="quan">
                            <span>菜品评价</span>
                            <div className="xin">
                                <section>
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                    <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                </section>
                            </div>
                            <span className="fen">4.8</span>
                        </div>
                        <div className="quan">
                            <span>送达时间</span>
                            <span className="fenzhong">分钟</span>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Header