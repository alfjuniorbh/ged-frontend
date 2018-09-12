import React, { Component } from 'react'

import store from './redux'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Header from './component/Template/header'
import Home from './screens/Home'
import Login from './screens/Login'
import Admin from './screens/Admin'
import Dashboard from './screens/Dashboard'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path='/home' component={Home} />
            <Route exact path='/admin' component={Admin} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/login' component={Login} />
            <Header/>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;