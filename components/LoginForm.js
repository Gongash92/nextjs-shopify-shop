import React from 'react'
import { logInUser } from '../lib/shopify'


class LoginForm extends React.Component {

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
		logInUser(email, password)
		console.log(logInUser(email, password))
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

export default LoginForm