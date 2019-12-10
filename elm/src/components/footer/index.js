import React, { Component, Fragment } from "react"
import "../../assets/css/footer/footer.css"
import { Icon } from "antd"
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <div className="foot" >
                    <li>
                            <Icon type="twitter" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>外卖</span>
                    </li>
                    <li>
                            <Icon type="search" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>搜索</span>
                    </li>
                    <li>
                            <Icon type="menu-fold" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>订单</span>
                    </li>
                    <li>
                            <Icon type="user" style={{fontSize:".4rem",color:"gray"}}/>
                            <span>我的</span>
                    </li>
                </div>
            </Fragment>
        )
    }
}

export default Footer;