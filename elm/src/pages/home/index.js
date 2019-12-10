import React,{Component} from "react"
import Header from "../../components/header/header"
import Content from "./components/Content"
import Show from "./components/show"

class Home extends Component{
    render(){
        return(
            <div>
                <Header />
                <Content />
                <Show />
            </div>
        )
    }
}

export default Home;