import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { mainRouter } from "./router/routes"
import {Provider} from "react-redux"
import store from "./store/store"
import Home from "./pages/home"
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Switch>
          {/* <Route path="/home" render={(routerProps) => <Home {...routerProps} />} /> */}
          {
            mainRouter.map(route=>{
              console.log(route.pathname)
              return <Route key={route.pathname} path={route.pathname} component={route.component}/>
            })
           
          }
           <Redirect from="/" to="/home"/>
        </Switch>
      </Router>
      </Provider>
    )
  }
}

export default App;
