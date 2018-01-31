import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
	renderLanding() {
		return (
			<ul className="links">
				<li><a className="link" href="#banner">Hello</a></li>
				<li><a className="link" href="#about">About</a></li>
				<li><a className="link" href="#schedule">Schedule</a></li>
				<li><a className="link" href="#form">Form</a></li>
				<li><a className="link" href="#artists">Artists</a></li>
				<li><a className="link" href="#mentors">Mentors</a></li>
			</ul>
		);
	}

	renderAdaptation() {
		return (
			<ul className="links">
				<li><Link to='/'>Home</Link></li>
				<li><Link to='/about/festival'>About the Festival</Link></li>
				<li><Link to='/about/us'>About Us</Link></li>
			</ul>
		);
	}

	render() {
		return (
			<div>
				<header id="header" className="::adapted">
					<h1 style={{fontFamily: 'Simplifica', letterSpacing: '4px'}}><Link to="/">ARTISTERIA</Link></h1>
					<a href="#menu">Menu</a>
				</header>

				<nav id="menu">
					{ this.props.adapt === '!:adapt' ? this.renderAdaptation() : this.renderLanding() }
				</nav>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		adapt: state.adaptNavbar
	}
}

export default connect(mapStateToProps, null)(Header);