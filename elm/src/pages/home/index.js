import React,{Component} from "react"
import Header from "../../components/header/header"
import Content from "./components/Content"
import Show from "./components/show"
import Footer from "../../components/footer"

class Home extends Component{
    render(){
        return(
            <div> 
                <Header />
                <Content />
                <Show />
                <Footer />
            </div>
        )
    }
}

export default Home;