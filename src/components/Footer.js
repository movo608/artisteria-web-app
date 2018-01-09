import React, { Component } from 'react';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="inner">
					<div className="flex flex-3">
						<div className="col">
							<h3>Vestibullum</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
						<div className="col">
							<h3>Lobortis</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
						<div className="col">
							<h3>Accumsan</h3>
							<ul className="alt">
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
								<li><a href="#">Vis id faucibus montes tempor</a></li>
								<li><a href="#">Massa amet lobortis vel.</a></li>
								<li><a href="#">Nascetur nunc varius commodo.</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="copyright">
					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon fa-snapchat"><span className="label">Snapchat</span></a></li>
					</ul>
					&copy; ARTISTERIA 2017. Design and Images: <a href="https://web.facebook.com/moldovan.andrei.391">Moldovan Andrei</a>
					<p>Powered by <a href="#">React.js</a></p>
				</div>
			</footer>
		);
	}
}