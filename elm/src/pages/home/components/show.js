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
                            {/* <li>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
                                                        <Icon type="star" style={{fontSize:".2rem"}}/>
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
   
}
export default Show