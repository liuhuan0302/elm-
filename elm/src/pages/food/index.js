import React,{Component} from "react"
import Head from "./head/head.js"
import Btn from "./btn/btn.js"
import "../../assets/css/food/food.css"
import List from  "./list/list.js"
import Footer from "./footer/footer.js"
class Food extends Component{
    render(){
        return(
            <div className="main">
                <Head/>
                <Btn/>
                <List/>
                <Footer/>
            </div>
        )
    }
}

export default Food;