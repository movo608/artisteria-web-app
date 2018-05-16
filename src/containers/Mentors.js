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
			<section className="wrapper style1" id="main">
				<div className="inner">
					<header>
						<h2>Mentorii noștri</h2>
						<p className="partner-sub">
							...ce ne vor da aripile
						</p>
					</header>
					<div className="content">
						<div className="flex flex-4">
							{ this.renderMentors() }
						</div>
					</div>
				</div>
			</section>
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