import React, { Component, Fragment } from "react"
import "../../assets/css/footer/footer.css"
import Children from "./children"
import Footers from "../../components/footer"
import { Icon } from "antd"
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Children />
                <Footers />
            </Fragment>
        )
    }
}

export default Footer;