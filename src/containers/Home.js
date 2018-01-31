import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { UPLOADS } from '../constants/RootURls'
import { bindActionCreators } from 'redux'
import Partners from '../containers/Partners'
import Form from '../containers/Form'

//import actions
import { getMentors, revertNavbar, getArtists } from '../actions'

class Home extends Component {
	componentDidMount() {
		this.props.getArtists();
		this.props.getMentors();
		this.props.revertNavbar();
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
									fontWeight: '800'
								}}>
									FESTIVAL
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
									The whole program the festival is going to offer.
								</p>
								<Link to="/about/festival" className="link"><span>Learn More</span></Link>
							</div>
						</div>
					</div>
				</section>
				{ /*this.renderSchedule()*/ }
			</div>
		);
	}

	renderSchedule() {
		return (
			<section className="wrapper" id="schedule">
				<div className="inner">
					<header className="align-center">
						<h2>The Schedule</h2>
						<p>Cras sagittis turpis sit amet est tempus, sit amet consectetur purus tincidunt.</p>
					</header>
					<div className="flex flex-3">
						<div className="table-wrapper col table1">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>10:00 - 12:00</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
									<tr>
										<td>12:30 - 14:30</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
									<tr>
										<td>15:00 - 17:00</td>
										<td>Intalnire cu mentorul..</td>
										<td>1</td>
									</tr>
									<tr>
										<td>17:30 - 19:30</td>
										<td>Intalnire cu mentorul..</td>
										<td>1</td>
									</tr>
									<tr>
										<td>20:00 - 22:00</td>
										<td>Intalnire cu mentorul.</td>
										<td>1</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="table-wrapper col table2">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>10:00 - 12:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>12:30 - 14:30</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>15:00 - 17:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>17:30 - 19:30</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
									<tr>
										<td>20:00 - 22:00</td>
										<td>Workshop cu studentii.</td>
										<td>2</td>
									</tr>
								</tbody>
							</table>
						</div>

						<div className="table-wrapper col table3">
							<table>
								<thead>
									<tr>
										<th>Name</th>
										<th>Description</th>
										<th>Price</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>8:00 - 9:00</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>9:00 - 10:00</td>
										<td>Vis ac commodo adipiscing arcu aliquet.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>11:00 - 12:00</td>
										<td> Morbi faucibus arcu accumsan lorem.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>14:00 - 18:00</td>
										<td>Vitae integer tempus condimentum.</td>
										<td>3</td>
									</tr>
									<tr>
										<td>19:00 - 22:00</td>
										<td>Ante turpis integer aliquet porttitor.</td>
										<td>3</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
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

	renderPartners() {
		return <Partners></Partners>;
	}

	render() {
		return(
			<div>
				{ this.renderBanner() }
				<Form />
				{ this.renderMain() }
				{ this.renderArtists() }
				{ this.renderMentors() }
				{ this.renderPartners() }
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