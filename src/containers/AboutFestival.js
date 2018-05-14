import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//import actions
import { changeNavbar } from '../actions'

// WAITING FOR STATIC CONTENT

class AboutFestival extends Component {
	componentWillMount() {
		this.props.changeNavbar();
	}

	render() {
		return (
			<div>
				<section className="wrapper">
					<div className="inner">
						<header>
							<h2>What do we want?</h2>
							<p className="contact-sub">Lorem Ipsum Dolor</p>
						</header>
					</div>

					<div className="inner">
						<div className="flex flex-2">
							<div className="col">
								<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
							</div>
							<div className="col">
								<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
							</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutFestival);