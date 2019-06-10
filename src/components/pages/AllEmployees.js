import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'
import Header from '../Header'
class AllEmployees extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    Axios.get('https://sdg-staff-directory-app.herokuapp.com/api/BrewLo/Employees').then(resp => {
      this.setState({
        employees: resp.data
      })
    })
  }
  render() {
    return (
      <>
        <Header />
        <h3>All Employees</h3>
        <ul>
          {this.state.employees.map(employee => {
            return (
              <NavLink to={`/employee/${employee.id}`}>
                <li>
                  <h3>
                    {employee.firstName} {employee.lastName}
                  </h3>
                </li>
              </NavLink>
            )
          })}
        </ul>
      </>
    )
  }
}

export default AllEmployees
