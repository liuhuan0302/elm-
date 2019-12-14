import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import {withRouter} from "react-router-dom"
import { Icon } from 'antd'
import { getListData } from "../homeReducers/listReducers"
import Loading from "../../../components/common/loading"
import "../../../assets/css/home/show.css"
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            imgBaseUrl:'https://elm.cangdu.org/v4/restaurants/img/shop/15c1513a00615.jpg'
        }
    }
    jumpFood=(id)=>{
        this.props.history.push(`/home/food/${id}`)
    }
    render() {
        console.log(this.props.ListData)
        // console.log(this.state.imgBaseUrl+this.props.ListData.ListData[0].image_path)
        if (this.props.ListData.ListData.length) {
            return (
                <Fragment>
                    {
                        this.props.ListData.ListData.map((item,index) => {
                            // console.log(this.state.imgBaseUrl + item.image_path)
                           return( 
                           <li key={item.name} onClick={this.jumpFood.bind(this,item.id)}>
                                <section>
                                    <img src="{this.state.imgBaseUrl+item.image_path}" />
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
                                                        <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                        <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                        <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                        <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
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
                           <span className="order_time">{item.order_lead_time}</span>
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
                <Loading/>
            )
        }

    }

    componentDidMount() {
        // console.log(this.props)
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
    return {
        ListData: state.HomeList
    }
}
export default connect(mapStateToProps, { getListData })(withRouter(List) )