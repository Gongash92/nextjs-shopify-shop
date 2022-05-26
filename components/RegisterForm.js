// Form for user to register
// Cant get token because of the problem with shopify - cant get response

import React from 'react'
import {createCustomer} from '../lib/shopify'


class RegisterForm extends React.Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit = event => {
		const {email, password} = this.state;
		event.preventDefault();
		createCustomer(email, password)
		console.log(createCustomer)

	}
	render() {

		return (
			<div>
				<form onSubmit={this.handleSubmit}> 
					<input className="border" type="email" name="email" onChange={this.handleChange}></input>
					<input className="border" type="password" name="password" onChange={this.handleChange}></input>
					<button type="submit">Test</button>
				</form>
			</div>
		)

	}
}

export default RegisterForm