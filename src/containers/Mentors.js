import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { UPLOADS } from '../constants/RootURls'
import { Link } from 'react-router-dom'

// import actions
import { getMentors, changeNavbar } from '../actions'

class Mentors extends Component {
	componentDidMount() {
		this.props.getMentors();
		this.props.changeNavbar();
	}

	renderArtists() {
		return _.map(this.props.mentors, (it) => {
			return (
				<div key={it.id} className="video col">
					<div className="image fit">
						<img src={`${UPLOADS}${it.image1}`} alt="" />
					</div>
					<p className="caption">
						{ it.name }
					</p>
					<Link to={`mentor/${it.id}`} className="link"><span>Learn More</span></Link>
				</div>
			);
		});
	}

	render() {
		return (
			<div className="main" id="main">
				<section className="wrapper style3" id="form">
					<div className="inner">
						<header className="align-center">
							<h2>Our Mentors</h2>
							<p className="contact-sub">
								...who will give birth to our wings
							</p>
						</header>
						<div className="content">
							<div className="mentors flex flex-4">
								{ this.renderArtists() }
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
		mentors: state.getMentors.mentors
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getMentors, changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Mentors);