import React, { Component } from 'react'
import {Icon} from "antd"
import Footer from "../footer/footer"
class List extends Component {
    constructor(props){
        super(props)
        this.state={
            current:0,
            data : [] ,
            data1 : [] 
        }
    }
    addClassName=(i,id)=>{
        const current=i
       this.setState({
           current,
           data : this.props.shuju[i],
           data1 : this.props.shuju[i].foods
       },_=>{
           this.forceUpdate()
       })
    }

    render() {
        return (
            <div className="food_list_box">
                <div className="food_left">
                    <ul>
                        {
                            this.props.shuju.map((item,index)=>{
                                return <li key={item.id} onClick={this.addClassName.bind(this,index,item.id)} className={this.state.current==index?"cli":""}>
                                            {item.name}
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="food_right">
                    <ul>
                        <li className="title">
                            <section className="nam">
                                <strong>{this.state.data.name}</strong>
                                <span>{this.state.data.description}</span>
                            </section>
                            <Icon type="small-dash" />
                        </li>
                        {
                            this.state.data1.map(item=>{
                                return <li className="cli" key={item._id}>
                                            <div>
                                                <section className="food_img">
                                                    <img src=""/>
                                                </section>
                                                <section className="food_menu">
                                                    <h3>{item.name}</h3>
                                                    <p className="num">{item.description}</p>
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
                                                            <span className="num">{item.specfoods[0].price}</span>
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
                            })
                        }
                        
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
    
}

export default List