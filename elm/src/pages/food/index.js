import React,{Component} from "react"
import axios from "axios"
import Head from "./head/head.js"
import Btn from "./btn/btn.js"
import "../../assets/css/food/food.css"
// import List from  "./list/list.js"
import Appraise from  "./list/appraise/appraise.js"
class Food extends Component{
    state = {
        data : [],
        listdata : [],
        bottomData : [],
        tagsData : []
    }
    componentDidMount(){
        let id = this.props.location.pathname.split("/",4)[3]
        axios.get(`/shopping/restaurant/${id}`).then(res=>{
            this.setState({
                data : res.data
            })
        })

        axios.get(`/shopping/v2/menu?restaurant_id=${id}`).then(res=>{
            this.setState({
                listdata : res.data
            })
        })

        axios.get(`/ugc/v2/restaurants/${id}/ratings`).then(res=>{
            this.setState({
                bottomData : res.data
            })
        })

        axios.get(`/ugc/v2/restaurants/${id}/ratings/tags`).then(res=>{
            this.setState({
                tagsData : res.data
            })
        })
    }
    render(){
        return(
            <div className="main" >
                <Head headData={this.state.data} />
                <Btn listData={this.state.listdata} bottomData={this.state.bottomData} tagsData={this.state.tagsData}/> 
            </div>
        )
    }
}

export default Food;