import React from 'react';
import { Link } from 'react-router-dom';
import './BreadCrumbs.css';

class BreadCrumbs extends React.Component {
	render() {
		return (
			<div className="breadcrumbs">
				<ul>
					<li><Link to='/'>Home</Link></li>
					<li>></li>
					<li><Link to={ this.props.currentPath }>{ this.props.currentAlias }</Link></li>
				</ul>
			</div>
		);
	}
}

export default BreadCrumbs;