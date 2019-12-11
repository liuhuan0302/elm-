import React, { Component } from 'react'
import "../../../assets/css/miste/index.css"
import { Icon } from "antd"
export default class List extends Component {
    render() {
        return (
            <div className="shop_list_container">
                <ul className="shopList">
                    <li>
                        <section>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575907411528&di=74f2cf37a5b9af60d3dac031d1159f81&imgtype=0&src=http%3A%2F%2Fqccdata.qichacha.com%2FAutoImage%2F802b1532a71c3fd0884e753c48b247bb.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_120" />
                        </section>
                        <div className="right">
                            <header>
                                <h4>
                                    <span>品牌</span>
                                    效果演示
                                </h4>
                                <ul className="right-ul">
                                    <li>保</li>
                                    <li>准</li>
                                    <li>票</li>
                                </ul>
                            </header>
                            <h5>
                                <section className="h5-sec">
                                    <section className="sec">
                                        <div className="xin">
                                            <section className="sec2">
                                                <Icon type="star" style={{ fontSize: ".2rem" }} />
                                                <Icon type="star" style={{ fontSize: ".2rem" }} />
                                                <Icon type="star" style={{ fontSize: ".2rem" }} />
                                                <Icon type="star" style={{ fontSize: ".2rem" }} />
                                            </section>
                                        </div>
                                        <span className="sec-span">4.7</span>
                                    </section>
                                    <section className="sec3">月售106单</section>
                                </section>
                                <section className="sec4">
                                    <span className="sn sn1">蜂鸟专送</span>
                                    <span className="sn sn2">准时达</span>
                                </section>
                            </h5>
                            <h6>
                                <p className="fee">
                                    ￥20起送
                                            <span>/</span>
                                    配送费约￥5
                                        </p>
                                <p className="distance_time">
                                    <span>2115.3公里</span>
                                    <span>/</span>
                                    <span className="order_time">22小时23分钟</span>
                                </p>
                            </h6>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
