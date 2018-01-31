import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { UPLOADS } from '../constants/RootURls'
import { Link } from 'react-router-dom'

// import actions
import { getArtists, changeNavbar } from '../actions'

class Artists extends Component {
	componentDidMount() {
		this.props.getArtists();
		this.props.changeNavbar();
	}

	renderArtists() {
		return _.map(this.props.artists, (it) => {
			return (
				<div key={it.id} className="video col">
					<div className="image fit">
						<img src={`${UPLOADS}${it.image1}`} alt="" />
					</div>
					<p className="caption">
						{ it.name }
					</p>
					<Link to={`artist/${it.id}`} className="link"><span>Learn More</span></Link>
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
							<h2>Our Artists</h2>
							<p className="contact-sub">
								...who will change the world
							</p>
						</header>
						<div className="content">
							<div className="artists flex flex-4">
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
		artists: state.getArtists.artists
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getArtists, changeNavbar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);