import React from 'react'
import { ADMIN, HOME } from '../constants/RootURls'

class Admin extends React.Component {
	componentWillMount() {
		window.open(ADMIN) ? this.props.history.push('/') : null;
	}

	render() {
		return (
			<div>Redirecting...</div>
		);
	}
}

export default Admin;