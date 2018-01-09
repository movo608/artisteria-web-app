import React, { Component } from 'react'
import { connect } from 'react-redux'

//import actions
import { getMentors } from '../actions'
import { bindActionCreators } from 'redux'

class Home extends Component {
	componentWillMount() {
		this.props.getMentors();
	}

	renderBanner() {
		return (
			<section id="banner" data-video="images/banner">
				<div className="inner" style={{marginBottom: '2em'}}>
					<header>
						<h1>Artisteria Festival</h1>

						<div style={{marginTop: '1em'}} className="12u">
							<img style={{maxWidth: '300px'}} src="images/favicon.png"/>
						</div>

						<p>Lorem ipsum dolor sit amet,<br />
						vivamus vitae libero in nulla iaculis eleifend non sit amet nulla.</p>
					</header>
					<a href="#main" className="button big alt scrolly"> Learn More </a>
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
									<img src="images/suciu.jpg" alt="" />
									<div className="arrow">
										<div className="icon fa-play"></div>
									</div>
								</div>
								<p className="caption">
									Primary description of the whole idea of the project.
								</p>
								<a href="generic.html" className="link"><span>Click Me</span></a>
							</div>
							<div className="video col">
								<div className="image fit">
									<img src="images/capoeira.jpg" alt="" />
									<div className="arrow">
										<div className="icon fa-play"></div>
									</div>
								</div>
								<p className="caption">
									The whole program the festival is going to offer.
								</p>
								<a href="generic.html" className="link"><span>Click Me</span></a>
							</div>
						</div>
					</div>
				</section>

				{ this.renderSchedule() }
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

	renderForm() {
		return (
			<section className="wrapper style2" id="form">
				<div className="inner">
					<header>
						<h2>Apply Now!</h2>
						<p className="contact-sub">Fusce fringilla enim sit amet lectus sollicitudin, eu tincidunt odio semper.</p>
					</header>
					<div className="custom-form">
						<form>
						</form>
					</div>
				</div>
			</section>
		)
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
						<div className="video col">
							<div className="image fit">
								<img src="images/suciu.jpg" alt="" />
							</div>
							<p className="caption">
								Mentor1
							</p>
							<a href="generic.html" className="link"><span>Click Me</span></a>
						</div>
						<div className="video col">
							<div className="image fit">
								<img src="images/capoeira.jpg" alt="" />
							</div>
							<p className="caption">
								Mentor2
							</p>
							<a href="generic.html" className="link"><span>Click Me</span></a>
						</div>
					</div>
				</div>
			</section>
		);
	}

	render() {
		return(
			<div>
				{ this.renderBanner() }
				{ this.renderMain() }
				{ this.renderForm() }
				{ this.renderMentors() }
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {

	};
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ getMentors }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)