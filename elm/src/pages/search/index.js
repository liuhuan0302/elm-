import React,{Component} from "react"
import Header from "../../components/header/header"
import "../../assets/css/search/search.css"
import Footer from "../../components/footer/index"
import SearchContent from "./searchContent"
class Search extends Component{
    render(){
        return(
            <div>
                <Header />
                <SearchContent/>
                <Footer/>
            </div>
        )
    }
}

export default Search;