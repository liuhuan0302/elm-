import React,{Component} from "react"
import Header from "../../components/header/header"
import "../../assets/css/search/search.css"

class Search extends Component{
    render(){
        return(
            <div>
                <Header />
                <div className="search_form">
                    <input placeholder="请输入商家或美食名称" className="search_input"></input>
                    <button className="search_submit">提交</button>
                </div>
            </div>
        )
    }
}

export default Search;