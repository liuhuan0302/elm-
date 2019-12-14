import React, { Component, Fragment } from "react"
import "../../assets/css/footer/footer.css"
import Children from "./children"
import Header from "../../components/header/header"
import { Icon } from "antd"
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Children />
               
            </Fragment>
        )
    }
}

export default Footer;