import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import actions
import { changeNavbar } from '../actions'

//import testimonials
import Testimonials from '../widgets/Testimonials'

const PORTRAITS = '/images/portraits/'

class AboutUs extends Component {
	componentDidMount() {
		this.props.changeNavbar();
	}

	render() {
		return (
			<div>
				<section className="wrapper style1">
					<div className="inner">
						<header>
							<h2>Who are we?</h2>
							<p className="contact-sub">Fusce fringilla enim sit amet lectus sollicitudin, eu tincidunt odio semper.</p>
						</header>
					</div>

					<div className="inner">
						<div className="flex flex-2">
							<div className="col">
								<p>Lorem ipsum dolor sit amat fusce fringilla enim sit amet lectus sollicitudin enim sit amet lectus sollicitudin enim sit amet lectus sollicitudin</p>
							</div>
							<div className="col">
								<div className="image fit">
									<img src="/images/about01.jpg" />
								</div>
							</div>
						</div>
						<div className="wrapper-testimonials">
							<Testimonials />
						</div>
					</div>
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		adapt: state.changeNavbar
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutUs);