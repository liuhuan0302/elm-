import React, { Component } from 'react'
import {Icon} from "antd"
export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <section className="footer_left">
                    <div className="cart">
                        <Icon type="frown" />
                        <span>1</span>
                    </div>
                    <div className="money">
                        <div className="total">￥20</div>
                        <div className="other">配送费￥5</div>
                    </div>
                </section>
                <section className="footer_right">
                    去结算
                </section>
            </div>
        )
    }
}
