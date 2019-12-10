import React,{Component} from "react"

import Home from "../src/pages/home"
import Search from "./pages/search"

class App extends Component{
  render(){
    return(
      <div>
        <Home />
        {/* <Search /> */}
      </div>
    )
  }
}

export  default App;
