import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { mainRouter } from "./router/routes"
import Home from "./pages/home"
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" render={(routerProps) => <Home {...routerProps} />} />
          {
            mainRouter.map(route=>{
              console.log(route.pathname)
              return <Route key={route.pathname} path={route.pathname} component={route.component}/>
            })
          }
        </Switch>
      </Router>
    )
  }
}

export default App;
