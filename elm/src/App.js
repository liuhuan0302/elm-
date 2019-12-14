import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import { mainRouter , homeRouter} from "./router/routes"
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
              return <Route key={route.pathname} path={route.pathname} component={route.component} exact/>
            })
          }
          {
            homeRouter.map(route=>{
              return <Route key={route.pathname} path={route.pathname} component={route.component}/>
            })
          }
           <Redirect from="/" to="/home" exact />
           <Redirect from="/home" to={homeRouter[0].pathname} exact/>
        </Switch>
      </Router>
      </Provider>
    )
  }
}

export default App;
