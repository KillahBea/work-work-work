import React, { Component } from 'react'
import Axios from 'axios'
import Header from '../Header'
class AddEmployee extends Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  addEmployee = event => {
    event.preventDefault()
    Axios.post('https://sdg-staff-directory-app.herokuapp.com/api/BrewLo/Employees', {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }).then(resp => {
      console.log(resp, 'add')
    })
  }

  render() {
    return (
      <>
        <h3>Add Employee Profile </h3>
        <form onSubmit={this.addEmployee}>
          <div>
            <label>First Name:</label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Last Name:</label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>jobTitle:</label>
            <input
              name="jobTitle"
              type="text"
              placeholder="Job Title"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="birthday">Birthdate:</label>
            <input
              id="birthday"
              name="birthdate"
              type="text"
              placeholder="MM/DD/YY"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Hire Date:</label>
            <input
              name="hiredDate"
              type="text"
              placeholder="Hire Date"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <p>Employment Status:</p>
            <label>Full Time</label>
            <input name="isFullTime" type="radio" onChange={this.handleChange} />
            <label>Part Time:</label>
            <input name="" type="radio" onChange={this.handleChange} />
          </div>
          <div>
            <label>Job Description:</label>
            <input
              name="jobDescription"
              type="text"
              placeholder="Job Description"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Address:</label>
            <input name="address" type="text" placeholder="Address" onChange={this.handleChange} />
          </div>
          <div>
            <label>City:</label>
            <input name="city" type="text" placeholder="City" onChange={this.handleChange} />
            <label>State:</label>
            <input name="state" type="text" placeholder="State" onChange={this.handleChange} />
            <label>Zip:</label>
            <input name="zip" type="text" placeholder="State" onChange={this.handleChange} />
          </div>
          <div>
            <label>Salary:</label>
            <input name="salary" type="text" placeholder="Salary" onChange={this.handleChange} />
          </div>
          <div>
            <label>Male:</label>
            <input name="gender" type="radio" value="male" onChange={this.handleChange} />
            <label>Female:</label>
            <input name="gender" type="radio" value="female" onChange={this.handleChange} />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" type="text" placeholder="email" onChange={this.handleChange} />
          </div>
          <div>
            <label>PTO Hours:</label>
            <input
              name="ptoHours"
              type="text"
              placeholder="PTO Hours"
              onChange={this.handleChange}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </>
    )
  }
}

export default AddEmployee
