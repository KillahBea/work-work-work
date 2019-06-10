import React, { Component } from 'react'
import Axios from 'axios'
class Employee extends Component {
  state = {
    employee: {}
  }

  componentDidMount() {
    Axios.get(
      `https://sdg-staff-directory-app.herokuapp.com/api/BrewLo/employees/${
        this.props.match.params.employeeID
      }`
    ).then(resp => {
      this.setState({
        employee: resp.data
      })
    })
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <h3>
              {' '}
              Name:{this.state.employee.firstName}
              {this.state.employee.lastName}
            </h3>
            <p>
              Birthday:{this.state.employee.birthdate}
              Hire Date:{this.state.employee.hiredDate}
            </p>
            <p />
          </li>
        </ul>
      </div>
    )
  }
}

export default Employee
