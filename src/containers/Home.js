import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { UPLOADS } from '../constants/RootURls'
import { bindActionCreators } from 'redux'
import Partners from '../containers/Partners'
import Form from '../containers/Form'
import Schedule from '../containers/Schedule'

//import actions
import { getMentors, revertNavbar, getArtists } from '../actions'

class Home extends Component {
	componentWillMount() {
		this.props.revertNavbar();
	}

	componentDidMount() {
		this.props.getArtists();
		this.props.getMentors();
	}

	renderBanner() {
		return (
			<section id="banner" data-video="images/banner">
				<div className="inner">
					<header>
						<div style={{maxHeight: '250px', maxWidth: '250px'}} className="12u logo center-logo">
							<img style={{maxWidth: '90%'}} src="images/favicon.png" alt='' />
							<h3 
								style={{
									fontFamily: 'Simplifica',
									letterSpacing: '2px',
									marginTop: '-20px',
									fontWeight: '800',
									marginBottom: '50px'
								}}>
									FESTIVAL <br />
									31 AUG - 2 SEPT
							</h3>
						</div>

						<h4 className="desc">
							"It is never too late to be &nbsp;
							<br />
							who you might have been."
							<span style={{fontWeight: '400', fontSize: '0.8em'}}>&nbsp; George Elliot</span>
						</h4>
					</header>
					<a href="#form" className="button big alt scrolly"> Join Us! </a>
				</div>
			</section>
		);
	}

	renderMain() {
		return (
			<div id="main">
				<section className="wrapper style1" id="about">
					<div className="inner">
						<header className="align-center">
							<h2>Who are we?</h2>
							<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
						</header>
						<div className="flex flex-2">
							<div className="video col">
								<div className="image fit">
									<img src="images/about-us.png" alt="" />
								</div>
								<p className="caption">
									You're probably wondering who we are. Do not worry! We are gladly going to tell you.
								</p>
								<Link to="/about/us" className="link"><span>Learn More</span></Link>
							</div>
							<div className="video col">
								<div className="image fit">
									<img src="images/elephant.png" alt="" />
								</div>
								<p className="caption">
									The whole program the festival is going to offer. What is it we want?
								</p>
								<Link to="/about/festival" className="link"><span>Learn More</span></Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}

	renderMentors() {
		return (
			<section className="wrapper" id="mentors">
				<div className="inner">
					<header>
						<h2>Mentors</h2>
						<p className="contact-sub">These are the mentors who will LOREM IPSUM DOLOR SIT AMET</p>
					</header>

					<div className="flex flex-3">
						{ this.renderOneMentor() }
					</div>
				</div>
			</section>
		);
	}

	renderArtists() {
		return (
			<section className="wrapper" id="artists">
				<div className="inner">
					<header>
						<h2>Artists</h2>
						<p className="contact-sub">These are the artists who will LOREM IPSUM DOLOR SIT AMET</p>
					</header>

					<div className="flex flex-3">
						{ this.renderOneArtist() }
					</div>
				</div>
			</section>
		);
	}

	renderOneMentor() {
		return _.map(this.props.mentors.mentors, (it) => {
			return (
				<div key={it.id} className="video col">
					<div className="image fit">
						<img src={`${UPLOADS}${it.image1}`} alt="" />
					</div>
					<p className="caption">
						{ it.name }
					</p>
					<Link className="link" to={`/mentor/${it.id}`}></Link>
				</div>
			);
		});
	}

	renderOneArtist() {
		return _.map(this.props.artists, (it) => {
			return (
				<div key={it.id} className="video col">
					<div className="image fit">
						<img src={`${UPLOADS}${it.image1}`} alt="" />
					</div>
					<p className="caption">
						{ it.name }
					</p>
					<Link className="link" to={`/artist/${it.id}`}></Link>
				</div>
			);
		});
	}

	render() {
		return(
			<div>
				{ this.renderBanner() }
				{ this.renderMain() }
				<Schedule />
				<Form />
				{ this.renderArtists() }
				{ this.renderMentors() }
				<Partners />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		mentors: state.getMentors,
		revert: state.adaptNavbar,
		artists: state.getArtists.artists
	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getMentors, revertNavbar, getArtists }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)