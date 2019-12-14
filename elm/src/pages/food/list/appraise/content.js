import React, { Component } from 'react'
import "../../../../assets/css/food/appraise/content.css"

class Content extends Component {
    constructor(props){
        super(props)
        this.state={
            current:0
        }
    }
    addClassName=(i,)=>{
        const current=i
       this.setState({
           current
       })
    }
    render() {
        return (
            <div>
                <ul className="bigBox">
                    {
                        this.props.Tags.map((item,index)=>{
                            return <li key={item._id} onClick={this.addClassName.bind(this,index)} className={this.state.current==index?"click":""}>{item.name}({item.count})</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Content