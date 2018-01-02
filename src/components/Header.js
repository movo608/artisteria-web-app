import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
	render() {
		return (
			<div>
				<header id="header">
					<h1><a href="#">Art Factory</a></h1>
				
					<a href="#">Section One</a>
					<a href="#">Section Two</a>
					<a href="#">Section Three</a>
					<a href="#">Section Four</a>
				</header>
			</div>
		);
	}
}