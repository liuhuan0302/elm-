import React, { Component } from 'react'
import { Icon } from 'antd'
import "../../../../assets/css/food/appraise/bottom.css"

class Bottom extends Component {
    render() {
        return (
            <div>
                <ul className="people">
                    {
                        this.props.Bottom.map(item=>{
                            return <li key={item._id}>
                                        <img src="//elm.cangdu.org/img/default.jpg"></img>
                                        <section className="shuo">
                                            <div className="header">
                                                <section className="shuoTop">
                                                    <p className="userName">{item.username}</p>
                                                    <div className="star_desc">
                                                        <div className="xinxin">
                                                            <section className="look">
                                                                <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                                <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                                <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                                <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                                <Icon type="star" theme="filled" style={{color:"#f60", fontSize: ".2rem" }} />
                                                            </section>
                                                        </div>
                                                        <span className="anShi">{item.time_spent_desc}</span>
                                                    </div>
                                                </section>
                                                <div className="time">{item.rated_at}</div>
                                            </div>
                                            <ul className="zhaopian">
                                                <li>
                                                    <img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg"></img>
                                                </li>
                                                <li>
                                                    <img src="https://fuss10.elemecdn.com/d/c8/64033625905f0a15a2d181d53a425jpeg.jpeg"></img>
                                                </li>
                                            </ul>
                                            <ul className="shuoBottom">
                                                {
                                                    item.item_ratings.map(it=>{
                                                        return <li key={it._id} className="bottomFood">{it.food_name}</li>
                                                    })
                                                }
                                            </ul>
                                        </section>
                                    </li>
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}

export default Bottom