import React, { Component } from 'react'
import "../../../assets/css/miste/index.css"
import { Icon } from "antd"
export default class Head extends Component {
    render() {
        return (
            
                <div className="contain">
                    <div className="sort_container">
                        <div className="sort_item">
                            <div className="sort_item_border">
                                <span className="txt">准时达<Icon type="caret-down" /></span>
                            </div>
                        </div>
                        <div className="sort_item">
                            <div className="sort_item_border">
                                <span className="txt">排序<Icon type="caret-down" /></span>
                            </div>
                        </div>
                        <div className="sort_item">
                            <div className="sort_item_border last">
                                <span className="txt">筛选<Icon type="caret-down" /></span>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
