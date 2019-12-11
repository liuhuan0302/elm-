import React, { Component } from 'react'
import { Carousel } from 'antd' 
import "../../../assets/css/home/content.css"
import {getHomeBanner} from "../../../service/api"
import { array } from 'prop-types'

class Content extends Component {
    state = {
        data1 : [] ,
        data2 : []
    }
    getListRequest=()=>{
        getHomeBanner().then(res=>{
            console.log(res)
            this.setState({
                data1 : res.slice(0,8) ,
                data2 : res.slice(8,16)
            })
        })
    }
    componentDidMount(){
        this.getListRequest()
    }
    render() {
        return (
            <div>
                <Carousel>
                    <div className="box">
                        {
                            this.state.data1.map(item=>{
                                return  <li>
                                            <img src={item.image_url} />
                                            <p>{item.title}</p>
                                        </li>
                            })
                        }
                    </div>
                    <div className="box">
                        {
                            this.state.data2.map(item=>{
                                return  <li>
                                            <img src={item.image_url} />
                                            <p>{item.title}</p>
                                        </li>
                            })
                        }
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default Content