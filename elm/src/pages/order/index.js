import React,{Component} from "react"
import OrderDeatil from "./children/orderDetail"
class Order extends Component{
    render(){
        return(
            <div>
                <OrderDeatil/>
            </div>
        )
    }
}

export default Order;