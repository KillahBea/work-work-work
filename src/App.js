import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllEmployees from './components/pages/AllEmployees'
import Employee from './components/pages/Employee'
import AddEmployee from './components/pages/AddEmployee'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={AllEmployees} />
            <Route path="/add-employee" component={AddEmployee} />
            <Route path="/employee/:employeeID" component={Employee} />
            <Employee />
            <AddEmployee />
            <AllEmployees />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
