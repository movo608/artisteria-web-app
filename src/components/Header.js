import React, { Component } from 'react'

export default class Header extends Component {
	render() {
		return (
			<div>
				<header id="header">
					<h1><a href="#">Art Factory</a></h1>
				
					<a href="#banner">Hello</a>
					<a href="#about">About</a>
					<a href="#schedule">Schedule</a>
					<a href="#form">Form</a>
					<a href="#mentors">Mentors</a>
				</header>
			</div>
		);
	}
}