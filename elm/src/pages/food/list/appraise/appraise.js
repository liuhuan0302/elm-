import React, { Component } from 'react'
import Header from "./header"
import Content from "./content"
import Bottom from "./bottom"
import "../../../../assets/css/food/appraise/appraise.css"

class Appraise extends Component {
    render() {
        return (
            <div style={{overflow:"scroll"}}>
                <Header />
                <Content Tags={this.props.tags} />
                <Bottom Bottom={this.props.bottom} />
            </div>
        )
    }
}
export default Appraise