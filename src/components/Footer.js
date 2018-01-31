import React, { Component } from 'react'

export default class Footer extends Component {
	constructor(props) {
		super(props);

		const d = new Date();

		this.state = {
			time: d.getFullYear()
		};
	}

	render() {
		return (
			<footer id="footer">
				<div className="copyright">
					<ul className="icons">
						<li><a href="https://www.facebook.com/Artisteria-331303984021501/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="https://www.instagram.com/art.isteria.romania/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="https://www.snapchat.com/" className="icon fa-snapchat"><span className="label">Snapchat</span></a></li>
					</ul>
					&copy; ARTISTERIA { this.state.time }. Built by <a href="https://web.facebook.com/moldovan.andrei.391">Moldovan Andrei</a>
					<p>Powered by <a href="https://reactjs.org/">React.js</a></p>
				</div>
			</footer>
		);
	}
}