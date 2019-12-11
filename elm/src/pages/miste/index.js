import React, { Component, Fragment } from "react"
import "../../assets/css/miste/index.css"
import Head from "./Head/head.js"
import List from "./list/list.js"
class Miste extends Component {
    render() {
        return (
            <Fragment>
                <div className="main">
                    <Head/>
                    <List/>
                </div>
            </Fragment>
        )
    }
}

export default Miste;