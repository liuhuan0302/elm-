import React,{Component} from "react"
import OrderDeatil from "./children/orderDetail"
import Footer from "../../components/footer"
import Header from "../../components/header/header"
class Order extends Component{
    render(){
        return(
            <div>
                <Header/>
                <OrderDeatil/>
                <Footer/>
            </div>
        )
    }
}

export default Order;