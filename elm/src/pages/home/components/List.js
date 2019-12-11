import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { Icon } from 'antd'
import { getListData } from "../homeReducers/listReducers"
import "../../../assets/css/home/show.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }

    }

    render() {
        console.log(this.props.ListData.ListData)
        if (this.props.ListData.ListData.length) {
            return (
                <Fragment>
                    {
                        this.props.ListData.ListData.map(item => {
                           return( 
                           <li key={item.name}>
                                <section>
                                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575907411528&di=74f2cf37a5b9af60d3dac031d1159f81&imgtype=0&src=http%3A%2F%2Fqccdata.qichacha.com%2FAutoImage%2F802b1532a71c3fd0884e753c48b247bb.jpg%3Fx-oss-process%3Dimage%2Fresize%2Cw_120" />
                                </section>
                                <div className="right">
                                    <header>
                                        <h4>
                                            <span>品牌</span>
                                            {item.name}
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
                           <span className="sec-span">{item.rating}</span>
                                            </section>
                                            <section className="sec3">月售106单</section>
                                        </section>
                                        <section className="sec4">
                           <span className="sn sn1">{item.delivery_mode.text}</span>
                                            <span className="sn sn2">准时达</span>
                                        </section>
                                    </h5>
                                    <h6>
                                        <p className="fee">
                                            ￥20起送
                                                <span>/</span>
                                            {item.piecewise_agent_fee.tips}
                                            </p>
                                        <p className="distance_time">
                           <span>{item.distance}</span>
                                            <span>/</span>
                                            <span className="order_time">22小时23分钟</span>
                                        </p>
                                    </h6>
                                </div>
                            </li>
                            )
                        })
                    }


                </Fragment>
            )
        } else {
            return (
                <div>暂无数据</div>
            )
        }

    }

    componentDidMount() {
        console.log(this.props)
        this.props.getListData()
        this.setState({
            loading: false
        })
        // getHomeBanner().then(res=>{
        //     // console.log(res)
        // })
        // getHomeList().then(res=>{
        //     // console.log(res)
        // })
    }
}
const mapStateToProps = (state) => {
    console.log(state.HomeList)
    return {
        ListData: state.HomeList
    }
}
export default connect(mapStateToProps, { getListData })(List)